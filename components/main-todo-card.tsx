// "use client";
// // import { useRouter } from 'next/router'
// import { FormEvent, useState } from "react";
// import axios, { AxiosError } from "axios";
// import PocketBase from "pocketbase";
// // import { userAuthLogin } from "../api/user.api";
// // import { redirect } from "next/navigation";
// // import { createTask } from "../api/task.api";
 


// const MainTodo = ({handleSubmit : (a:FormEvent, b: string, c: string)}) => {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [priority, setPriority] = useState("");
  
//     const handlePriorityChange = (e: any) => {
//       setPriority(e.target.value);
//     };
  
//     return (
//         <div
//         className="min-h-screen w-full bg-[#8D5BE9] p-16 "
//       >
//         <form onSubmit={() => handleSubmit(title, description, priority)} className="w-1/3 h-[600px] bg-[#FFBA5D] ml-4 rounded-3xl flex flex-col gap-10 px-6 py-4">
//           <span className="text-black font-bold text-3xl mx-auto">TODO CARD</span>
//           <div className="flex flex-col gap-3">
//             <span className="text-black font-semibold text-2xl">Title:</span>
//             <input
//               type="text"
//               className="border-b-2 border-black bg-transparent h-10 text-black px-4 py-3 font-semibold"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-3">
//             <span className="text-black font-semibold text-2xl">
//               Description:
//             </span>
//             <textarea
//               className="border-2 border-black bg-transparent rounded-lg h-24  text-black px-4 py-3 font-semibold"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="text-black font-semibold text-2xl">Priority:</span>
//             <div className="flex gap-2 text-black">
//               <input
//                 type="radio"
//                 id="High"
//                 name="High"
//                 value="High"
//                 checked={priority === "High"}
//                 onChange={handlePriorityChange}
//               />
//               <label htmlFor="High">High</label>
//             </div>
//             <div className="flex gap-2 text-black">
//               <input
//                 type="radio"
//                 id="Medium"
//                 name="Medium"
//                 value="Medium"
//                 checked={priority === "Medium"}
//                 onChange={handlePriorityChange}
//               />
//               <label htmlFor="Medium">Medium</label>
//             </div>
//             <div className="flex gap-2 text-black">
//               <input
//                 type="radio"
//                 id="Low"
//                 name="Low"
//                 value="Low"
//                 checked={priority === "Low"}
//                 onChange={handlePriorityChange}
//               />
//               <label htmlFor="Low">Low</label>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#8D5BE9] h-12 text-white px-4 py-3 rounded-full font-semibold hover:bg-[#9967f6]"
//           >
//             ADD TASK
//           </button>
//         </form>
//       </div>
//     );
//   };
  
//   export default MainTodo;
  