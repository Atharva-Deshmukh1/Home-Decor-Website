import React, { useContext, useState } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';

const ProductDetails = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        addToCart(product.id);
        setAddedToCart(true);
    };

    return (
        <div className=" w-full p-10 bg-amber-50">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img
                        src={product.url}
                        className="rounded-lg shadow-lg h-auto md:h-80 sm:h-52"
                        alt={product.Title}
                    />
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                    <h2 className="text-3xl font-semibold mb-4">{product.Title}</h2>
                    <p className="text-xl text-primary font-bold mb-4">₹ {product.Price}</p>
                    <button
                        onClick={handleAddToCart}
                        className={`px-6 py-2 rounded-lg hover:bg-slate-600 ${addedToCart ? 'bg-green-600 text-black font-bold' : 'bg-slate-900 text-white'}`}
                        disabled={addedToCart}
                    >
                        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
