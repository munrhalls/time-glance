import React, { useState } from "react";
import { Button } from "./Button";
import { PanelItems } from "./PanelItems";

export const Panel = ({ timeDecks, addNewTimeDeck }) => {
  const [visibleDecks, setVisibleDecks] = [
    timeDecks[0],
    timeDecks[1],
    timeDecks[2],
  ];
  const scrollDown = () => [];
  const scrollUp = () => [];

  return (
    <div className="Panel">
      <div className="PanelTopBtns">
        <Button type="add" handlerFunc={addNewTimeDeck} />
        <div className="ScrollBtns">
          <Button type="scrollUp" handlerFunc={scrollUp} />
          <Button type="scrollDown" handlerFunc={scrollDown} />
        </div>
      </div>
      <PanelItems timeDecks={timeDecks} addNewTimeDeck={addNewTimeDeck} />
    </div>
  );
};
