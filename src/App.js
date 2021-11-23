import "./App.css";
import { useState } from "react";
import { getMonth } from "./util";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import Sidebar from "./Sidebar";

function App() {
  // console.table(getMonth());
  // getMonth(11);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div className="App">
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
