"use client";

import { useContext } from "react";
import { Outlet } from "react-router";
import UserContext from "../UserContext";
import MasterList from "../components/MasterList";
import Login from "../pages/Login";

export default function LargeLayout() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className="horizontalFlexContainer">
      {user ? <MasterList /> : <Login />}
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
