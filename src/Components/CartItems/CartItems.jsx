// import React from 'react'
// import { useContext } from 'react'
// import { ShopContext } from '../ShopContext/ShopContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// const CartItems = () => {
//   const { All_product_data, cartItems,  removeFromCart,  } = useContext(ShopContext)
//   return (
//     <>

//       {All_product_data.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return <>
//             <div className='h-52 flex justify-around items-center bg-amber-50'>
//               <img className='h-32 w-32 object-fill' src={e.url} alt="" />
//               <div className=' w-1/2'>
//                 <p>{e.Title}</p>

//               </div>
//               <p>₹ {e.Price*cartItems[e.id]}</p>
//               <button>{cartItems[e.id]}</button>
//               <button onClick={()=>{removeFromCart()}}><FontAwesomeIcon icon={faXmark} /></button>
//             </div>

//           </>
//         }
//       })}
//     </>
//   )
// }

// export default CartItems
import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import

const CartItems = () => {
  const { All_product_data, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); // Call removeFromCart with productId
  };

  const handleIncreaseQuantity = (productId) => {
    addToCart(productId); // Call addToCart with productId to increase quantity
  };

  return (
    <>
      {All_product_data.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className='w-full h-52 flex justify-around items-center bg-amber-50'>
              <img className='h-32 w-32 object-fill' src={product.url} alt="" />
              <div className='flex flex-col md:flex-row md:gap-5 p-4'>
              <div className=' w-1/2'>
                <p>{product.Title}</p>
              </div>
              <p>₹ {product.Price * cartItems[product.id]}</p>
              <div className='flex items-center'>
                <button onClick={() => handleRemoveFromCart(product.id)} className='w-6 h-6 '>-</button>
                <button className='cursor-default'>{cartItems[product.id]}</button>
                <button onClick={() => handleIncreaseQuantity(product.id)} className='w-6 h-6 '>+</button>
              </div>
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}> {/* Pass product id */}
                <FontAwesomeIcon icon={faTimes} /> {/* Use faTimes icon */}
              </button>
            </div>
          );
        }
        return null; // Add this to handle the case where cartItems[product.id] is not greater than 0
      })}
    </>
  );
};

export default CartItems;
