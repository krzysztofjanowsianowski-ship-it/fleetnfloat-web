// Dane firmy. Pola ustawione na null nie zostały jeszcze przekazane:
// strona pokazuje je jako pola do uzupełnienia, nigdy jako wymyślone wartości.
export const firma = {
  nazwa: "FLEET&FLOAT",
  haslo: "Usługi dla Twojego biznesu",
  adres: null as string | null,
  nip: null as string | null,
  telefon: null as string | null,
  email: null as string | null,
  // Adres usługi przyjmującej formularz (np. Formspree, własny endpoint).
  formularz: null as string | null,
};

export type Dzial = {
  id: "houseboaty" | "pojazdy" | "oprogramowanie" | "kadry";
  nazwa: string;
  miejsce: string;
  opis: string;
  km: string;
  woda: boolean;
  akcja: string;
};

export const dzialy: Dzial[] = [
  {
    id: "houseboaty",
    nazwa: "Houseboaty i domy BYGGA",
    miejsce: "Przystań",
    opis: "dealer producenta",
    km: "2,4",
    woda: true,
    akcja: "Umów oględziny",
  },
  {
    id: "pojazdy",
    nazwa: "Wynajem pojazdów",
    miejsce: "Baza",
    opis: "ciężarowe i osobowe",
    km: "7,9",
    woda: false,
    akcja: "Zapytaj o termin",
  },
  {
    id: "oprogramowanie",
    nazwa: "Oprogramowanie",
    miejsce: "Pracownia",
    opis: "CRM, integracje, szkolenia",
    km: "12,3",
    woda: false,
    akcja: "Umów rozmowę",
  },
  {
    id: "kadry",
    nazwa: "Kadry i administracja",
    miejsce: "Biuro",
    opis: "wsparcie przedsiębiorstw",
    km: "15,0",
    woda: false,
    akcja: "Zapytaj o ofertę",
  },
];

// Wybrane modele według kart producenta na bygga.pl (odczyt 10.2026).
// Bez cen: ceny producenta są niespójne i wymagają potwierdzenia.
export const modeleBygga = [
  { model: "FLUO 93 Navigator", rodzaj: "houseboat", mieszkalna: "20,8 m²", wymiary: "pokład 9,3 × 3,2 m", url: "https://www.bygga.pl/fluo-93-navigator/" },
  { model: "FLUO 84 Pari", rodzaj: "houseboat z sypialnią", mieszkalna: "19,6 m²", wymiary: "pokład 8,5 × 3,7 m", url: "https://www.bygga.pl/fluo-84-pari/" },
  { model: "FLUO 12 River King", rodzaj: "houseboat, dwie sypialnie", mieszkalna: "35 m² + taras 35 m²", wymiary: "pokład 12 × 4,35 m", url: "https://www.bygga.pl/fluo-12-river-king/" },
  { model: "Terra Muskoka", rodzaj: "dom modułowy z antresolą", mieszkalna: "34,86 m² + 15 m²", wymiary: "8,3 × 4,2 m", url: "https://www.bygga.pl/terra-muskoka/" },
  { model: "Terra Sardegna", rodzaj: "dom mobilny na przyczepie", mieszkalna: "18 m²", wymiary: "7,4 × 2,44 m", url: "https://www.bygga.pl/terra-sardegna/" },
];
