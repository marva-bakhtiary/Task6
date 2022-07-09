import React from "react";
import NewTodo from "../UI/Molecules/NewTodo";
import TodoList from "../UI/Organisms/TodoList";
function Main() {
  return (
    <div>
      <h1 className=" text-3xl 	text-center my-4 font-semibold text-white">
        TodoInput
      </h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default Main;
