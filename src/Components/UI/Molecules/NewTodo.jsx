import React from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
const NewTodo = () => {
  return (
    <div className="border-solid rounded border-2 border-white p-5 w-2/4 h-1/4 m-auto">
      <Input />
      <Button extraClassname="w-full h-10">Add New Task</Button>
    </div>
  );
};

export default NewTodo;
