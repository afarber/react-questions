"use client";

import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Application, Graphics, Sprite, Texture } from "pixi.js-legacy";
import { useMediaQuery } from "@react-hook/media-query";

const PixiGame = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const { pixiBunnies } = useParams();

  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    console.log("useEffect mount");

    const parentElement = parentRef.current;
    //const childElement = childRef.current;

    const app = new Application({
      backgroundColor: 0xccffcc,
      width: 800,
      height: 800,
      //view: childElement,
    });

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

        //app.renderer.view.style.width = `${minDimension}px`;
        //app.renderer.view.style.height = `${minDimension}px`;

        console.log("parentElement resize", parentElement);
        console.log("childElement resize", childElement);

        console.log(
          `parent ${width} x ${height} -> child ${minDimension} x ${minDimension}`
        );
      }
    });

    resizeObserver.observe(parentElement);

    console.log("parentElement mount", parentElement);
    console.log("childElement mount", childElement);

    const background = new Graphics();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
          background.beginFill(0xccccff);
          background.drawRect(i * 100, j * 100, 100, 100);
          background.endFill();
        }
      }
    }
    app.stage.addChild(background);

    const texture = Texture.from("https://pixijs.com/assets/bunny.png");
    const bunny = new Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = 50;
    bunny.y = 50;
    bunny.width = 100;
    bunny.height = 100;
    app.stage.addChild(bunny);

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
