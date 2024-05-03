import React from 'react'

const FeaturedCard = ({src, title}) => {
  return (
    <div className='card h-96 p-4 rounded-lg border hover:brightness-105 duration-500 cursor-pointer hover:border-[var(--filter-color)]'>
      <h2>{title}</h2>
    </div>
  )
}

export default FeaturedCard