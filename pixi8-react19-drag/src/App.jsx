import { Application, extend } from "@pixi/react";
import Game from "./Game";

const App = () => {
  return (
    <Application resizeTo={window} backgroundColor={0xccffcc}>
      <Game />
    </Application>
  );
};

export default App;
