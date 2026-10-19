#!/bin/bash
# Automatyczne wdrażanie www.fnfgroup.pl: sprawdza, czy w gałęzi main na GitHubie jest nowy commit,
# i jeśli tak, buduje go i publikuje skryptem server-deploy.sh z tego commita.
# Instalowany jako /usr/local/bin/fnfgroup-autopull i uruchamiany co 2 minuty przez fnfgroup-autopull.timer.
set -euo pipefail
REPO="krzysztofjanowsianowski-ship-it/fleetnfloat-web"
STATE=/var/lib/fnfgroup/deployed-sha

exec 9>/run/fnfgroup-autopull.lock
flock -n 9 || exit 0

if command -v git >/dev/null; then
  SHA=$(git ls-remote "https://github.com/$REPO.git" refs/heads/main | cut -f1)
else
  SHA=$(curl -fsS -H "Accept: application/vnd.github.sha" "https://api.github.com/repos/$REPO/commits/main")
fi
[[ "$SHA" =~ ^[0-9a-f]{40}$ ]] || { echo "Nie udało się odczytać commita main" >&2; exit 1; }

mkdir -p "$(dirname "$STATE")"
[ "$(cat "$STATE" 2>/dev/null)" = "$SHA" ] && exit 0

echo "Nowy commit $SHA, wdrażam"
curl -fsSL "https://raw.githubusercontent.com/$REPO/$SHA/scripts/server-deploy.sh" | REF="$SHA" bash
echo "$SHA" > "$STATE"
