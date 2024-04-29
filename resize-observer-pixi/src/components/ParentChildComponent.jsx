import { useRef, useEffect } from "react";

const ParentChildComponent = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    console.log("ParentChildComponent mount");
    const parentElement = parentRef.current;
    const childElement = childRef.current;

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

    return () => {
      console.log("ParentChildComponent unmount");
      resizeObserver.unobserve(parentElement);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="verticalFlexContainer">
      <div className="hint">Game #1 Score1:Score2</div>
      <div className="parent" ref={parentRef}>
        <canvas className="child" ref={childRef}></canvas>
      </div>
      <div className="status">A game hint to do this and that...</div>
    </div>
  );
};

export default ParentChildComponent;
