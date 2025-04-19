import * as PIXI from "pixi.js";

// Create app
const app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

// Example graphic
const graphics = new PIXI.Graphics();
graphics.beginFill(0xde3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();
app.stage.addChild(graphics);

// Handle resize (automatically handled if using resizeTo: window)
window.addEventListener("resize", () => {
  console.log("Resized to", window.innerWidth, window.innerHeight);
});

const drawer = document.getElementById("drawer");

// Example: Show after 1 second
setTimeout(() => {
  drawer.classList.add("show");
}, 1000);
