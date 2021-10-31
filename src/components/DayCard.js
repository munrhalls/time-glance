import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, hourWidth}) {
    // retrieve props - startHour, duration, bgColor
  // cardWidth = hourWidth * duration
  // cardPositionLeft = hourWidth * startHour
  // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor
  const width = dayCard.duration * Number(hourWidth);
  console.log(hourWidth)
  
  return (
    <div className="">
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

