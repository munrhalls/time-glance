import React from 'react'

export const TimeCard = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', 'dragstaff')
    }

    return (
        <div className='TimeCard' 
        style={{backgroundColor: 'orange', zIndex: '1'}}
        draggable={true}
        onDragStart={handleDragStart}>
            4
        </div>
    )
}
