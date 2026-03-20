# Eventlocation MVP (Beispiel)

Dieses Projekt ist eine statische Demo-Website fuer eine Eventlocation.
Alle Inhalte sind Beispieltexte und muessen fuer den Produktiveinsatz angepasst sowie rechtlich geprueft werden.

## Enthalten

- Moderne responsive Startseite
- Interaktive Bereiche: Mobile Navigation, FAQ-Akkordeon, Galerie-Lightbox, Anfrageformular
- Rechtliche Musterseiten auf Deutsch:
  - Impressum
  - Datenschutz
  - Erklaerung zur Barrierefreiheit
- SVG-Beispielgrafiken lokal im Projekt

## Lokal starten

1. Datei `index.html` direkt im Browser oeffnen
2. Optional fuer Smartphone-Test im gleichen WLAN einen lokalen Server starten:
   - Doppelklick auf `start-preview.bat`
   - Ausgabe im Terminal zeigt die lokale IP
   - Auf dem Smartphone `http://IP-ADRESSE:8000` aufrufen

## Hinweis

Diese Demo ist als MVP fuer Kundenpraesentationen gedacht.

## Oeffentliche Demo-URL (kostenlos)

Die automatische Deployment-Konfiguration fuer GitHub Pages liegt in
[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

Kurzanleitung:

1. Public Repository auf GitHub erstellen
2. Projekt pushen
3. In GitHub unter Settings > Pages als Source `GitHub Actions` waehlen

Danach ist die Seite unter einer URL wie
`https://DEIN-USERNAME.github.io/eventlocation-mvp/` erreichbar.

Details stehen in [PUBLISH_GITHUB_PAGES.md](PUBLISH_GITHUB_PAGES.md).
