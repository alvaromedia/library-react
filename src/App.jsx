// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <div className="w-screen h-screen flex flex-col ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
