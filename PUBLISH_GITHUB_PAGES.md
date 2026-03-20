# Oeffentliche Demo-URL mit GitHub Pages

Diese Konfiguration ist bereits im Projekt vorbereitet.

## 1. Neues Repository erstellen

- Auf GitHub: New Repository
- Name z. B. `eventlocation-mvp`
- Public auswaehlen
- Repository erstellen

## 2. Projekt hochladen

Im Projektordner ausfuehren:

```bash
git init
git add .
git commit -m "Initial MVP website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/eventlocation-mvp.git
git push -u origin main
```

## 3. GitHub Pages aktivieren

- GitHub Repository > Settings > Pages
- Unter Build and deployment bei Source: `Deploy from a branch`
- Branch: `gh-pages` und Folder: `/ (root)`

Danach deployt das Projekt automatisch bei jedem Push auf `main` auf den Branch `gh-pages`.

## 4. Demo-URL

Die URL ist normalerweise:

`https://DEIN-USERNAME.github.io/eventlocation-mvp/`

Wenn der Deploy fertig ist, findest du die exakte URL auch unter:

- Repository > Actions (Workflow `Deploy Static Site to GitHub Pages`)
- oder unter Settings > Pages

## 5. Kundin schicken

Schicke einfach nur die fertige URL.
