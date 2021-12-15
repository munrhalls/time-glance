import React, { useState } from "react";

export const Dragover = () => {
  const highlight = [1, 2, 3, 4];
  let pos = { x: 0, y: 0 };

  // const [box, setBox] = useState([...highlight]);
  const [location, setLocation] = useState(pos);
  const getCoords = (e) => {
    const location = { y: e.clientY, x: e.clientX };
    setLocation(location);
  };
  console.log(location);
  return (
    <div className="Dragover" onMouseMove={getCoords}>
      <div
        style={{
          position: "absolute",
          background: "#000",
          width: "4rem",
          height: "4rem",
          top: `${location.y}px`,
          left: `${location.x}px`,
        }}
      >
        box
      </div>
    </div>
  );
};
