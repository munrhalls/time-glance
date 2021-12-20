import React, { useEffect } from "react";
import { Button } from "./Button";

export const PanelItems = ({ timeDecks, addNewTimeDeck, delTimeDeck }) => {
  return (
    <div className="PanelItems">
      {timeDecks.map((timeDeck, i) => {
        return (
          <div className="PanelItem" key={timeDeck.name + i}>
            <div
              className="PanelDeck"
              key={timeDeck.id}
              style={{ backgroundColor: `${timeDeck.color}` }}
            ></div>
            <div className="PanelBtns">
              <Button
                type="del"
                label="Delete."
                handlerFunc={() => delTimeDeck(timeDeck.id)}
              />
              <Button type="edit" label="Move." handlerFunc={addNewTimeDeck} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
