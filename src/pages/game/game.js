import classes from "../../styles/home.module.css";
import Navigation from "@/components/Navigation";

const Game = ({}) => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-black via-slate-800 to-red-900 ${classes.home}`}
    >
      <Navigation />
    </div>
  );
};

export default Game;