"use client";

import { Outlet } from "react-router";
import MasterList from "../components/MasterList";
import { useContext } from "react";
import { UserContext } from "../UserProvider";
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
