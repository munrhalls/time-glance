import React from "react";
import { Button } from "./Button";

export const PanelItems = ({ timeDecks, addNewTimeDeck }) => {
  return (
    <div>
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
