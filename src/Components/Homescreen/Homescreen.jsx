import React, { useState } from 'react';
import All_product_data from '../Assets/AllProduct';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Homescreen = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);

  const handleFilterButtonClick = (category) => {
    setCategoryFilter(category);
  };

  const filteredProducts = categoryFilter
    ? All_product_data.filter((product) => product.Category === categoryFilter)
    : All_product_data;

  return (
    <>
      <div className='flex gap-5'>
        <button onClick={() => handleFilterButtonClick('lamp')}>Show Only Lamps</button>
        <button onClick={() => handleFilterButtonClick('painting')}>Show Only Art</button>
        <button onClick={() => handleFilterButtonClick('plants')}>Show Only Green</button>
        <button onClick={() => handleFilterButtonClick('sofa')}>Show Only sofa</button>
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
