import { createContext, useEffect } from "react";
import { useRef, useState } from "react";

const BookContext = createContext();

// firestore
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { booksRef } from "../services/firebase";

export const BookProvider = ({ children }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const pagesRef = useRef();
  const readRef = useRef();

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const querySnap = await getDocs(booksRef);
    let temp = [];
    querySnap.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id });
    });
    setBooks(temp);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = {
      author: authorRef.current.value,
      title: titleRef.current.value,
      pages: pagesRef.current.value,
      read: readRef.current.checked,
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

    const docRef = await addDoc(booksRef, book);
    setBooks([...books, { ...book, id: docRef.id }]);
    document.querySelector("form").reset();
  };

  const handleDelete = async (id) => {
    const docRef = await deleteDoc(doc(booksRef, id));

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
