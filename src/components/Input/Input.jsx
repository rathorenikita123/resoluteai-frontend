import React from "react";
import "./Input.css";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  pattern,
  required,
  style,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={
        style
          ? `${style}`
          : "w-[322px] h-[48px] px-4 py-2 text-sm font-normal font-IBM  border-2 borderColor rounded  "
      }
    />
  );
};

export default Input;
