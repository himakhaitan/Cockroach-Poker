import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectSocket } from "@/store/slices/storeSlice";

import SOCKET_EVENTS from "@/utils/socketEvents";

const GetPlayed = ({ onReplyChange }) => {
  const [options, setOptions] = useState([]);
  // When a player gets played by another player
  const socket = useSelector(selectSocket);

  useEffect(() => {

    socket.on(SOCKET_EVENTS.PLAYED, (data) => {
      setOptions(data);
    });

  }, []);

  return (
    <div className="">
      <h5 className="text-white mb-3">You were Played. Choose Action</h5>

      <div class="inline-block relative w-full mb-10">
        <select
          onChange={onReplyChange}
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map((option) => {
            return <option value={option.id}>{option.name}</option>;
          })}
          <option value="true">SAY TRUE</option>
          <option value="false">SAY FALSE</option>
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

export default GetPlayed;
