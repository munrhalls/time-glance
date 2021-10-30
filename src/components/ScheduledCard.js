import React from "react";

function ScheduledCard(props) {
  console.log(props);
  console.log('I was triggered during render')
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("cardId", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="border-2 border-black border-solid p-10"
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.text}

    </div>
  );
}

export default ScheduledCard;
