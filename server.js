import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8941 });

server.on("connection", (socket) => {
  // send a message to the client
  socket.send(JSON.stringify({
    type: "hello from server",
    content: [ 1, "2" ]
  }));

  // receive a message from the client
  socket.on("message", (data) => {
    const packet = JSON.parse(data);

    switch (packet.type) {
      case "hello from client":
        console.log("Hello From Client!")
        break;
    }
  });
});