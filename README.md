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

- `public/brand/`: oryginalne logo od klienta (granat); `public/brand/braz/` to te same pliki w brązie espresso #3B2F26, używane na stronie; `logo-na-granacie.svg` to wersja na granatowe tło, przekolorowana z `logo.svg` zgodnie z arkuszem znaku.
- `public/realizacje/kursy-symulator.webp`: zrzut ekranu z platformy kursy.fleetnfloat.com; pochodzenie zapisane w pliku `.json` obok.
- `PRODUCT.md`: potwierdzone fakty o firmie i ograniczenia treści (bez cen BYGGA, bez wymyślonych liczb i opinii).
- `.impeccable/surfaces/`: kierunek wizualny strony głównej (wizytówka F&F GROUP).
