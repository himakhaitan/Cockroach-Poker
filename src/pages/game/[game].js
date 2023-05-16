// Component Management
import { useEffect, useState } from "react";

// Styles
import classes from "../../styles/home.module.css";

// Redux Imports
import { useSelector } from "react-redux";
import { selectSocket } from "@/store/slices/storeSlice";
import { selectUserName } from "@/store/slices/userSlice";

// Components
import Playing from "@/components/Form/Playing";
import GetPlayed from "@/components/Form/GetPlayed";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";

// Helper
import SOCKET_EVENTS from "@/utils/socketEvents";
import { useRouter } from "next/router";

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const Game = ({}) => {
  const [isPlayed, setIsPlayed] = useState(null);
  const [cards, setCards] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [players, setPlayers] = useState([]);

  const [bluff, setBluff] = useState();
  const [playedCard, setPlayedCard] = useState();
  const [playedUser, setPlayedUser] = useState();

  const router = useRouter();
  const name = useSelector(selectUserName);
  const socket = useSelector(selectSocket);

  const [reply, setReply] = useState();

  const [logStock, setLogStock] = useState(["Game Started"]);

  const { game } = router.query;

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.LOAD_CARDS_REQUEST, {
      roomId: game,
      name: name,
    });

    socket.on(SOCKET_EVENTS.LOAD_CARDS, (data) => {
      setCards(data);
    });

    socket.on(SOCKET_EVENTS.UPDATE_BOARD, (data) => {
      setRoomName(data.roomName);
      setPlayers(data.players);
    });

    socket.on(SOCKET_EVENTS.SET_TURN, (data) => {
      setIsPlayed(!data);
    });

    socket.on(SOCKET_EVENTS.GAME_LOG, (data) => {
      setLogStock((prev) => [...prev, data]);
    });
  }, []);

  function onBluffChange(e) {
    setBluff(e.target.value);
  }

  const onReplyChange = (e) => {
    setReply(e.target.value);
  };

  function onPlayedPlayerChange(e) {
    setPlayedUser(e.target.value);
  }

  function onPlayedCardChange(e) {
    setPlayedCard(e.target.value);
  }

  const onPlayHandler = () => {
    socket.emit(SOCKET_EVENTS.INIT_TURN, {
      roomId: game,
      playedCard: playedCard,
      playedPlayer: playedUser,
      bluff: bluff,
    });
  };

  const onBluffHandler = () => {
    socket.emit(SOCKET_EVENTS.REPLY_TURN, {
      roomId: game,
      reply,
    });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.home}`}
    >
      <Navigation />
      <div className="w-full">
        <h1 className="bg-gradient-to-r from-neutral-50 to-yellow-500 bg-clip-text text-transparent text-center font-bold text-6xl mb-10">
          {roomName}
        </h1>
        <h1 className="text-white text-left px-40 font-semibold text-4xl">
          Your Cards
        </h1>
        <div className="grid grid-cols-8 gap-10 mt-10 px-40">
          {cards.map((card, index) => {
            return <Card key={index} type={card} />;
          })}
        </div>
        <div className="mt-10 grid grid-cols-3 gap-20 px-40 py-20">
          <div>
            <h1 className="text-white text-left font-semibold text-4xl">
              Players
            </h1>
            <div className="grid grid-cols-1 mt-10">
              {players.map((player, index) => {
                return (
                  <div key={index} className="rounded-lg  bg-opacity-70  px-7 py-5 bg-zinc-800 mb-5">
                    <div className="flex place-content-between items-center border-b-2 border-yellow-700 pb-5">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={`/heads/${player.avatar}.png`}
                      />
                      <p className="text-gray-200 font-medium">{player.name}</p>
                    </div>
                    {player.lost.map((card, index) => {
                      return <Card key={index} type={card} />;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-white text-left font-semibold text-4xl mb-10">
              Actions
            </h1>
            {isPlayed ? (
              <GetPlayed onReplyChange={onReplyChange} />
            ) : (
              <Playing
                onPlayHandler={onPlayHandler}
                bluffChange={onBluffChange}
                cardChange={onPlayedCardChange}
                playerChange={onPlayedPlayerChange}
                players={players}
                cards={cards.filter(onlyUnique)}
              />
            )}
          </div>
          <div>
            <h1 className="text-white text-left font-semibold text-4xl mb-10">
              Game Logs
            </h1>
            <div className="h-96 rounded-2xl overflow-auto">
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - GAME STARTED
              </p>
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
