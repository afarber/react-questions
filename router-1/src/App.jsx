import "./App.css";
import LeftDrawer from "./components/LeftDrawer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;|&nbsp;
          <Link to="/PageOne">PageOne</Link>
          &nbsp;|&nbsp;
          <Link to="/PageTwo">PageTwo</Link>
          &nbsp;|&nbsp;
          <Link to="/PageThree">PageThree</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="PageOne" element={<PageOne />} />
          <Route path="PageTwo" element={<PageTwo />} />
          <Route path="PageThree" element={<PageThree />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
