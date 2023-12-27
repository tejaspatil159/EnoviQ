import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const ImportantAnnouncement = () => {
  const componentData = [
    { id: 1, content: "Test Announcement" },
    { id: 2, content: "Test Announcement" },
    { id: 3, content: "Test Announcement" },
    { id: 4, content: "Test Announcement" },
    { id: 5, content: "Test Announcement" },
    { id: 6, content: "Test Announcement" },
  ];
  return (
    <div className="m-2">
      <div className="overflow-y-auto max-h-200  p-2 grid rounded-md shadow-md shadow-black  ">
        <div className="grid  bg-white  rounded-full  ">
          <div>
            <h1 className="flex justify-center bg-sky-700 text-white items-center ">
              <FontAwesomeIcon icon={faBullhorn} className="p-2" />
              Important Announcement
            </h1>
          </div>

          <div className="overflow-y-auto h-[130px] border  p-4 scrollbar">
            {componentData.map((item) => (
              <div key={item} className="h-[20px] mb-2  bg-white">
                <div className="border-b  my-4   ">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantAnnouncement;
