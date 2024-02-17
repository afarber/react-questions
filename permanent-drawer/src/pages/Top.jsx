"use client";

import { useLoaderData } from "react-router";
import "./Top.css";
import { Link } from "react-router-dom";

export default function Top() {
  const top = useLoaderData();
  console.log(top);

  return (
    <div className="topList">
      {top.data.map((user) => (
        <Link to={"/user/" + user.uid} key={user.uid}>
          <p>
            <b>{user.given}</b>
          </p>
          <p>Elo: {user.elo}</p>
        </Link>
      ))}
    </div>
  );
}
