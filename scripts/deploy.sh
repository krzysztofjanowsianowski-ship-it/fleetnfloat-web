#!/bin/bash
# Wdrożenie www.fnfgroup.pl: buduje stronę lokalnie i wysyła dist/ na serwer.
# Wysyła bieżący stan katalogu (także niezacommitowane zmiany).
set -e
cd "$(dirname "$0")/.."
SERVER="${SERVER:-root@91.107.222.145}"
npm ci
npm run build
tar -C dist -czf /tmp/fnfgroup-dist.tar.gz .
scp /tmp/fnfgroup-dist.tar.gz "$SERVER":/tmp/
ssh "$SERVER" 'set -e
  rm -rf /var/www/fnfgroup.new && mkdir -p /var/www/fnfgroup.new
  tar -xzf /tmp/fnfgroup-dist.tar.gz -C /var/www/fnfgroup.new
  rm -rf /var/www/fnfgroup.old
  [ -d /var/www/fnfgroup ] && mv /var/www/fnfgroup /var/www/fnfgroup.old
  mv /var/www/fnfgroup.new /var/www/fnfgroup
  chmod -R a+rX /var/www/fnfgroup'
echo "Gotowe: https://www.fnfgroup.pl"
