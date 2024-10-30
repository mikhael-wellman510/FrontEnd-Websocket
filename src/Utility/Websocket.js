// import SockJS from "sockjs-client/dist/sockjs";
// // import { Client } from "@stomp/stompjs";
// import { over } from "stompjs";
// // let stompClient = null;
// var stompClient = null;
// export const ConnectWebsocket = () => {
//   const sock = new SockJS("http://localhost:8080/gs-guide-websocket");
//   stompClient = over(sock);

//   stompClient.connect({}, onConnected, onError);
// };

// const onConnected = (frame) => {
//   console.log("-- ini frame :", frame);

//   stompClient.subscribe("/topic/greetings", get);
// };

// // Mendapatkan Isi Pesan
// const get = (msg) => {
//   console.log("Isi Pesan : ", msg);
// };

// // Menangani Error
// const onError = (err) => {
//   console.log("Error Bos ", err);
// };

// export const sendMessage = (message) => {
//   if (stompClient && stompClient.connected) {
//     stompClient.send("/app/hello", {}, JSON.stringify(message));
//   } else {
//     console.log("Stomp Client Is not Connected");
//   }
// };

// // Fungsi untuk menutup koneksi WebSocket
// export const disconnectWebSocket = () => {
//   if (stompClient) {
//     stompClient.disconnect(() => {
//       console.log("Disconnected from WebSocket");
//     });
//   }
// };
