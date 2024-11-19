import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#8D5BE9]">
      <div className="flex">
        <h1 className="text-white text-5xl font-semibold">TODO list Template</h1>
        <img className="w-[500px] h-96" src="main.jpg" alt="" />
      </div>
    </div>
  );
}
