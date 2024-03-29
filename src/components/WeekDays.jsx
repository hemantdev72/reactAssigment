import React, { useState } from "react";
import TimeSelector from "./TimeSelector";
import Calender from "./Calender";

function WeekDays({ currentDate, currentTimeInTimezone }) {
  const [data, setData] = useState([
    {
      Id: 101,
      Name: "test",
      Date: "2023-07-20",
      Time: "10:30AM",
      Day: "Monday",
    },
    {
      Id: 102,
      Name: "test 1",
      Date: "2023-07-21",
      Time: "09:00PM",
      Day: "Tuesday",
    },
  ]);
  const [show, setShow] = useState(false);

  const id = data[data.length - 1].Id;

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
            <TimeSelector
              day={day}
              id={id}
              setData={setData}
              data={data}
              currentTimeInTimezone={currentTimeInTimezone}
            />
          </div>
        ))}
        <Calender
          show={show}
          setShow={setShow}
          weekdays={weekdays}
          data={data}
        />
        <button
          className="border mt-4 m-8 bg-blue-500 text-white font-bold w-[50%]  border-black mr-2 p-2 rounded-md  hover:bg-black hover:text-white"
          onClick={() => setShow(true)}
        >
          Calender
        </button>
      </div>
    </>
  );
}

export default WeekDays;
