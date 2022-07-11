import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";
import { removeTodo, setTodoStatus } from "../../redux/TaskSlice";
import Button from "../Atoms/Button";
import { FaTrashAlt, FaCheckSquare, FaRegSquare } from "react-icons/fa";
// import { FaPencilAlt } from "react-icons/fa";
const TodoItems = () => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between	py-3 px-16 my-5	mx-48 border-solid rounded border-2 border-white "
        >
          <div
            className={`text-[#ff6f61ff] ${
              todo.completed ? "line-through" : "no-underline"
            }`}
          >
            {todo.description}
          </div>
          <div>
            <Button
              onClick={todo.completed}
              extraClassname="bg-inherit mr-7"
              onChange={() => {
                dispatch(
                  setTodoStatus({ completed: !todo.completed, id: todo.id })
                );
              }}
            >
              {todo.completed ? <FaCheckSquare /> : <FaRegSquare />}
            </Button>

            {/* Edit Task */}
            {/* <Button
          extraClassname="bg-inherit mr-7"
        >
          {<FaPencilAlt />}
        </Button> */}

            <Button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
              extraClassname="bg-inherit "
            >
              {<FaTrashAlt />}
            </Button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default TodoItems;
