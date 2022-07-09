import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../redux/TaskSlice";
import Button from "../Atoms/Button";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
const TodoItems = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <li className="flex justify-between	py-3 px-16 my-5	mx-48 border-solid rounded border-2 border-white ">
      <div className="text-[#ff6f61ff]">{title}</div>
      <div>

        <Button
          onClick={() => {
            editTask();
          }}
          extraClassname="bg-inherit mr-7"
        >
          {<FaPencilAlt />}
        </Button>
        <Button
          onClick={() => {
            removeTask();
          }}
          extraClassname="bg-inherit "
        >
          {<FaTrashAlt />}
        </Button>
      </div>
    </li>
  );
};
export default TodoItems;
