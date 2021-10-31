import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, hourWidth}) {
    // retrieve props - startHour, duration, bgColor
  // cardWidth = hourUnit * duration

  // cardPositionLeft = hourWidth * startHour
  // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor
  const hourUnit = 2;
  const width = 'w-' + (dayCard.duration * hourUnit);
  const left = 'left-' + dayCard.startHour * 2;
  const bgColor = 'bg-' + dayCard.bgColor + '-900';
  console.log(bgColor)
  const tailwindCSS = `${width} h-${hourUnit * 10} ${left} ${bgColor} h-full absolute text-white bg-black`


  return (
    <div className={tailwindCSS}>
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

