import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Application, Graphics, Point } from "pixi.js-legacy";
import { useMediaQuery } from "@react-hook/media-query";
import { CELL, Tile } from "../game/Tile";

const PixiGame = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const { gameId } = useParams();

  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    console.log("PixiGame mount");

    const parentElement = parentRef.current;
    //const childElement = childRef.current;

    const app = new Application({
      backgroundColor: 0xccffcc,
      width: 8 * CELL,
      height: 8 * CELL,
      //view: childElement,
    });

    // the PIXI app has created a canvas element - make it a child of the parent div
    const childElement = app.view;
    childElement.id = "child";
    childElement.classList.add("child");
    childRef.current = childElement;
    parentElement.appendChild(childElement);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const minDimension = Math.floor(Math.min(width, height));

        // maintain the 1:1 aspect ratio of the child element
        childElement.style.width = `${minDimension}px`;
        childElement.style.height = `${minDimension}px`;

        console.log(
          `parent ${width} x ${height} -> child ${minDimension} x ${minDimension}`
        );
      }
    });

    resizeObserver.observe(parentElement);

    // the relative offset point of the click on the tile
    let grabPoint = new Point();
    let draggedTile;

    // The stage will handle the move events
    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;

    const background = new Graphics();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
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

    return () => {
      console.log("PixiGame unmount");
      resizeObserver.unobserve(parentElement);
      resizeObserver.disconnect();
      parentElement.removeChild(childElement);
      app.destroy(true, true);
    };
  }, []);

  return (
    <div className="verticalFlexContainer">
      <div className="hint">Game #{gameId} Score1:Score2</div>
      <div className="parent" ref={parentRef}>
        {/* <canvas className="child" id="child" ref={childRef}></canvas> */}
      </div>
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
