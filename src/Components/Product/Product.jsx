import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails'

const Product = () => {
    const { All_product_data } = useContext(ShopContext)
    const { productId } = useParams()
    const product = All_product_data.find((e)=> e.id === Number(productId))

    return (
        <div>
            <ProductDetails product={product} />
        </div>
    )
}

export default Product
