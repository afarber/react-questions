"use client";

import { Outlet } from "react-router";

export default function SmallLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h3>Detail</h3>
        <Outlet />
      </div>
    </div>
  );
}
