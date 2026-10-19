#!/bin/bash
# Wdrożenie www.fnfgroup.pl uruchamiane NA SERWERZE (bez kopii projektu na komputerze).
# Pobiera kod z GitHuba, buduje stronę, instaluje konfigurację Caddy i podmienia /var/www/fnfgroup.
# Użycie (po zalogowaniu na serwer przez ssh):
#   curl -fsSL https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/main/scripts/server-deploy.sh | bash
set -euo pipefail

REPO="krzysztofjanowsianowski-ship-it/fleetnfloat-web"
# REF: gałąź albo konkretny commit (używa go automatyczne wdrażanie).
REF="${REF:-${BRANCH:-main}}"
NODE_VERSION="22.22.0"
WORK=/opt/fnfgroup-build

# Node.js: używamy systemowego, jeśli jest w wersji 22+, inaczej pobieramy oficjalną binarkę do /opt.
if command -v node >/dev/null && [ "$(node -p 'process.versions.node.split(".")[0]')" -ge 22 ]; then
  echo "Node $(node -v) z systemu"
else
  ARCH=$(uname -m); case "$ARCH" in x86_64) ARCH=x64 ;; aarch64) ARCH=arm64 ;; esac
  if [ ! -x "/opt/node-v$NODE_VERSION/bin/node" ]; then
    echo "Pobieram Node $NODE_VERSION do /opt"
    curl -fsSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" | tar -xJ -C /opt
    mv "/opt/node-v$NODE_VERSION-linux-$ARCH" "/opt/node-v$NODE_VERSION"
  fi
  export PATH="/opt/node-v$NODE_VERSION/bin:$PATH"
fi

echo "Pobieram kod: $REF"
rm -rf "$WORK" && mkdir -p "$WORK"
curl -fsSL "https://codeload.github.com/$REPO/tar.gz/$REF" | tar -xz -C "$WORK" --strip-components=1
cd "$WORK"

echo "Buduję stronę"
npm ci --no-audit --no-fund
npm run build

echo "Konfiguracja Caddy"
mkdir -p /etc/caddy/sites
cp deploy/Caddyfile.fnfgroup /etc/caddy/sites/fnfgroup.caddy
grep -q "import /etc/caddy/sites/fnfgroup.caddy" /etc/caddy/Caddyfile || echo "import /etc/caddy/sites/fnfgroup.caddy" >> /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile

echo "Podmieniam pliki strony"
rm -rf /var/www/fnfgroup.new && mkdir -p /var/www/fnfgroup.new
cp -a dist/. /var/www/fnfgroup.new/
rm -rf /var/www/fnfgroup.old
[ -d /var/www/fnfgroup ] && mv /var/www/fnfgroup /var/www/fnfgroup.old
mv /var/www/fnfgroup.new /var/www/fnfgroup
chmod -R a+rX /var/www/fnfgroup
systemctl reload caddy

echo "Gotowe: https://www.fnfgroup.pl (certyfikat HTTPS Caddy pobierze, gdy domena zacznie odpowiadać w DNS)"
