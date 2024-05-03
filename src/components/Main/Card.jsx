import React from 'react'

const Card = ({src, type, title}) => {
  return (
    <div className='card border rounded-lg px-4 py-8 duration-300 hover:border-[var(--filters-color)] cursor-pointer'>
      <img src={src} alt="" className='size-8 border rounded-lg' />
      <p className='tracking-wider text-[var(--blue)] font-semibold my-2'>{type}</p>
      <h2 className='font-black'>{title}</h2>
    </div>
  )
}

export default Card