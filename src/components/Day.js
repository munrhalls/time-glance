import React from "react";

function Day({updateCards, dayScheduledCards}) {
  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("card");
    updateCards(e, card)
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  console.log(dayScheduledCards[0].duration)
  return (
    <div className="mt-40 border-2 border-black w-40 h-40"
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
    </div>
  );
}

export default Day;