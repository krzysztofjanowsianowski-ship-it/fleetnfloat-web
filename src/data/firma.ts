// Dane grupy. Pola ustawione na null nie zostały jeszcze przekazane:
// strona pokazuje je jako pola do uzupełnienia, nigdy jako wymyślone wartości.
export const firma = {
  grupa: "F&F GROUP",
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
  id: "lease" | "it" | "homes" | "hr";
  marka: string;
  sufiks: string;
  nazwa: string;
  krotko: string;
  akcja: string;
  href: string;
};

// Kolejność jak w briefie: F&F LEASE, F&F.IT, F&F HOMES, F&F HR.
export const dzialy: Dzial[] = [
  {
    id: "lease",
    marka: "F&F LEASE",
    sufiks: " LEASE",
    nazwa: "Wynajem pojazdów",
    krotko: "Samochody ciężarowe i osobowe na wynajem dla firm.",
    akcja: "Zapytaj o termin",
    href: "/lease/",
  },
  {
    id: "it",
    marka: "F&F.IT",
    sufiks: ".IT",
    nazwa: "Oprogramowanie dla firm",
    krotko: "Narzędzia biurowe, systemy CRM, integracje i platformy szkoleniowe.",
    akcja: "Umów rozmowę",
    href: "/it/",
  },
  {
    id: "homes",
    marka: "F&F HOMES",
    sufiks: " HOMES",
    nazwa: "Houseboaty i domy BYGGA",
    krotko: "Sprzedaż houseboatów i domów modułowych jako dealer producenta BYGGA.",
    akcja: "Umów oględziny",
    href: "/homes/",
  },
  {
    id: "hr",
    marka: "F&F HR",
    sufiks: " HR",
    nazwa: "Kadry i administracja",
    krotko: "Wsparcie przedsiębiorstw w sprawach kadrowych i administracyjnych.",
    akcja: "Zapytaj o ofertę",
    href: "/hr/",
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
