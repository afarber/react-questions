import "./App.css";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MasterList from "./components/MasterList";
import DetailView from "./components/DetailView";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <MasterList />
      {!isSmallScreen && <DetailView />}
    </div>
  );
};

export default App;
