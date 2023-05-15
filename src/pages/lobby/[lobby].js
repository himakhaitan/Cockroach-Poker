import classes from "../../styles/createRoom.module.css";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectSocket } from "@/store/slices/storeSlice";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/FirebaseService";
import SOCKET_EVENTS from "@/utils/socketEvents";

const Lobby = ({ pplayers, roomName }) => {
  const [players, setPlayers] = useState(pplayers);

  const router = useRouter();
  const { lobby } = router.query;

  const socket = useSelector(selectSocket);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.REFRESH_LOBBY, (players) => {
      setPlayers(players);
    });

    socket.on(SOCKET_EVENTS.START_GAME, (data) => {
      router.push(`/game/${data}`);
    });
  });

  const startGameHandler = () => {
    socket.emit(SOCKET_EVENTS.START_GAME, lobby);
    router.push(`/game/${lobby}`);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.createRoom}`}
    >
      <Navigation />
      <h1 className="text-4xl py-32 px-40 font-medium bg-gradient-to-r from-neutral-50 to-blue-400 bg-clip-text text-transparent">
        Room Name: &nbsp; <span className="text-5xl font-bold">{roomName}</span>
      </h1>

      <div className="grid grid-cols-4 px-40 gap-8">
        {players.map((player, index) => {
          return (
            <div key={index}>
              <img
                className="mx-auto w-80 h-80 rounded-full"
                src={`/heads/${player.avatar}.png`}
              />
              <h3 className="text-white mt-5 text-center font-medium text-3xl">
                {player.name}
              </h3>
            </div>
          );
        })}
      </div>
      <button
        onClick={startGameHandler}
        className="bg-blue-400 mx-40 my-28 py-5 hover:bg-blue-300 text-gray-800 font-bold px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-white w-8 h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
        <span>Start the Game</span>
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { lobby } = context.query;

  const docRef = doc(db, "rooms", lobby);
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();

  return {
    props: {
      pplayers: data.players,
      roomName: data.roomName,
    }, // will be passed to the page component as props
  };
}

export default Lobby;
