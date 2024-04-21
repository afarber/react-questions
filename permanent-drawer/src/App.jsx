import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import RootLayout from "./layouts/RootLayout";
import PixiApp from "./pages/PixiApp";
import WordSearch from "./pages/WordSearch";
import WordList from "./pages/WordList";
import User from "./pages/User";
import Top from "./pages/Top";
import Tos from "./pages/Tos";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import { topLoader } from "./loaders/TopLoader";
import { userLoader } from "./loaders/UserLoader";
import { letters2Loader } from "./loaders/Letters2Loader";
import { letters3Loader } from "./loaders/Letters3Loader";
import { rare1Loader } from "./loaders/Rare1Loader";
import { rare2Loader } from "./loaders/Rare2Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PixiApp />} />
      <Route path="top" element={<Top />} loader={topLoader} />
      <Route path="words-search" element={<WordSearch />} />
      <Route path="letters-2" element={<WordList />} loader={letters2Loader} />
      <Route path="letters-3" element={<WordList />} loader={letters3Loader} />
      <Route path="rare-1" element={<WordList />} loader={rare1Loader} />
      <Route path="rare-2" element={<WordList />} loader={rare2Loader} />
      <Route path="user/:uid" element={<User />} loader={userLoader} />
      <Route path="settings" element={<Settings />} />
      <Route path="help" element={<Help />} />
      <Route path="privacy-policy" element={<Privacy />} />
      <Route path="terms-of-service" element={<Tos />} />
      <Route path="*" element={<PixiApp />} />
    </Route>
  )
);

export default function App() {
  const [login, setLogin] = React.useState({
    action: "login",
    gid: 0,
    users: [
      {
        social: 0,
        sid: null,
        auth: null,
        given: null,
        family: null,
        photo: null,
        stamp: 0,
      },
    ],
  });

  return <RouterProvider router={router} />;
}
