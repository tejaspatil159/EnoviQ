import React from "react";

const LeaveCount = ({ text, color }) => {
  const image =
    "../../public/assets/golden-thumb-up-icon-isolated-bright-yellow-background-vector-golden-like-okay-icon_110464-798.avif";
  return (
    <div
      className={`text-white ${color}  font-Rampart text-xl p-2 py-8 rounded-2xl shadow-md shadow-black m-2 flex flex-col items-center justify-center`}
    >
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <div className="whitespace-nowrap "> {text}</div>
      <div className="text-3xl font-bold mt-2"> 0</div>
    </div>
  );
};

export default LeaveCount;
