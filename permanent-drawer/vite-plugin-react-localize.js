"use strict";

import fs from "fs";
import path from "path";

const localizedStrings = {
  en: {
    __YES__: "Yes",
    __NO__: "No",
    __CANCEL__: "Cancel",
    __NEW_GAME__: "New game",
    __STATS__: "Statistics",
    __RATING__: "Rating",
  },
  de: {
    __YES__: "Ja",
    __NO__: "Nein",
    __CANCEL__: "Abbrechen",
    __NEW_GAME__: "Neues Spiel",
    __STATS__: "Statistik",
    __RATING__: "Top",
  },
  fr: {
    __YES__: "Oui",
    __NO__: "Non",
    __CANCEL__: "Annuler",
    __NEW_GAME__: "Nouveau jeu",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  nl: {
    __YES__: "Ja",
    __NO__: "Nee",
    __CANCEL__: "Annuleren",
    __NEW_GAME__: "Nieuw spel",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  pl: {
    __YES__: "Tak",
    __NO__: "Nie",
    __CANCEL__: "Anuluj",
    __NEW_GAME__: "Nowa gra",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  ru: {
    __YES__: "Да",
    __NO__: "Нет",
    __CANCEL__: "Отмена",
    __NEW_GAME__: "Новая игра",
    __STATS__: "Статистика",
    __RATING__: "Рейтинг",
  },
};

export default function localize() {
  return {
    name: "localize-plugin",
    generateBundle(outputOptions, bundle) {
      for (const [fileName, bundleValue] of Object.entries(bundle)) {
        if (!fileName.endsWith("index.js")) {
          continue;
        }
        const indexJsPath = path.resolve(outputOptions.dir, fileName);
        console.log("\nReplacing placeholders in", indexJsPath);

        for (const lang of Object.keys(localizedStrings)) {
          const indexLangPath = path.resolve(
            outputOptions.dir,
            `index-${lang}.js`
          );
          console.log("Creating localized file", indexLangPath);
          const replacedContent = bundleValue.code.replaceAll(
            /__[A-Z_]+?__/g,
            function (match) {
              return localizedStrings[lang][match] || match;
            }
          );
          fs.writeFileSync(indexLangPath, replacedContent);
        }
      }
    },
  };
}
