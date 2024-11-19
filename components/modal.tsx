"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaRegEdit } from "react-icons/fa";
import { ICreateTaskRes } from "@/types/global";
import { updateTask } from "@/app/api/task.api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: 'transparent',
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

interface IData {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  Title: string;
  Description: string;
  Priority: string;
}

interface Props {
  data: IData;
}

export default function TransitionsModal () {
  const [open, setOpen] = React.useState(false);
  // const [title, setTitle] = React.useState(data.Title);
  // const [description, setDescription] = React.useState(data.Description);
  // const [priority, setPriority] = React.useState(data.Priority);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(title,description,priority);

  return (
    <>
      <button onClick={handleOpen} className="flex justify-center items-center">
        <FaRegEdit className="text-black w-5 h-5" />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              // onSubmit={handleSubmit}
              className="w-[500px] h-[500px] bg-[#FFBA5D] rounded-3xl flex flex-col gap-8 px-6 py-4 shadow-2xl"
            >
              <span className="text-black font-bold text-2xl mx-auto">
                EDIT TODO
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-black font-semibold text-xl">Title:</span>
                <input
                  type="text"
                  className="border-b-2 border-black bg-transparent h-10 text-black px-4 py-3 font-semibold"
                  // value={el.Title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-black font-semibold text-xl">
                  Description:
                </span>
                <textarea
                  className="border-2 border-black bg-transparent rounded-lg h-24  text-black px-4 py-3 font-semibold"
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
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
                    // checked={priority === "High"}
                    // onChange={handlePriorityChange}
                  />
                  <label htmlFor="High">High</label>
                </div>
                <div className="flex gap-2 text-black">
                  <input
                    type="radio"
                    id="Medium"
                    name="Medium"
                    value="Medium"
                    // checked={priority === "Medium"}
                    // onChange={handlePriorityChange}
                  />
                  <label htmlFor="Medium">Medium</label>
                </div>
                <div className="flex gap-2 text-black">
                  <input
                    type="radio"
                    id="Low"
                    name="Low"
                    value="Low"
                    // checked={priority === "Low"}
                    // onChange={handlePriorityChange}
                  />
                  <label htmlFor="Low">Low</label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8D5BE9] h-12 text-white px-4 py-3 rounded-full font-semibold hover:bg-[#9967f6] mt-auto"
                onClick={() => updateTask(el.id, el.Title, el.Description, el.Priority)}
              >
                Confirm
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
