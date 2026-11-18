# Rogue-like-Memory

**Repository:** https://github.com/NiklasSchafran/Rogue-like-Memory

## Projektidee

Rogue-like-Memory ist ein Memory-Spiel im Browser, das klassisches Kartenpaare-Suchen mit Elementen aus Rogue-like-Spielen verbindet. Jedes falsch aufgedeckte Paar kostet ein Leben, besiegte Monster werden in einer Sammlung freigeschaltet und geben dauerhafte Fähigkeiten. Gedacht ist das Spiel für Gelegenheitsspieler, die eine kurze Runde zwischendurch spielen wollen.

## Starten

Voraussetzung: Node.js (getestet mit Version 22).

```bash
npm install && npm run dev
```

Danach läuft die App unter http://localhost:5173. In Windows PowerShell 5.1 funktioniert `&&` nicht, dort `npm install` und `npm run dev` nacheinander ausführen.

## Kriterien-Zuordnung M2

| Kriterium | Datei | Zeile / Hinweis |
|---|---|---|
| Tooling: npm und Vite | package.json, vite.config.ts | Skripte `dev`, `build`, `lint`; Start siehe oben |
| TypeScript: eigene Datentypen | src/types.ts | Z. 1–11 `Monster`, Z. 13–17 `Karte` (Status nur `'verdeckt' \| 'offen' \| 'gefunden'`) |
| TypeScript: typisierte Props | src/components/MonsterKarte.tsx, src/components/SpielKarte.tsx | MonsterKarte Z. 4–6, SpielKarte Z. 3–6 (inkl. Funktionstyp `onKlick`) |
| TypeScript: typisierter State | src/pages/Sammlung.tsx, src/pages/Spiel.tsx | Sammlung Z. 6 `useState<Monster[]>`, Spiel Z. 26 `useState<Karte[]>` |
| Komponenten: Zerlegung | src/components/, src/pages/ | Header und Footer einmal in src/App.tsx Z. 14 und 24, gelten für alle Seiten |
| Komponenten: Daten über Props | src/pages/Sammlung.tsx, src/pages/Spiel.tsx | Sammlung Z. 25 `monster={m}`, Spiel Z. 77 `karte={karte}` und `onKlick={aufdecken}` |
| `useState` | src/pages/Start.tsx, src/pages/Spiel.tsx | Start Z. 5 (kontrolliertes Formularfeld), Spiel Z. 26–27 (Karten und Leben) |
| `useEffect` | src/pages/Sammlung.tsx, src/pages/MonsterDetail.tsx | Sammlung Z. 8–14, MonsterDetail Z. 9–15: lädt `public/monster.json` per `fetch` |
| Durchgängige Nutzeraktion | src/pages/Start.tsx, src/pages/Spiel.tsx | Name eingeben → Spielseite (Start Z. 8–12); Memory spielen: aufdecken, vergleichen, Leben verlieren, Gewonnen/Game Over, Neustart (Spiel Z. 33–59) |
| React Router: Einrichtung | src/main.tsx | Z. 9–11 `BrowserRouter` |
| React Router: Routen | src/App.tsx | Z. 17–21, fünf Routen inkl. Formular (`/`), Übersicht (`/sammlung`) und Detail (`/sammlung/:id`) |
| React Router: Navigation | src/components/Header.tsx, src/pages/MonsterDetail.tsx | Header Z. 7–10 `NavLink`, MonsterDetail Z. 6 `useParams` |

## Routen

| Pfad | Seite |
|---|---|
| `/` | Startseite mit Formular für den Spielernamen |
| `/spiel` | Memory-Spielfeld mit Leben-Anzeige |
| `/sammlung` | Übersicht aller Monster, gesperrte mit „?“ |
| `/sammlung/:id` | Detailseite eines Monsters, z. B. `/sammlung/fledermaus` |
| `/regeln` | Spielregeln |
| `/monster.json` | Monster-Daten (statische Datei aus `public/`) |

## Projektstruktur

```
src/
  main.tsx         Einstieg, Router
  App.tsx          Layout und Routen
  types.ts         TypeScript-Typen
  components/      Header, Footer, MonsterKarte, SpielKarte
  pages/           Start, Spiel, Sammlung, MonsterDetail, Regeln
public/
  monster.json     Monster-Daten
prototyp/          HTML/CSS-Prototyp aus M1
```

Der Abgabestand von M1 ist mit dem Tag `Meilenstein-1` markiert, der von M2 mit `Meilenstein-2`. Git erlaubt keine Leerzeichen in Tag-Namen, daher der Bindestrich.
