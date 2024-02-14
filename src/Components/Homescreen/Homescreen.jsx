import React, { useState } from 'react';
import All_product_data from '../Assets/AllProduct';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Homescreen = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const handleCategoryFilterButtonClick = (category) => {
    setCategoryFilter(category);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const filteredProducts = All_product_data.filter((product) => {
    const passesCategoryFilter = !categoryFilter || product.Category === categoryFilter;
    const passesPriceFilter =
      !priceFilter ||
      (priceFilter === 'below500' && product.Price < 500) ||
      (priceFilter === 'below5000' && product.Price >= 500 && product.Price < 5000) ||
      (priceFilter === '5000plus' && product.Price >= 5000);

    return passesCategoryFilter && passesPriceFilter;
  });

  return (
    <>
      <div className=' flex flex-wrap justify-center gap-5 p-4 bg-amber-50'>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'lamp' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleCategoryFilterButtonClick('lamp')}
        >
          Lamps <p className={categoryFilter === 'lamp' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'painting' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleCategoryFilterButtonClick('painting')}
        >
          Paintings <p className={categoryFilter === 'painting' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'plants' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleCategoryFilterButtonClick('plants')}
        >
          Plants <p className={categoryFilter === 'plants' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'sofa' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleCategoryFilterButtonClick('sofa')}
        >
          Sofa Set <p className={categoryFilter === 'sofa' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'swing' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleCategoryFilterButtonClick('swing')}
        >
          Swing/Jhoola <p className={categoryFilter === 'swing' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
      
        
        <select
          className="border-2 border-black p-1 rounded-lg font-medium"
          value={priceFilter}
          onChange={handlePriceFilterChange}
        >
          <option value="">All Prices</option>
          <option value="below500">Below 500</option>
          <option value="below5000">Below 5000</option>
          <option value="5000plus">5000+</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-8 md:gap-12 justify-center p-4 md:p-10 bg-amber-50'>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <ProductDisplay className='flex' product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homescreen;
