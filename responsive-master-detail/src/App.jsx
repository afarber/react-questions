import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import SmallLayout from "./layouts/SmallLayout";
import LargeLayout from "./layouts/LargeLayout";
import React from "react";
import MasterList from "./components/MasterList";
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
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="*" element={<Page4 />} />
          </Route>
        )
      ),
    [isSmallScreen]
  );

  return <RouterProvider router={router} />;
};

export default App;
