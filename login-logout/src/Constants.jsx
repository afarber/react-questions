// the keys for localStorage
export const OPTIONS_KEY = "options";
export const BOOKMARKS_KEY = "bookmarks";

// different themes, appended to CSS classes
export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

// the keys for options dictionary
export const THEME_KEY = "theme";
export const VOLUME_KEY = "volume";

// to use, when there are no options found in localStorage
export const DEFAULT_OPTIONS = { [THEME_KEY]: THEME_LIGHT, [VOLUME_KEY]: 10 };
