import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({dayCard}) {

  return (
    <div className={`h-full w-${dayCard.duration} bg-${dayCard.bgColor}-900 absolute text-black text-2xl bg-black border-black  border-2 rounded-2x1 flex justify-center content-center border-2 rounded-lg`} style={{marginLeft: `${dayCard.startHour}rem`}}>
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {

// }

export default DayCard

