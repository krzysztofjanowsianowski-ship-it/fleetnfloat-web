#!/bin/bash
# Jednorazowa konfiguracja serwera (Hetzner, Caddy) dla www.fnfgroup.pl.
# Uruchom z własnego komputera: ./scripts/setup-server.sh
set -e
cd "$(dirname "$0")/.."
SERVER="${SERVER:-root@91.107.222.145}"
scp deploy/Caddyfile.fnfgroup "$SERVER":/tmp/fnfgroup.caddy
ssh "$SERVER" 'set -e
  mkdir -p /var/www/fnfgroup /etc/caddy/sites
  mv /tmp/fnfgroup.caddy /etc/caddy/sites/fnfgroup.caddy
  grep -q "import /etc/caddy/sites/fnfgroup.caddy" /etc/caddy/Caddyfile || echo "import /etc/caddy/sites/fnfgroup.caddy" >> /etc/caddy/Caddyfile
  caddy validate --config /etc/caddy/Caddyfile
  systemctl reload caddy'
echo "Serwer gotowy. Teraz: ./scripts/deploy.sh"
