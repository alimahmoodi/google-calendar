import "./App.css";
import { useState, useContext, useEffect } from "react";
import { getMonth } from "./components/util";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { monthIndex } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month monthMatrix={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
