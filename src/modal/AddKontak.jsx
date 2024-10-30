import axios from "axios";
import React, { useState } from "react";
import { URL } from "../dami/Url";

const AddKontak = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  if (!isOpen) {
    return;
  }
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem("id"));
    try {
      const response = await axios.post(
        `${URL}/contacts/addContact`,
        {
          name: name,
          number: phoneNumber,
          userId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set the content type
          },
        }
      );
    } catch (error) {
      console.log("Error : ", error.response.data.message);
    }
    onClose(false);
  };

  return (
    <>
      <div className="fixed bg-black bg-opacity-[0.86] inset-0 w-screen h-screen z-10 flex justify-center items-center">
        <div className=" bg-red-100 rounded flex flex-col">
          <div className="flex justify-center items-center pb-4 pt-6">
            <p>Add Kontak</p>
          </div>

          <form onSubmit={HandleSubmit}>
            <div className="px-4 py-2 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p>Name : </p>
                <input
                  className="w-full rounded outline-none px-2"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Phone Number : </p>
                <input
                  className="w-full rounded outline-none px-2"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center mt-8 pb-6 ">
              <button
                type="submit"
                className="h-[2rem] w-[6rem] bg-sky-100 rounded"
              >
                Add
              </button>
              <button
                onClick={() => onClose(false)}
                className="h-[2rem] w-[6rem] bg-green-100 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddKontak;
