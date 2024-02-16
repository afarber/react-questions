import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import WordList from "./pages/WordList";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="letters-2" element={<WordList />} />
      <Route path="letters-3" element={<WordList />} />
      <Route path="rare-1" element={<WordList />} />
      <Route path="rare-2" element={<WordList />} />
      <Route path="*" element={<Main />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
