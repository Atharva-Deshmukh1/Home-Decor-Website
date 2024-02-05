import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext';

const ProductDetails = (props) => {
    const {product} = props;
const {addToCart} = useContext(ShopContext)

    return (
        <div className="container mx-auto mt-8 bg-amber-50">
          <div className="flex">
            <div className="w-1/2">
              <img
                src={product.url}
                
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 ml-8">
              <h2 className="text-3xl font-semibold mb-4">{product.Title}</h2>
              {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
              <p className="text-xl text-primary font-bold mb-4">₹ {product.Price}</p>
              <button onClick={()=>{addToCart(product.id)}} className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
}

export default ProductDetails
