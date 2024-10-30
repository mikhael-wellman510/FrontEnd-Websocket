import React, { useState } from "react";
import axios from "axios";
import { URL } from "../dami/Url";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${URL}/users/addUser`, {
        phoneNumber: phoneNumber,
        username: userName,
      });

      const name = data.data.data.userName;
      const phone = data.data.data.phoneNumber;
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("phone", JSON.stringify(phone));

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-green-100">
      <form onSubmit={HandleSubmit}>
        <div className="flex items-center justify-center pt-5 pb-5 gap-10 px-8 flex-col bg-red-100 rounded">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p>Phone Number</p>
              <input
                className="h-[2rem] w-[22rem] rounded"
                type="text"
                style={{ outline: "none", appearance: "textfield" }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Username</p>
              <input
                className="h-[2rem] w-[22rem] rounded"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-orange-300 rounded px-4 py-2">
            <button type="submit">Register Number</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
