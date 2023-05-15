import classes from "../../styles/createRoom.module.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";

import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/FirebaseService";

const Lobby = ({ players, roomName }) => {
  const router = useRouter();
  const { lobby } = router.query;

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.createRoom}`}
    >
      <Navigation />
      <h1 className="text-4xl py-32 px-40 font-medium bg-gradient-to-r from-neutral-50 to-blue-400 bg-clip-text text-transparent">
        Room Name: &nbsp; <span className="text-5xl font-bold">{roomName}</span>
      </h1>

      <div className="grid grid-cols-4 px-40 gap-8">
        {players.map((player) => {
          return (
            <div>
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
      <Link href="/game/game">
        <button className="bg-blue-400 mx-40 my-28 py-5 hover:bg-blue-300 text-gray-800 font-bold px-4 rounded inline-flex items-center">
          <svg
            className="fill-white w-8 h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <span>Start the Game</span>
        </button>
      </Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { lobby } = context.query;

  const docRef = doc(db, "rooms", lobby);
  const docSnap = await getDoc(docRef);

  let data = {
    players: [
      {
        name: "Molly",
        avatar: 2,
      },
      {
        name: "Khaitan",
        avatar: 3,
      }
    ],
    roomName: "Fata Kalpok",
  };
  return {
    props: {
      players: data.players,
      roomName: data.roomName,
    }, // will be passed to the page component as props
  };
}

export default Lobby;
