import React from "react";
import "./ManageStudent.css";
import Sidenavbar from "../../components/Sidenavbar/Sidenavbar";
import Headers from "../../components/Headers/Headers";
import Date from "../../components/Date/Date";
import Table from "../../components/table/table";

const ManageStudent = () => {
  return (
    <div className="managestudent flex flex-col w-[1331px]">
      <div>
        <Headers />
      </div>
      <div className="flex justify-around">
        <div className="mt-[3.7rem]">
          <Sidenavbar />
        </div>
        <div className="flex flex-col">
          <div className="mb-9">
            <Date heading="Manage student" />
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
