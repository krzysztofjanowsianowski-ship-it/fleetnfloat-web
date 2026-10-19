#!/bin/bash
# Jednorazowo NA SERWERZE: włącza automatyczne wdrażanie www.fnfgroup.pl.
# Serwer co 2 minuty sprawdza gałąź main na GitHubie i sam publikuje nowe zmiany. Nie wymaga żadnych kluczy ani sekretów.
# Użycie (po zalogowaniu na serwer przez ssh):
#   curl -fsSL https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/main/scripts/setup-autopull.sh | bash
set -euo pipefail
REPO_RAW="https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/main"

curl -fsSL "$REPO_RAW/scripts/fnfgroup-autopull.sh" -o /usr/local/bin/fnfgroup-autopull
chmod 755 /usr/local/bin/fnfgroup-autopull

cat > /etc/systemd/system/fnfgroup-autopull.service <<'UNIT'
[Unit]
Description=Wdrożenie www.fnfgroup.pl z GitHuba (gałąź main)
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/fnfgroup-autopull
TimeoutStartSec=20min
UNIT

cat > /etc/systemd/system/fnfgroup-autopull.timer <<'UNIT'
[Unit]
Description=Sprawdzanie zmian www.fnfgroup.pl co 2 minuty

[Timer]
OnBootSec=2min
OnUnitActiveSec=2min

[Install]
WantedBy=timers.target
UNIT

systemctl daemon-reload
systemctl enable --now fnfgroup-autopull.timer

# Sprzątanie po wcześniejszej próbie z kluczem GitHub Actions (jeśli była).
if [ -f /root/.ssh/fnfgroup_deploy.pub ] && [ -f /root/.ssh/authorized_keys ]; then
  grep -vF "$(cat /root/.ssh/fnfgroup_deploy.pub)" /root/.ssh/authorized_keys > /root/.ssh/authorized_keys.tmp || true
  mv /root/.ssh/authorized_keys.tmp /root/.ssh/authorized_keys && chmod 600 /root/.ssh/authorized_keys
  rm -f /root/.ssh/fnfgroup_deploy /root/.ssh/fnfgroup_deploy.pub /usr/local/bin/fnfgroup-receive
  echo "Usunięto klucz wdrożeniowy GitHub Actions (nie jest już potrzebny)."
fi

echo "Pierwsze wdrożenie (kilka minut)..."
/usr/local/bin/fnfgroup-autopull
echo "Gotowe. Każda zmiana w gałęzi main pojawi się na www.fnfgroup.pl w ciągu kilku minut."
echo "Dziennik wdrożeń: journalctl -u fnfgroup-autopull -n 50"
