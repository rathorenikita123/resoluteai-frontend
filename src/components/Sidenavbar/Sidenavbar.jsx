import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidenavbar = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("/addstudent");

  const Navbar_item = [
    {
      icon: "fa fa-user fa-2x",
      text: "Add Student",
      link: "/addstudent",
    },
    {
      icon: "fa fa-bars fa-2x ",
      text: "Manage Students",
      link: "/managestudent",
    },
    {
      icon: "fa fa-sign-out fa-2x ",
      text: "Logout",
      link: "/logout",
    },
  ];

  const handleNavigate = (link) => {
    console.log(link, "link");
    navigate(link);
  };

  return (
    <div className="sidenavbar">
      <div className="sidenavbar__container flex flex-col w-[240px] ">
        {Navbar_item.map((item) => (
          <div
            className={`sidenavbar__container__item flex  items-center h-[48px] cursor-pointer rounded-md ${
              item.link === current
                ? " bg-[#F33823] text-[#fff]"
                : "bg-[#fff] text-textColor"
            }`}
            onClick={() => {
              setCurrent(item.link);
            }}
            key={item.text}
          >
            <div className="flex items-center ">
              <div className="sidenavbar__container__item__icon px-6">
                <i className={item.icon} aria-hidden="true"></i>
              </div>
              <div className="sidenavbar__container__item__text">
                <a
                  href={item.link}
                  className="font-normal text-base  font-IBM"
                  onClick={handleNavigate}
                >
                  {item.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidenavbar;
