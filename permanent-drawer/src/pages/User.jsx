"use client";

import { useLoaderData, useParams } from "react-router";

export default function User() {
  const params = useParams();
  console.log("User params:");
  console.log(params);
  const { uid } = params;

  const longest = useLoaderData();
  console.log("User longest:");
  console.log(longest);

  return (
    <div className="user">
      <b>User {uid}</b>
    </div>
  );
}
