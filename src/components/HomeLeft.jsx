import React from "react";
import yazid from "../assets/yazid.jpeg";
const HomeLeft = () => {
  const listKontak = [
    "Mikhael",
    "Deni",
    "Andre",
    "Audrey",
    "Salsa",
    "doni",
    "Elsa",
    "Fajars",
    "Khairis",
    "Bagus",
  ];
  return (
    <div className="">
      <div className="flex items-center text-green-500 text-lg px-4 font-medium border-b h-[3rem]">
        <p>WhatsApp</p>
      </div>

      <div className="flex cursor-pointer  flex-col overflow-y-auto overflow-x-hidden h-[33rem]">
        {listKontak.map((val, idx) => (
          <div key={idx} className="flex py-2 px-2 hover:bg-gray-100">
            <div className="flex gap-3 items-center">
              <div className="">
                <img className="rounded-full" src={yazid} alt="" />
              </div>
              <div className="flex-1">
                <div>
                  <p>{val}</p>
                </div>
                <div className="">
                  <p className="text-xs truncate w-[15rem]">
                    Hiii .. apa kabs Lorem ipsum dolor sit amet consectetur
                    dwdwdwdwd dwdwdwdwdwdwdwdwd
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-2 bg-gray-100 h-[2.6rem]">
        <div>
          <p className="text-xs">Chat</p>
        </div>
        <div>
          <p className="text-xs">Pembaharuan</p>
        </div>
        <div>
          <p className="text-xs">Komunitas</p>
        </div>
        <div>
          <p className="text-xs">Panggilan</p>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
