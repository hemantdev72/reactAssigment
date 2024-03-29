import React, { useState } from "react";
import TimeSelector from "./TimeSelector";

function WeekDays({ currentDate, currentTimeInTimezone }) {
  const [selectedDay, setSelectedDay] = useState(
    currentDate.format("dddd, MMMM Do")
  );

  const weekStart = currentDate.clone().startOf("week");
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    const day = weekStart.clone().add(i, "days").format("dddd, MMMM Do");
    weekdays.push(day);
  }

  let cd = currentTimeInTimezone.split(",")[0].slice(0, -5);
  console.log(selectedDay);
  return (
    <>
      <div className="w-full mt-5">
        {weekdays.slice(1, 6).map((day, index) => (
          <div key={index} className={`w-full flex gap-4 `}>
            <div
              className={`w-[10vw] bg-gray-300 flex flex-col items-center justify-center px-2 ${
                cd == day.split(",")[1].trim()
                  ? "bg-slate-600 text-white font-bold"
                  : ""
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <p>{day.split(",")[0]}</p>
              <p>{day.split(",")[1]}</p>
            </div>
            <TimeSelector />
          </div>
        ))}
      </div>
    </>
  );
}

export default WeekDays;
