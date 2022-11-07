import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcW50abafEGWxVofvkCtoHrlf9x4JNIhY",
  authDomain: "library-2f1c1.firebaseapp.com",
  projectId: "library-2f1c1",
  storageBucket: "library-2f1c1.appspot.com",
  messagingSenderId: "40460000532",
  appId: "1:40460000532:web:844aa1a8cc7cc63d19f601",
};

// initialize app
initializeApp(firebaseConfig);

// initialize services
export const db = getFirestore();

// collection reference
export const booksRef = collection(db, "books");
