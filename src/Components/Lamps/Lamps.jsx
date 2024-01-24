import React from 'react'
import Item from '../Item/item'
import product_data from '../Assets/ProductsData';

const Lamps = () => {
  return (
    <>
    <div>
      <h1 className=''>Lamps</h1>
    </div>
    <div className='flex flex-wrap justify-center gap-14 mt-10'>
      {product_data.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.Title} num={item.Price} url={item.url} />
      })}
      
    </div>
    </>
  )
}

export default Lamps
