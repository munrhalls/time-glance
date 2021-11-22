import React from 'react'
// import PropTypes from 'prop-types'

function DayCard({ dayCard }) {

  return (
    <div className={`bg-${dayCard.bgColor}-900 absolute text-black text-2xl bg-black border-black flex justify-center content-center`} 
    style={{height: '87.5%', marginTop: '2.25%', marginLeft: `${dayCard.startHour/2}rem`, width: `${dayCard.duration/2}rem`, borderRadius: '4px'}}>
      {dayCard.duration}
    </div>
  )
}

// DayCard.propTypes = {  

// }

export default DayCard


