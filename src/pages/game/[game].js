import { useState } from "react";
import classes from "../../styles/home.module.css";
import Navigation from "@/components/Navigation";

import Card from "@/components/Card";

const Playing = () => {
  // When a player plays the card to another player

  return (
    <div className="">
      <h5 className="text-white mb-3">Choose the Card to Play</h5>

      <div class="inline-block relative w-full mb-10">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
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
          <option>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
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
          <option>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
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

const GetPlayed = () => {
  // When a player gets played by another player

  return (
    <div className="">
      <h5 className="text-white mb-3">You were Played. Choose Action</h5>

      <div class="inline-block relative w-full mb-10">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
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

const Game = ({}) => {
  const [isPlayed, setIsPlayed] = useState(true);

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.home}`}
    >
      <Navigation />
      <div className="w-full">
        <h1 className="bg-gradient-to-r from-neutral-50 to-yellow-500 bg-clip-text text-transparent text-center font-bold text-6xl mb-10">
          Game Name
        </h1>
        <h1 className="text-white text-left px-40 font-semibold text-4xl">
          Your Cards
        </h1>
        <div className="grid grid-cols-8 gap-10 mt-10 px-40">
          <Card type="RAT" />
          <Card type="SCORPION" />
          <Card type="BUG" />
          <Card type="TORD" />
          <Card type="RAT" />
          <Card type="SCORPION" />
          <Card type="COCKROACH" />
          <Card type="BEE" />
          <Card type="SCORPION" />
          <Card type="COCKROACH" />
          <Card type="BEE" />
          <Card type="SCORPION" />
          <Card type="BUG" />
          <Card type="TORD" />
          <Card type="RAT" />
          <Card type="BEE" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-20 px-40 py-20">
          <div>
            <h1 className="text-white text-left font-semibold text-4xl">
              Players
            </h1>
            <div className="grid grid-cols-1 mt-10">
              <div className="rounded-lg  bg-opacity-70  px-7 py-5 bg-zinc-800 mb-5">
                <div className="flex place-content-between items-center border-b-2 border-yellow-700 pb-5">
                  <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                  <p className="text-gray-200 font-medium">Himanshu</p>
                </div>
                <div className="grid grid-cols-8 gap-2 mt-4">
                  <Card type="RAT" />
                  <Card type="SCORPION" />
                  <Card type="BUG" />
                  <Card type="TORD" />
                  <Card type="RAT" />
                  <Card type="SCORPION" />
                  <Card type="COCKROACH" />
                  <Card type="BEE" />
                  <Card type="SCORPION" />
                  <Card type="COCKROACH" />
                  <Card type="BEE" />
                  <Card type="SCORPION" />
                  <Card type="BUG" />
                  <Card type="TORD" />
                  <Card type="RAT" />
                  <Card type="BEE" />
                </div>
              </div>
              <div className="rounded-lg  bg-opacity-70  px-7 py-5 bg-zinc-800 mb-5">
                <div className="flex place-content-between items-center border-b-2 border-yellow-700 pb-5">
                  <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                  <p className="text-gray-200 font-medium">Himanshu</p>
                </div>
                <div className="grid grid-cols-8 gap-2 mt-4">
                  <Card type="RAT" />
                  <Card type="SCORPION" />
                  <Card type="TORD" />
                  <Card type="RAT" />
                  <Card type="BEE" />
                </div>
              </div>
              <div className="rounded-lg  bg-opacity-70  px-7 py-5 bg-zinc-800 mb-5">
                <div className="flex place-content-between items-center border-b-2 border-yellow-700 pb-5">
                  <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                  <p className="text-gray-200 font-medium">Himanshu</p>
                </div>
                <div className="grid grid-cols-8 gap-2 mt-4">
                  <Card type="RAT" />
                  <Card type="SCORPION" />
                  <Card type="BUG" />
                  <Card type="TORD" />
                  <Card type="RAT" />
                  <Card type="SCORPION" />
                  <Card type="COCKROACH" />
                  <Card type="BEE" />
                  <Card type="SCORPION" />

                  <Card type="TORD" />
                  <Card type="RAT" />
                  <Card type="BEE" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-left font-semibold text-4xl mb-10">
              Actions
            </h1>
            {isPlayed ? <GetPlayed /> : <Playing />}
          </div>
          <div>
            <h1 className="text-white text-left font-semibold text-4xl mb-10">
              Game Logs
            </h1>
            <div className="h-96 rounded-2xl overflow-auto">
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
              </p>
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
              </p>
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
              </p>
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
              </p>
              <p className="text-zinc-800 font-medium bg-gray-200 py-2 px-4 mb-4 bg-opacity-80 rounded">
                - Raj played the card to you.
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
