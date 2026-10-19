// Inwestycje F&F HOMES według briefu (10.2026). Pola null nie zostały jeszcze przekazane
// i są pokazywane jako pola do uzupełnienia.
export type Inwestycja = {
  id: string;
  numer: string;
  nazwa: string;
  miejsce: string | null;
  opis: string;
  dane: { etykieta: string; wartosc: string | null }[];
};

export const inwestycje: Inwestycja[] = [
  {
    id: "gdanska",
    numer: "01",
    nazwa: "Biurowiec przy ulicy Gdańskiej",
    miejsce: "ul. Gdańska, Bydgoszcz",
    opis: "Nowoczesny biurowiec z częścią usługową i mieszkalną.",
    dane: [
      { etykieta: "Powierzchnia użytkowa", wartosc: "1200 m² łącznie" },
      { etykieta: "Funkcje", wartosc: "biura, usługi, mieszkania" },
      { etykieta: "Etap", wartosc: null },
      { etykieta: "Termin", wartosc: null },
    ],
  },
  {
    id: "skarpa",
    numer: "02",
    nazwa: "Dom wypoczynkowy na skarpie",
    miejsce: null,
    opis: "Dom wypoczynkowy na skarpie, z widokiem na rzekę Brdę.",
    dane: [
      { etykieta: "Położenie", wartosc: "skarpa nad Brdą" },
      { etykieta: "Powierzchnia", wartosc: null },
      { etykieta: "Etap", wartosc: null },
      { etykieta: "Termin", wartosc: null },
    ],
  },
];
