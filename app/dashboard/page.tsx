// "use client";
// import { useRouter } from 'next/router'


import axios, { AxiosError } from "axios";
import PocketBase from "pocketbase";
import { userAuthLogin } from "../api/user.api";
import { redirect } from "next/navigation";
import { createTask } from "../api/task.api";
import Todos from "@/components/todos";
import AddTask from "@/components/addTask";



const Dashboard = () => {
  


  return (
    <div className="min-h-screen w-full bg-[#8D5BE9] p-10 flex flex-wrap">
      <AddTask />
      <Todos />
    </div>
  );
};

export default Dashboard;
