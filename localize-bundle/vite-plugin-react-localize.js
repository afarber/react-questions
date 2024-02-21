"use strict";

import fs from "fs";
import path from "path";

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
      //console.log(lang, id);
      return code.replaceAll(/__[A-Z]+__/g, function (match) {
        return localizedStrings[lang][match] || match;
      });
    },
    generateBundle(outputOptions, bundle) {
      //console.log("outputOptions", outputOptions);
      //console.log("bundle", bundle["index.js"].code.length);

      // TODO iterate bundle dictionary instead of using find()
      const indexJs = Object.keys(bundle).find((fileName) =>
        fileName.endsWith("index.js")
      );
      if (indexJs) {
        const sourcePath = path.resolve(outputOptions.dir, indexJs);
        console.log("sourcePath", sourcePath);

        for (const [lang, value] of Object.entries(localizedStrings)) {
          const destPath = path.resolve(outputOptions.dir, `index-${lang}.js`);
          console.log("destPath", destPath);
          // TODO replace placeholders in bundle["index.js"].code
        }
      }
    },
  };
}
