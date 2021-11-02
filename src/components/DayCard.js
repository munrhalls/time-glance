import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard, numHourUnit}) {

  return (
    <div className={`w-${dayCard.numDuration * numHourUnit} h-full ml-${dayCard.numStartHour * numHourUnit} bg-${dayCard.bgColor}-900 absolute text-black text-2xl bg-black border-black  border-2 rounded-2x1 flex justify-center content-center`}>
      {dayCard.numDuration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

