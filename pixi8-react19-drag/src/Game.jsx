import { useApplication } from "@pixi/react";
import { useEffect, useCallback } from "react";

const CELL = 100;

const Game = () => {
  const { app } = useApplication();
  console.log(app);

  const drawCallback = useCallback((graphics) => {
    graphics.clear();
    graphics.setFillStyle({ color: "0xCCCCFF" });

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          graphics.rect(i * CELL, j * CELL, CELL, CELL);
          graphics.fill();
        }
      }
    }
  }, []);

  /*
  useEffect(() => {
    if (app) {
      app.stage.eventMode = "static";
      app.stage.hitArea = app.screen;

      const background = new Graphics();
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if ((i + j) % 2 === 0) {
            background.beginFill(0xccccff);
            background.drawRect(i * CELL, j * CELL, CELL, CELL);
            background.endFill();
          }
        }
      }
      app.stage.addChild(background);

      const r = new Tile("red", onDragStart, onDragEnd, 3, 3);
      const g = new Tile("green", onDragStart, onDragEnd, 4, 3);
      const b = new Tile("blue", onDragStart, onDragEnd, 5, 3);

      app.stage.addChild(r);
      app.stage.addChild(g);
      app.stage.addChild(b);
    }
  }, []);
  */

  return (
    <pixiContainer x={0} y={0}>
      <pixiGraphics draw={drawCallback} />
    </pixiContainer>
  );
};

export default Game;
