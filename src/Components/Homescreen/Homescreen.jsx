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
      <div className=' flex flex-wrap justify-center gap-5 p-4 bg-amber-50'>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'lamp' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('lamp')}
        >
          Lamps <p className={categoryFilter === 'lamp' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'painting' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('painting')}
        >
          Paintings <p className={categoryFilter === 'painting' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'plants' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('plants')}
        >
          Plants <p className={categoryFilter === 'plants' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'sofa' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('sofa')}
        >
          Sofa Set <p className={categoryFilter === 'sofa' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
        </button>
        <button
          className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
            categoryFilter === 'swing' ? 'bg-green-700 text-white' : ''
          }`}
          onClick={() => handleFilterButtonClick('swing')}
        >
          Swing/Jhoola <p className={categoryFilter === 'swing' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
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
// import React, { useState } from 'react';
// import All_product_data from '../Assets/AllProduct';
// import ProductDisplay from '../ProductDisplay/ProductDisplay';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';

// const Homescreen = () => {
//   const [categoryFilter, setCategoryFilter] = useState(null);
//   const [priceFilter, setPriceFilter] = useState(null);

//   const handleFilterButtonClick = (category) => {
//     setCategoryFilter(category);
//   };

//   const handlePriceFilterChange = (event) => {
//     setPriceFilter(event.target.value);
//   };

//   const filteredProducts = All_product_data.filter((product) => {
//     if (categoryFilter && product.Category !== categoryFilter) {
//       return false;
//     }
//     if (priceFilter && product.Price > parseInt(priceFilter)) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <>
//       <div className='flex flex-wrap justify-center gap-5 p-4 bg-amber-50'>
//         <button
//           className={`border-2 border-black p-1 rounded-lg font-medium gap-2 flex ${
//             categoryFilter === 'lamp' ? 'bg-green-700 text-white' : ''
//           }`}
//           onClick={() => handleFilterButtonClick('lamp')}
//         >
//           Lamps <p className={categoryFilter === 'lamp' ? '' : 'hidden'}> | <FontAwesomeIcon icon={faCheck} /></p>
//         </button>
//         {/* Add similar buttons for other categories */}
//       </div>
//       <div className='flex justify-center p-4 bg-amber-50'>
//         <select
//           className='border-2 border-black p-1 rounded-lg font-medium'
//           value={priceFilter}
//           onChange={handlePriceFilterChange}
//         >
//           <option value=''>Select Price Range</option>
//           <option value='50'>50 and below</option>
//           <option value='100'>100 and below</option>
//           <option value='200'>200 and below</option>
//           {/* Add more options for different price ranges */}
//         </select>
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
