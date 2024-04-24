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
import DetailView from "./components/DetailView";

import { useMediaQuery } from "@react-hook/media-query";

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
            {isSmallScreen && <Route index element={<MasterList />} />}
            <Route
              path="page:pageId"
              element={({ params }) => (
                <DetailView pageId={parseInt(params.pageId)} />
              )}
            />
            <Route path="*" element={<DetailView pageId={4} />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return <RouterProvider router={router} />;
};

export default App;
