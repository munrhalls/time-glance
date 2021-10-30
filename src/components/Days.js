import React from "react";
import PropTypes from "prop-types";
import Day from "./Day";
import TimeCard from './TimeCard'

const Days = (props) => {
  return (
    <div>
      <TimeCard id="card-1" draggable="true" text="Card one" />

      <Day id="Day-2" className="m-7 w-40 bg-gray-500 h-96">
        <TimeCard id="card-2" draggable="true" text="Card two" />
      </Day>
    </div>
  );
};

Days.propTypes = {};

export default Days;
