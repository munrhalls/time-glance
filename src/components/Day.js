import React from "react";

function Day(props) {

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");

    const card = document.getElementById(cardId);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Day;
