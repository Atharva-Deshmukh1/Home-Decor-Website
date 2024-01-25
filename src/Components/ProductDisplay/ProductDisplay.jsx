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
  const {ProductPage}=props
return (
  <>
    <card>
      <a href={`/product/${product.id}`}>
      <img src={product.url} alt="" />
      </a>
    </card>
  </>
)
}

export default ProductDisplay
