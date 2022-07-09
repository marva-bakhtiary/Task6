import React from "react";
import { FaEdit } from "react-icons/fa";
const Input = () => {
  return (
    <div className="flex">
      <div className=" h-9 w-10 text-2xl text-white btnColor justify-center flex items-center	rounded-sm ">
        <FaEdit />
      </div>
      <input
        className="w-full h-9 p-1.5 outline-none rounded-sm	mb-3.5"
        type="text"
        placeholder="New Todo"
      />
    </div>
  );
};

export default Input;
