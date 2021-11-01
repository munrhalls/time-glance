import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, dayHeight, hourWidth}) {
    // retrieve props - startHour, duration, bgColor
  // cardWidth = hourUnit * duration

  // cardPositionLeft = hourWidth * startHour
  // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor
  const hourUnit = 2;
  const width = dayCard.duration * hourUnit;
  const leftDistance = dayCard.startHour * 2;
  const bgColor = dayCard.bgColor;

  return (
    <div className={`w-${width} h-full left-${leftDistance} bg-${bgColor}-900 absolute text-black text-2xl bg-black border-black  border-2 rounded-2x1 flex justify-center content-center`}>
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

