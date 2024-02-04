import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'

const CartItems = () => {
  const { All_product_data, cartItems, addToCart, removeToCart, getTotalCartAmount } = useContext(ShopContext)
  return (
    <>
      {All_product_data.map((e) => {
        if (cartItems[e.id] > 0) {
          return <>
            <div className='h-52 flex justify-around items-center bg-slate-700'>
              <img className='h-32 w-32 object-fill' src={e.url} alt="" />
              <div className='border-2 border-sky-500 w-1/2'>
                <p>{e.Title}</p>
                <p>{e.Price}</p>
              </div>
              <p>xyz</p>
            </div>

          </>
        }
      })}
    </>
  )
}

export default CartItems
