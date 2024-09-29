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
import Login from "./pages/Login";
import MasterList from "./components/MasterList";
import PixiGame from "./components/PixiGame";
import GamesContext from "./contexts/GamesContext";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState("light");
  const [games, setGames] = useState([]);

  const divClassName = "theme-" + theme;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={isSmallScreen ? <SmallLayout /> : <LargeLayout />}
          >
            <Route index element={isSmallScreen ? <MasterList /> : <div />} />
            <Route path="game/:gameId" element={<PixiGame />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GamesContext.Provider value={{ games, setGames }}>
        <div className={divClassName}>
          {user ? (
            <RouterProvider router={router} />
          ) : (
            <Login setUser={setUser} />
          )}
        </div>
      </GamesContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
