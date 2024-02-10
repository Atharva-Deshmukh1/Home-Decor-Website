import React from 'react'
import All_product_data from '../Assets/AllProduct'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
const Homescreen = () => {
  return (
    <div className='flex flex-wrap gap-12 justify-center p-4 md:p-10 bg-amber-50'>
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
