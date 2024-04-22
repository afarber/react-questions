import React from "react";

const MasterList = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h2>Master List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MasterList;
