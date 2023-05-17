const GetPlayed = ({ reply, replyHandler , replyCardHandler}) => {
  // When a player gets played by another player

  return (
    <div className="">
      <h5 className="text-white mb-3">You were Played. Choose Action</h5>

      <div className="inline-block relative w-full mb-10">
        <select
          value={reply}
          onChange={replyHandler}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={true}>SAY TRUE</option>
          <option value={false}>SAY FALSE</option>
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
      <button onClick={replyCardHandler} className="bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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

export default GetPlayed;
