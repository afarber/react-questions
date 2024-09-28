import { useContext } from "react";
import { Outlet } from "react-router";
import MasterList from "../components/MasterList";
import Login from "../pages/Login";
import UserContext from "../contexts/UserContext";

export default function LargeLayout() {
  const { user } = useContext(UserContext);

  return (
    <div className="horizontalFlexContainer">
      {user ? <MasterList /> : <Login />}
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
