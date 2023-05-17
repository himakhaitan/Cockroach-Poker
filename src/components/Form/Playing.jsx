import { cardNames } from "@/game/card";
import { useSelector } from "react-redux";
import { selectUserName } from "@/store/slices/userSlice";

const Playing = ({
  cards,
  players,
  bluffingCard,
  bluffHandler,
  playingCard,
  playingCardHandler,
  playedPlayer,
  playedPlayerHandler,
}) => {
  // When a player plays the card to another player

  const name = useSelector(selectUserName);

  return (
    <div className="">
      <h5 className="text-white mb-3">Choose the Card to Play</h5>

      <div className="inline-block relative w-full mb-10">
        <select
          value={playingCard}
          onChange={playingCardHandler}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {cards.map((card, index) => {
            return (
              <option key={index} value={card}>
                {card}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <h5 className="text-white mb-3">Select the Player to Play</h5>
      <div class="inline-block relative w-full mb-10">
        <select
          value={playedPlayer}
          onChange={playedPlayerHandler}
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {players.map((player, index) => {
            if (player.name !== name) {
              return (
                <option key={index} value={player.name}>
                  {player.name}
                </option>
              );
            }
          })}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <h5 className="text-white mb-3">Bluff Prompt</h5>
      <div className="inline-block relative w-full mb-10">
        <select
          value={bluffingCard}
          onChange={bluffHandler}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {cardNames.map((card, index) => {
            return (
              <option key={index} value={card}>
                {card}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <button className="bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          className="fill-white w-8 h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
        <span>Play your Turn</span>
      </button>
    </div>
  );
};

export default Playing;
