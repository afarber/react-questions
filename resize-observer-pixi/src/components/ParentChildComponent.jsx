import { useRef, useEffect } from "react";

const ParentChildComponent = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const parentElement = parentRef.current;
    const childElement = childRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const minDimension = Math.min(width, height);
        childElement.style.width = `${minDimension}px`;
        childElement.style.height = `${minDimension}px`;
      }
    });

    resizeObserver.observe(parentElement);

    return () => {
      resizeObserver.unobserve(parentElement);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={parentRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
        height: "100vh",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          background: "magenta",
          color: "white",
          fontStyle: "italic",
        }}
      >
        Game #1 Score1:Score2
      </div>
      <div ref={childRef} style={{ flexGrow: 1, border: "1px solid red" }}>
        Child
      </div>
      <div style={{ background: "lightpink", fontStyle: "italic" }}>
        A game hint...
      </div>
    </div>
  );
};

export default ParentChildComponent;
