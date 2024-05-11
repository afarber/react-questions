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
import DetailView from "./components/PixiGame";
import { useMediaQuery } from "@react-hook/media-query";
import UserContext from "./UserContext";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const [user, setUser] =
    useState(/* {
    firstName: "",
    lastName: "",
    userId: "",
    photoUrl: "",
  } */);

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
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
