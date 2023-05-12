import { Server } from "socket.io";

// Socket Creation Handler
const SocketHandler = (req, res) => {

  // Get the option from the query
  let option = req.query.option;

  // Handle the option
  switch (option) {

    // Handle Connection
    case "connection":

      if (res.socket.server.io) {
        console.log("Socket.io already running, skipping...");
        return res.end();
      }

      const io = new Server(res.socket.server);
      res.socket.server.io = io;
      
      break;

    // Handle Rooms
    case "room":
      break;
  }
}

export default SocketHandler;