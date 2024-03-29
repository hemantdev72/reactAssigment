import React, { useState } from "react";
import moment from "moment-timezone";
import WeekDays from "./assets/components/WeekDays";

function App() {
  const [timezone, setTimezone] = useState("Asia/Kolkata"); // Default to India
  const [currentDate, setCurrentDate] = useState(moment().tz(timezone));

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
    setCurrentDate(moment().tz(event.target.value));
  };

  const handlePreviousWeek = () => {
    setCurrentDate(currentDate.clone().subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentDate(currentDate.clone().add(1, "week"));
  };

  const currentTimeInTimezone = currentDate.format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="w-full h-full px-4">
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-center items-center gap-4">
          <button
            className="border border-black p-2 rounded-md hover:bg-black hover:text-white"
            onClick={handlePreviousWeek}
          >
            Previous Week
          </button>
          <p className="border-b-2 border-red-600 font-bold pb-2 hover:border-blue-600 ">
            {currentTimeInTimezone}
          </p>
        </div>
        <button
          className="border border-black p-2 rounded-md  hover:bg-black hover:text-white"
          onClick={handleNextWeek}
        >
          Next Week
        </button>
      </div>

      <div>
        <p className="font-bold my-2">TIMEZONE</p>
        <select
          className="w-full p-2 bg-gray-100 hover:bg-gray-300"
          value={timezone}
          onChange={handleTimezoneChange}
        >
          <option value="Asia/Kolkata">India (UTC+5:30)</option>
          <option value="America/New_York">US (Eastern Time)</option>
        </select>
      </div>
      <WeekDays
        currentTimeInTimezone={currentTimeInTimezone}
        currentDate={currentDate}
      />
    </div>
  );
}

export default App;
