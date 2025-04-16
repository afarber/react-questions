import {
  Application,
  extend,
  useApplication
} from '@pixi/react'
import {
  Container,
  Graphics,
} from 'pixi.js'
import { useEffect, useCallback } from 'react'

extend({
  Container,
  Graphics,
})

const App = () => {
  const drawCallback = useCallback(graphics => {
    graphics.clear()
    graphics.setFillStyle({ color: 'red' })
    graphics.rect(0, 0, 100, 100)
    graphics.fill()
  }, [])

  const { app } = useApplication();

  useEffect(() => {
    if (app) {
      app.stage.eventMode = "static";
      app.stage.hitArea = app.screen;

      const background = new Graphics();
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if ((i + j) % 2 === 0) {
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
    }
  }, []);

  return (
    <Application resizeTo={window} backgroundColor={0xCCFFCC}>
      <pixiContainer x={200} y={100}>
        <pixiGraphics draw={drawCallback} />
      </pixiContainer>
    </Application>
  )
}

export default App
