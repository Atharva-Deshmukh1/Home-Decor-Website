import React from 'react'
import All_product_data from '../Assets/AllProduct'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
const Homescreen = () => {
  return (
    <div>
      {
        All_product_data.map((product) => (
          <div className='flex'>
          <ProductDisplay className='flex' product={product} />
          </div>
        ))
      }
    </div>
  )
}

export default Homescreen
