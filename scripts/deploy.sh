#!/bin/bash
set -e

export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

cd /var/www/csav

echo "[deploy] pulling latest code..."
git pull origin main

echo "[deploy] installing dependencies..."
pnpm install --ignore-scripts

echo "[deploy] backing up current build..."
rm -rf .next-backup
cp -r .next .next-backup 2>/dev/null || echo "[deploy] no existing build to back up"

echo "[deploy] building..."
if pnpm build 2>&1 | tee /var/log/csav-build.log; then
  echo "[deploy] build succeeded, restarting app..."
  rm -rf .next-backup
  pm2 restart csav
  echo "[deploy] done at $(date)"
else
  echo "[deploy] BUILD FAILED — restoring previous build so site stays live"
  rm -rf .next
  mv .next-backup .next 2>/dev/null || echo "[deploy] no backup to restore"
  echo "[deploy] site preserved at previous version. Check /var/log/csav-build.log for errors."
  exit 1
fi
