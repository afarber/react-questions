"use client";

import MyButton from "./components/MyButton";

export default function App() {
  return (
    <>
      <h1>How to localize the bundle?</h1>
      <MyButton label="__YES__" />
      <MyButton label="__NO__" />
      <MyButton label="__CANCEL__" />
      <div>
        How to generate dist/index-en.js, dist/index-de.js and dist/index-fr.js?
      </div>
    </>
  );
}
