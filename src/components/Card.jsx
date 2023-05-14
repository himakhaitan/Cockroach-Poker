import { cardImages } from "@/game/card";

const Card = ({ type }) => {
  return (
    <div className=" p-2 bg-white rounded-xl transition ease-in-out hover:scale-110	">
      <img src={"/cards/" + cardImages[type]} />
    </div>
  );
};

export default Card;
