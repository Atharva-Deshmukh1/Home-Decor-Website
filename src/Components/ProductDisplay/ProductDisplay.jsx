import React from 'react'
// const ProductDisplay = (props) => {
//     const {ProductPage}=props
//   return (
//     <>
//       <h1>hhh</h1>
//     </>
//   )
// }
const ProductDisplay = ({product}) => {
  
return (
  <>

<div className="dark:bg-gray-800">
<div className=' gap-14 mt-10 h-72 w-60'>
      
      <a href={`/products/${product.id}`}>
      <img className="rounded-t-lg h-[70%] w-full object-cover" src={product.url} alt="" />
      </a>
      </div>
      </div>
  </>
)
}

export default ProductDisplay
