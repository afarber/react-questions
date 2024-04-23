import "./App.css";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MasterList from "./components/MasterList";
import DetailView from "./components/DetailView";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <BrowserRouter>
        <MasterList />
      </BrowserRouter>
      {!isSmallScreen && <DetailView />}
    </div>
  );
};

export default App;
