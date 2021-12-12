import React, { useState } from 'react'

export const Dragover = () => {
    const highlight = [1, 2, 3, 4];
    let pos;

    // const [box, setBox] = useState([...highlight]);
    const [location, setLocation] = useState(pos)
    const getCoords = (e) => {
        setLocation(e.clientX)
    }

    console.log(location)
    return (
        <div className="Dragover" onMouseMove={getCoords}>
            <div style={{
                position: 'absolute',
                background: '#000',
                width: '4rem',
                height: '4rem',
                left: `${location}px`,
                top: '8rem'
            }}>box</div>
        </div>
    )
}
