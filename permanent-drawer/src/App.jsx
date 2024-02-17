import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import WordList from "./pages/WordList";
import User from "./pages/User";
import RootLayout from "./layouts/RootLayout";
import { topLoader } from "./loaders/TopLoader";
import { userLoader } from "./loaders/UserLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="letters-2" element={<WordList />} loader={topLoader} />
      <Route path="letters-3" element={<WordList />} loader={topLoader} />
      <Route path="rare-1" element={<WordList />} loader={topLoader} />
      <Route path="rare-2" element={<WordList />} loader={topLoader} />
      <Route path="user/:uid" element={<User />} loader={userLoader} />
      <Route path="*" element={<Main />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
