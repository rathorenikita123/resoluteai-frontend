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
    </table>
  );
};

export default Table;
