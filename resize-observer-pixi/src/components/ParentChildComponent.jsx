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
        console.log(
          `parent: ${width} x ${height} -> child: ${minDimension} x ${minDimension}`
        );
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
    <div className="flexRoot">
      <div className="hint">Game #1 Score1:Score2</div>
      <div className="parent" ref={parentRef}>
        <canvas ref={childRef}></canvas>
      </div>
      <div className="status">A game hint to do this and that...</div>
    </div>
  );
};

export default ParentChildComponent;
