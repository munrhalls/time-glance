import React from "react";
import { Button } from "./Button";
import { PanelItems } from "./PanelItems";

export const Panel = ({ timeDecks, addNewTimeDeck }) => {
  const ref = React.createRef();

  const scrollUp = () => {
    // ref.current.scroll(0, ref.current.scrollY + 108);
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
        <PanelItems timeDecks={timeDecks} addNewTimeDeck={addNewTimeDeck} />
      </div>
    </div>
  );
};
