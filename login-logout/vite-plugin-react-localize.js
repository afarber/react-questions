"use strict";

import fs from "fs";
import path from "path";

const localizedStrings = {
  en: {
    __YES__: "Yes",
    __NO__: "No",
    __CANCEL__: "Cancel",
    __GAME__: "Game",
    __START_NEW_GAME__: "Start new game",
    __USE_DARK_THEME__: "Use dark theme",
    __USE_LEFT_MENU__: "Use left menu",
    __HINT__: "A game hint to do this and that...",
    __BACK__: "Back to the games list",
  },
  de: {
    __YES__: "Ja",
    __NO__: "Nein",
    __CANCEL__: "Abbrechen",
    __GAME__: "Spiel",
    __START_NEW_GAME__: "Neues Spiel starten",
    __USE_DARK_THEME__: "Dunkelmodus aktivieren",
    __USE_LEFT_MENU__: "Benutzen Sie das Menü auf der linken Seite",
    __HINT__: "Ein Spieltipp, um dies und das zu tun...",
    __BACK__: "Zurück zur Spieleliste",
  },
  fr: {
    __YES__: "Oui",
    __NO__: "Non",
    __CANCEL__: "Annuler",
    __GAME__: "Jeu",
    __START_NEW_GAME__: "Démarrer une nouvelle partie",
    __USE_DARK_THEME__: "Utiliser le mode sombre",
    __USE_LEFT_MENU__: "Utilisez le menu de gauche",
    __HINT__: "Une astuce de jeu pour faire ceci et cela...",
    __BACK__: "Retour à la liste des jeux",
  },
};

function replacePlacesholders(src, lang) {
  return src.replaceAll(/__[_A-Z]+__/g, function (match) {
    return localizedStrings[lang][match] || match;
  });
}

export default function localize(isBuildingBundle) {
  return {
    name: "localize-plugin",
    transform(src, id) {
      // replace placeholders in .jsx files, when not building the bundle
      return id.endsWith(".jsx") && !isBuildingBundle
        ? replacePlacesholders(src, "de")
        : src;
    },
    generateBundle(outputOptions, bundle) {
      for (const [fileName, bundleValue] of Object.entries(bundle)) {
        if (!fileName.endsWith("index.js")) {
          continue;
        }
        const indexJsPath = path.resolve(outputOptions.dir, fileName);
        console.log("\nReplacing placeholders in", indexJsPath);

        // create index-XX.js file for each language, in the same folder as index.js
        for (const lang of Object.keys(localizedStrings)) {
          const indexLangPath = path.resolve(
            outputOptions.dir,
            `index-${lang}.js`
          );
          console.log("Creating localized file", indexLangPath);
          fs.writeFileSync(
            indexLangPath,
            replacePlacesholders(bundleValue.code, lang)
          );
        }
      }
    },
  };
}
