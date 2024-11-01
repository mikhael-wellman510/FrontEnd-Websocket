import React, { useEffect, useState } from "react";
import user from "../assets/user.svg";
import axios from "axios";
import { URL } from "../dami/Url";
const ListContact = ({ isOpen, onClose, onSubmit }) => {
  const [listKontak, setListKontak] = useState([]);

  const fetchContacts = async () => {
    const getId = JSON.parse(localStorage.getItem("id"));
    try {
      const response = await axios.get(`${URL}/contacts/listContacts/${getId}`);
      setListKontak(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchContacts();
  }, [isOpen]);

  if (!isOpen) {
    return;
  }

  return (
    <>
      <div className="fixed bg-black bg-opacity-[0.86] inset-0 w-screen h-screen z-10 flex justify-center items-center">
        <div className="bg-red-100 rounded py-4">
          <div className="flex justify-center pb-2">
            <p>List Contact Anda</p>
          </div>
          <div className="flex flex-col gap-2 px-6">
            {listKontak.map((val, idx) => (
              <div
                key={idx}
                className="flex items-center px-6 gap-4 border border-black"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6">
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <p>{val.name}</p>
                    <p>{val.contactsId.phoneNumber}</p>
                  </div>
                </div>

                <div className="border border-black p-1 rounded bg-green-300 cursor-pointer">
                  <p className="text-xs">Send Message</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center pt-4">
            <button
              className="w-[5rem] h-[2rem] bg-red-300 rounded"
              onClick={() => onClose(false)}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContact;
