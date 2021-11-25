import React from 'react'

const HourMarks = () => {
    const hourMarks = [...Array(6).keys()].map((i) => (i) * 4);
    return (
        <div className="h-1/6 flex bg-black text-white items-center"
        >
            {hourMarks.map((mark, i) => (
                <span
                    className={`text-xs h-full flex justify-center items-center`}
                    style={{ width: '2rem', borderRight: '4px solid #111111', marginLeft: '0.15rem', fontWeight: 'bold' }}
                    key={i}
                >
                    {mark}
                </span>
            ))}
        </div>
    )
}

export default HourMarks