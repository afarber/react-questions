"use client";

import { useLoaderData } from "react-router";
import "./WordList.css";

export default function WordList() {
  const filtered = useLoaderData();

  return (
    <div className="wordList">
      {Object.keys(filtered).map((word) => (
        <p key={word}>
          <span className="tile">{word}</span> {filtered[word]}
        </p>
      ))}
    </div>
  );
}
