#!/bin/bash
set -e

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
