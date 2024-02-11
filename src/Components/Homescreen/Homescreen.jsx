// import React, { useState } from 'react';
// import All_product_data from '../Assets/AllProduct';
// import ProductDisplay from '../ProductDisplay/ProductDisplay';

// const Homescreen = () => {
//   const [categoryFilter, setCategoryFilter] = useState(null);

//   const handleFilterButtonClick = (category) => {
//     setCategoryFilter(category);
//   };

//   const filteredProducts = categoryFilter
//     ? All_product_data.filter((product) => product.Category === categoryFilter)
//     : All_product_data;

//   return (
//     <>
//       <div className='flex flex-wrap justify-center gap-5 p-4 bg-amber-50'>
//         <button className='border-2 border-black p-1 rounded-lg shadow-[2px_2px_4px_rgb(0,0,0,0.70)] font-medium gap-2 flex active:bg-green-700' onClick={() => handleFilterButtonClick('lamp')}>Show Only Lamps <p className='hidden'>%</p></button>
//         <button className='border-2 border-black p-1 rounded-lg shadow-[2px_2px_4px_rgb(0,0,0,0.70)] font-medium gap-2 flex active:bg-green-700' onClick={() => handleFilterButtonClick('painting')}>Show Only Art<p className='hidden'>%</p></button>
//         <button className='border-2 border-black p-1 rounded-lg shadow-[2px_2px_4px_rgb(0,0,0,0.70)] font-medium gap-2 flex active:bg-green-700' onClick={() => handleFilterButtonClick('plants')}>Show Only Green<p className='hidden'>%</p></button>
//         <button className='border-2 border-black p-1 rounded-lg shadow-[2px_2px_4px_rgb(0,0,0,0.70)] font-medium gap-2 flex active:bg-green-700' onClick={() => handleFilterButtonClick('sofa')}>Show Only sofa<p className='hidden'>%</p></button>
//       </div>
//       <div className='flex flex-wrap gap-8 md:gap-12 justify-center p-4 md:p-10 bg-amber-50'>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <ProductDisplay className='flex' product={product} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Homescreen;
import React, { useState } from 'react';
import All_product_data from '../Assets/AllProduct';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <div className='flex flex-wrap justify-center gap-5 p-4 bg-amber-50'>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'lamp' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('lamp')}
        >
          Show Only Lamps <p className={categoryFilter === 'lamp' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'painting' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('painting')}
        >
          Show Only Art <p className={categoryFilter === 'painting' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'plants' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('plants')}
        >
          Show Only Green <p className={categoryFilter === 'plants' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'sofa' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('sofa')}
        >
          Show Only Sofa <p className={categoryFilter === 'sofa' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
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
