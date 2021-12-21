import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = ({ editTimeCards }) => {
  const nums = [...Array(10).keys()];

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
      <Button type="exit" label="Close." />
    </div>
  );
};
