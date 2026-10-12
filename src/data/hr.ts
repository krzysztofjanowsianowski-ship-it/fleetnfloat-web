// F&F HR według briefu (10.2026): trzy obszary. Opisy objaśniają formę współpracy;
// zakres usług kadrowych jest przykładowy do czasu potwierdzenia.
export const obszaryHr = [
  {
    id: "praca-tymczasowa",
    numer: "01",
    nazwa: "Agencja pracy tymczasowej",
    krotko: "Zatrudniamy pracowników i kierujemy ich do pracy w Twojej firmie.",
    opis: "Jesteśmy pracodawcą pracowników tymczasowych: zawieramy z nimi umowy, wypłacamy wynagrodzenia i rozliczamy składki. Twoja firma, jako pracodawca użytkownik, wyznacza im zadania i kieruje ich pracą.",
    punkty: [
      "Na okresy wzmożonej pracy, zastępstwa i zadania sezonowe.",
      "Praca tymczasowa u jednego pracodawcy użytkownika może trwać do 18 miesięcy w okresie 36 miesięcy (ustawa o zatrudnianiu pracowników tymczasowych).",
    ],
  },
  {
    id: "outsourcing",
    numer: "02",
    nazwa: "Outsourcing pracowniczy",
    krotko: "Wykonujemy zlecone zadania własnymi pracownikami.",
    opis: "Przejmujemy wykonanie określonych zadań lub całego procesu. Pracę wykonują nasi pracownicy, a my odpowiadamy za jej organizację, nadzór i wynik.",
    punkty: [
      "Twoja firma nie zarządza osobami, które wykonują usługę.",
      "Zakres, miejsce i sposób odbioru prac określa umowa.",
    ],
  },
  {
    id: "kadry",
    numer: "03",
    nazwa: "Usługi kadrowe i rozliczeniowe",
    krotko: "Prowadzimy sprawy kadrowe i płacowe Twoich pracowników.",
    opis: "Przejmujemy obsługę kadrową i rozliczenia płacowe w zakresie, który ustalimy z firmą: od pojedynczych czynności po stałą obsługę.",
    punkty: [
      "Umowy, akta osobowe i dokumentacja pracownicza.",
      "Ewidencja czasu pracy, urlopów i nieobecności.",
      "Listy płac oraz rozliczenia ZUS i PIT.",
    ],
  },
];

export const porownanie = [
  { cecha: "Pracodawca pracowników", tymczasowa: "F&F HR", outsourcing: "F&F HR" },
  { cecha: "Kto kieruje pracą na co dzień", tymczasowa: "Twoja firma", outsourcing: "F&F HR" },
  { cecha: "Kto odpowiada za wynik", tymczasowa: "Twoja firma", outsourcing: "F&F HR" },
  { cecha: "Czas trwania", tymczasowa: "do 18 miesięcy w okresie 36 miesięcy", outsourcing: "według umowy" },
];
