import React from 'react'
import Item from '../Item/item'
import product_data from '../Assets/ProductsData';
// let product_data = [
//     {
//         id:1,
//         name:"Crosscut Furniture Wooden Floor Lamp",
//         num:"2,985",
//         url:"https://m.media-amazon.com/images/I/81FGLuFGutL._AC._SR360,460.jpg"
//     },
//     {
//         id:2,
//         name:"Homesake Modern Zen Wooden Lampshade Nightstand Lamps",
//         num:"999",
//         url:"https://m.media-amazon.com/images/I/71KIr4Pb6kS._AC._SR360,460.jpg"
//     },
//     {
//       id:3,
//       name:"Supphire E27 &2-Pin Solid Mango Wood White Shade Modern Floor Lamp Foot Switch Holder",
//       num:"4,399",
//       url:"https://m.media-amazon.com/images/I/71XVXDxUqZL._AC_UL480_QL65_.jpg"
//   },
//   {
//       id:4,
//       name:"Vero Forza Spectra Corner Light RGB LED Corner Lamp with App and Remote Control, Color Changing Ambience Light with Music Sync, Led Floor Lamp for Living Room Bedroom Gaming Room",
//       num:"3,299",
//       url:"https://m.media-amazon.com/images/I/61cSFEqMixL._AC._SR360,460.jpg"
//   },
//   {
//     id:5,
//     name:"The Artment your artistic apartment Modern Art Zenith Corner Floor Lamp",
//     num:"2,999",
//     url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
// },
// {
//     id:6,
//     name:"atharva",
//     num:"789",
//     url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
// },
// {
//   id:7,
//   name:"atharva",
//   num:"789",
//   url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
// },
// {
//   id:8,
//   name:"atharva",
//   num:"789",
//   url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
// }
// ]
const Lamps = () => {
  return (
    <>
    <div>
      <h1 className=''>Lamps</h1>
    </div>
    <div className='flex flex-wrap justify-center gap-14 mt-10'>
      {product_data.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} num={item.num} url={item.url} />
      })}
      
    </div>
    </>
  )
}

export default Lamps
