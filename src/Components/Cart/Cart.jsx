
import React from 'react';
import CartItems from '../CartItems/CartItems';
import { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
const Cart = () => {
  const {getTotalCartAmount} = useContext(ShopContext)
  
  return (
    <>
      
        <CartItems />
        <div className='bg-amber-50'>
        <div className='w-full md:w-[450px] p-6 md:ml-8 bg-amber-50'>
              <div>
            <h1 className='text-5xl font-bold mb-6'>Cart Total</h1>
            <hr />
            <div className='flex w-full sm:w-[400px] p-1 justify-between'>
              <p className='m-l-0 '>Subtotal:</p>
              <p className=''>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex w-full sm:w-[400px] p-1 justify-between'>
              <p>Shipping Fees:</p>
              <p className='ml-4'>Free</p>
            </div>
            <hr />
            <div className='font-bold flex w-full sm:w-[400px] p-1 justify-between'>
              <h3>Total:</h3>
              <h3>₹ {getTotalCartAmount()}</h3>
            </div>
            <hr />
            <br />
              </div>
              <button className='w-38 h-10 bg-lime-500 hover:bg-lime-600 rounded-lg p-2 font-bold'>Proceed to checkout</button>
            </div>
            </div>
    </>
  );
};

export default Cart;
