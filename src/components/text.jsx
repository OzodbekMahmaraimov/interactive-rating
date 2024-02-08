import React from 'react'

const Text = ({ heading, title, align }) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className={`text-white text-4xl text-${align}`}>{heading}</h1>
            <p className={`text-title font-semibold text-${align}`}>{title}</p>
        </div>
    )
}

export default Text