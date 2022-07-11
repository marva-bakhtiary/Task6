import React from "react";
import TodoItems from "../Molecules/TodoItems";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Button from "../Atoms/Button";

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state);

  return (
    <ul className="p-0 m-auto">
      <h1 className=" text-3xl 	text-center my-7 font-semibold text-white">
        TodoList
      </h1>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Todo</Button>
      {todoList.map((todo) => (
        <TodoItems key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
