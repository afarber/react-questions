import { useRef } from "react";
import { Application } from "@pixi/react";
import PixiGame from "./PixiGame";

const PixiApp = () => {
  const parentRef = useRef(null);

  return (
    <div className="parent" ref={parentRef}>
      <Application resizeTo={parentRef} backgroundColor={0xccffcc}>
        <PixiGame />
      </Application>
    </div>
  );
};

export default PixiApp;
