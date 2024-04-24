"use client";

import { Outlet, useMatch } from "react-router";
import { Link } from "react-router-dom";

export default function SmallLayout() {
  const isHome = useMatch("/");

  return (
    <>
      <Outlet />
      {!isHome && (
        <div>
          <Link to="/">Back to Games List</Link>
        </div>
      )}
    </>
  );
}
