import React from 'react'
import Item from '../Item/Item'
import product_data_ModernArt from '../Assets/ModernArtData';

const ModernArt = () => {
  return (
    <>
    <div>
      <h1 className=''>ModernArt</h1>
    </div>
    <div className='flex flex-wrap justify-center gap-14 mt-10'>
      {product_data_ModernArt.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.Title} num={item.Price} url={item.url} />
      })}
      
    </div>
    </>
  )
}

export default ModernArt
