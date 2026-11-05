# Entrée en Phase

Outil expérimental d'exploration sonore par battements binauraux, qui fonctionne dans le navigateur et s'installe comme une application.

**Aucun résultat n'est promis :** les effets dépendent de la sensibilité de chacun.

**Précautions :** déconseillé aux personnes sujettes à l'épilepsie photosensible ou auditive. En cas de doute, demandez un avis médical. Ne jamais utiliser en conduisant.

Le mode d'emploi complet est dans [manuel.pdf](manuel.pdf).

## Installer sur un téléphone Android

1. Ouvrez l'adresse de la page dans Chrome, avec du réseau.
2. Dans le menu de Chrome, choisissez « Installer l'application » ou « Ajouter à l'écran d'accueil ».
3. L'application fonctionne ensuite sans réseau.

Elle a été essayée sur un seul téléphone Android. Sur un autre appareil, faites un essai écran éteint avant de vous y fier. Sur iPhone, le son peut s'arrêter quand l'écran se verrouille.

## Réglages personnels

Les profils restent dans le navigateur de l'appareil et ne sont jamais envoyés. Exportez-les depuis « Réglages avancés » pour en garder une copie.

## Publier sur GitHub Pages

1. Déposez le contenu de ce dossier à la racine d'un dépôt GitHub.
2. Dans le dépôt, ouvrez Settings, puis Pages.
3. Sous « Branch », choisissez `main` et le dossier `/ (root)`, puis enregistrez.

Pour chaque nouvelle version, changez `CACHE_NAME` dans `service-worker.js`.

## Crédits

La police DM Sans est distribuée sous licence SIL Open Font License : voir [fonts/OFL.txt](fonts/OFL.txt).

Le code est distribué sous licence MIT : voir [LICENSE](LICENSE).
