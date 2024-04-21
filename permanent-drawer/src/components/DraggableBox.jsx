import PropTypes from "prop-types";
import { Sprite } from "@pixi/react";
import React from "react";

let index = 1;

export const DraggableBox = ({ tint, x, y, ...props }) => {
  const isDragging = React.useRef(false);
  const offset = React.useRef({ x: 0, y: 0 });
  const [position, setPosition] = React.useState({ x: x || 0, y: y || 0 });
  const [alpha, setAlpha] = React.useState(1);
  const [zIndex, setZIndex] = React.useState(index);

  function onStart(e) {
    isDragging.current = true;
    offset.current = {
      x: e.data.global.x - position.x,
      y: e.data.global.y - position.y,
    };

    setAlpha(0.5);
    setZIndex(index++);
  }

  function onEnd() {
    isDragging.current = false;
    setAlpha(1);
  }

  function onMove(e) {
    if (isDragging.current) {
      setPosition({
        x: e.data.global.x - offset.current.x,
        y: e.data.global.y - offset.current.y,
      });
    }
  }

  return (
    <Sprite
      {...props}
      alpha={alpha}
      position={position}
      texture={Texture.WHITE}
      width={100}
      height={100}
      zIndex={zIndex}
      tint={tint}
      eventMode="static"
      pointerdown={onStart}
      pointerup={onEnd}
      pointerupoutside={onEnd}
      pointermove={onMove}
    />
  );
};

DraggableBox.propTypes = {
  tint: PropTypes.number.isRequired,
  // the x, y arguments are optional
  x: PropTypes.number,
  y: PropTypes.number,
};
