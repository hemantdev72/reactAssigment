import React, { useEffect, useState } from "react";
import time from "../utils/timezone.js";

function TimeSelector({ id, day, setData, data, currentTimeInTimezone }) {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    setCheckedItems({});
  }, [currentTimeInTimezone]);

  function handleCheckboxChange(e) {
    const { value, checked } = e.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
    addData(data[data.length - 1].Id + 1, "test", day, value);
  }

  function addData(id, name, day, time) {
    const ndata = [...data];
    let newDate = convertDayToDate(day);
    const filteredData = ndata.filter(
      (item) => !(item.Date === newDate.trim() && item.Time === time)
    );

    if (filteredData.length === ndata.length) {
      setData([
        ...ndata,
        {
          Id: id,
          Name: name,
          Date: newDate.trim(),
          Time: time,
          Day: day.split(",")[0],
        },
      ]);
    } else {
      setData(filteredData);
    }
  }
  console.log(data);

  function convertDayToDate(day) {
    const year = currentTimeInTimezone.split(",")[0].slice(-5);

    const [month, dayNumber] = day.split(",")[1].trim().split(" ");
    const monthIndex = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].indexOf(month);

    const newDate = `${year}-${monthIndex + 1}-${dayNumber.replace("th", "")}`;

    return newDate;
  }

  return (
    <div className="grid grid-cols-11 gap-6 py-3 border-b border-black">
      {time.map((item, index) => (
        <div key={index} id={index}>
          <input
            type="checkbox"
            id={index}
            onChange={handleCheckboxChange}
            checked={checkedItems[item] || false}
            value={item}
          />
          <label htmlFor="item">{item}</label>
        </div>
      ))}
    </div>
  );
}

export default TimeSelector;
