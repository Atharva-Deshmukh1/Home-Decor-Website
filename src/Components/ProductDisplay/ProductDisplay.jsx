import React from 'react'

const ProductDisplay = ({ product }) => {

  return (
    <div className='flex'>
      <a href={`/product/${product.id}`}>
      <div className="dark:bg-gray-800  p-20">
        <div className=' gap-14 mt-10 h-72 w-60'>


          <img className="rounded-t-lg h-[70%] w-full object-cover" src={product.url} alt="" />


        </div>

      </div>
    </a>
  </div >
)
}

export default ProductDisplay
