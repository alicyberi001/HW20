"use server";

import { deleteTask, fetchTasks, updateTask } from "@/app/api/task.api";
// import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import TransitionsModal from "./modal";
import { ICreateTaskRes } from "@/types/global";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import ToggleButton from "./toggleButton";

const Todos: React.FC = async () => {
  const task = await fetchTasks();
  

  if (!task) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap">
      <div className="w-[280px] h-[500px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-4 px-6 py-5 shadow-2xl">
        <span className="text-black font-semibold mx-auto">
          High Priorities
        </span>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-3">
          {task
            .filter((el) => el.Priority === "High")
            .map((el, index) => (
              <div
                key={index}
                className="w-full h-20 bg-[#FFB1B1] flex flex-col gap-1 rounded-lg px-4 py-2 relative text-black shadow-lg"
              >
                <span className="font-semibold text-xl">{el.Title}</span>
                <span className="text-xs absolute right-3 top-3">
                  <ToggleButton task = {{...el}}/>
                </span>
                <span className="text-base truncate w-36">
                  {el.Description}
                </span>
                <div className="flex gap-3 mt-2 absolute right-3 bottom-3">
                  <UpdateButton el={el} />
                  <DeleteButton id={el.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-[280px] h-[500px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-4 px-6 py-5 shadow-2xl">
        <span className="text-black font-semibold mx-auto">
          Medium Priorities
        </span>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-3">
          {task
            .filter((el) => el.Priority === "Medium")
            .map((el, index) => (
              <div
                key={index}
                className="w-full h-20 bg-[#FFCFCF] flex flex-col gap-1 rounded-lg px-4 py-2 relative text-black shadow-lg"
              >
                <span className="font-semibold text-xl">{el.Title}</span>
                <span className="text-xs absolute right-3 top-3">
                  {el.Priority}
                </span>
                <span className="text-base truncate w-36">
                  {el.Description}
                </span>
                <div className="flex gap-3 mt-2 absolute right-3 bottom-3">
                  <UpdateButton el={el} />
                  <DeleteButton id={el.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-[280px] h-[500px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-4 px-6 py-5 shadow-2xl">
        <span className="text-black font-semibold mx-auto">Low Priorities</span>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-3">
          {task
            .filter((el) => el.Priority === "Low")
            .map((el, index) => (
              <div
                key={index}
                className="w-full h-20 bg-[#EBE7FF] flex flex-col gap-1 rounded-lg px-4 py-2 relative text-black shadow-lg"
              >
                <span className="font-semibold text-xl">{el.Title}</span>
                <span className="text-xs absolute right-3 top-3">
                  {el.Priority}
                </span>
                <span className="text-base truncate w-36">
                  {el.Description}
                </span>
                <div className="flex gap-3 mt-2 absolute right-3 bottom-3">
                  <UpdateButton el={el} />
                  <DeleteButton id={el.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
