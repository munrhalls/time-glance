import React from "react";
import { useDrop } from "react-dnd";
import { TimeCard } from "./TimeCard";
import { useState } from "react";

export const Day = () => {
  const handleDrop = (e) => {
    console.log('drop')
  }
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-14 m-24 border-2 flex"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e)}
    >
    </div>
  );
};