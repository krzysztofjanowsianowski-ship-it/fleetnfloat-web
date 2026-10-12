// Dane producenta z bygga.pl (odczyt 12.10.2026). Tylko to, co producent podaje na stronach modeli.
// Bez cen: sprzedajemy poza Polską i cenę z transportem potwierdzamy przy zapytaniu.
const u = (s: string) => `https://www.bygga.pl/${s}/`;

export const producent = {
  nazwa: "Bygga Sp. z o.o.",
  miasto: "Bydgoszcz",
  fakty: [
    { liczba: "2017", opis: "początek działalności producenta" },
    { liczba: "220+", opis: "houseboatów, przy których budowie pracował w pierwszych latach" },
    { liczba: "~4 mies.", opis: "czas produkcji według producenta" },
    { liczba: "8–15 m", opis: "długość modeli w ofercie" },
  ],
};

export const houseboaty = [
  { model: "FLUO 93 Navigator", mieszkalna: "20,8 m²", poklad: "9,3 × 3,2 m", uklad: "salon z sofą, kuchnia, łazienka", naped: "9,9 KM", masa: "5,5 t", url: u("fluo-93-navigator") },
  { model: "FLUO 93S Navigator", mieszkalna: "19,5 m²", poklad: "9,3 × 3,2 m", uklad: "jak 93, z sauną w standardzie", naped: "9,9 KM", masa: "5,5 t", url: u("fluo-93s-navigator") },
  { model: "FLUO 84 Pari", mieszkalna: "19,6 m²", poklad: "8,5 × 3,7 m", uklad: "1 sypialnia, salon, kuchnia, łazienka", naped: "9,9 KM", masa: "5,9 t", url: u("fluo-84-pari") },
  { model: "FLUO 12 River King", mieszkalna: "35 m² + taras 35 m²", poklad: "12 × 4,35 m", uklad: "2 sypialnie, salon, kuchnia z wyspą, łazienka", naped: "50 KM", masa: "9,5 t", url: u("fluo-12-river-king") },
  { model: "FLUO Rent 28", mieszkalna: "20,44 m²", poklad: "10 × 3 m", uklad: "1 sypialnia, salon, łazienka", naped: "9,9 KM", masa: "5,6 t", url: u("fluo-rent-28") },
  { model: "FLUO Rent 32S", mieszkalna: "24 m²", poklad: "10 × 3,6 m", uklad: "1 sypialnia, salon, łazienka", naped: "9,9 KM", masa: "5,6 t", url: u("fluo-rent-32s") },
];

export const cechyHouseboatow = [
  "Całoroczne: na zimę nie trzeba wyciągać ich z wody.",
  "Zanurzenie 0,40–0,50 m.",
  "Pakiet solarny w standardzie (poza River King): inwerter 3000 W, 2 akumulatory 210 Ah i 4 panele 405 W, czyli 230 V w gniazdkach bez przyłącza w marinie.",
  "Silnik Yamaha 9,9 KM; w opcji napęd elektryczny POD 7 kW i ster strumieniowy.",
  "Klimatyzacja z funkcją grzania, taras dziobowy, rufowy i na dachu.",
  "W opcji m.in. sauna, jacuzzi na dachu, ogrzewanie podłogowe, agregat, Starlink, pomost stały lub pływający.",
];

export const domy = [
  { model: "Terra Muskoka", rodzaj: "dom modułowy z antresolą", mieszkalna: "34,86 m² + 15 m²", wymiary: "8,3 × 4,2 m", url: u("terra-muskoka") },
  { model: "Muskoka 35", rodzaj: "dom modułowy z antresolą", mieszkalna: "49,86 m² łącznie", wymiary: "parter 34,86 m²", url: u("muskoka-35") },
  { model: "Terra Muskoka 45", rodzaj: "dom modułowy z antresolą", mieszkalna: "45 m² + antresola", wymiary: "—", url: u("terra-muskoka-45") },
  { model: "Muskoka 70", rodzaj: "dom modułowy z antresolą", mieszkalna: "69,94 m² + antresola", wymiary: "—", url: u("muskoka-70") },
  { model: "Terra Sardegna", rodzaj: "dom mobilny na przyczepie (3,3 t)", mieszkalna: "18 m²", wymiary: "7,4 × 2,44 m", url: u("terra-sardegna") },
  { model: "Terra Studio OF001", rodzaj: "biuro mobilne z łazienką", mieszkalna: "—", wymiary: "5 × 3 m", url: u("terra-studio-of001") },
];

export const cechyDomow = [
  "Drewniana konstrukcja C24 o wysokiej odporności na wiatr i śnieg; domy całoroczne.",
  "Produkcja fabryczna; Muskoka może być gotowa nawet w 3 miesiące.",
  "Uchwyty do podnoszenia dźwigiem i kotwy do stóp betonowych w standardzie.",
  "W opcji m.in. ogrzewanie podłogowe, instalacja solarna z magazynem 6 kW, taras i balia.",
];

export const sauny = [
  { model: "Flamma S1", wymiary: "2,52 × 3,13 × 2,32 m", piec: "Harvia 9 kW", url: u("flamma-s1") },
  { model: "Flamma S2", wymiary: "3,26 × 2,52 × 2,67 m", piec: "Harvia 9 kW", url: u("flamma-s2") },
  { model: "Flamma S3", wymiary: "2,21 × 2,26 × 2,57 m", piec: "Harvia 6 kW", url: u("flamma-s3") },
];

export const jezyki = [
  { kod: "EN", nazwa: "angielski", zdanie: "We handle your enquiry in English." },
  { kod: "DE", nazwa: "niemiecki", zdanie: "Wir betreuen Sie auf Deutsch." },
  { kod: "FR", nazwa: "francuski", zdanie: "Nous vous accompagnons en français." },
];
