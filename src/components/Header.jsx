import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 px-20 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="text-2xl font-bold text-red-500 ">
        <Link to={"/"}>MOVIE</Link>
      </div>
      <ul className="flex font-bold">
        <li className="hover:text-red-500">
          <Link to={"/search"}>
            <Search />
          </Link>
        </li>
      </ul>
    </header>
  );
}
