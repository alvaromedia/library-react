import { useContext } from "react";
import BookContext from "./context/BookContext";

const BookItem = ({ book }) => {
  const { handleDelete } = useContext(BookContext);

  return (
    <>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.pages || "N/A"}</p>
      <p>{book.read ? "Yes" : "Not yet"}</p>
      <button
        onClick={() => handleDelete(book.id)}
        className="btn btn-ghost text-error"
      >
        Delete
      </button>
    </>
  );
};
export default BookItem;
