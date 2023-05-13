import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  const { option } = req.query;

  switch (option) {
    case "connection":
      if (res.socket.server.io) {
        return res.end();
      }
      const io = new Server(res.socket.server);

      io.on("connection", (socket) => {
        socket.on("join", ({ name, room }, callback) => {
          console.log(name, room);
        });
      });

      break;
    case "room":
      //verify if room is already set

      const { room } = req.query;

      break;
  }
};

export default SocketHandler;
