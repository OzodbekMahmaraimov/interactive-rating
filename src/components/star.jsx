import React from 'react'
import stars from './images/icon-star.svg'

const Star = () => {
  return (
    <button className='p-5 rounded-full bg-cirlce'>
        <img src={stars} alt="starImg" />
    </button>
  )
}

export default Star