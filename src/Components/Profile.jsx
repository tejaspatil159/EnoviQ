import React from "react";

const Profile = () => {
  return (
    <div className="flex font-Rampart flex-col justify-center items-center shadow-md shadow-black rounded-md m-2">
      <img
        className=" m-2 rounded-full w-[120px] h-[120px] object-cover "
        src="../../public/assets/Hacker ! Hacker Mask.jpg"
      />

      <h1 className="font-bold text-2xl">Mr. Sobhen Sahoo</h1>
      <h1 className="text-sm ">Employee code : EN50077</h1>

      <p className="border-t-2 my-4 border-blue-500 ">
        <h1 className="text-sm  pt-2  ">
          Designation :
          <span className="text-lg font-Rampart"> S/w Developer</span>
        </h1>
      </p>
    </div>
  );
};

export default Profile;
