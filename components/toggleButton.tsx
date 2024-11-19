"use client"

import { ICreateTaskRes } from '@/types/global';
import React, { useState } from 'react';

const ToggleButton: React.FC<{task: ICreateTaskRes}> = ({task}) => {
  
  const [isToggled, setIsToggled] = useState(task.completed);
  console.log(isToggled);
  

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={toggleHandler}
      className={`relative inline-flex items-center h-4 w-8 rounded-full transition-colors duration-300 focus:outline-none ${
        isToggled ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition-transform duration-300 ${
          isToggled ? 'translate-x-4' : ''
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
