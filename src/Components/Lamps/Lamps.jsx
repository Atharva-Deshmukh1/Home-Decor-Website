import React from 'react'
import Item from '../Item/item'
let product_data = [
    {
        id:1,
        name:"ata",
        num:"123",
        url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    },
    {
        id:10,
        name:"atharva",
        num:"789",
        url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    }
]
const Lamps = () => {
  return (
    <div className='flex gap-14'>
      {product_data.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} num={item.num} url={item.url} />
      })}
      
    </div>
  )
}

export default Lamps
