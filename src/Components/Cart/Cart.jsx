// src/Cart.js
import React from 'react';
import CartItems from '../CartItems/CartItems';

const Cart = () => {
  
  return (
    // <div className="bg-gray-100 p-4 rounded-md shadow-md">
    //   <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
    //   <ul>
    //     {items.map((item, index) => (
    //       <li key={index} className="flex justify-between items-center mb-2">
    //         <span>{item.name}</span>
    //         <span>${item.price.toFixed(2)}</span>
    //       </li>
    //     ))}
    //   </ul>
    //   <div className="mt-4">
    //     <strong>Total:</strong> ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
    //   </div>
    // </div>
    <>
      <div>
        <CartItems />
      </div>
    </>
  );
};

export default Cart;
