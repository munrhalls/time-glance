import React from 'react'
import PropTypes from 'prop-types'
import TimeCard from './TimeCard'

const Projects = ({timeCard}) => {
  return (
    <div className="relative h-48 w-full">
      <TimeCard timeCard={timeCard} />
    </div>
  )
}

Projects.propTypes = {

}

export default Projects
