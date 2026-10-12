#!/bin/bash
# Jednorazowa konfiguracja serwera (Hetzner, Caddy) dla www.fleetnfloat.com.
# Uruchom z własnego komputera: ./scripts/setup-server.sh
set -e
cd "$(dirname "$0")/.."
SERVER="${SERVER:-root@91.107.222.145}"
scp deploy/Caddyfile.fleetnfloat "$SERVER":/tmp/fleetnfloat.caddy
ssh "$SERVER" 'set -e
  mkdir -p /var/www/fleetnfloat /etc/caddy/sites
  mv /tmp/fleetnfloat.caddy /etc/caddy/sites/fleetnfloat.caddy
  grep -q "import /etc/caddy/sites/fleetnfloat.caddy" /etc/caddy/Caddyfile || echo "import /etc/caddy/sites/fleetnfloat.caddy" >> /etc/caddy/Caddyfile
  caddy validate --config /etc/caddy/Caddyfile
  systemctl reload caddy'
echo "Serwer gotowy. Teraz: ./scripts/deploy.sh"
