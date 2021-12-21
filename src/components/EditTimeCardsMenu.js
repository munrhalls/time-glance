import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const numRows = [0, 4, 8, 12, 16, 20];
  const nums = [];
  numRows.forEach((row) => {
    const numsForRow = [];
    for (let i = row; i < row + 4; i++) {
      numsForRow.push(i + 1);
    }
    nums.push(numsForRow);
  });

  console.log(nums);
  return (
    <div className="EditTimeCardsMenu">
      {nums.map((row) => {
        return (
          <div
            className="NumBtnRow"
            style={{ color: "#fff", display: "flex" }}
            key={row + Math.random()}
          >
            {row.map((num) => {
              return (
                <div
                  className="NumBtnCol"
                  style={{ display: "flex", border: "1px solid #fff" }}
                  key={num + Math.random()}
                >
                  {num}
                </div>
              );
            })}
          </div>
        );
      })}
      {/* {nums.map((num) => (
        <Button
          type="num"
          label={num.toString()}
          handlerFunc={() => editTimeCards(num)}
          key={num + Math.random()}
        />
      ))} */}
      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
