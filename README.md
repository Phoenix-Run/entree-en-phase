# Entrée en Phase

*English below.*

Outil expérimental d'exploration sonore par battements binauraux, qui fonctionne dans le navigateur et s'installe comme une application.

**Ouvrir l'application : https://phoenix-run.github.io/entree-en-phase/**

**Aucun résultat n'est promis :** les effets dépendent de la sensibilité de chacun.

**Précautions :** déconseillé aux personnes sujettes à l'épilepsie photosensible ou auditive. En cas de doute, demandez un avis médical. Ne jamais utiliser en conduisant.

Le mode d'emploi complet est dans [manuel.pdf](manuel.pdf).

## Installer sur un téléphone

1. Ouvrez l'adresse directement dans votre navigateur, avec du réseau, et non depuis WhatsApp ou une autre application.
2. Touchez « Installer l'application » en haut de la page, ou cherchez cette option ou « Ajouter à l'écran d'accueil » dans le menu du navigateur.
3. L'application fonctionne ensuite sans réseau.

L'installation et le hors ligne ont été vérifiés sur Edge pour ordinateur. Le son écran éteint a été essayé sur un seul téléphone Android, avec une version précédente. Sur un autre appareil ou un autre navigateur, faites un essai écran éteint avant de vous y fier. Sur iPhone, le son peut s'arrêter quand l'écran se verrouille.

## Réglages personnels

Les profils restent dans le navigateur de l'appareil et ne sont jamais envoyés. Ils sont communs au français et à l'anglais. Exportez-les depuis la section « Profils de réglages » pour en garder une copie.

## Publier une nouvelle version

Changez `CACHE_NAME` dans `service-worker.js`. La nouvelle version s'installe une fois toutes les fenêtres de l'application fermées, jamais pendant une session.

## Crédits

Le code est distribué sous licence MIT : voir [LICENSE](LICENSE).

Les polices Inter et JetBrains Mono sont distribuées sous licence SIL Open Font License : voir [fonts/OFL-Inter.txt](fonts/OFL-Inter.txt) et [fonts/OFL-JetBrainsMono.txt](fonts/OFL-JetBrainsMono.txt).

---

# Phase Entry (English)

Experimental tool for sound exploration with binaural beats. It runs in the browser and installs as an application.

**Open the application: https://phoenix-run.github.io/entree-en-phase/en/**

**No result is promised:** effects depend on each person's sensitivity.

**Precautions:** not recommended for people prone to photosensitive or auditory epilepsy. If in doubt, ask for medical advice. Never use while driving.

The full guide is in [en/manual.pdf](en/manual.pdf).

## Install on a phone

1. Open the address directly in your browser, with a network connection, and not from WhatsApp or another app.
2. Tap "Install the app" at the top of the page, or look for this option or "Add to Home screen" in the browser menu.
3. The application then works without a network.

Installation and offline use were checked on desktop Edge. Screen-off sound was tried on one Android phone only, with a previous version. On another device or browser, run a screen-off test before relying on it. On iPhone, the sound may stop when the screen locks.

## Personal settings

Profiles stay in the device's browser and are never sent anywhere. They are shared between French and English. Export them from the "Settings profiles" section to keep a copy.
