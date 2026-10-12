# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (statyczna strona, wybór użytkownika). Kod w `fleetnfloat-web/` w repozytorium E-Learning-CPK. Docelowy hosting: firmowy VPS Hetzner pod fleetnfloat.com, do potwierdzenia przy wdrożeniu (domena główna i sposób publikacji).

## Brand Architecture

Potwierdzone przez użytkownika (10.2026): grupa występuje jako **F&F GROUP** („Grupa F&F”), marka i logo FLEET&FLOAT bez zmian. Działy mają własne nazwy:

- **F&F LEASE**: najem okazjonalny (od 1 dnia, z kalendarzem dostępności), krótkoterminowy (do 12 miesięcy), długoterminowy oraz leasing na 2 do 5 lat. Flota do najmu okazjonalnego (10.2026): Lexus LC 500 (czerwony), Lexus RX 350 z 2023 r. (miedziany), Mercedes-Benz GLC z 2018 r. (biały z czarnym dachem). Nazwy modeli do potwierdzenia przez użytkownika (podane jako „CL500” i „X350”). Lexus LC 500 rocznik 2018. Cennik najmu okazjonalnego (netto za dobę, wszystkie auta): 1–3 doby 500 zł, 4–8 dób 450 zł, od 9 dób 400 zł (progi „>4 do 8” i „>8” zinterpretowane jako 4–8 i 9+). Ceny pozostałych form ustalane indywidualnie.
- **F&F.IT**: oprogramowanie do biura z użyciem AI. Specjalizacje: automatyzacja procesów, integracja środowisk, systemy zarządzania, kontroling, AI marketing; od najmniejszych automatyzacji po rozbudowane CRM. Realizacje: program do rozliczania czasu pracy kierowców, CRM dla agencji pracy z modułem kadrowym, program księgowy, system e-learningowy z symulatorem tachografu (kursy.fleetnfloat.com).
- **F&F HOMES**: dealer BYGGA w sprzedaży poza terytorium Polski; obsługa w językach angielskim, niemieckim i francuskim. Konfigurator zostanie dodany później.
- **F&F HR**: wsparcie kadrowe i administracyjne.

Kolejność z briefu: LEASE, IT, HOMES, HR. Strona główna to profesjonalna wizytówka grupy z kaflami prowadzącymi do stron działów (`/lease/`, `/it/`, `/homes/`, `/hr/`).

## Users

Głównie firmy, przede wszystkim małe i średnie przedsiębiorstwa, które szukają wynajmu pojazdów, oprogramowania na zamówienie albo wsparcia kadrowo-administracyjnego. Houseboaty i domki letniskowe kupują głównie inwestorzy i firmy. Osoby prywatne nie są główną grupą docelową.

## Product Purpose

Firmowa strona FLEET&FLOAT, która przedstawia firmę jako jedną markę z czterema równorzędnymi działami i prowadzi odwiedzającego do kontaktu w sprawie konkretnej usługi:

1. Sprzedaż houseboatów i domków letniskowych jako dealer producenta BYGGA (www.bygga.pl).
2. Wynajem pojazdów: samochody ciężarowe i osobowe.
3. Usługi programistyczne ze specjalizacją w narzędziach biurowych, CRM, integracjach i platformach szkoleniowych.
4. Wsparcie przedsiębiorstw w sprawach kadrowych i administracyjnych.

Sukces: firma trafia na właściwy dział i podejmuje akcję tego działu. Każdy dział ma własną główną akcję (np. houseboaty: umów oględziny, pojazdy: zapytaj o termin, IT: umów rozmowę, kadry: zapytaj o ofertę); dokładne brzmienie i kanał (formularz, telefon, e-mail) do ustalenia per dział.

## Positioning

Jedna firma, cztery niezależne specjalizacje pod wspólną marką i hasłem „Usługi dla Twojego biznesu”. Działy mają równą wagę i żaden nie jest dodatkiem do innego. Firmę ma wyróżniać jakość i solidność (potwierdzone przez użytkownika): rzeczy zrobione porządnie, w każdym dziale. Nie wymyślać dowodów tej solidności (certyfikatów, lat działalności, liczb); pokazywać ją konkretem.

## Operating Context

