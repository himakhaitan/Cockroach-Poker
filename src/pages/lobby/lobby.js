import classes from "../../styles/home.module.css";
import Navigation from "@/components/Navigation";

const Lobby = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.home}`}
    >
      <Navigation />
      <h1 className="text-4xl py-32 px-40 font-medium bg-gradient-to-r from-neutral-50 to-blue-400 bg-clip-text text-transparent">
        Room Name: &nbsp;{" "}
        <span className="text-5xl font-bold">Motcha Geek</span>
      </h1>

      <div className="grid grid-cols-4 px-40 gap-8">
        <div>
          <img className="mx-auto w-80 h-80 rounded-full" src="/heads/2.png" />
          <h3 className="text-white mt-5 text-center font-medium text-3xl">
            Molly
          </h3>
        </div>
        <div>
          <img className="mx-auto w-80 h-80 rounded-full" src="/heads/5.png" />
          <h3 className="text-white mt-5 text-center font-medium text-3xl">
            Cooper
          </h3>
        </div>
        <div>
          <img className="mx-auto w-80 h-80 rounded-full" src="/heads/6.png" />
          <h3 className="text-white mt-5 text-center font-medium text-3xl">
            Whiskey
          </h3>
        </div>
        <div>
          <img className="mx-auto w-80 h-80 rounded-full" src="/heads/9.png" />
          <h3 className="text-white mt-5 text-center font-medium text-3xl">
            Madison
          </h3>
        </div>
      </div>
      <button className="bg-blue-400 mx-40 my-40 py-5 hover:bg-blue-300 text-gray-800 font-bold px-4 rounded inline-flex items-center">
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

export default Lobby;
