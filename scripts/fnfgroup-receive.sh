#!/bin/bash
# Odbiera zbudowaną stronę (tar.gz na standardowym wejściu) i podmienia /var/www/fnfgroup.
# Instalowany na serwerze jako /usr/local/bin/fnfgroup-receive; klucz wdrożeniowy GitHub Actions
# może uruchomić wyłącznie ten skrypt (wymuszone polecenie w authorized_keys).
set -euo pipefail
umask 022
NEW=/var/www/fnfgroup.new
rm -rf "$NEW" && mkdir -p "$NEW"
tar -xzf - -C "$NEW" --no-same-owner
if [ ! -f "$NEW/index.html" ]; then
  echo "Brak index.html w paczce, przerywam." >&2
  rm -rf "$NEW"
  exit 1
fi
rm -rf /var/www/fnfgroup.old
[ -d /var/www/fnfgroup ] && mv /var/www/fnfgroup /var/www/fnfgroup.old
mv "$NEW" /var/www/fnfgroup
chmod -R a+rX /var/www/fnfgroup
echo "Wdrożono $(date -Is)"
