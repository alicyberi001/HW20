"use client";

import { updateTask } from "@/app/api/task.api";
import TransitionsModal from "./modal";
import { ICreateTaskRes } from "@/types/global";
import Modal from "./updateModal";

const UpdateButton: React.FC<{ el: ICreateTaskRes }> = ({ el }) => {
  return (
    <button>
      {/* <TransitionsModal/> */}
      <Modal data = {el}/>
    </button>
  );
};

export default UpdateButton;
