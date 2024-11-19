import { updateTask } from "@/app/api/task.api";
import { ICreateTaskRes } from "@/types/global";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const Modal: React.FC<{ data: ICreateTaskRes }> = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(data.Title);
  const [description, setDescription] = useState(data.Description);
  const [priority, setPriority] = useState(data.Priority);

  const handlePriorityChange = (e: any) => {
    setPriority(e.target.value);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="flex justify-items-center"
      >
        <FaRegEdit className="text-black w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className=" transform scale-95 opacity-0 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              // onSubmit={handleSubmit}
              className="w-[500px] h-[500px] bg-[#FFBA5D] rounded-3xl flex flex-col gap-8 px-6 py-4 shadow-2xl relative"
            >
                <button
                onClick={closeModal}
                className="absolute right-6 top-4"
              >
                x
              </button>
              <span className="text-black font-bold text-2xl mx-auto">
                EDIT TODO
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-black font-semibold text-xl">Title:</span>
                <input
                  type="text"
                  className="border-b-2 border-black bg-transparent h-10 text-black px-4 py-3 font-semibold"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-black font-semibold text-xl">
                  Description:
                </span>
                <textarea
                  className="border-2 border-black bg-transparent rounded-lg h-24  text-black px-4 py-3 font-semibold"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black font-semibold text-xl">
                  Priority:
                </span>
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
              <button
                type="submit"
                className="w-full bg-[#8D5BE9] h-12 text-white px-4 py-3 rounded-full font-semibold hover:bg-[#9967f6] mt-auto"
                onClick={() => updateTask(data.id, title, description, priority, data.completed)}
              >
                Confirm
              </button>
            </form>
            <div className="flex justify-end">
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
