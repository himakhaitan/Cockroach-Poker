import { useEffect, useState } from "react";
import classes from "../../styles/home.module.css";
import Navigation from "@/components/Navigation";
import { useSelector } from "react-redux";
import { selectSocket } from "@/store/slices/storeSlice";
import Playing from "@/components/Form/Playing";
import GetPlayed from "@/components/Form/GetPlayed";
import Card from "@/components/Card";
import SOCKET_EVENTS from "@/utils/socketEvents";

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

import { useRouter } from "next/router";
import { selectUserName } from "@/store/slices/userSlice";
const Game = ({}) => {
  // Playing States
  const [isPlayed, setIsPlayed] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);

  const [cards, setCards] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [players, setPlayers] = useState([]);

  // Form States
  const [playingCard, setPlayingCard] = useState(null);
  const [bluffingCard, setBluffingCard] = useState(null);
  const [playedPlayer, setPlayedPlayer] = useState(null);

  const [reply, setReply] = useState(null);

  // Logs
  const [logs, setLogs] = useState(["Game Started"]);

  // Input Change Handlers
  const playingCardHandler = (e) => {
    setPlayingCard(e.target.value);
  };

  const bluffHandler = (e) => {
    setBluffingCard(e.target.value);
  };

  const playedPlayerHandler = (e) => {
    setPlayedPlayer(e.target.value);
  };

  const replyHandler = (e) => {
    setReply(e.target.value);
  };

  const router = useRouter();
  const name = useSelector(selectUserName);
  const socket = useSelector(selectSocket);
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

    socket.on(SOCKET_EVENTS.SET_PLAYED, (data) => {
      setIsPlayed(data);
    });

    socket.on(SOCKET_EVENTS.SET_PLAYING, (data) => {
      setIsPlaying(data);
    });
  }, []);

  const playCardHandler = () => {
    socket.emit(SOCKET_EVENTS.INIT_TURN, {
      roomId: game,
      playedCard: playingCard,
      bluffingCard: bluffingCard,
      playedPlayer: playedPlayer,
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
                    {player.lost.map((card,index) => {
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
            {isPlaying && (
              <Playing
                onInitTurn={playCardHandler}
                bluffingCard={bluffingCard}
                bluffHandler={bluffHandler}
                playingCard={playingCard}
                playingCardHandler={playingCardHandler}
                playedPlayer={playedPlayer}
                playedPlayerHandler={playedPlayerHandler}
                players={players}
                cards={cards.filter(onlyUnique)}
              />
            )}
            {isPlayed && (
              <GetPlayed reply={reply} replyHandler={replyHandler} />
            )}
          </div>
          <div>
            <h1 className="text-white text-left font-semibold text-4xl mb-10">
              Game Logs
            </h1>
            <div className="h-96 rounded-2xl overflow-auto">
              {logs.map((log, index) => {
                return (
                  <p
                    key={index}
                    className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded"
                  >
                    - {log}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
