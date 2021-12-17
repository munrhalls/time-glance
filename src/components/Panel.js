import React, { useState } from "react";
import { Button } from "./Button";
import { PanelItems } from "./PanelItems";

export const Panel = ({ timeDecks, addNewTimeDeck }) => {
  const [scrollY, setScrollY] = useState(0);

  const scrollUp = (ref) => {
    let y = scrollY + 50;
    setScrollY(y);
  };
  const scrollDown = () => {};
  return (
    <div className="Panel">
      <div className="PanelTopBtns">
        <Button type="add" handlerFunc={addNewTimeDeck} />
        <div className="ScrollBtns">
          <Button type="scrollUp" handlerFunc={scrollUp} />
          <Button type="scrollDown" handlerFunc={scrollDown} />
        </div>
      </div>
      <PanelItems
        timeDecks={timeDecks}
        addNewTimeDeck={addNewTimeDeck}
        scrollY={scrollY}
      />
    </div>
  );
};
