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
    __WORD_SEARCH__: "Word search",
    __TWO_LETTERS__: "2 letters",
    __THREE_LETTERS__: "3 letters",
    __RARE_ONE__: "Letter Q",
    __RARE_TWO__: "Letter Z",
    __SETTINGS__: "Settings",
    __HELP__: "Help",
    __PRIVACY_POLICY__: "Privacy policy",
    __TERMS_OF_SERVICE__: "Terms of service",
    __IMPRINT__: "Imprint",
  },
  de: {
    __YES__: "Ja",
    __NO__: "Nein",
    __CANCEL__: "Abbrechen",
    __NEW_GAME__: "Neues Spiel",
    __STATS__: "Statistik",
    __RATING__: "Top",
    __WORD_SEARCH__: "Wortsuche",
    __TWO_LETTERS__: "2 Buchstaben",
    __THREE_LETTERS__: "3 Buchstaben",
    __RARE_ONE__: "Buchstabe Q",
    __RARE_TWO__: "Buchstabe Z",
    __SETTINGS__: "Einstellungen",
    __HELP__: "Hilfe",
    __PRIVACY_POLICY__: "Datenschutz",
    __TERMS_OF_SERVICE__: "Nutzungsbedingungen",
    __IMPRINT__: "Impressum",
  },
  fr: {
    __YES__: "Oui",
    __NO__: "Non",
    __CANCEL__: "Annuler",
    __NEW_GAME__: "Nouveau jeu",
    __STATS__: "Statistics",
    __RATING__: "Top",
    __WORD_SEARCH__: "",
    __TWO_LETTERS__: "",
    __THREE_LETTERS__: "",
    __RARE_ONE__: "",
    __RARE_TWO__: "",
    __SETTINGS__: "",
    __HELP__: "",
    __PRIVACY_POLICY__: "",
    __TERMS_OF_SERVICE__: "",
    __IMPRINT__: "",
  },
  nl: {
    __YES__: "Ja",
    __NO__: "Nee",
    __CANCEL__: "Annuleren",
    __NEW_GAME__: "Nieuw spel",
    __STATS__: "Statistics",
    __RATING__: "Top",
    __WORD_SEARCH__: "",
    __TWO_LETTERS__: "",
    __THREE_LETTERS__: "",
    __RARE_ONE__: "",
    __RARE_TWO__: "",
    __SETTINGS__: "",
    __HELP__: "",
    __PRIVACY_POLICY__: "",
    __TERMS_OF_SERVICE__: "",
    __IMPRINT__: "",
  },
  pl: {
    __YES__: "Tak",
    __NO__: "Nie",
    __CANCEL__: "Anuluj",
    __NEW_GAME__: "Nowa gra",
    __STATS__: "Statistics",
    __RATING__: "Top",
    __WORD_SEARCH__: "",
    __TWO_LETTERS__: "",
    __THREE_LETTERS__: "",
    __RARE_ONE__: "",
    __RARE_TWO__: "",
    __SETTINGS__: "",
    __HELP__: "",
    __PRIVACY_POLICY__: "",
    __TERMS_OF_SERVICE__: "",
    __IMPRINT__: "",
  },
  ru: {
    __YES__: "Да",
    __NO__: "Нет",
    __CANCEL__: "Отмена",
    __NEW_GAME__: "Новая игра",
    __STATS__: "Статистика",
    __RATING__: "Рейтинг",
    __WORD_SEARCH__: "Поиск слова",
    __TWO_LETTERS__: "2 буквы",
    __THREE_LETTERS__: "3 буквы",
    __RARE_ONE__: "Буква Ъ",
    __RARE_TWO__: "Буква Э",
    __SETTINGS__: "Настройки",
    __HELP__: "Помощь",
    __PRIVACY_POLICY__: "Защита данных",
    __TERMS_OF_SERVICE__: "Условия пользования",
    __IMPRINT__: "Контакт",
  },
};

function replacePlacesholders(src, lang) {
  return src.replaceAll(/__[A-Z_]+?__/g, function (match) {
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
