# Auto deploy DomaiNesia

Push ke `main` menjalankan `.github/workflows/deploy.yml`. Workflow mengirim snapshot
commit melalui SSH, memasang dependency dan build di folder rilis terpisah, lalu
mengganti symlink `current` dan meminta Passenger restart. Endpoint health harus
mengembalikan SHA commit baru; jika gagal, deployment memulihkan rilis sebelumnya.
Pergantian rilis dapat menimbulkan jeda singkat; bukan jaminan zero downtime.

## Persiapan satu kali

1. Pastikan SSH dari luar diaktifkan di DomaiNesia. Catat host, username, dan port
   dari informasi SSH hosting; port cPanel `2083` bukan port SSH.
2. Buat key khusus GitHub Actions pada komputer sendiri, di luar repository:
   `ssh-keygen -t ed25519 -f ~/.ssh/tatsuo_actions -C tatsuo-actions -N ""`.
3. Tambahkan isi `tatsuo_actions.pub` ke `~/.ssh/authorized_keys` di hosting
   (atau import dan authorize lewat SSH Access cPanel). Permission `.ssh` 700,
   `authorized_keys` 600. Jangan mengganti key hosting-ke-GitHub yang sudah ada.
4. Ambil host key SSH menggunakan `ssh-keyscan -p PORT HOST`, verifikasi
   fingerprint-nya dengan informasi dari provider sebelum menyimpan hasilnya.
5. GitHub repository Settings → Secrets and variables → Actions → Repository secrets:

   | Secret               | Isi                                                             |
   | -------------------- | --------------------------------------------------------------- |
   | `DEPLOY_HOST`        | Host/IP SSH DomaiNesia                                          |
   | `DEPLOY_PORT`        | Port SSH dari provider                                          |
   | `DEPLOY_USER`        | `tatsuobe`                                                      |
   | `DEPLOY_SSH_KEY`     | Seluruh private key `tatsuo_actions`, termasuk BEGIN/END        |
   | `DEPLOY_KNOWN_HOSTS` | Baris hasil ssh-keyscan yang fingerprint-nya sudah diverifikasi |

   Private key hanya dimasukkan ke GitHub Secrets, jangan ke repo atau chat.

6. Workflow memakai repository secrets, tanpa memerlukan fitur deployment
   environment berbayar untuk repo private organisasi.
7. Push konfigurasi ini ke `main`, atau jalankan Actions → Deploy to DomaiNesia →
   Run workflow. Cek log dan SHA di `https://tatsuobeef.co.id/_deploy/health`.

## Folder dan operasi

- cPanel Application root tetap `tatsuo-app/fe`, mode Production, startup `server.cjs`.
- Node environment: `/home/tatsuobe/nodevenv/tatsuo-app/fe/24/bin/activate`.
- Rilis: `~/tatsuo-releases/SHA.RANDOM`; jangan build di folder live.
- Setelah deployment pertama, `~/tatsuo-app/fe/server.cjs` menjadi launcher
  `require("./current/server.cjs")`; jangan menimpanya dengan salinan file dari repo.
- Pengaturan `.env*` tetap di application root dan disalin saat build. Variabel dari
  environment cPanel belum tentu tersedia pada sesi SSH; gunakan file env tersebut
  jika diperlukan pada build. Project saat ini tidak membutuhkan secret aplikasi.
- Rilis lama disimpan agar proses lama yang masih menyelesaikan request tidak
  kehilangan file. Pantau disk dan hapus rilis lama setelah tidak dipakai, dengan
  tetap menyimpan target `current` dan setidaknya satu rilis sebelumnya.
- Repo `~/tatsuo-source` dan deploy key hosting-ke-GitHub tidak dipakai workflow ini.
- Rollback health memeriksa kesiapan server Next.js, bukan seluruh fungsi browser.
- Workflow belum aktif sampai di-push dan secrets/SSH disiapkan. Build yang lolos
  sebelumnya tidak menggantikan verifikasi deployment workflow pertama.
