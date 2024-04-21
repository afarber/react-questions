"use client";

import { Application, Graphics, Point, Sprite, Texture } from "pixi.js-legacy";
//import { DraggableBox } from "../components/DraggableBox";
import { useEffect, useRef } from "react";

const app = new Application({
  backgroundColor: 0x5bba6f,
  autoResize: true,
});

const rectBlue = new Graphics().beginFill(0x0000ff).drawRect(0, 0, 200, 100);
const rectRed = new Graphics()
  .beginFill(0xff0000)
  .drawRect(-200, -100, 200, 100);

function resize() {
  // Resize the renderer
  app.renderer.resize(window.innerWidth - 260, window.innerHeight);
  // You can use the 'screen' property as the renderer visible
  // area, this is more useful than view.width/height because
  // it handles resolution
  rectBlue.position.set(0, 0);
  rectRed.position.set(app.screen.width, app.screen.height);
}

export default function PixiApp() {
  // the relative offset point of the click on the tile
  let grabPoint = new Point();
  let draggedTile;

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

  const ref = useRef();

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);

    // Start the PixiJS app
    app.start();

    app.stage.addChild(rectBlue);
    app.stage.addChild(rectRed);

    const texture = Texture.from("https://pixijs.com/assets/bunny.png");
    const bunny = new Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = 50;
    bunny.y = 70;
    bunny.width = 100;
    bunny.height = 100;
    app.stage.addChild(bunny);

    // https://jsfiddle.net/bigtimebuddy/oaLwp0p9/
    window.addEventListener("resize", resize);
    resize();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);

  return <div ref={ref} style={{ background: "#f0f" }} />;
}
