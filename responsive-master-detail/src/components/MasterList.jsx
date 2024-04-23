import React from "react";
import { Outlet, Link } from "react-router-dom";

const MasterList = () => {
  const pages = [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
  ];

  return (
    <div>
      <h2>Master List</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>{page.title}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default MasterList;
