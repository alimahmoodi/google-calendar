import React from "react";
import Day from "./Day";

export default function Month({ monthMatrix }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-6">
      {monthMatrix.map((row, i) => (
        <>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </>
      ))}
    </div>
  );
}