- Houseboaty i domki: FLEET&FLOAT jest dealerem producenta BYGGA. Zasięg: sprzedaż poza terytorium Polski (potwierdzone przez użytkownika 10.2026). Obsługa EN/DE/FR. Warunki sprzedaży i ceny eksportowe nie są potwierdzone; strona nie pokazuje cen. Dane modeli w `src/data/bygga.ts` (odczyt bygga.pl 12.10.2026).
  - Fakty ze strony producenta (bygga.pl, odczyt 10.2026): Bygga Sp. z o.o., Bydgoszcz, działa od 2017 r., własny zakład produkcyjny. Linie: FLUO (houseboaty: 93 Navigator, 93S Navigator z sauną, 84 Pari, 12 River King, Rent 28, Rent 32S), TERRA (domy modułowe Muskoka, Muskoka 35/45/70, mobilny dom Sardegna na przyczepie, biuro mobilne Studio OF001), FLAMMA (sauny, balie). Mniejsze houseboaty z silnikiem 9,9 KM, który według producenta nie wymaga patentu; dostępny pakiet solarny i napęd elektryczny. Domy: „nawet w 3 miesiące”, transport wyceniany indywidualnie.
  - Producent podaje ceny netto, ale jego strony są ze sobą sprzeczne (FAQ a karty modeli). Na stronie FLEET&FLOAT nie publikować cen bez potwierdzenia użytkownika. Model, specyfikację i link do karty producenta można pokazywać jako fakty.
- Wynajem pojazdów: ciężarowe i osobowe. Lista modeli, cennik i warunki nie zostały przekazane.
- Programowanie: realny przykład w tym repozytorium to platforma e-learningowa kursy.fleetnfloat.com („CPK E-learning”): kurs obsługi tachografu i karty kierowcy, interaktywny symulator tachografu z lektorem, panel firmy i rozliczenia miesięczne.
- Kadry i administracja: zakres usług nie został doprecyzowany.

## Capabilities and Constraints

- Język strony: polski. Inne wersje językowe nieustalone.
- Każdy dział ma własną podstronę o tej samej wadze; strona główna przedstawia wszystkie cztery.
- Dane firmy (adres, NIP, telefon, e-mail, godziny) są u użytkownika, jeszcze nie przekazane. Do czasu przekazania nie wpisywać wymyślonych danych.
- Zdjęcia houseboatów i domków (od BYGGA lub własne, z prawem do publikacji) są u użytkownika, jeszcze nie przekazane.
- BYGGA to marka producenta: strona nie może podszywać się pod BYGGA ani kopiować jej identyfikacji. Relacja to „dealer”.

## Brand Commitments

- Nazwa: FLEET&FLOAT. Hasło: „Usługi dla Twojego biznesu”.
- Logo (wiążące, nie przerysowywać): `public/brand/logo.svg` (pełne z hasłem), `logo-bez-hasla.svg`, `logo-granat.svg` (granat jednokolorowe), `logo-czarne.svg`, `ikona-aplikacji.svg` (zaokrąglony kwadrat w granacie).
- Sygnet: ampersand z ozdobnymi zakończeniami w podwójnym okręgu (gruby granatowy pierścień, cienki złoty wewnętrzny). Logotyp: wersaliki szeryfowe w szerokim rozstrzeleniu, złoty ampersand między słowami; hasło bezszeryfowe.
- Kolory z plików logo: granat `#203A5F`, złoto na jasnym tle `#B8925A`, złoto na granacie `#D2B07A`, ciemne złoto hasła `#8A6A36`. Wersje na granacie: biały logotyp, złote hasło i sygnet.

## Evidence on Hand

- Logo w pięciu wariantach (ścieżki powyżej).
- Realizacja IT: platforma kursy.fleetnfloat.com, której kod jest w tym repozytorium (zrzuty ekranu można wykonać z działającej aplikacji).
- Zdjęcia houseboatów i domków oraz dane kontaktowe: dostępne u użytkownika, do przekazania.
- Brak: listy i zdjęć pojazdów, cen, opinii klientów, logotypów klientów, liczb (lata działalności, liczba klientów) oraz realizacji kadrowo-administracyjnych. Niczego z tego nie wolno wymyślać; materiał poglądowy musi być oznaczony jako przykładowy.

## Product Principles

1. Cztery działy, jedna marka: równa waga na stronie głównej i w nawigacji.
2. Mówimy do firm: konkretnie, rzeczowo, z jasną drogą do akcji w każdym dziale. Nie korporacyjnie: bez zimnej, bezosobowej maniery dużej spółki.
5. Jedna firma, nie zlepek: cztery działy mają wyglądać jak części jednej całości, nie przypadkowy zbiór usług.
3. Dowód zamiast deklaracji: realne realizacje i zdjęcia produktów, bez wymyślonych liczb i opinii.
4. Wierność identyfikacji: logo i jego kolory są punktem wyjścia, nie dekoracją do zmiany.
