"use client";

import { Outlet, useMatch } from "react-router";
import { Link } from "react-router-dom";

export default function SmallLayout() {
  const isHome = useMatch("/");

  return (
    <div style={{ textAlign: "center" }}>
      {!isHome && <Link to="/">Back to home</Link>}
      <Outlet />
    </div>
  );
}
