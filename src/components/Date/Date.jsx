import React from "react";

const DateTime = ({ ...props }) => {
  const current = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];



  const date = `${current.getDate()} ${
    months[current.getMonth()]
  } ${current.getFullYear()}`;
  
  const time = `${current.getHours()}:${current.getMinutes()}`;

  return (
    <div className="date">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-base font-IBM">{props.heading}</p>
        </div>
        <div className="flex items-center">

          <p className="font-normal text-sm font-IBM px-4">{date}</p>
          <p className="font-normal text-sm font-IBM">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
