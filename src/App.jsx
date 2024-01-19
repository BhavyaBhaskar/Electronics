/* eslint-disable no-unused-vars */
import { useState } from "react";
import Body from "./Page/Body";
import Header from "./Page/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <Body setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
