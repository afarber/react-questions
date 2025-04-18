import { Application } from "@pixi/react";
import PixiGame from "./PixiGame";

const PixiApp = () => {
  return (
    <Application resizeTo={window} backgroundColor={0xccffcc}>
      <PixiGame />
    </Application>
  );
};

export default PixiApp;
