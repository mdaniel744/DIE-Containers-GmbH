#!/bin/bash
set -e

# Non-interactive shells don't load the full PATH — set it explicitly
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

cd /var/www/csav

echo "[deploy] pulling latest code..."
git pull origin main

echo "[deploy] installing dependencies..."
pnpm install --ignore-scripts

echo "[deploy] building..."
pnpm build

echo "[deploy] restarting app..."
pm2 restart csav

echo "[deploy] done at $(date)"
