"use client";

import { useLoaderData } from "react-router";
import "./WordList.css";
import { Link } from "react-router-dom";

export default function WordList() {
  const top = useLoaderData();
  console.log(top);

  return (
    <div className="wordList">
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
