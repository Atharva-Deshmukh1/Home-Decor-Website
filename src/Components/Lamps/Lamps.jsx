import React, { useContext } from 'react'
import Item from '../Item/Item'
import product_data from '../Assets/ProductsData';
import { ShopContext } from '../ShopContext/ShopContext';
import All_product_data from '../Assets/AllProduct';
const Lamps = (props) => {
  const {All_product_data} = useContext(ShopContext)
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