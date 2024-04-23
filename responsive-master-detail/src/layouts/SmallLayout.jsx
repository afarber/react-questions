"use client";

import { Outlet } from "react-router";

export default function SmallLayout() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Detail</h3>
      <Outlet />
    </div>
  );
}
