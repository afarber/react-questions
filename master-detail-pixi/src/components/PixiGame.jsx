"use client";

import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Application, Graphics, Point, Sprite, Texture } from "pixi.js-legacy";
import { useMediaQuery } from "@react-hook/media-query";

const PixiGame = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const { pixiBunnies } = useParams();

  const parentRef = useRef(null);
  const childRef = useRef(null);
  // the relative offset point of the click on the tile
  let grabPoint = new Point();
  let draggedTile;

  useEffect(() => {
    console.log("useEffect mount");

    const parentElement = parentRef.current;
    //const childElement = childRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const minDimension = Math.floor(Math.min(width, height));

        // maintain the 1:1 aspect ratio of the child element
        //childElement.style.width = `${minDimension}px`;
        //childElement.style.height = `${minDimension}px`;

        app.renderer.view.style.width = `${minDimension}px`;
        app.renderer.view.style.height = `${minDimension}px`;

        console.log(
          `parent ${width} x ${height} -> child ${minDimension} x ${minDimension}`
        );
      }
    });

    resizeObserver.observe(parentElement);

    const app = new Application({
      backgroundColor: "lightgreen",
      width: 1020,
      height: 1020,
    });

    parentElement.appendChild(app.view);
    app.start();

    // The stage will handle the move events
    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;

    const rectRed = new Graphics()
      .beginFill(0xff0000)
      .drawRect(-200, -100, 200, 100);
    const rectGreen = new Graphics()
      .beginFill(0x00ff00)
      .drawRect(0, -100, 200, 100);
    const rectBlue = new Graphics()
      .beginFill(0x0000ff)
      .drawRect(-200, 0, 200, 100);

    rectRed.position.set(app.screen.width, app.screen.height);
    rectGreen.position.set(0, app.screen.height);
    rectBlue.position.set(app.screen.width, 0);

    app.stage.addChild(rectRed);
    app.stage.addChild(rectGreen);
    app.stage.addChild(rectBlue);

    const texture = Texture.from("https://pixijs.com/assets/bunny.png");
    const bunny = new Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = 50;
    bunny.y = 70;
    bunny.width = 100;
    bunny.height = 100;
    app.stage.addChild(bunny);

    /*
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
*/

    return () => {
      console.log("useEffect unmount");
      resizeObserver.unobserve(parentElement);
      resizeObserver.disconnect();
      app.destroy(true, true);
    };
  }, []);

  return (
    <div className="fullRoot">
      <div className="hint">Game #{pixiBunnies} Score1:Score2</div>
      <div className="parent" ref={parentRef}></div>
      <canvas id="child" ref={childRef}></canvas>
      <div className="status">A game hint to do this and that...</div>
      {isSmallScreen && (
        <div>
          <Link to="/">Back to Games List</Link>
        </div>
      )}
    </div>
  );
};

export default PixiGame;
