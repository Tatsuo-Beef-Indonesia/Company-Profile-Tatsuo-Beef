#!/usr/bin/env bash
set -eo pipefail

sha=${1:?Missing commit SHA}
[[ "$sha" =~ ^[0-9a-f]{40}$ ]] || { echo 'Invalid commit SHA'; exit 1; }
app="$HOME/tatsuo-app/fe"
releases="$HOME/tatsuo-releases"
archive="$HOME/tatsuo-incoming/$sha.tar.gz"
activation="$HOME/nodevenv/tatsuo-app/fe/24/bin/activate"

test -d "$app"
test -f "$archive"
test -f "$activation"
mkdir -p "$releases"
# Also serialize manual runs. GitHub concurrency serializes workflow runs.
exec 9>"$HOME/tatsuo-deploy.lock"
flock -n 9 || { echo 'Another deployment is running'; exit 1; }
source "$activation"
set -u

candidate=$(mktemp -d "$releases/$sha.XXXXXX")
switched=false
success=false
previous=$(readlink "$app/current" || true)
cleanup() {
  result=$?
  trap - EXIT
  if [[ "$switched" == true && "$success" != true ]]; then
    echo 'Health check failed; restoring previous release'
    if [[ -n "$previous" ]]; then
      ln -s "$previous" "$app/current.rollback"
      mv -Tf "$app/current.rollback" "$app/current"
    else
      cp "$app/server.cjs.before-actions" "$app/server.cjs.rollback"
      mv -f "$app/server.cjs.rollback" "$app/server.cjs"
      rm -f "$app/current"
    fi
    touch "$app/tmp/restart.txt"
  fi
  if [[ "$success" != true ]]; then rm -rf -- "$candidate"; fi
  rm -f -- "$archive"
  exit "$result"
}
trap cleanup EXIT

tar -xzf "$archive" -C "$candidate" --strip-components=1
# Keep server-side configuration outside Git. Current project has no required env vars.
for file in .env .env.local .env.production .env.production.local; do
  if [[ -f "$app/$file" ]]; then cp "$app/$file" "$candidate/$file"; fi
done
cd "$candidate"
npm ci --include=dev
npm run build
test -s .next/BUILD_ID
printf '%s\n' "$sha" > .release-id

mkdir -p "$app/tmp"
if [[ -z "$previous" ]]; then
  test -f "$app/server.cjs"
  cp "$app/server.cjs" "$app/server.cjs.before-actions"
fi
ln -s "$candidate" "$app/current.next"
mv -Tf "$app/current.next" "$app/current"
switched=true
# Stable Passenger entry point loads the selected release, including its dependencies.
printf '%s\n' 'require("./current/server.cjs");' > "$app/server.cjs.next"
mv -f "$app/server.cjs.next" "$app/server.cjs"
touch "$app/tmp/restart.txt"

for attempt in {1..20}; do
  response=$(curl -fsS --connect-timeout 5 --max-time 15 \
    --resolve tatsuobeef.co.id:443:202.155.137.35 \
    "https://tatsuobeef.co.id/_deploy/health?release=$sha&attempt=$attempt" || true)
  if [[ "$response" == "$sha" ]]; then
    success=true
    echo "Deployed and verified release $sha"
    exit 0
  fi
  sleep 3
done
echo 'New release did not pass the health check' >&2
exit 1
