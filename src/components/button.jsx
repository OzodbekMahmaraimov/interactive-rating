import React from 'react'

function Button({ necha, choose }) {

  return (
    <button onClick={choose} className='py-[1.1rem] px-[1.7rem] rounded-full text-title text-xl font-bold duration-300 bg-cirlce hover:bg-btnHover hover:text-white focus:bg-button focus:text-white'>
      {necha}
    </button>
  )
}

export default Button