import React from "react";

function TimeSelector({ id, date, waqt }) {
  const time = [
    "8:00AM",
    "8:30AM",
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "5:30PM",
    "6:00PM",
    "6:30PM",
    "7:00PM",
    "7:30PM",
    "8:00PM",
    "8:30PM",
    "9:00PM",
    "9:30PM",
    "10:00PM",
    "10:30PM",
    "11:00PM",
  ];

  function isCheck(e) {
    console.log(e.target.checked);
  }

  return (
    <div className="grid grid-cols-11 gap-6 py-3 border-b border-black">
      {time.map((item, index) => (
        <div key={index} id={index} onChange={(e) => isCheck(e)}>
          <input type="checkbox" />
          <label htmlFor="item">{item}</label>
        </div>
      ))}
    </div>
  );
}

export default TimeSelector;
