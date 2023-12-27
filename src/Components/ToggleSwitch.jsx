// src/ToggleSwitch.js

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative ">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`toggle-slider w-10 h-4 bg-toggle rounded-full shadow-inner ${
            isChecked ? "bg-blue-500" : "bg-gray-400"
          }`}
        />
        <div
          className={`toggle-handle w-6 h-6 bg-white border-4 border-toggle rounded-full shadow-md absolute -left-1 -top-1 transition transform ${
            isChecked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
};

export default ToggleSwitch;
