import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, hourWidth}) {
    // retrieve props - startHour, duration, bgColor
  // cardWidth = hourUnit * duration
  // cardPositionLeft = hourWidth * startHour
  // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor
  const hourUnit = 2;
  const cardWidth = 'w-' + (dayCard.duration * hourUnit);
  const tailwindCSS = `${cardWidth} text-white bg-black`


  return (
    <div className={tailwindCSS}>
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

