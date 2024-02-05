import React from 'react'
import { Link } from 'react-router-dom'

const ProductDisplay = ({ product }) => {

  return (

    <div className='h-[300px] w-56 flex justify-center  bg-amber-50 rounded-lg'>
      <Link to={`/product/${product.id}`}>
        <div className="bg-amber-50  h-[300px] w-56 p-2 hover:border-2 hover:border-black overflow-hidden  rounded-lg ">
          

            <img className=" h-[70%] w-full object-fill " src={product.url} alt="" />
            <div className=''>
            <p className='font-semibold'>{product.Title}</p>
            <p className='font-normal'>M.R.P: ₹{product.Price}</p>
            </div>


          

        </div>
      </Link>
    </div >






  )
}

export default ProductDisplay
