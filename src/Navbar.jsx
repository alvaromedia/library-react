import BookContext from "./context/BookContext";
import { useContext } from "react";

import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const { books } = useContext(BookContext);

  const displayFinished = books.reduce((acc, curr) => {
    curr.read ? acc++ : acc;
    return acc;
  }, 0);

  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content justify-between px-28">
      <h1 className="flex gap-4 text-3xl font-bold text-gray-200 p-8">
        <FaBookOpen />
        <p>My library</p>
      </h1>
      <div className="flex flex-col">
        <p>Total books: {books.length} </p>
        <p>Completed books: {displayFinished} </p>
      </div>
    </nav>
  );
};
export default Navbar;
