import React from "react";
import { Button } from "./Button";

export const EditTimeCardsMenu = () => {
  const nums = [...Array(10).keys()];

  return (
    <div className="EditTimeCardsMenu">
      {nums.map((num) => num)}
      <Button type="exit" label="Exit." />
    </div>
  );
};
