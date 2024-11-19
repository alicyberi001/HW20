"use client"


import { deleteTask } from "@/app/api/task.api";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <button
      onClick={() => {
        deleteTask(id);
      }}
    >
      <RiDeleteBinLine className="text-black w-5 h-5" />
    </button>
  );
};

export default DeleteButton;
