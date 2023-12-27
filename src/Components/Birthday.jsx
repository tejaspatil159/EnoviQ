import React from "react";

const Birthday = () => {
  const image =
    "../../public/assets/pink-balloon-background-vector-illustration-with-confetti-party-celebration_29865-4348.avif";
  const componentData = [
    { id: 1, date: "'05-Dec'", content: "'Tushar vispute'" },
    { id: 2, date: "'06-Dec'", content: "'SNabil Shaikh'" },
    { id: 3, date: "'10-Dec'", content: "'Satyam Nigam'" },
    { id: 4, date: "'11-Dec'", content: "'Amar Bawaskar'" },
    { id: 5, date: "'14-Dec'", content: "'Saurabh Chavan'" },
    { id: 6, date: "'15-Dec'", content: "'Saurabh Chavan'" },
  ];
  return (
    <div className="m-2 ">
      <div className="overflow-y-auto max-h-200  p-2 grid rounded-md shadow-md shadow-black  ">
        <div
          className="grid bg-cover  bg-transparent "
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className=" border-t-2 border-purple-600    "></p>
          <h1 className="flex justify-center bg-fuchsia-500  text-purple-900 font-semibold items-center ">
            BIRTHDAY'S OF THE MONTH
          </h1>

          <div className="overflow-y-auto h-[200px] border  p-4 scrollbar">
            {componentData.map((item) => (
              <div key={item} className="h-[20px] mb-7 bg-opacity-0">
                <div className="flex flex-wrap justify-center   ">
                  <div className="flex flex-col  justify-center text-sm font-sans bg-pink-100 w-[400px] items-center">
                    <div className="font-bold text-orange-500">
                      {item.content}
                    </div>
                    <div className="font-extrabold"> {item.date}</div>
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

export default Birthday;
