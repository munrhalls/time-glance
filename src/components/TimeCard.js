import React from 'react'

export function TimeCard() {
  function handleDrag() {
  	console.log('drag')
  }

  return (
    <div className="m-24 bg-blue h-14 w-10 border-black border-2"
    draggable
    onDragStart={handleDrag}>
      
    </div>
  )
}




