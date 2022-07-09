import React from "react";
import TodoItems from "../Molecules/TodoItems";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <ul className="p-0 m-auto">
      <h1 className=" text-3xl 	text-center my-7 font-semibold text-white">
        TodoList
      </h1>
      {todos.map((todo) => (
        <TodoItems id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};

export default TodoList;
