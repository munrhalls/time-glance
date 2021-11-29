import React from "react";
import PropTypes from "prop-types";
import Day from "./Day";
import TimeCard from './TimeCard'

const Days = ({days, timeCards, updateCards}) => {
  const getDayCards = (day, timeCards) => {
    const dayCards = timeCards.filter(card => {
      return card.idOfScheduledDay === day
    });
    return dayCards;
  }

  return (
    <div>
      {days.map(day => {
        const dayCards = getDayCards(day, timeCards);
        return <Day id={day} key={day} updateCards={updateCards} dayCards={dayCards} />
      })}
    </div>
  );
};
Days.propTypes = {};

export default Days;
