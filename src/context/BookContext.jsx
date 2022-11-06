import { createContext } from "react";
import { useRef, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const pagesRef = useRef();
  const readRef = useRef();

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Lord Of the Rings",
      author: "J.R.R. Tolkien",
      pages: 500,
      read: false,
    },
    {
      id: 2,
      title: "Harry Potter and the Philosophers Stone",
      author: "J.K. Rowling",
      pages: 300,
      read: true,
    },
    {
      id: 3,
      title: "Amnesia",
      author: "Chuck Palahniuk",
      pages: 500,
      read: true,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      author: authorRef.current.value,
      title: titleRef.current.value,
      pages: pagesRef.current.value,
      read: readRef.current.checked,
      id: new Date(),
    };

    if (!titleRef.current.value) {
      document
        .querySelector("#title")
        .setAttribute("placeholder", "Please add a title");
      setTimeout(() => {
        document.querySelector("#title").removeAttribute("placeholder");
      }, 2000);
      return;
    }

    if (!authorRef.current.value) {
      document
        .querySelector("#author")
        .setAttribute("placeholder", "Please add an author");
      setTimeout(() => {
        document.querySelector("#author").removeAttribute("placeholder");
      }, 2000);
      return;
    }

    setBooks([...books, book]);
    console.log(book);
    document.querySelector("form").reset();
  };

  const handleDelete = (id) => {
    const filtered = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(filtered);
  };

  return (
    <BookContext.Provider
      value={{
        titleRef,
        authorRef,
        pagesRef,
        readRef,
        books,
        setBooks,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
