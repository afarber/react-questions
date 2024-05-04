import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import React from "react";
import MasterList from "./components/MasterList";
import DetailView from "./components/PixiGame";

import { useMediaQuery } from "@react-hook/media-query";
import { UserProvider } from "./UserContext";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

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
            <Route path="game/:pixiBunnies" element={<DetailView />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
