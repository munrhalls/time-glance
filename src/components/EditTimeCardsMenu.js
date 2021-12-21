import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards, closeEditMenu }) => {
  const nums = [...Array(24).keys()].map((el) => el + 1);

  return (
    <div className="EditTimeCardsMenu">
      {nums.map((num) => (
        <Button
          type="num"
          label={num.toString()}
          handlerFunc={() => editTimeCards(num)}
          key={num + Math.random()}
        />
      ))}
      <Button type="exit" label="Close." handlerFunc={closeEditMenu} />
    </div>
  );
};
