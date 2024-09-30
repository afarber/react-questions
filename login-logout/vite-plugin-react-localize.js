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
  },
  de: {
    __YES__: "Ja",
    __NO__: "Nein",
    __CANCEL__: "Abbrechen",
    __GAME__: "Spiel",
    __START_NEW_GAME__: "Neues Spiel starten",
    __USE_DARK_THEME__: "Dunkelmodus aktivieren",
    __USE_LEFT_MENU__: "Benutzen Sie das Menü auf der linken Seite",
  },
  fr: {
    __YES__: "Oui",
    __NO__: "Non",
    __CANCEL__: "Annuler",
    __GAME__: "Jeu",
    __START_NEW_GAME__: "Démarrer une nouvelle partie",
    __USE_DARK_THEME__: "Utiliser le mode sombre",
    __USE_LEFT_MENU__: "Utilisez le menu de gauche",
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
