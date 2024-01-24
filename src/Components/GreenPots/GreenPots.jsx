import React from 'react'
import Item from '../Item/item'
import product_data_GreenPots from '../Assets/GreenPotData';

export default function GreenPots() {
  return (
    <div>
        <h1>gren</h1>
        <>
    <div>
      <h1 className=''>Lamps</h1>
    </div>
    <div className='flex flex-wrap justify-center gap-14 mt-10'>
      {product_data_GreenPots.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.Title} num={item.Price} url={item.url} />
      })}
      
    </div>
    </>
    </div>
  )
}
