#!/bin/bash
# Jednorazowo NA SERWERZE: przygotowuje automatyczne wdrażanie z GitHub Actions.
# Tworzy osobny klucz SSH, który pozwala tylko podmienić pliki strony (nic więcej),
# i wypisuje dwie wartości do wklejenia w GitHub → Settings → Secrets and variables → Actions.
# Użycie (po zalogowaniu na serwer przez ssh):
#   curl -fsSL https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/main/scripts/setup-autodeploy.sh | bash
set -euo pipefail
REPO_RAW="https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/main"
KEY=/root/.ssh/fnfgroup_deploy

curl -fsSL "$REPO_RAW/scripts/fnfgroup-receive.sh" -o /usr/local/bin/fnfgroup-receive
chmod 755 /usr/local/bin/fnfgroup-receive

mkdir -p /root/.ssh && chmod 700 /root/.ssh
[ -f "$KEY" ] || ssh-keygen -q -t ed25519 -N "" -C "github-actions fnfgroup" -f "$KEY"
LINE="command=\"/usr/local/bin/fnfgroup-receive\",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty $(cat "$KEY.pub")"
touch /root/.ssh/authorized_keys && chmod 600 /root/.ssh/authorized_keys
grep -qF "$(cat "$KEY.pub")" /root/.ssh/authorized_keys || echo "$LINE" >> /root/.ssh/authorized_keys

echo
echo "=== Sekret 1: nazwa DEPLOY_SSH_KEY, wartość (cały blok razem z liniami BEGIN/END): ==="
cat "$KEY"
echo
echo "=== Sekret 2: nazwa DEPLOY_KNOWN_HOSTS, wartość: ==="
ssh-keyscan -t ed25519 91.107.222.145 2>/dev/null
echo
echo "Gotowe. Wklej obie wartości w GitHub, a potem usuń ten tekst z ekranu terminala (polecenie: clear)."
