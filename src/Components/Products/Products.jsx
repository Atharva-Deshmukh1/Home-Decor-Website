import React from 'react'

export default function Products({itemName ,img ,link}) {
  return (
    <>
    
      <div className='w-40 h-40  '>
        <a href={link}>
            {img}
        </a>
        <h2 className='text-center'>{itemName}</h2>
      </div>
    </>
  )
}
