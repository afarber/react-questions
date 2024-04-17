"use client";

import { Stage, Container } from "@pixi/react";
import { DraggableBox } from "../components/DraggableBox";

const width = 800;
const height = 500;
const backgroundColor = 0x8d9dad;

export default function Main() {
  return (
    <Stage width={width} height={height} options={{ backgroundColor }}>
      <Container sortableChildren={true}>
        <DraggableBox tint={0xff00ff} x={20} y={20} />
        <DraggableBox tint={0x00ffff} x={140} y={20} />
        <DraggableBox tint={0x00ff00} x={280} y={20} />
      </Container>
    </Stage>
  );
}
