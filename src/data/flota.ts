// Samochody F&F LEASE do najmu okazjonalnego. Identyfikator łączy auto
// z jego rezerwacjami w public/rezerwacje.json.
export type Auto = {
  id: string;
  nazwa: string;
  rok: number | null;
  kolor: string;
  nadwozie: "coupe" | "suv";
  lakier: string;
  dach?: string;
};

export const flota: Auto[] = [
  { id: "lexus-lc500", nazwa: "Lexus LC 500", rok: 2018, kolor: "czerwony", nadwozie: "coupe", lakier: "#A3141E" },
  { id: "lexus-rx350", nazwa: "Lexus RX 350", rok: 2023, kolor: "miedziany", nadwozie: "suv", lakier: "#9A5B3A" },
  { id: "mercedes-glc", nazwa: "Mercedes-Benz GLC", rok: 2018, kolor: "biały, czarny dach", nadwozie: "suv", lakier: "#F4F4F2", dach: "#1E1F22" },
];

export const formyNajmu = [
  {
    id: "okazjonalny",
    nazwa: "Najem okazjonalny",
    okres: "od 1 dnia",
    opis: "Na wyjazd, spotkanie z klientem albo wydarzenie. Od 400 zł netto za dobę; wolne terminy sprawdzisz w kalendarzu poniżej.",
    akcja: "Sprawdź kalendarz",
    href: "#kalendarz",
  },
  {
    id: "krotkoterminowy",
    nazwa: "Najem krótkoterminowy",
    okres: "do 12 miesięcy",
    opis: "Na sezon, projekt albo zastępstwo w firmowej flocie, bez wiązania się na lata.",
    akcja: "Zapytaj o termin",
    href: "#kontakt",
  },
  {
    id: "dlugoterminowy",
    nazwa: "Najem długoterminowy",
    okres: "powyżej 12 miesięcy",
    opis: "Stały samochód dla firmy lub pracownika na dłuższy okres.",
    akcja: "Zapytaj o ofertę",
    href: "#kontakt",
  },
  {
    id: "leasing",
    nazwa: "Leasing",
    okres: "od 2 do 5 lat",
    opis: "Finansowanie samochodu dla firmy w formie leasingu.",
    akcja: "Zapytaj o leasing",
    href: "#kontakt",
  },
];

// Cennik najmu okazjonalnego (netto za dobę, ta sama stawka dla wszystkich aut).
// Stawka zależy od łącznej liczby dób najmu.
export const cennik = [
  { od: 1, do: 3, cena: 500, opis: "1–3 doby" },
  { od: 4, do: 8, cena: 450, opis: "4–8 dób" },
  { od: 9, do: null, cena: 400, opis: "od 9 dób" },
];
