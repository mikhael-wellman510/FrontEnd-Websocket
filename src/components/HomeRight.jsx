import React, { useEffect, useRef, useState } from "react";
import user from "../assets/user.svg";
import SendButton from "../assets/send.png";

import SockJS from "sockjs-client/dist/sockjs";
import { Client } from "@stomp/stompjs";
// https://medium.com/@deshanipalliyaguruge2000/sending-broadcast-notifications-with-websocket-spring-boot-react-stomp-and-sockjs-50d99352c5bb
const HomeRight = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const stompClientRef = useRef(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/gs-guide-websocket");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => {
        console.log("Ini str : ", str);
      },
      onConnect: () => {
        console.log("Connect To Websocket");
        // Ini Get Message
        stompClient.subscribe("/topic/greetings", (message) => {
          console.log("Received Message", JSON.parse(message.body));
        });
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const stompClient = stompClientRef.current;
    console.log("cek connected : ", stompClient.connected);

    if (stompClient && stompClient.connected) {
      // Ini Kirim Pesan
      stompClient.publish({
        destination: "/app/hello",
        body: JSON.stringify(message),
      });
    }
  };
  return (
    <div className="h-screen">
      <div className="flex items-center gap-4 px-2 h-[7.7%] w-full bg-gray-100">
        <div className="w-[1.5rem]">
          <img src={user} alt="" />
        </div>
        <div>
          <p>Yazid Irfan</p>
        </div>
      </div>
      <div className="flex bg-white h-[85%]">
        <p>Tes</p>
      </div>
      <form onSubmit={HandleSubmit}>
        <div className="relative flex items-center px-2 bg-gray-200 h-[7.3%]">
          <input
            className="h-[2rem] w-full rounded"
            style={{ outline: "none" }}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="absolute top-[0.7rem] right-5">
            <button type="submit">
              <img className="w-[1.5rem]" src={SendButton} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeRight;
