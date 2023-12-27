import React from "react";

const JoiningAnniversarry = () => {
  const image =
    "../../public/assets/people-celebrating-young-men-women-dance-celebration-party-joyful-balloons-confetti-illustration_102902-1816.avif";
  const componentData = [
    { id: 1, date: "'01-Dec'", content: "'Saurabh Chavan'" },
    { id: 2, date: "'07-Dec'", content: "'Sunny kadam'" },
    { id: 3, date: "'12-Dec'", content: "'Siddhesh Dhuri'" },
    { id: 4, date: "'12-Dec'", content: "'Akhilesh Jambhale'" },
    { id: 5, date: "'14-Dec'", content: "'Saurabh Chavan'" },
    { id: 6, date: "'15-Dec'", content: "'Saurabh Chavan'" },
  ];
  return (
    <div className="m-2 ">
      <div className="overflow-y-auto max-h-200  p-2 grid rounded-md shadow-md shadow-black  ">
        <div
          className="grid   bg-transparent "
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className=" border-t-2 border-pink-600    "></p>
          <h1 className="flex justify-center bg-pink-300  text-pink-600 font-semibold items-center ">
            JOINING ANNIVERSARY'S OF THE MONTH
          </h1>

          <div className="overflow-y-auto h-[200px] border  p-4 scrollbar">
            {componentData.map((item) => (
              <div key={item} className="h-[20px] mb-7 bg-opacity-0">
                <div className="flex flex-wrap justify-center   ">
                  <div className="flex flex-col  justify-center text-sm font-sans bg-pink-100 w-[400px] items-center">
                    <div className="font-extrabold"> {item.date}</div>
                    <div className="font-bold text-orange-500">
                      {" "}
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoiningAnniversarry;
