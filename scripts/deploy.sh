#!/bin/bash
# Wdrożenie www.fleetnfloat.com: buduje stronę lokalnie i wysyła dist/ na serwer.
# Wysyła bieżący stan katalogu (także niezacommitowane zmiany).
set -e
cd "$(dirname "$0")/.."
SERVER="${SERVER:-root@91.107.222.145}"
npm ci
npm run build
tar -C dist -czf /tmp/fleetnfloat-dist.tar.gz .
scp /tmp/fleetnfloat-dist.tar.gz "$SERVER":/tmp/
ssh "$SERVER" 'set -e
  rm -rf /var/www/fleetnfloat.new && mkdir -p /var/www/fleetnfloat.new
  tar -xzf /tmp/fleetnfloat-dist.tar.gz -C /var/www/fleetnfloat.new
  rm -rf /var/www/fleetnfloat.old
  [ -d /var/www/fleetnfloat ] && mv /var/www/fleetnfloat /var/www/fleetnfloat.old
  mv /var/www/fleetnfloat.new /var/www/fleetnfloat
  chmod -R a+rX /var/www/fleetnfloat'
echo "Gotowe: https://www.fleetnfloat.com"
