# Foto produk client — 4 November 2026

Sumber: `public/drive mbak aira/FOTO PRODUK DI RAPIHIN AI-20261104T012526Z-1-001.zip`.
Arsip berisi 32 foto. Foto asli diekstrak ke
`assets/client-products-2026-11-04/originals/` dan tidak ditimpa.

User memilih **edit AI untuk mengganti background**, dan meminta seluruh produk
baru turut ditambahkan. Edit memakai tool bawaan **image_gen**, satu foto sumber
per hasil, dengan instruksi mempertahankan bentuk, jumlah potongan, detail
daging, warna, tulang, serta nampan/piring asli. Backdrop diubah menjadi batu slate
arang gelap. Hasil AI merupakan edit berbasis foto acuan, bukan jaminan identik
per piksel dengan sumber. Acuan sumber dan prompt lengkap per aset tercatat di
`client-product-photos-20261104.json`.

## Hasil dan pemetaan

- 32 gambar WebP, maksimal 1000 × 1000 px, quality 88, disimpan di
  `public/images/catalog/client-20261104/`.
- Pemetaan bersama: `src/lib/client-product-photos.ts`. Pemetaan ini didahulukan
  oleh `productPhoto` agar katalog dan detail produk memakai aset client.
- Referensi foto di produk unggulan landing, kolase Tatsuo Promise, hero katalog,
  dan cover artikel turut dialihkan ke foto client yang sesuai.
- 19 produk lama mendapat foto pengganti; 13 produk baru ditambahkan. Total 38
  produk: 28 sapi, 3 ayam, 3 kambing/domba, dan 4 seafood.
- Nama `sirloin`, `tenderloin`, dan variasi meltique mengikuti nama file client.
  File `slice riblade.PNG` ditampilkan sebagai Slice Ribblade.
- Tidak ada padanan baru untuk Slice Sirloin, Daging Sapi generik, dan empat
  produk seafood. Foto keenam produk ini dipertahankan agar tidak terjadi salah
  pemetaan atau penggantian spesies/potongan.
- 22 file foto produk lama yang sudah tergantikan dihapus dari folder publik.
  Daftarnya ada dalam manifest JSON. Foto editorial, fasilitas, dan hero bukan
  bagian dari penghapusan aset produk tersebut.
- Jumlah produk pada hero dan metadata memakai `products.length`, filter
  menambahkan kategori Kambing & domba.
- Baris catatan ilustrasi dan tautan bantuan di akhir katalog dihapus sesuai
  permintaan user.

Arsip client dan file kerja resolusi penuh diabaikan Git; yang perlu dikirim ke
hosting adalah WebP hasil akhir, data produk, serta perubahan komponennya.
Dev server dan pengecekan tampilan diserahkan kepada user sesuai permintaan.
