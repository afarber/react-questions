"use client";

import { Outlet, useMatch } from "react-router";
import { Link } from "react-router-dom";

export default function SmallLayout() {
  const isHome = useMatch("/");

  return (
    <>
      {!isHome && (
        <div>
          <Link to="/">Back to home</Link>
        </div>
      )}
      <Outlet />
    </>
  );
}
