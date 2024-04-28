"use client";

import { Outlet } from "react-router";
import MasterList from "../components/MasterList";

export default function LargeLayout() {
  return (
    <div className="horizontalFlexContainer">
      <MasterList />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
