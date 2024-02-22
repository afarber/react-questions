"use client";

import MyButton from "./components/MyButton";

export default function App() {
  return (
    <>
      <h1>How to localize the bundle!</h1>
      <MyButton label="__YES__" />
      <MyButton label="__NO__" />
      <MyButton label="__CANCEL__" />
      <div>
        Run <code>vite build</code> to generate:
        <ul>
          <li>dist/index-en.js</li>
          <li>dist/index-de.js</li>
          <li>dist/index-fr.js</li>
        </ul>
      </div>
    </>
  );
}
