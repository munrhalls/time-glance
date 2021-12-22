import React, { useState } from "react";
import { Button } from "./Button";

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
      <Button type="scrollLeft" handlerFunc={scrollLeft}></Button>
      <div className="NumBtnsRow">
        {nums.map((num) => {
          return (
            <Button
              type="num"
              label={num}
              handlerFunc={() => editTimeCards(num)}
            />
          );
        })}
      </div>
      <Button type="scrollRight" handlerFunc={scrollRight}></Button>

      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
