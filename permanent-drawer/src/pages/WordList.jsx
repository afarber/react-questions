"use client";

import { useLoaderData } from "react-router";
import "./WordList.css";

export default function WordList() {
  const top = useLoaderData();
  console.log(top);

  return (
    <div className="wordList">
      {top.data.map((user) => (
        <div key={user.uid}>
          <p>
            <b>{user.given}</b>
          </p>
          <p>Elo: {user.elo}</p>
        </div>
      ))}
    </div>
  );
}
