"use strict";

const localizedStrings = {
  en: {
    __NEW_GAME__: "New game",
    __STATS__: "Statistics",
    __RATING__: "Rating",
  },
  de: {
    __NEW_GAME__: "Neues Spiel",
    __STATS__: "Statistik",
    __RATING__: "Top",
  },
  fr: {
    __NEW_GAME__: "Nouveau jeu",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  nl: {
    __NEW_GAME__: "Nieuw spel",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  pl: {
    __NEW_GAME__: "Nowa gra",
    __STATS__: "Statistics",
    __RATING__: "Top",
  },
  ru: {
    __NEW_GAME__: "Новая игра",
    __STATS__: "Статистика",
    __RATING__: "Рейтинг",
  },
};

export default function localize(lang) {
  return {
    name: "localize-plugin",
    transform(code, id) {
      console.log(lang, id);
      return code.replaceAll(/__[_A-Z]+__/g, function (match) {
        return localizedStrings[lang][match] || match;
      });
    },
  };
}
