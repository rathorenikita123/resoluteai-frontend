import React from "react";
import Sidenavbar from "../../components/Sidenavbar/Sidenavbar";
import Headers from "../../components/Headers/Headers";
import Date from "../../components/Date/Date";
import Form from "../../components/Form/Form";

const AddStudent = () => {
  return (
    <div className="addstudent flex flex-col w-[1331px]">
      <div>
        <Headers />
      </div>
      <div className="flex justify-around">
        <div className="mt-[3.7rem]">
          <Sidenavbar />
        </div>
        <div className="flex flex-col justify-between h-[421px]">
          <div>
            <Date heading="Add student" />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
