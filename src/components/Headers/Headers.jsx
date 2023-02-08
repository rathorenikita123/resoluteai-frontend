/* eslint-disable react/style-prop-object */
import React from "react";
import Input from "../Input/Input";

const Header = () => {
  return (
    <div className="header">
      <div className="header_item flex justify-between py-6 px-16">
        <div>
          <p className="font-bold font-IBM text-4xl text-logoColor">LOGO</p>
        </div>
        <div className="flex items-center relative">
          <i
            className="fa fa-user-o fa-lg text-textColor absolute px-14"
            aria-hidden="true"
          ></i>
          <Input
            type="email"
            placeholder="Email"
            style="w-[320px] h-[48px] px-4 py-2 text-sm font-normal font-IBM border-2 borderColor rounded text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
