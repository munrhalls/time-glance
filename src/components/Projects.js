import React from 'react'
import PropTypes from 'prop-types'
import TimeCard from './TimeCard'

const Projects = ({timeCards}) => {
  return (
    <div className="relative h-48 w-full">
      {timeCards.map((card) => {
        return <TimeCard timeCard={card} />
      })}
    </div>
  )
}

Projects.propTypes = {

}

export default Projects
