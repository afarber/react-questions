import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useMemo, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import MasterList from "./components/MasterList";
import PixiGame from "./components/PixiGame";
import GamesContext from "./contexts/GamesContext";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const [user, setUser] = useState();
  const [theme, setTheme] = useState();
  const [games, setGames] = useState([]);

  const router = useMemo(
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <GamesContext.Provider value={{ games, setGames }}>
          <RouterProvider router={router} />
        </GamesContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
