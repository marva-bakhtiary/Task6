import React, { useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { addTodo } from "../../redux/TaskSlice";
import { useDispatch } from "react-redux";
const NewTodo = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoDescription.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTodoDescription("");
      return;
    }
    dispatch(addTodo(todoDescription));
    setTodoDescription("");
  };

  return (
    <div className="border-solid rounded border-2 border-white p-5 w-2/4 h-1/4 m-auto">
      <Input
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <Button extraClassname="w-full h-10" onClick={onSubmit}>
        Add New Task
      </Button>
    </div>
  );
};

export default NewTodo;
