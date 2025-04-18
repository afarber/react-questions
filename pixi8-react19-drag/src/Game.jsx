import { useApplication, extend } from "@pixi/react";
import { useEffect, useCallback } from "react";
import { Container, Graphics, Point } from "pixi.js";
import { Tile } from "./Tile";

extend({
  Container,
  Graphics,
  Point,
});

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

  useEffect(() => {
    // the relative offset point of the click on the tile
    let grabPoint = new Point();
    let draggedTile;

    // The stage will handle the move events
    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;

    function onDragStart({ target, global }) {
      draggedTile = target;
      draggedTile.toLocal(global, null, grabPoint);
      grabPoint.x *= draggedTile.scale.x;
      grabPoint.y *= draggedTile.scale.y;
      app.stage.cursor = "pointer";
      app.stage.on("pointermove", onDragMove);
      // put the dragged object on the top
      app.stage.removeChild(draggedTile);
      app.stage.addChild(draggedTile);
      draggedTile.startDragging();
      console.log("onDragStart:", draggedTile.x, draggedTile.y);
    }

    function onDragMove({ global: { x, y } }) {
      draggedTile.x = x - grabPoint.x;
      draggedTile.y = y - grabPoint.y;
      console.log("onDragMove:", draggedTile.x, draggedTile.y);
    }

    function onDragEnd() {
      // reset the tile scale and calculate its col and row
      draggedTile.stopDragging();
      // the next 2 lines are not needed here, but
      // in my real game the tile is put beneath the HUD
      app.stage.removeChild(draggedTile);
      app.stage.addChildAt(draggedTile, app.stage.children.length);
      app.stage.cursor = null;
      app.stage.off("pointermove", onDragMove);
      console.log("onDragEnd:", draggedTile.x, draggedTile.y);
      draggedTile = null;
    }

    const r = new Tile("red", onDragStart, onDragEnd, 3, 3);
    const g = new Tile("green", onDragStart, onDragEnd, 4, 3);
    const b = new Tile("blue", onDragStart, onDragEnd, 5, 3);

    app.stage.addChild(r);
    app.stage.addChild(g);
    app.stage.addChild(b);
  }, []);

  return (
    <pixiContainer x={0} y={0}>
      <pixiGraphics draw={drawCallback} />
    </pixiContainer>
  );
};

export default Game;
