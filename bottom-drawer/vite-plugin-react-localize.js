"use strict";

import fs from "fs";
import path from "path";

const localizedStrings = {
  en: {
    __SELECT_BOARD__: "Select the new game board",
    __WINTER__: "Winter",
    __SPRING__: "Spring",
    __SUMMER__: "Summer",
    __AUTUMN__: "Autumn",
  },
  de: {
    __SELECT_BOARD__: "Wählen Sie das neue Spielbrett",
    __WINTER__: "Winter",
    __SPRING__: "Frühling",
    __SUMMER__: "Sommer",
    __AUTUMN__: "Herbst",
  },
  fr: {
    __SELECT_BOARD__: "Sélectionnez le nouveau plateau de jeu",
    __WINTER__: "Hiver",
    __SPRING__: "Printemps",
    __SUMMER__: "Été",
    __AUTUMN__: "Automne",
  },
  nl: {
    __SELECT_BOARD__: "Selecteer het nieuwe spelbord",
    __WINTER__: "Winter",
    __SPRING__: "Lente",
    __SUMMER__: "Zomer",
    __AUTUMN__: "Herfst",
  },
  pl: {
    __SELECT_BOARD__: "Wybierz nową planszę do gry",
    __WINTER__: "Zima",
    __SPRING__: "Wiosna",
    __SUMMER__: "Lato",
    __AUTUMN__: "Jesień",
  },
  ru: {
    __SELECT_BOARD__: "Выберите новую игровую доску",
    __WINTER__: "Зима",
    __SPRING__: "Весна",
    __SUMMER__: "Лето",
    __AUTUMN__: "Осень",
  },
};

function replacePlacesholders(src, lang) {
  return src.replaceAll(/__[A-Z]+__/g, function (match) {
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
