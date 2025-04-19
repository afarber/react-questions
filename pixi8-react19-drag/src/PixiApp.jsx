import { useRef, useEffect, useState } from "react";
import { Application } from "@pixi/react";
import PixiGame from "./PixiGame";

const PixiApp = () => {
  const parentRef = useRef(null);
  const appRef = useRef(null);

  const [desiredWidth, setDesiredWidth] = useState(400);
  const [desiredHeight, setDesiredHeight] = useState(300);

  const myInit = (app) => {
    console.log("PixiApp init", app);
    appRef.current = app;
  };

  useEffect(() => {
    console.log("PixiApp mount");

    const parentElement = parentRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const minDimension = Math.floor(Math.min(width, height));

        // maintain the 1:1 aspect ratio of the Pixi app
        const app = appRef.current;
        if (app) {
          setDesiredWidth(minDimension);
          setDesiredHeight(minDimension);

          console.log(
            `parent ${width} x ${height} -> child ${app.width} x ${app.height}`
          );
        }
      }
    });

    resizeObserver.observe(parentElement);

    return () => {
      console.log("PixiApp unmount");
      resizeObserver.unobserve(parentElement);
      resizeObserver.disconnect();
    };
  }, [parentRef, appRef]);

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
        <Application
          onInit={myInit}
          width={desiredWidth}
          height={desiredHeight}
          backgroundColor={0xccffcc}
        >
          <PixiGame />
        </Application>
      </div>
      <div style={{ background: "lightpink" }}>Game Hint</div>
    </div>
  );
};

export default PixiApp;
