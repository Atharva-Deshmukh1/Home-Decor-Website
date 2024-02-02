import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'

const CartItems = () => {
    const {All_product_data,cartItems,addToCart,removeToCart} = useContext(ShopContext)
  return (
    <>
      {All_product_data.map((e) => {
        if(cartItems[e.id]>0)
        {
            return <>
            <img src={e.url} alt="" />
            </>
        }
      })}
    </>
  )
}

export default CartItems
