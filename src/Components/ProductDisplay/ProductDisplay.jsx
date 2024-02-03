import React from 'react'
import { Link } from 'react-router-dom'

const ProductDisplay = ({ product }) => {

  return (

    <div className='h-[300px] w-56 flex justify-center border-2 border-sky-800 dark:bg-gray-800 rounded-lg'>
      <Link to={`/product/${product.id}`}>
        <div className="dark:bg-gray-800 border-2 border-sky-500 h-[300px] w-56 rounded-lg ">
          

            <img className=" h-[70%] w-full object-fill rounded-lg" src={product.url} alt="" />
            <p>{product.Title}</p>
            <p>{product.Price}</p>


          

        </div>
      </Link>
    </div >






  )
}

export default ProductDisplay
