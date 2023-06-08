import { TOGGLE_LANGUAGE, DATA_SEND } from "./actions";

const initial = {
  data: null,

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

    case DATA_SEND:
      const fetchedData = action.payload;

      return {
        ...state,
        data: fetchedData,
      };
    default:
      return state;
  }
}
