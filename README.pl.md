<div align="center">
  <h1>CarHub</h1>  
</div>

[![pl](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Karo1808/CarHub/blob/master/README.md)

### Opis

CarHub to aplikacja internetowa, która umożliwia użytkownikowi przeglądanie samochodów na podstawie różnych kryteriów. Zapewnia również szczegółowe informacje o wybranym pojeździe oraz obrazy z różnych kątów.

Aplikacja internetowa została zbudowana na podstawie [samouczka JavaScriptMastery](https://www.youtube.com/watch?v=pUNSHPyVryU&pp=ygUZamF2YXNjcmlwdCBtYXN0ZXJ5IGNhcmh1Yg%3D%3D)

### Link do strony:

[Strona internetowa](https://car-hub-karo.vercel.app/)

### Funkcje

- **Nowoczesny i przyjazny dla użytkownika interfejs:** Doświadczaj eleganckiego i intuicyjnego interfejsu zaprojektowanego dla bezproblemowej nawigacji i zwiększonego zaangażowania użytkownika.
- **Funkcjonalność wyszukiwania z autouzupełnianiem:** Szybko znajdź pożądane samochody dzięki intuicyjnemu polu wyszukiwania z sugestiami autouzupełniania, usprawniając proces przeglądania.
- **Funkcjonalność filtrowania według roku i rodzaju paliwa:** Łatwo doprecyzuj swoje wyszukiwanie samochodów na podstawie określonych kryteriów, takich jak rok produkcji i rodzaj paliwa, zapewniając spersonalizowane wyniki.
- **Kompleksowe szczegóły samochodu:** Uzyskaj szczegółowe informacje o każdym samochodzie, w tym specyfikacje, funkcje i wskazówki dotyczące wydajności, umożliwiając podejmowanie świadomych decyzji.
- **Rozległa galeria obrazów:** Przeglądaj samochody z każdego kąta dzięki bogatej kolekcji wysokiej jakości obrazów, zapewniając kompleksową ocenę designu i estetyki każdego pojazdu.
- **Funkcjonalność modalna dla szczegółów obrazu:** Zanurz się głębiej w obrazach samochodów za pomocą modalnych okien, które prezentują obrazy w większym formacie, umożliwiając zbliżenie i docenienie.
- **Funkcjonalność Pokaż Więcej:** Ciesz się nieprzerwanym przeglądaniem dzięki płynnej funkcji "Pokaż więcej", dynamicznie ładowującej dodatkowe treści podczas eksploracji, bez przerw.
- **W pełni responsywny design:** Łatwo dostęp do CarHuba na różnych urządzeniach i rozmiarach ekranu, zapewniając spójne i zoptymalizowane doświadczenie, czy przeglądasz na komputerze stacjonarnym, tablecie czy smartfonie.

### Użyte technologie

- **Next.js 13:** Framework React do budowania nowoczesnych aplikacji internetowych z SSR
- **React:** Biblioteka JavaScript do budowania interfejsów użytkownika.
- **Typescript:** Superset JavaScript dodający statyczne typowanie do języka.
- **Tailwind CSS:** Framework CSS służący do szybkiego tworzenia spersonalizwanego wyglądu strony.
- **Headless UI:** Biblioteka komponentów UI, która zapewnia niestylizowane, przystępne komponenty, które można stylizować za pomocą Tailwind CSS
- **Rapid API:** Wykorzystywane do pobierania szczegółów samochodu.
- **Imagin Studio API:** API dostarczające wysokiej jakości obrazy samochodów.

### Instalacja

Sklonuj repozytorium lokalnie

```bash
git clone https://github.com/Karo1808/CarHub.git
```

Zainstaluj wymagane zależności

```bash
npm install
```

Utwórz plik .env.local i dodaj następujące zmienne środowiskowe

```bash
# Imagin API KEY
API_KEY=
# RAPID API KEY
RAPID_API_KEY=
```

Uruchom stronę lokalnie

```bash
npm run dev
```
