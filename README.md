# fleetnfloat-web

Strona F&F GROUP (FLEET&FLOAT, fleetnfloat.com): wizytówka grupy i strony działów F&F LEASE, F&F.IT, F&F HOMES, F&F HR. Statyczny serwis w Astro.

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

## Wdrożenie (www.fleetnfloat.com)

Strona jest statyczna i działa na serwerze Hetzner (91.107.222.145) obok kursy.fleetnfloat.com, za Caddy, który sam wystawia certyfikaty HTTPS.

1. **DNS w home.pl** (panel home.pl → Domeny → fleetnfloat.com → Strefa DNS):
   - rekord `A` dla `fleetnfloat.com` (host `@`) → `91.107.222.145`
   - rekord `A` dla `www` → `91.107.222.145`
   - Rekord `kursy` zostaw bez zmian.
2. **Jednorazowo na serwerze** (z komputera z dostępem SSH do serwera): `./scripts/setup-server.sh`
3. **Każde wdrożenie:** `./scripts/deploy.sh`

`fleetnfloat.com` przekierowuje na `https://www.fleetnfloat.com`. Dopóki w `src/data/firma.ts` brakuje danych firmy, strona ma `noindex` i wyszukiwarki jej nie indeksują; po uzupełnieniu danych znacznik znika przy następnym wdrożeniu.
