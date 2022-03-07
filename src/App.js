import React, { useState } from "react";
import "primereact/resources/themes/arya-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePage from "./Components/Home/Homepage";
import MenuBar from "./Components/Home/Menu.js/MenuBar";
import { ScrollTop } from "primereact/scrolltop";
import Portfolio from "./Components/MainPage/Portfolio";
import Blogs from "./Components/MainPage/Blogs";
import Connect from "./Components/MainPage/Connect";

import "./App.css";

function App() {
  const [currentTabValue, setCurrentTabValue] = useState("Portfolio");

  return (
    <>
      <ScrollTop threshold={200} />
      <HomePage />
      <MenuBar
        currentTabValue={currentTabValue}
        setCurrentTabValue={setCurrentTabValue}
      />
      <div className="main-cotainer">
        <Portfolio currentTabValue={currentTabValue} />
        <Blogs currentTabValue={currentTabValue} />
        <Connect currentTabValue={currentTabValue} />
      </div>
    </>
  );
}

export default App;
