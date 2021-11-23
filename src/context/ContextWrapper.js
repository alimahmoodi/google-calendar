import React, { useState } from "react";
import dayjs from "dayjs";

import { GlobalContext } from "../context/GlobalContext";

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonth] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonth }}>
      {children}
    </GlobalContext.Provider>
  );
}
