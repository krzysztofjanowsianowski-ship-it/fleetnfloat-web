# fleetnfloat-web

Strona F&F GROUP (FLEET&FLOAT, www.fnfgroup.pl): wizytówka grupy i strony działów F&F LEASE, F&F.IT, F&F HOMES, F&F HR. Statyczny serwis w Astro.

## Uruchomienie

```bash
cd fleetnfloat-web
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # wynik w dist/
```

## Co trzeba uzupełnić przed publikacją

Wszystkie miejsca do uzupełnienia są w `src/data/firma.ts`. Pole ustawione na `null` jest widoczne na stronie jako złoty znacznik „[… do uzupełnienia]”, nigdy jako wymyślona wartość.

- `adres`, `nip`, `telefon`, `email`: dane firmy w kontakcie i stopce.
- `formularz`: adres usługi przyjmującej formularz (np. Formspree albo własny endpoint). Bez niego formularz działa w trybie roboczym i nic nie wysyła.
- Link do polityki prywatności w zgodzie formularza (`src/components/ContactForm.astro`).
- Zdjęcia houseboatów i domów BYGGA: zastąpią rysunek poglądowy na stronie F&F HOMES.
- Lista pojazdów: zastąpi rysunek poglądowy na stronie F&F LEASE.
- Zakres usług kadrowo-administracyjnych.

## Materiały

- `public/brand/`: logo w wariantach od klienta; `logo-na-granacie.svg` to wersja na granatowe tło, przekolorowana z `logo.svg` zgodnie z arkuszem znaku.
- `public/realizacje/kursy-symulator.webp`: zrzut ekranu z platformy kursy.fleetnfloat.com; pochodzenie zapisane w pliku `.json` obok.
- `PRODUCT.md`: potwierdzone fakty o firmie i ograniczenia treści (bez cen BYGGA, bez wymyślonych liczb i opinii).
- `.impeccable/surfaces/`: kierunek wizualny strony głównej (wizytówka F&F GROUP).

## Rezerwacje (kalendarz F&F LEASE)

Kalendarz najmu okazjonalnego na `/lease/` czyta plik `public/rezerwacje.json` (na serwerze: `/var/www/fnfgroup/rezerwacje.json`). Każde auto ma listę okresów od–do (włącznie):

```json
{
  "lexus-lc500": [{ "od": "2026-10-16", "do": "2026-10-18" }],
  "lexus-rx350": [],
  "mercedes-glc": []
}
```

Plik na serwerze można podmienić w dowolnej chwili, bez przebudowy strony. Auta i ich opisy są w `src/data/flota.ts`.

## Wdrożenie (www.fnfgroup.pl)

Strona jest statyczna i działa na serwerze Hetzner (91.107.222.145) obok kursy.fleetnfloat.com, za Caddy, który sam wystawia certyfikaty HTTPS.

1. **DNS domeny fnfgroup.pl** u rejestratora:
   - rekord `A` dla `fnfgroup.pl` (host `@`) → `91.107.222.145`
   - rekord `A` dla `www` → `91.107.222.145`
2. **Wdrożenie bez kopii projektu na komputerze** (najprostsze): zaloguj się na serwer `ssh root@91.107.222.145` i uruchom
   ```
   curl -fsSL https://raw.githubusercontent.com/krzysztofjanowsianowski-ship-it/fleetnfloat-web/claude/jolly-bell-v2k0uz/scripts/server-deploy.sh | bash
   ```
   Skrypt pobiera kod z GitHuba, buduje stronę na serwerze, instaluje konfigurację Caddy i podmienia pliki. To samo polecenie służy do każdego kolejnego wdrożenia.
3. **Albo z własnej kopii projektu** (komputer z Node 22 i dostępem SSH): jednorazowo `./scripts/setup-server.sh`, potem przy każdym wdrożeniu `./scripts/deploy.sh`.

`fnfgroup.pl` przekierowuje na `https://www.fnfgroup.pl`. Dopóki w `src/data/firma.ts` brakuje danych firmy, strona ma `noindex`; po uzupełnieniu danych znacznik znika przy następnym wdrożeniu.
