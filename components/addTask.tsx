"use client";

import { createTask } from "@/app/api/task.api";
import { FormEvent, useState } from "react";
import ToggleButton from "./toggleButton";

const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  const handlePriorityChange = (e: any) => {
    setPriority(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await createTask(title, description, priority, isToggled);
    setTitle("");
    setDescription("");
    setPriority("");
    setIsToggled(false)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[350px] h-[500px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-5 px-6 py-4"
    >
      <span className="text-black font-bold text-2xl mx-auto">TODO CARD</span>
      <div className="flex flex-col gap-1">
        <span className="text-black font-semibold text-xl">Title:</span>
        <input
          type="text"
          className="border-b-2 border-black bg-transparent h-10 text-black px-4 py-3 font-semibold outline-none focus:border-b-[3px]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-black font-semibold text-xl">Description:</span>
        <textarea
          className="border-2 border-black bg-transparent rounded-lg h-24  text-black px-4 py-3 font-semibold outline-none focus:border-[3px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-black font-semibold text-xl">Priority:</span>
        <div className="flex gap-2 text-black">
          <input
            type="radio"
            id="High"
            name="High"
            value="High"
            checked={priority === "High"}
            onChange={handlePriorityChange}
          />
          <label htmlFor="High">High</label>
        </div>
        <div className="flex gap-2 text-black">
          <input
            type="radio"
            id="Medium"
            name="Medium"
            value="Medium"
            checked={priority === "Medium"}
            onChange={handlePriorityChange}
          />
          <label htmlFor="Medium">Medium</label>
        </div>
        <div className="flex gap-2 text-black">
          <input
            type="radio"
            id="Low"
            name="Low"
            value="Low"
            checked={priority === "Low"}
            onChange={handlePriorityChange}
          />
          <label htmlFor="Low">Low</label>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-black font-semibold text-xl">Compeleted:</span>
        <button
          onClick={toggleHandler}
          className={`relative inline-flex items-center h-4 w-8 rounded-full transition-colors duration-300 focus:outline-none ${
            isToggled ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform duration-300 ${
              isToggled ? "translate-x-4" : ""
            }`}
          ></span>
        </button>
      </div>
      <button
        type="submit"
        className={
          !title || !description || !priority
            ? "w-full  bg-[#bf9cff] h-12 text-white px-4 py-3 rounded-full font-semibold hover:cursor-not-allowed mt-auto"
            : `w-full  bg-[#8D5BE9] h-12 text-white px-4 py-3 rounded-full font-semibold hover:bg-[#9967f6] mt-auto`
        }
        disabled={!title || !description || !priority}
      >
        ADD TASK
      </button>
    </form>
  );
};

export default AddTask;
