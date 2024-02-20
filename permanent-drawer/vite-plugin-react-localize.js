"use strict";

export default function localize(lang) {
  return {
    name: "localize-plugin",
    transform(code) {
      console.log("localize lang: ", lang);
      // TODO replace placeholders
      return code;
    },
  };
}
