import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <>

      <div>
        <div className="w-[8rem] sm:w-64 h-[300px] sm:h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
          <Link to={`/ProductPage/${props.id}`}>
            <img className="rounded-t-lg h-[60%] sm:h-[70%] w-full object-cover" src={props.url} alt="" />
            
          <div className="p-5">
            
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-wrap">{props.name}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.num}</p>

          </div>
          </Link>
        </div>

      </div>
    </>
  )
}
