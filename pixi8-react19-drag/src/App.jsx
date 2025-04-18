import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import Game from "./Game";

extend({
  Container,
  Graphics,
});

const App = () => {
  return (
    <Application resizeTo={window} backgroundColor={0xccffcc}>
      <Game />
    </Application>
  );
};

export default App;
