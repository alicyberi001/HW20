// directive
"use client";

import { useRouter } from "next/navigation";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href);
  };

  return (
    <nav className="w-full py-[10px] bg-[#8D5BE9] flex justify-between items-center px-8 border-b-2 border-black/25 box-border ">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9" src="./logo.jpg" alt="logo" />
        <span className="text-white font-semibold text-2xl">Confrence Room</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="py-2 px-3  font-semibold bg-[#FFBA5D] text-black rounded-lg"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="py-2 px-3  font-semibold bg-[#FFBA5D] text-black rounded-lg"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/completed")}
          className="py-2 px-3  font-semibold bg-[#FFBA5D] text-black rounded-lg"
        >
          Completed
        </button>
        <button
          onClick={() => navigate("/inprogress")}
          className="py-2 px-3  font-semibold bg-[#FFBA5D] text-black rounded-lg"
        >
          Inprogress
        </button>
        <button
          onClick={() => navigate("/login")}
          className="py-2 px-3  font-semibold bg-[#FFBA5D] text-black rounded-lg"
        >
          Login
        </button>
      </div>
    </nav>
  );
};
