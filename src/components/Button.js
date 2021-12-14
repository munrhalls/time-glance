import React from 'react'

export const Button = ({ sign, text, handlerFunc }) => {
    return (
        <button
            className='BtnAddTimeDeck'
            onClick={handlerFunc}>
            <span className="BtnCircle">
                <span className='BtnSign'>+</span>
            </span>
            <span className='BtnText'>{text}</span>
        </button>
    )
}
