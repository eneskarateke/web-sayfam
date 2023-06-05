import React, { createContext } from "react";

import useLocalStorage from "./hooks/useLocalStorage";

export const NightModeContext = createContext();

export function NightModeProvider({ children }) {
  const [nightMode, setNightMode] = useLocalStorage("night", "false");

  return (
    <NightModeContext.Provider value={{ nightMode, setNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}
