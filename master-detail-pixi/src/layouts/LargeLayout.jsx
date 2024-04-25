"use client";

import { Outlet } from "react-router";
import MasterList from "../components/MasterList";

export default function LargeLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <MasterList />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
