import { useEffect } from "react";
import { useApplication, extend } from "@pixi/react";
import { Container, Graphics, Point } from "pixi.js";
import { Tile, CELL } from "./Tile";

extend({
  Container,
  Graphics,
  Point,
});

const PixiGame = () => {
  const { app, isInitialised } = useApplication();

  useEffect(() => {
    if (!isInitialised) {
      // wait until pixi app is initialized
      return;
    }

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

    console.log(app);

    // the relative offset point of the click on the tile
    let grabPoint = new Point();
    let draggedTile;

    // The stage will handle the move events
    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;
    app.stage.removeChildren();

    const background = new Graphics();
    background.setFillStyle({ color: "0xCCCCFF" });

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          background.rect(i * CELL, j * CELL, CELL, CELL);
          background.fill();
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
  }, [isInitialised]);

  return <></>;
};

export default PixiGame;
