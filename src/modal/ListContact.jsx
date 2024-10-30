import React from "react";
import user from "../assets/user.svg";
const ListContact = ({ isOpen, onClose, onSubmit }) => {
  const contact = [
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
    { nama: "mike", nomor: "089715151523" },
  ];

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
            {contact.map((val, idx) => (
              <div className="flex items-center px-6 gap-4 border border-black">
                <div className="flex items-center gap-4">
                  <div className="w-6">
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <p>Mikhael</p>
                    <p>0897161616227</p>
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
