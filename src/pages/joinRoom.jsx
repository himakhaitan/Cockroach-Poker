import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSocket } from "../store/slices/storeSlice";
import { selectUserAvatar, selectUserName } from "@/store/slices/userSlice";
import classes from "../styles/createRoom.module.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import SOCKET_EVENTS from "@/utils/socketEvents";
import { useRouter } from "next/router";

const RoomItem = ({}) => {
  return (
    <div className="mt-5 flex justify-between items-center px-12 py-6 bg-neutral-900 rounded opacity-90">
      <span>1</span>
      <span>Gotcha Hang</span>
      <span>3/4</span>
      <button class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-10 rounded">
        Join
      </button>
    </div>
  );
};

const JoinRoom = ({}) => {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  const socket = useSelector(selectSocket);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const joinRoomHandler = () => {
    socket.emit(SOCKET_EVENTS.JOIN_ROOM, {
      roomId: roomId,
      userName,
      userAvatar,
    });

    socket.on(SOCKET_EVENTS.PLAYER_JOINED, (data) => {
      router.push(`/lobby/${data.roomId}`);
    })
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.createRoom}`}
    >
      <Navigation />
      <div className="grid grid-cols-2 gap-8 px-40 py-32 items-center">
        <div>
          <h2 className="bg-gradient-to-r from-neutral-50 to-blue-500 bg-clip-text text-transparent text-8xl font-bold">
            Join Now.
          </h2>
          <h4 className="text-white text-4xl mt-20 font-normal">
            The deck includes 64 cards. Deal them!
          </h4>
          <Link href="/createRoom" className="inline-flex items-stretch">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold mt-9 py-5 px-4 rounded inline-flex items-center">
              <svg
                className="fill-white w-8 h-8 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
              </svg>
              <span className=" font-normal ">Create Room</span>
            </button>
          </Link>
        </div>
        <div>
          <form className="w-full max-w-4xl">
            <div className="flex items-center border-b border-white py-3">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter Room ID"
                aria-label="Full name"
                value={roomId}
                onChange={handleRoomIdChange}
              />
              <button
                className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-2xl border-4 text-white py-3 px-6 rounded"
                type="button"
                onClick={joinRoomHandler}
              >
                Join Room
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-white w-full mt-20 py-20 px-40">
        <h1 className="bg-gradient-to-r from-neutral-50 mb-10 text-center to-yellow-500 bg-clip-text text-transparent text-6xl font-bold">
          Active Rooms
        </h1>
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </div>
  );
};

export default JoinRoom;
