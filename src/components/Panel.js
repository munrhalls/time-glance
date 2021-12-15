import React from "react";
import { Button } from "./Button";

export const Panel = ({ timeDecks, addNewTimeDeck }) => {
  const scrollUp = () => {};
  const scrollDown = () => {};
  return (
    <div className="Panel">
      <Button type="add" handlerFunc={addNewTimeDeck} />
      <Button type="scrollUp" handlerFunc={scrollUp} />
      <Button type="scrollDown" handlerFunc={scrollDown} />

      {timeDecks.map((timeDeck, i) => {
        return (
          <div className="PanelItem" key={timeDeck.name + i}>
            <div
              className="PanelDeck"
              key={timeDeck.id}
              style={{ backgroundColor: `${timeDeck.color}` }}
            >
              {timeDeck.name}
            </div>
            <div className="PanelBtns">
              <Button type="del" handlerFunc={addNewTimeDeck} />
              <Button type="edit" handlerFunc={addNewTimeDeck} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
