"use strict";

const localizedStrings = {
  en: {
    __YES__: "Yes",
    __NO__: "No",
    __CANCEL__: "Cancel",
  },
  de: {
    __YES__: "Ja",
    __NO__: "Nein",
    __CANCEL__: "Abbrechen",
  },
  fr: {
    __YES__: "Oui",
    __NO__: "Non",
    __CANCEL__: "Annuler",
  },
};

export default function localize(lang) {
  return {
    name: "localize-plugin",
    transform(code, id) {
      console.log(lang, id);
      return code.replaceAll(/__[A-Z]+__/g, function (match) {
        return localizedStrings[lang][match] || match;
      });
    },
  };
}
