import Link from "next/link";

// Importing Utils
import { useSelector } from "react-redux";
import { selectUserAvatar, selectUserName } from "../store/slices/userSlice";

const Navigation = () => {
  const name = useSelector(selectUserName);
  const avatar = useSelector(selectUserAvatar);

  return (
    <nav className="bg-transparent min-h-max px-28 py-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img src="/favicon.png" className="h-24 mr-7" alt="Flowbite Logo" />
          <span className="self-center text-4xl font-semibold dark:text-white">
            Cockroach <br />
            Poker
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <span className="text-white capitalize font-medium">
            hello, {name}
          </span>
          <img
            className="w-20 h-20 ml-6 rounded-full"
            src={`/heads/${avatar}.png`}
            alt="User Image"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
