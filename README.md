# Rogue-like-Memory

**Repository:** https://github.com/NiklasSchafran/Rogue-like-Memory

## Projektidee

Rogue-like-Memory ist ein Memory-Spiel im Browser, das klassisches Kartenpaare-Suchen mit Elementen aus Rogue-like-Spielen verbindet. Jedes falsch aufgedeckte Paar kostet ein Leben, und mit jedem geschafften Level wird das Spielfeld schwieriger. Sind alle Leben verbraucht, endet der Run und man beginnt von vorne. Gedacht ist das Spiel für Gelegenheitsspieler, die eine kurze Runde zwischendurch spielen wollen.

## Kriterien-Zuordnung M1

| Kriterium | Datei | Zeile / Hinweis |
|---|---|---|
| Semantische Struktur: `<header>`, `<nav>` | index.html | Z. 10–14 |
| Semantische Struktur: `<main>`, `<section>` | index.html | Z. 16–26 |
| Semantische Struktur: `<article>` | regeln.html | Z. 19–42 (je Regel ein `<article>`) |
| Semantische Struktur: `<footer>` | index.html | Z. 27–29 |
| Formular mit `<label for>` und `name` | index.html | Z. 19–24 |
| Responsives Layout: Grid | styles.css | Z. 16–22 (Spielfeld `.Memoryfeld`) |
| Responsives Layout: Flexbox | styles.css | Z. 53–58 (`.main-index`), Z. 68–76 (`body`), Z. 82–87 (`header`), Z. 103–110 (`.regeln`) |
| Konsistente Farben und Typografie | styles.css | Z. 3–14 (Farben und Schrift als Variablen in `:root`) |
| Media Query | styles.css | Z. 135–153 (`max-width: 600px`) |
| URL-Struktur | index.html, regeln.html, spiel.html | siehe unten |

## URL-Struktur

| Pfad | Ressource |
|---|---|
| `/` bzw. `/index.html` | Startseite mit Formular zum Spielstart |
| `/regeln.html` | Spielregeln |
| `/spiel.html` | Spielfeld, das Formular sendet den Namen per GET dorthin (`/spiel.html?name=...`) |
| `/styles.css` | Gemeinsames Stylesheet für alle Seiten |
