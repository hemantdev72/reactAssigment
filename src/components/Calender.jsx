import React from "react";
import "../App.css";
import { RxCross2 } from "react-icons/rx";

function Calender({ show, setShow, weekdays, data }) {
  function handleClick() {
    setShow(false);
  }

  return (
    <div
      className={`fixed  z-10 top-0 left-0 w-full min-h-full overflow-auto pt-4 ${
        !show ? "hidden" : ""
      }`}
    >
      <div className="w-[95vw] neuro">
        <div className="absolute right-14 top-10 text-xl border-black p-2 rounded-full hover:border-red-600 hover:text-red-600 border-2">
          <RxCross2 onClick={() => setShow(false)} />
        </div>
        <div className="flex gap-20 justify-center">
          {weekdays.slice(1, 6).map((day) => (
            <div key={day}>
              <div className="bg-gray-300 p-7">{day.split(",")[0]}</div>
              {data
                .filter((item) => item.Day === day.split(",")[0])
                .map((item) => (
                  <div className="bg-white p-4 rounded-md mt-2">
                    <h5 className="text-center uppercase text-red-500 font-bold border-b border-black mb-2">
                      {item.Name}
                    </h5>
                    <h5 className="text-center uppercase text-blue-500 font-semibold">
                      {item.Date}
                    </h5>
                    <h5 className="text-center uppercase text-blue-500 font-semibold">
                      {item.Time}
                    </h5>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calender;
