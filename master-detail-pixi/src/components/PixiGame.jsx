"use client";

import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Application, Graphics, Point, Sprite, Texture } from "pixi.js-legacy";
import { useMediaQuery } from "@react-hook/media-query";

const PixiGame = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const { pixiBunnies } = useParams();

  const canvasParent = useRef();
  // the relative offset point of the click on the tile
  let grabPoint = new Point();
  let draggedTile;

  useEffect(() => {
    console.log("useEffect mount");

    const app = new Application({
      backgroundColor: "lightgreen",
      width: 1020,
      height: 1020,
    });

    canvasParent.current.appendChild(app.view);
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

    // https://jsfiddle.net/bigtimebuddy/oaLwp0p9/
    window.addEventListener("resize", resize);
    resize();

    function resize() {
      if (app && app.screen) {
        console.log(
          "resize window:",
          window.innerWidth,
          "x",
          window.innerHeight,
          "app.screen:",
          app.screen.width,
          "x",
          app.screen.height
        );
      } else {
        console.log(
          "resize window:",
          window.innerWidth,
          "x",
          window.innerHeight
        );
      }
    }

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

    return () => {
      console.log("useEffect unmount");
      //app.stop();
      app.destroy(true, true);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "magenta",
          color: "white",
          fontStyle: "italic",
        }}
      >
        Game #{pixiBunnies} Score1:Score2
      </div>
      <div
        ref={canvasParent}
        id="canvasParent"
        style={{
          background: "lightyellow",
          minWidth: "100px",
          minHeight: "100px",
          flexGrow: 1,
        }}
      />
      <div style={{ background: "lightpink", fontStyle: "italic" }}>
        A game hint...
      </div>
      {isSmallScreen && (
        <div>
          <Link to="/">Back to Games List</Link>
        </div>
      )}
    </div>
  );
};

export default PixiGame;

/*
window.onresize = function () {
  if (!fullscreen.getFullscreenElement() && fullscreen.isEmbeddedInIframe()) {
    try {
      // request dimensions from parent site and call resizeApp() in the callback
      requestIframeDimensions();
      return;
    } catch (ex) {
      // can fail if parent site SDK not yet initialized
    }
  }

  const w = Math.min(window.innerWidth, screen.width);
  const h = 0.8 * Math.min(window.innerHeight, screen.height);
  resizeApp(w, h);
};

window.resizeApp = function (w, h) {
  w = Math.floor(0.98 * w);
  h = Math.floor(0.98 * h);

  console.log("resizeApp w x h: " + w + " x " + h);
  const fullDiv = document.getElementById("fullDiv");
  fullDiv.style.width = w + "px";
  fullDiv.style.height = h + "px";

  const boardPx = Math.min(w - 420, h - 90);
  app.renderer.view.style.width = boardPx + "px";
  app.renderer.view.style.height = boardPx + "px";

  // set hint and total divs to the same width as canvas
  const hintDiv = document.getElementById("hintDiv");
  hintDiv.style.width = boardPx + "px";
  const totalDiv = document.getElementById("totalDiv");
  totalDiv.style.width = boardPx + "px";
};
*/
