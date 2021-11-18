import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, hourUnit}) {

  const width = dayCard.duration * hourUnit;
  const marginLeft = dayCard.startHour * hourUnit;
  const duration = dayCard.duration;
  const bgColor = dayCard.bgColor;

  return (
    <div className={`h-full w-${width}  ml-${marginLeft} bg-${bgColor}-900 absolute text-black text-2xl bg-black border-black  border-2 rounded-2x1 flex justify-center content-center border-2 rounded-lg`}>
      {duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

