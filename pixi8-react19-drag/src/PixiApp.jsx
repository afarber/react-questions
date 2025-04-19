import { useRef } from "react";
import { Application } from "@pixi/react";
import PixiGame from "./PixiGame";

const PixiApp = () => {
  const parentRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ background: "lightblue" }}>Game Score</div>
      <div
        ref={parentRef}
        style={{
          background: "lightgreen",
          flexGrow: 1,
        }}
      >
        <Application resizeTo={parentRef} backgroundColor={0xccffcc}>
          <PixiGame />
        </Application>
      </div>
      <div style={{ background: "lightpink" }}>Game Hint</div>
    </div>
  );
};

export default PixiApp;
