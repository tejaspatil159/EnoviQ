import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

const image =
  "../../public/assets/businessman-planning-events-deadlines-agenda_74855-6274.avif";

const Attendance = () => {
  return (
    <div
      className="flex flex-col object-contain  m-2 shadow-md shadow-black rounded-md p-2  "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div>
        <h1 className="flex justify-center bg-sky-700 text-white items-center ">
          <FontAwesomeIcon icon={faClipboardUser} className="p-2" />
          Attendance
        </h1>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white text-sm p-1 rounded-md m-1">
          Calendar View
        </button>
      </div>
      <p className="border-t-2 "></p>
      <div className="p-3 flex">
        <label className="pr-6">Check-In</label>
        <ToggleSwitch SwitchName="Check-In" />
      </div>
      <p className="border-t-2 "></p>
      <div className="p-3 flex">
        <label className="pr-2">Lunch Start</label>
        <ToggleSwitch SwitchName="Check-In" />
      </div>{" "}
      <p className="border-t-2 "></p>
      <div className="p-3 flex">
        <label className="pr-4">Lunch End</label>
        <ToggleSwitch SwitchName="Check-In" />
      </div>{" "}
      <p className="border-t-2 "></p>
      <div className="p-3 flex">
        <label className="pr-4">Check-Out</label>
        <ToggleSwitch SwitchName="Check-In" />
      </div>{" "}
    </div>
  );
};

export default Attendance;
