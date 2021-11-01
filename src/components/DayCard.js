import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, numHourUnit}) {
    // retrieve props - numStartHour, numDuration, bgColor
  // cardWidth = numHourUnit * numDuration

  // cardPositionLeft = hourWidth * numStartHour
  // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor
  const width = dayCard.numDuration * numHourUnit;
  const leftDistance = dayCard.numStartHour * numHourUnit;
  const bgColor = dayCard.bgColor;

  return (
    <div className={`w-${width} h-full left-${leftDistance} bg-${bgColor}-900 absolute text-black text-2xl bg-black border-black  border-2 rounded-2x1 flex justify-center content-center`}>
      {dayCard.numDuration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

