const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5500 });
// const wss = new WebSocket.Server({ port:5000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    console.log("Received: ", data);
    ws.send('lux:12.4');
    ws.send('bmono:164.2');
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

});