import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'

const CartItems = () => {
  const { All_product_data, cartItems, addToCart, removeToCart, getTotalCartAmount } = useContext(ShopContext)
  return (
    <>
    <div>
      {["product",""]}
    </div>
      {All_product_data.map((e) => {
        if (cartItems[e.id] > 0) {
          return <>
            <div className='h-52 flex justify-around items-center bg-amber-50'>
              <img className='h-32 w-32 object-fill' src={e.url} alt="" />
              <div className=' w-1/2'>
                <p>{e.Title}</p>
                
              </div>
              <p>₹ {e.Price}</p>
              <p>1</p>
            </div>

          </>
        }
      })}
    </>
  )
}

export default CartItems
