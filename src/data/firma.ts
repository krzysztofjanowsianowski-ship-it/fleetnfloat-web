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
    nazwa: "Wynajem samochodów",
    krotko: "Najem okazjonalny od 1 dnia, krótko- i długoterminowy oraz leasing na 2 do 5 lat.",
    akcja: "Zapytaj o termin",
    href: "/lease/",
  },
  {
    id: "it",
    marka: "F&F.IT",
    sufiks: ".IT",
    nazwa: "Oprogramowanie dla firm",
    krotko: "Oprogramowanie do biura z użyciem AI: automatyzacje, integracje, systemy zarządzania, kontroling i AI marketing.",
    akcja: "Umów rozmowę",
    href: "/it/",
  },
  {
    id: "homes",
    marka: "F&F HOMES",
    sufiks: " HOMES",
    nazwa: "Houseboaty i domy BYGGA",
    krotko: "Dealer BYGGA na rynki poza Polską: houseboaty, domy modułowe i sauny, obsługa po angielsku, niemiecku i francusku.",
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
