import React, { useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { addTask } from "../../redux/TaskSlice";
import { useDispatch } from "react-redux";
const NewTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );

    setValue("");
  };
  const handleKeypress = (event) => {
    if (event.keycode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="border-solid rounded border-2 border-white p-5 w-2/4 h-1/4 m-auto">
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        handleKeypress={handleKeypress}
      />
      <Button extraClassname="w-full h-10" onClick={onSubmit} onk>
        Add New Task
      </Button>
    </div>
  );
};

export default NewTodo;
