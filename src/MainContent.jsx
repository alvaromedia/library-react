import { useContext } from "react";
import BookContext from "./context/BookContext";

import BookItem from "./BookItem";

const MainContent = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="bg-slate-900 w-full p-8">
      <div className=" grid grid-cols-5 items-center text-center gap-5 p-2">
        <h3 className="text-2xl text-info">Title</h3>
        <h3 className="text-2xl text-info">Author</h3>
        <h3 className="text-2xl text-info">Pages</h3>
        <h3 className="text-2xl text-info">Finished</h3>
      </div>

      <div className="grid grid-cols-5 gap-2 items-center text-center">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
