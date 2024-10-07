import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { OPTIONS_KEY, THEME_KEY, DEFAULT_OPTIONS } from "./Constants";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import Login from "./pages/Login";
import NoGames from "./pages/NoGames";
import MasterList from "./components/MasterList";
import PixiGame from "./components/PixiGame";
import GamesContext from "./contexts/GamesContext";
import OptionsContext from "./contexts/OptionsContext";

const App = () => {
  const readOptionsFromLocalStorage = () => {
    try {
      const optionsJsonStr = localStorage.getItem(OPTIONS_KEY);
      return optionsJsonStr ? JSON.parse(optionsJsonStr) : DEFAULT_OPTIONS;
    } catch (error) {
      console.error("Failed to read options from localStorage:", error);
      return DEFAULT_OPTIONS;
    }
  };

  const writeOptionsToLocalStorage = () => {
    try {
      localStorage.setItem(OPTIONS_KEY, JSON.stringify(options));
    } catch (error) {
      console.error("Failed to write options to localStorage:", error);
    }
  };

  const createRouter = () => {
    const indexPath = games.length === 0 ? "/empty" : "/game/" + games[0]["id"];

    return createBrowserRouter([
      {
        index: true,
        element: <Navigate to={indexPath} replace="true" />,
      },
      {
        path: "/empty",
        element: <NoGames />,
      },
      {
        path: "/list",
        element: <MasterList />,
      },
      {
        path: "/game",
        element: isSmallScreen ? <SmallLayout /> : <LargeLayout />,
        children: [
          {
            path: ":gameId",
            element: <PixiGame />,
          },
        ],
      },
    ]);
  };

  const [user, setUser] = useState();
  const [games, setGames] = useState([]);

  // Read JSON str from local storage to use as initial options state value
  const [options, setOptions] = useState(readOptionsFromLocalStorage);

  // Update local storage, whenever the options state changes
  useEffect(writeOptionsToLocalStorage, [options]);

  const divClassName = "theme-" + options[THEME_KEY];
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      <GamesContext.Provider value={{ games, setGames }}>
        <div className={divClassName}>
          {user ? (
            <RouterProvider router={createRouter()} />
          ) : (
            <Login setUser={setUser} />
          )}
        </div>
      </GamesContext.Provider>
    </OptionsContext.Provider>
  );
};

export default App;
