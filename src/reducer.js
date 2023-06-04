import { TOGGLE_LANGUAGE } from "./actions";

import data from "./MockData/data";

const initial = {
  data: { data },

  currentLanguage: localStorage.getItem("language") || "english",
};

function writeLanguageToLocalStorage(language) {
  localStorage.setItem("language", language);
}

export function reducer(state = initial, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      const newLanguage =
        state.currentLanguage === "english" ? "turkish" : "english";
      writeLanguageToLocalStorage(newLanguage);
      return {
        ...state,
        currentLanguage: newLanguage,
      };
    default:
      return state;
  }
}
