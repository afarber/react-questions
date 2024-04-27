import React, { useRef, useEffect } from "react";

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
      style={{ width: "300px", height: "200px", border: "1px solid black" }}
    >
      <div ref={childRef} style={{ border: "1px solid red" }}>
        Child
      </div>
    </div>
  );
};

export default ParentChildComponent;
