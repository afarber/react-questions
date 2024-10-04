import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useMemo, useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import Login from "./pages/Login";
import MasterList from "./components/MasterList";
import PixiGame from "./components/PixiGame";
import GamesContext from "./contexts/GamesContext";
import OptionsContext from "./contexts/OptionsContext";

const App = () => {
  const DEFAULT_OPTIONS = { "theme": "light", "volume": 10 };

  const readOptionsFromLocalStorage = () => {
    try {
      const optionsJsonStr = localStorage.getItem("options");
      return optionsJsonStr ? JSON.parse(optionsJsonStr) : DEFAULT_OPTIONS;
    } catch (error) {
      console.error("Failed to read options from localStorage:", error);
      return DEFAULT_OPTIONS;
    }
  };

  const writeOptionsToLocalStorage = () => {
    try {
      localStorage.setItem("options", JSON.stringify(options));
    } catch (error) {
      console.error("Failed to write options to localStorage:", error);
    }
  };

  const [user, setUser] = useState();
  const [games, setGames] = useState([]);

  // Read JSON str from local storage to use as initial options state value
  const [options, setOptions] = useState(readOptionsFromLocalStorage);

  // Update local storage, whenever the options state changes
  useEffect(writeOptionsToLocalStorage, [options]);

  const divClassName = "theme-" + options.theme;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

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
                isSmallScreen ? <MasterList /> : <div>👈 __USE_LEFT_MENU__</div>
              }
            />
            <Route path="game/:gameId" element={<PixiGame />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      <GamesContext.Provider value={{ games, setGames }}>
        <div className={divClassName}>
          {user ? (
            <RouterProvider router={router} />
          ) : (
            <Login setUser={setUser} />
          )}
        </div>
      </GamesContext.Provider>
    </OptionsContext.Provider>
  );
};

export default App;
