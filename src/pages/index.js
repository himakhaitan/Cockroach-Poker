import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Navigation from "../components/Navigation";
import classes from "../styles/home.module.css";
import randomNumber from "@/utils/randomNumber";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Generating Random Name and Avatar
    dispatch({type: 'user/setName', payload: randomNumber(0, 52)});
    dispatch({type: 'user/setAvatar', payload: randomNumber(1, 9)});

  }, []);

  return (
    <div
      className={`h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.home}`}
    >
      <Navigation/>
      <div className="grid grid-cols-2 gap-8 px-40 py-60 items-center">
        <div className="">
          <h2 className="bg-gradient-to-r from-neutral-50 to-yellow-500 bg-clip-text text-transparent text-8xl font-bold">
            It's a fly.
          </h2>
          <h1 className="bg-gradient-to-r from-neutral-50 to-blue-200 bg-clip-text text-transparent text-8xl mt-5 font-bold">
            It's a cockroach.
          </h1>
          <h4 className="text-white text-4xl mt-28 font-medium">
            Will you call the bluff or pass on a trick of your own?
          </h4>

          <div className="mt-20 flex  gap-5">
            <button className="bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-white w-8 h-8 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
              <span>Start a Game</span>
            </button>
            <button className="bg-transparent hover:bg-white-500 text-white-700 font-semibold text-white py-2 px-6 border hover:border-white border-transparent rounded">
              <svg
                className=" fill-red-500 w-8 h-8 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
              <span>Join a Game</span>
            </button>
          </div>
        </div>
        <div className="">
          <img className={classes.homeimg} src="/images/cards.png" />
        </div>
      </div>
    </div>
  );
}
