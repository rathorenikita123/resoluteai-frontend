import React from "react";

const Table = () => {
  return (
    <table className="flex flex-col w-[1000px] ">
      <div className=" flex items-center justify-around h-[48px] bg-[#F33823] rounded">
        <tr className="contents font-semibold font-IBM text-sm text-[#fff]">
          <th>Name</th>
          <th>Class</th>
          <th>Roll No.</th>
          <th>View / Edit / Delete</th>
        </tr>
      </div>
      {/* <div className="flex flex-col">
        <div className="flex items-center justify-around w-[1000px] h-[48px]">
          <tr className="contents font-semibold font-IBM text-sm">
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>jr</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        </div>
      </div> */}
    </table>
  );
};

export default Table;
