import { Application } from "@pixi/react";
import Game from "./PixiGame";

const PixiApp = () => {
  return (
    <Application resizeTo={window} backgroundColor={0xccffcc}>
      <Game />
    </Application>
  );
};

export default PixiApp;
