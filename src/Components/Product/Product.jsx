import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { All_product_data } = useContext(ShopContext)
    const { productId } = useParams()
    const product = All_product_data.find((e)=> e.id === Number(productId))

    return (
        <div>

        </div>
    )
}

export default Product
