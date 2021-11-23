import React, { createContext } from "react";

export const GlobalContext = createContext({
  monthIndex: 0,
  setMonth: (index) => {},
});
