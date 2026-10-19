// Samochody F&F LEASE do najmu okazjonalnego. Identyfikator łączy auto
// z jego rezerwacjami w public/rezerwacje.json.
export type Zdjecie = {
  plik: string; // ścieżka w public/
  alt: string;
  autor: string;
  licencja: string;
  licencjaUrl: string;
  zrodlo: string; // strona pliku w Wikimedia Commons
};

export type Opis = {
  lead: string;
  wstep: string;
  parametry: { nazwa: string; wartosc: string }[];
  historia: string[];
  zalety: { tytul: string; tekst: string }[];
};

export type Auto = {
  id: string;
  nazwa: string;
  rok: number | null;
  kolor: string;
  nadwozie: "coupe" | "suv";
  lakier: string;
  dach?: string;
  // Pierwsze zdjęcie to miniaturka na liście aut; wszystkie trafiają do galerii na stronie auta.
  zdjecia?: Zdjecie[];
  // Auto z opisem dostaje własną stronę /lease/<id>/.
  opis?: Opis;
};

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/deed.pl";
const LC = "/flota/lexus-lc500";

const lexusLc500: Pick<Auto, "zdjecia" | "opis"> = {
  zdjecia: [
    { plik: `${LC}/lc500-przod.webp`, alt: "Czerwony Lexus LC 500 z przodu, w ujęciu trzy czwarte", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC_500_URZ100_Radiant_Red_Contrast_Layering_01.jpg" },
    { plik: `${LC}/lc500-przod-2.webp`, alt: "Czerwony Lexus LC 500 z przodu, z drugiej strony", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC_500_URZ100_Radiant_Red_Contrast_Layering.jpg" },
    { plik: `${LC}/lc500-tyl.webp`, alt: "Czerwony Lexus LC 500 od tyłu", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC_500_URZ100_Radiant_Red_Contrast_Layering_02.jpg" },
    { plik: `${LC}/lc500-wnetrze.webp`, alt: "Wnętrze Lexusa LC z beżową tapicerką (na zdjęciu wersja kabriolet)", autor: "Alexander Migl", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC_Convertible_Auto_Zuerich_2021_IMG_0506.jpg" },
    { plik: `${LC}/lc500-salon-przod.webp`, alt: "Czerwony Lexus LC 500 z boku i z przodu, na wystawie", autor: "Kevauto", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC500_front_red_4.2.18.jpg" },
    { plik: `${LC}/lc500-salon-tyl.webp`, alt: "Czerwony Lexus LC 500 od tyłu, na wystawie", autor: "Kevauto", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_LC500_rear_red_4.2.18.jpg" },
  ],
  opis: {
    lead: "Czerwone coupé Gran Turismo z wolnossącym V8 i beżowym wnętrzem. Rocznik 2018, do najmu okazjonalnego od jednej doby.",
    wstep:
      "LC 500 to flagowe coupé Lexusa: dwudrzwiowy samochód w układzie 2+2 z silnikiem z przodu i napędem na tylne koła. Łączy osiągi auta sportowego z komfortem samochodu na długą trasę, a nasz egzemplarz ma czerwony lakier i beżową tapicerkę.",
    parametry: [
      { nazwa: "Silnik", wartosc: "V8 5,0 l (4969 cm³), wolnossący" },
      { nazwa: "Moc", wartosc: "477 KM (351 kW) przy 7100 obr./min" },
      { nazwa: "Moment obrotowy", wartosc: "540 Nm przy 4800 obr./min" },
      { nazwa: "Skrzynia biegów", wartosc: "automatyczna, 10-biegowa" },
      { nazwa: "Napęd", wartosc: "na tylne koła" },
      { nazwa: "0–100 km/h", wartosc: "4,7 s" },
      { nazwa: "Prędkość maksymalna", wartosc: "270 km/h" },
      { nazwa: "Masa własna", wartosc: "ok. 1935 kg" },
      { nazwa: "Długość / szerokość / wysokość", wartosc: "4770 / 1920 / 1345 mm" },
      { nazwa: "Rozstaw osi", wartosc: "2870 mm" },
      { nazwa: "Bagażnik", wartosc: "197 l" },
      { nazwa: "Miejsca", wartosc: "4 (układ 2+2)" },
      { nazwa: "Rocznik", wartosc: "2018" },
      { nazwa: "Lakier / wnętrze", wartosc: "czerwony / beżowa tapicerka" },
    ],
    historia: [
      "Historia LC zaczęła się od studium LF-LC, które Lexus pokazał na salonie w Detroit w 2012 roku. Prototyp przyjęto tak dobrze, że marka postanowiła zbudować wersję seryjną, która zachowa jak najwięcej z jego sylwetki. Produkcyjny LC 500 zadebiutował w styczniu 2016 roku, również w Detroit, a do klientów trafił w 2017 roku.",
      "LC był pierwszym Lexusem zbudowanym na nowej płycie podłogowej GA-L z napędem na tylne koła. W nadwoziu połączono stal o wysokiej wytrzymałości, aluminium i włókno węglowe. Samochód powstaje w zakładzie Motomachi w Japonii, w miejscu, gdzie wcześniej ręcznie budowano supersamochód Lexus LFA. Przy LC pracują ci sami rzemieślnicy takumi, którzy odpowiadają między innymi za skórę wnętrza i lakier.",
      "Lexus zapowiedział zakończenie produkcji LC 500 w 2026 roku. Model pozostanie jednym z ostatnich dużych coupé z wolnossącym silnikiem V8.",
    ],
    zalety: [
      { tytul: "Sylwetka", tekst: "Wersja seryjna wygląda niemal jak prototyp z 2012 roku. Długa maska, niska linia dachu i charakterystyczne tylne lampy sprawiają, że LC jest uznawany za jedno z najładniejszych coupé swojej epoki i był nagradzany za design." },
      { tytul: "Silnik V8 i jego brzmienie", tekst: "Wolnossący V8 kręci się ponad 7000 obr./min i reaguje na gaz natychmiast. Recenzenci zgodnie wskazują jego dźwięk jako największą atrakcję auta, rzadką w czasach silników z turbodoładowaniem." },
      { tytul: "Wykończenie wnętrza", tekst: "Skóra, przeszycia i detale kabiny są wykonywane ręcznie. Testujący chwalą jakość materiałów i wygodne fotele." },
      { tytul: "Komfort w trasie", tekst: "Kabina jest dobrze wyciszona, a auto pozostaje stabilne przy wysokich prędkościach. To samochód typu Gran Turismo: szybki, ale przede wszystkim przyjemny na długich dystansach." },
    ],
  },
};

const CC_BY_4 = "https://creativecommons.org/licenses/by/4.0/deed.pl";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/deed.pl";
const RX = "/flota/lexus-rx350";

const lexusRx350h: Pick<Auto, "zdjecia" | "opis"> = {
  zdjecia: [
    { plik: `${RX}/rx-przod.webp`, alt: "Lexus RX 350h w kolorze Sonic Copper z przodu", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:2024_Lexus_RX_350h_Premier_AWD_in_Sonic_Copper,_front_left.jpg" },
    { plik: `${RX}/rx-salon.webp`, alt: "Miedziany Lexus RX na wystawie, z przodu", autor: "Corqe", licencja: "CC0 1.0", licencjaUrl: CC0, zrodlo: "https://commons.wikimedia.org/wiki/File:2023_Denver_Auto_Show_Lexus_RX_front_quarter.jpg" },
    { plik: `${RX}/rx-przod-2.webp`, alt: "Miedziany Lexus RX 350h z przodu, z drugiej strony", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_RX_350h_AWD_AALH15_Executive_Sonic_Copper_01.jpg" },
    { plik: `${RX}/rx-tyl.webp`, alt: "Miedziany Lexus RX 350h od tyłu", autor: "Ethan Llamas", licencja: "CC BY-SA 4.0", licencjaUrl: CC_BY_SA_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_RX_350h_AWD_AALH15_Executive_Sonic_Copper_02.jpg" },
    { plik: `${RX}/rx-tyl-2.webp`, alt: "Miedziany Lexus RX 350h od tyłu, na ulicy", autor: "4300streetcar", licencja: "CC BY 4.0", licencjaUrl: CC_BY_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_RX350h_rear.jpg" },
    { plik: `${RX}/rx-gora.webp`, alt: "Miedziany Lexus RX 350h widziany z góry", autor: "OWS Photography", licencja: "CC BY 4.0", licencjaUrl: CC_BY_4, zrodlo: "https://commons.wikimedia.org/wiki/File:Lexus_RX350h_(ALA10)_Washington_DC_Metro_Area,_USA_(1).jpg" },
  ],
  opis: {
    lead: "Miedziany SUV klasy premium z napędem hybrydowym i brązowymi skórami. Rocznik 2023, wersja Omotenashi.",
    wstep:
      "RX 350h to hybrydowy SUV piątej generacji Lexusa RX: pięć miejsc, napęd na cztery koła i bagażnik o pojemności 612 litrów. Nasz egzemplarz to najwyżej wyposażona wersja Omotenashi w kolorze miedzianym, z brązową skórzaną tapicerką.",
    parametry: [
      { nazwa: "Napęd", wartosc: "hybrydowy: benzynowy 2,5 l i silniki elektryczne" },
      { nazwa: "Moc systemowa", wartosc: "250 KM (184 kW)" },
      { nazwa: "Skrzynia biegów", wartosc: "automatyczna, bezstopniowa (e-CVT)" },
      { nazwa: "Napęd kół", wartosc: "na cztery koła (E-Four)" },
      { nazwa: "0–100 km/h", wartosc: "7,9 s" },
      { nazwa: "Prędkość maksymalna", wartosc: "200 km/h" },
      { nazwa: "Zużycie paliwa (WLTP)", wartosc: "6,3–6,6 l/100 km" },
      { nazwa: "Zbiornik paliwa", wartosc: "65 l" },
      { nazwa: "Masa własna", wartosc: "od 1965 kg" },
      { nazwa: "Długość / szerokość / wysokość", wartosc: "4890 / 1920 / 1695 mm" },
      { nazwa: "Rozstaw osi", wartosc: "2850 mm" },
      { nazwa: "Bagażnik", wartosc: "612 l" },
      { nazwa: "Miejsca", wartosc: "5" },
      { nazwa: "Rocznik / wersja", wartosc: "2023 / Omotenashi" },
      { nazwa: "Lakier / wnętrze", wartosc: "miedziany / brązowa skóra" },
    ],
    historia: [
      "Pierwszy Lexus RX trafił do sprzedaży w 1998 roku i jest uznawany za pierwszego luksusowego crossovera: połączył komfort limuzyny z wyższą pozycją za kierownicą i praktycznością SUV-a. Szybko stał się jednym z najlepiej sprzedających się modeli marki.",
      "W 2005 roku RX 400h jako pierwszy samochód klasy premium na rynku dostał napęd hybrydowy. Od tego czasu hybryda jest znakiem rozpoznawczym RX-a i całego Lexusa.",
      "Piąta generacja zadebiutowała w 2022 roku. Zbudowano ją na nowej płycie podłogowej GA-K: auto jest lżejsze od poprzednika o około 90 kg, ma dłuższy rozstaw osi przy tej samej długości nadwozia i niższą sylwetkę.",
    ],
    zalety: [
      { tytul: "Cisza i komfort", tekst: "Recenzenci zgodnie podkreślają, że RX jest bardzo cichy i jedzie miękko, a jednocześnie pewnie. W trybie elektrycznym przy małych prędkościach porusza się niemal bezgłośnie." },
      { tytul: "Niskie spalanie", tekst: "Jak na duży SUV z napędem na cztery koła hybryda zużywa mało paliwa. W teście Auto Świata średni wynik wyniósł około 6,5 l/100 km, a w mieście jeszcze mniej." },
      { tytul: "Jakość wnętrza", tekst: "Testujący wysoko oceniają materiały i staranność wykończenia kabiny. Wersja Omotenashi dodaje miękką skórę półanilinową i system audio Mark Levinson." },
      { tytul: "Praktyczność", tekst: "Bagażnik o pojemności 612 litrów sprawia, że RX dobrze sprawdza się w podróży z rodziną lub z bagażem na dłuższy wyjazd." },
    ],
  },
};

export const flota: Auto[] = [
  { id: "lexus-lc500", nazwa: "Lexus LC 500", rok: 2018, kolor: "czerwony", nadwozie: "coupe", lakier: "#A3141E", ...lexusLc500 },
  { id: "lexus-rx350", nazwa: "Lexus RX 350h", rok: 2023, kolor: "miedziany", nadwozie: "suv", lakier: "#9A5B3A", ...lexusRx350h },
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
