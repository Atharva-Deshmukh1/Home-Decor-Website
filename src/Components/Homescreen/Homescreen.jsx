import React from 'react'
import All_product_data from '../Assets/AllProduct'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
const Homescreen = () => {
  return (
    <div>
      {
        All_product_data.map((product) => (
          
          <ProductDisplay product={product} />
          
        ))
      }
    </div>
  )
}

export default Homescreen
