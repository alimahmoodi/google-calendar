import dayjs from "dayjs";
import React from "react";
import { useContext } from "react";
import Logo from "../assets/logo.png";
import { GlobalContext } from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonth } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonth(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonth(monthIndex + 1);
  };
  const handleReset = () => {
    setMonth(dayjs().month());
  };

  console.log(dayjs().year(), "year");
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={Logo} alt="logo" className="mr-2 w-12 h-12" />
      <h1>calendar</h1>
      <button
        onClick={handleReset}
        className="mx-10 border rounded py-2 px-4 mr-5"
      >
        today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
