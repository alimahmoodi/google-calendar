import dayjs from "dayjs";
import React from "react";

export default function Day({ day, rowIdx }) {
  const gerCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7 text-center"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col item-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 text-center">{day.format("ddd")}</p>
        )}
        <p className={` text-sm p-1 my-1 text-center ${gerCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}
