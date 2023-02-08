/* eslint-disable react/style-prop-object */
import React from "react";
import Input from "../Input/Input";
import { addStudent } from "../../api";

const Form = () => {
  const [formData, setFormData] = React.useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    class_name: "",
    division: "",
    roll_no: "",
    address_1: "",
    address_2: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const {
    first_name,
    middle_name,
    last_name,
    class_name,
    division,
    roll_no,
    address_1,
    address_2,
    landmark,
    city,
    pincode,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addStudent(formData);
      console.log(data);
      if (data.data.status === 200) {
        alert("Student Added Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(formData);

  return (
    <div>
      <form className="flex flex-col justify-between w-[1000px] h-[360px]">
        <div className="flex flex-col justify-between h-[112px]">
          <div className="flex items-center justify-between">
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              value={first_name}
              required
            />
            <Input
              type="text"
              name="middle_name"
              placeholder="Middle Name"
              onChange={handleChange}
              value={middle_name}
            />
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              value={last_name}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <select
              name="class_name"
              className="w-[320px] h-[48px] px-4 py-2 text-sm font-normal font-IBM  border-2 borderColor rounded bg-[#fff]"
              required
              value={class_name}
              onChange={handleChange}
            >
              <option>Select Class</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
              name="division"
              className="w-[320px] h-[48px] px-4 py-2 text-sm font-normal font-IBM  border-2 borderColor rounded bg-[#fff]"
              required
              value={division}
              onChange={handleChange}
            >
              <option>Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <Input
              type="text"
              name="roll_no"
              placeholder="Enter Roll Number in Digits"
              pattern="[0-9]{2}"
              onChange={handleChange}
              value={roll_no}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-[112px]">
          <div className="flex items-center justify-between">
            <Input
              type="text"
              name="address_1"
              placeholder="Address Line 1"
              style={
                "w-[492px] h-[48px] px-4 py-2 text-sm font-normal font-IBM  border-2 borderColor rounded"
              }
              onChange={handleChange}
              value={address_1}
            />
            <Input
              type="text"
              name="address_2"
              placeholder="Address Line 2"
              style={
                "w-[492px] h-[48px] px-4 py-2 text-sm font-normal font-IBM  border-2 borderColor rounded"
              }
              onChange={handleChange}
              value={address_2}
            />
          </div>
          <div className="flex items-center justify-between">
            <Input
              type="text"
              name="landmark"
              placeholder="Landmark"
              onChange={handleChange}
              value={landmark}
            />
            <Input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              value={city}
              required
            />
            <Input
              type="text"
              name="pincode"
              placeholder="Pincode"
              pattern="[1-9]{1}[0-9]{5}"
              onChange={handleChange}
              value={pincode}
              required
            />
          </div>
        </div>
        <div className="flex ">
          <button
            type="submit"
            className="w-[322px] h-[48px] px-4 py-2 text-sm font-bold font-IBM text-[#fff] border-2 border-[#F33823] rounded bg-[#F33823]"
            onClick={onSubmit}
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
