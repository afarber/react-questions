"use client";

import { Outlet } from "react-router";
import { useMediaQuery } from "@react-hook/media-query";
import MasterList from "../components/MasterList";

export default function RootLayout() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <MasterList />
      {!isSmallScreen && <Outlet />}
    </div>
  );
}
