import classes from "../../styles/home.module.css";
import Navigation from "@/components/Navigation";

import Card from "@/components/Card";

const Game = ({}) => {
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
        <div className="mt-10 grid grid-cols-3 gap-8 px-40 py-20">
          <div>
            <h1 className="text-white text-left font-semibold text-4xl">
              Players
            </h1>
            <div className="grid grid-cols-1 mt-10">
              <div className="rounded-lg flex bg-opacity-70 place-content-between items-center px-7 py-5 bg-zinc-800 mb-5">
                <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                <p className="text-gray-200 font-medium">Himanshu</p>
              </div>
              <div className="rounded-lg flex bg-opacity-70 place-content-between items-center px-7 py-5 bg-zinc-800 mb-5">
                <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                <p className="text-gray-200 font-medium">Himanshu</p>
              </div>
              <div className="rounded-lg flex bg-opacity-70 place-content-between items-center px-7 py-5 bg-zinc-800 mb-5">
                <img className="h-20 w-20 rounded-full" src="/heads/1.png" />
                <p className="text-gray-200 font-medium">Himanshu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
