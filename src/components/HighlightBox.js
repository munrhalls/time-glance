import React from 'react'

const HighlightBox = ({ highlightParams }) => {
    console.log(highlightParams.left)
    return (
        <div
            className="h-5/6"
            style={{ display: `${highlightParams.display}`, backgroundColor: `${highlightParams.bgColor}`, width: `${highlightParams.width}rem`, left: `${highlightParams.left}rem`, top: 0, bottom: 0, position: 'absolute' }}>
        </div>
    )
}

export default HighlightBox