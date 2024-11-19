import ToggleButton from "@/components/toggleButton";
import { fetchTasks } from "../api/task.api";
import UpdateButton from "@/components/updateButton";
import DeleteButton from "@/components/deleteButton";

const Dashboard = async () => {
  const compeletedTasks = await fetchTasks();

  return (
    <div className="min-h-screen w-full bg-[#8D5BE9] p-10 flex flex-wrap">
      <div className="w-[280px] h-[500px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-4 px-6 py-5 shadow-2xl">
        <span className="text-black font-semibold mx-auto">
          Inprogress Tasks
        </span>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-3">
          {compeletedTasks
            .filter((el) => el.completed === false)
            .map((el, index) => (
              <div
                key={index}
                className="w-full h-20 bg-[#FFB1B1] flex flex-col gap-1 rounded-lg px-4 py-2 relative text-black shadow-lg"
              >
                <span className="font-semibold text-xl">{el.Title}</span>
                <span className="text-xs absolute right-3 top-3">
                  <ToggleButton task={{ ...el }} />
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

export default Dashboard;
