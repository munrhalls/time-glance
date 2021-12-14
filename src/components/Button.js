import React from 'react'

export const Button = ({ type, handlerFunc }) => {
    const getSign = () => {
        if (type === 'add') { return '+' }
        if (type === 'delete') { return '-' }
        if (type === 'edit') { return '.' }
    }
    const getText = () => {
        if (type === 'add') { return 'Add new.' }
        if (type === 'delete') { return 'Delete.' }
        if (type === 'edit') { return 'Edit.' }
    }
    return (
        <button
            className='Btn'
            onClick={handlerFunc} >
            <span className={`BtnCircle ${type}`}>
                <span className='BtnSign'>
                    {getSign()}
                </span>
            </span>
            <span className='BtnText'>{getText()}</span>
        </button >
    )
}
