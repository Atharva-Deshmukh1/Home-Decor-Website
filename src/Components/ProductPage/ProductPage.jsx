import React from 'react'
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Item from '../Item/Item'
import All_product_data from '../Assets/AllProduct';
import Homescreen from '../Homescreen/Homescreen';

export default function ProductPage() {
  return (
    // <div className="dark:bg-gray-800">


    //   <div className='flex flex-wrap justify-center gap-14 mt-10'>
    //     {All_product_data.map((item, i) => {
    //       return <Item key={i} id={item.id} name={item.Title} num={item.Price} url={item.url} />
    //     })}
    //   </div>
    // </div>
    <>
    <Homescreen />
    </>
  )
}
