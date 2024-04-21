"use client";

import { Point } from "pixi.js-legacy";
import { Stage, Container, useApp } from "@pixi/react";
import { DraggableBox } from "../components/DraggableBox";

const width = 800;
const height = 500;
const backgroundColor = 0x8d9dad;

// the relative offset point of the click on the tile
let grabPoint = new Point();
let draggedTile;

export default function Main() {
  // app -> PIXI.Application
  const app = useApp();

  function onDragStart(event) {
    draggedTile = event.target;
    draggedTile.toLocal(event.global, null, grabPoint);
    grabPoint.x *= draggedTile.scale.x;
    grabPoint.y *= draggedTile.scale.y;
    app.stage.cursor = "pointer";
    app.stage.on("pointermove", onDragMove);
    // put the dragged object on the top
    app.stage.removeChild(draggedTile);
    app.stage.addChild(draggedTile);
    draggedTile.startDragging();
    console.log(this);
  }

  function onDragMove(event) {
    draggedTile.x = event.global.x - grabPoint.x;
    draggedTile.y = event.global.y - grabPoint.y;
  }

  function onDragEnd() {
    // reset the tile scale and calculate its col and row
    draggedTile.stopDragging();
    // add the tile back, just below red and blue scores
    //    app.stage.removeChild(draggedTile);
    //    app.stage.addChild(draggedTile);

    app.stage.cursor = null;
    app.stage.off("pointermove", onDragMove);
    draggedTile = null;
  }

  return (
    <Stage width={width} height={height} options={{ backgroundColor }}>
      <Container sortableChildren={true}>
        <DraggableBox
          tint={0xff00ff}
          onDragStart={onDragStart}
          onDragMove={onDragStart}
          onDragEnd={onDragEnd}
          x={20}
          y={20}
        />
        <DraggableBox
          tint={0x00ffff}
          onDragStart={onDragStart}
          onDragMove={onDragStart}
          onDragEnd={onDragEnd}
          x={140}
          y={20}
        />
        <DraggableBox
          tint={0x00ff00}
          onDragStart={onDragStart}
          onDragMove={onDragStart}
          onDragEnd={onDragEnd}
          x={280}
          y={20}
        />
      </Container>
    </Stage>
  );
}
