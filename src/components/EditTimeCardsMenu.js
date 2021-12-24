import React, { useState } from "react";
import { Button } from "./Button";
import cursor from "./../resources/cursor.svg";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6]);
  const scrollRight = () => {
    setNums((nums) => {
      return nums.map((num) => (num + 6 <= 24 ? (num += 6) : num));
    });
  };
  const scrollLeft = () => {
    setNums((nums) => {
      return nums.map((num) => (num - 6 > 0 ? (num -= 6) : num));
    });
  };

  return (
    <div className="EditTimeCardsMenu">
      <div className="Column flexEnd">
        <Button type="scrollLeft" handlerFunc={scrollLeft}></Button>
      </div>
      <div className="Column">
        <div className="NumBtnsHelperNote">
          <img
            className="MarkerNoteSymbol"
            src={cursor}
            alt="Cursor image did not load."
          />
          <div className="NumBtnsHelperNoteText">
            Click to edit <span className="SpanItalicize"> marked </span> cards.
          </div>
        </div>
        <div className="NumBtnsRow">
          {nums.map((num) => {
            return (
              <Button
                type="num"
                label={num}
                key={num + Math.random()}
                handlerFunc={() => editTimeCards(num)}
              />
            );
          })}
        </div>
      </div>
      <div className="Column flexEnd">
        <Button type="scrollRight" handlerFunc={scrollRight}></Button>
      </div>

      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
