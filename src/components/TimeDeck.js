import React from "react";
import { TimeCard } from "./TimeCard";

export const TimeDeck = ({ timeDeck }) => {
  return (
    <div className="TimeDeck" style={{ position: "relative" }}>
      {/* <div className="TimeDeckBg" style={{ backgroundColor: `${timeDeck.color}`, opacity: '0.51', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}></div> */}
      <TimeCard />
    </div>
  );
};
