import React from 'react'
import All_product_data from '../Assets/AllProduct'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
const Homescreen = () => {
  return (
    <div className='flex flex-wrap gap-16 justify-center p-10 bg-slate-700'>
      {
        All_product_data.map((product) => (
          <div>
          <ProductDisplay className='flex' product={product} />
          </div>
        ))
      }
    </div>
  )
}

export default Homescreen
