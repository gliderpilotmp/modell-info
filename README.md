# Modell-Info

Handy-App (PWA) mit den Daten meiner RC-Modelle für den Flugplatz: Specs, Settings, DPSI, ESC und T70 Voltario auf einen Blick. Kopf und Kapitelmenü bleiben fix, jede Seite zeigt nur ihr Kapitel. Funktioniert nach dem ersten Öffnen auch offline.

## Modell hinzufügen oder ändern

Alle Daten stehen in `models.js`. Pro Modell ein Objekt mit `pages` (Menüpunkte) aus Blöcken (Wertetabelle, Ruderausschläge, Tabelle, Schritte, Hinweis). Fotos kommen nach `img/`. Danach in `sw.js` die `VERSION` erhöhen und neue Fotos in `ASSETS` eintragen.

## Installation

- Android (Chrome): Menü → „App installieren“
- iOS (Safari): Teilen → „Zum Home-Bildschirm“
