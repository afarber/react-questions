"use strict";

export default function localize(lang) {
  return {
    name: "localize-plugin",
    input: "src/index.js",
    transform(code, id) {
      console.log("localize lang:", lang);
      console.log("localize code:", code.length);
      console.log("localize id:", id);
      // TODO replace placeholders
      return code.replace("Permanent Drawer", "XXX YYY ZZZ");
    },
  };
}
