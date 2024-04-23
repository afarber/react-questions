"use client";

import { Outlet } from "react-router";
import MasterList from "../components/MasterList";

export default function LargeLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <MasterList />
      <div style={{ flexGrow: 1, textAlign: "center" }}>
        <h3>Detail</h3>
        <Outlet />
      </div>
    </div>
  );
}
