import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-gray-800 h-[60px] mx-auto  min-w-[1000px]  ">
      <img
        src="../../public/assets/Final-Logo-Dark1 (1).png"
        alt="logo"
        className="w-20 p-2 object-cover"
      />
      <div className="text-white flex   space-x-8 text-sm items-center mx-auto flex-1  ">
        <h2 className="pl-16 cursor-pointer  ">Home </h2>
        <h2 className="whitespace-nowrap cursor-pointer">Master Setup </h2>
        <h2 className="cursor-pointer">Entity</h2>
        <h2 className="cursor-pointer">Employee</h2>
        <h2 className="cursor-pointer">Expences</h2>
        <h2 className="cursor-pointer">Search</h2>
        <div className="flex grow"></div>
        <div className="flex items-center mx-auto pr-10 ">
          <img
            className="w-10 rounded-full h-10 object-cover m-2"
            src="../../public/assets/Hacker ! Hacker Mask.jpg"
            alt="profile pic "
          />
          <select className="bg-gray-800 whitespace-pre-wrap">
            <option>Hi! Mr. Sobhen Sahoo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
