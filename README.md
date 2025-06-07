# Countdown Website

Een eenvoudige aftelpagina die toont hoeveel tijd er nog is tot 1 september 2025, wanneer jullie samen op kot gaan.

## Functionaliteiten

- Toont de resterende dagen, uren, minuten en seconden tot 1 september 2025
- Responsief ontwerp dat werkt op zowel desktop als mobiele apparaten
- Automatische update elke seconde
- Speciale boodschap wanneer de datum bereikt is
- Werkt zowel in de browser als in Node.js omgevingen

## Installatie

1. Zorg ervoor dat je [Node.js](https://nodejs.org/) geïnstalleerd hebt
2. Clone deze repository
3. Installeer de dependencies:

```bash
npm install
```

## Gebruik

### Website lokaal starten

Om de website lokaal te starten:

```bash
npm start
```

Dit zal de TypeScript code compileren en een lokale server starten. Open je browser en ga naar de URL die getoond wordt in de terminal (meestal http://localhost:5000).

### Direct uitvoeren met Node.js

Je kunt de countdown ook direct in de terminal bekijken door het gecompileerde bestand uit te voeren met Node.js:

```bash
npm run build
node dist/index.js
```

Dit toont de huidige countdown in de terminal zonder dat je een browser nodig hebt.

## Aanpassen

Als je de doeldatum wilt aanpassen, kun je dit doen in het bestand `src/index.ts`:

```typescript
// Verander deze datum naar de gewenste doeldatum
const targetDate = new Date('2025-09-01T00:00:00');
```

Na het aanpassen, bouw het project opnieuw:

```bash
npm run build
```

## Technologieën

- HTML5
- CSS3 (met geavanceerde animaties)
- TypeScript
- Node.js

## Projectstructuur

Het project is opgebouwd uit de volgende bestanden:

- `index.html`: De hoofdpagina van de website
- `src/index.ts`: De hoofdcode voor de countdown functionaliteit
- `src/animations.ts`: Code voor animaties en visuele effecten
- `src/styles.css`: Alle styling voor de website
- `dist/`: Map met gecompileerde bestanden (wordt automatisch gegenereerd)
- `.github/workflows/deploy.yml`: Configuratie voor automatische deployment naar GitHub Pages
- `.nojekyll`: Leeg bestand dat voorkomt dat GitHub Pages de site verwerkt met Jekyll

## Deployment naar GitHub Pages

Deze website kan automatisch worden gedeployed naar GitHub Pages wanneer je wijzigingen pusht naar de main branch. Volg deze stappen om dit in te stellen:

1. Push je code naar een GitHub repository
2. Ga naar je repository op GitHub
3. Ga naar "Settings" > "Pages"
4. Bij "Source", selecteer "GitHub Actions"
5. Ga naar "Settings" > "Actions" > "General"
6. Onder "Workflow permissions", selecteer "Read and write permissions" en sla de wijzigingen op
7. De eerste keer dat je naar de main branch pusht, zal GitHub Actions automatisch de website bouwen en deployen
8. Na enkele minuten zal je website beschikbaar zijn op `https://[jouw-gebruikersnaam].github.io/[repository-naam]/`

De workflow is al geconfigureerd in het bestand `.github/workflows/deploy.yml` en zal automatisch worden uitgevoerd wanneer je wijzigingen pusht naar de main branch. De workflow heeft schrijfrechten nodig om naar de gh-pages branch te kunnen pushen.

### Troubleshooting GitHub Pages

Als je website niet verschijnt na het deployen, controleer dan het volgende:

1. Zorg ervoor dat er een `.nojekyll` bestand aanwezig is in de repository. Dit bestand voorkomt dat GitHub Pages de site verwerkt met Jekyll, wat problemen kan veroorzaken met JavaScript modules.

2. Controleer de GitHub Actions workflow logs om te zien of de deployment succesvol was:
   - Ga naar de "Actions" tab in je repository
   - Klik op de laatste workflow run
   - Controleer of alle stappen succesvol zijn afgerond

3. Controleer de GitHub Pages instellingen:
   - Ga naar "Settings" > "Pages"
   - Controleer of de bron is ingesteld op "GitHub Actions"
   - Als er een foutmelding is, volg dan de instructies om het probleem op te lossen

4. Het kan tot 10 minuten duren voordat wijzigingen zichtbaar zijn op GitHub Pages, zelfs na een succesvolle deployment. Wees geduldig en ververs de pagina na enkele minuten.
