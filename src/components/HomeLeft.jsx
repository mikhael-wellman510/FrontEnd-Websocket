import React, { useState } from "react";
import yazid from "../assets/yazid.jpeg";
import AddKontak from "../modal/AddKontak";
import ListContact from "../modal/ListContact";
const HomeLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenListContact, setIsModalOpenListContact] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

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
    <>
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
          <div
            onClick={openModal}
            className="border p-2 bg-sky-100 cursor-pointer"
          >
            <p className="text-xs">Add Kontak</p>
          </div>
          <div
            onClick={() => setIsModalOpenListContact(true)}
            className="border p-2 bg-green-100 cursor-pointer"
          >
            <p className="text-xs">List Kontak</p>
          </div>
        </div>
      </div>

      <AddKontak isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ListContact
        isOpen={isModalOpenListContact}
        onClose={() => setIsModalOpenListContact(false)}
      />
    </>
  );
};

export default HomeLeft;
