import "./App.css";
import LeftDrawer from "./components/LeftDrawer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/PageOne">PageOne</Link>
          {" | "}
          <Link to="/PageTwo">PageTwo</Link>
          {" | "}
          <Link to="/PageThree">PageThree</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/PageOne" element={<PageOne />} />
          <Route path="/PageTwo" element={<PageTwo />} />
          <Route path="/PageThree" element={<PageThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
