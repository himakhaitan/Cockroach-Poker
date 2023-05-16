import { cardNames } from "@/game/card";
import { useSelector } from "react-redux";
import { selectUserName } from "@/store/slices/userSlice";

const Playing = ({ cards, players }) => {
  // When a player plays the card to another player

  const name = useSelector(selectUserName);
  console.log(players);

  return (
    <div className="">
      <h5 className="text-white mb-3">Choose the Card to Play</h5>

      <div class="inline-block relative w-full mb-10">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {cards.map((card) => {
            return <option value={card}>{card}</option>;
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
      <h5 className="text-white mb-3">Select the Player to Play</h5>
      <div class="inline-block relative w-full mb-10">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {players.map((player) => {
            if (player.name !== name) {
              return <option value={player.name}>{player.name}</option>;
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
      <div class="inline-block relative w-full mb-10">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {cardNames.map((card) => {
            return <option value={card}>{card}</option>;
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
    </div>
  );
};

export default Playing;