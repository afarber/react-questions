import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useState } from "react";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import MasterList from "./components/MasterList";
import PixiGame from "./components/PixiGame";
import { useMediaQuery } from "@react-hook/media-query";
import MyContext from "./MyContext";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const [user, setUser] = useState();
  const [games, setGames] = useState([]);

  const router = React.useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={isSmallScreen ? <SmallLayout /> : <LargeLayout />}
          >
            <Route
              index
              element={
                isSmallScreen ? <MasterList /> : <div>Select a game!</div>
              }
            />
            <Route path="game/:gameId" element={<PixiGame />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return (
    <MyContext.Provider value={{ user, setUser, games, setGames }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
