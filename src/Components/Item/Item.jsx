import React from 'react'

export default function Item(props) {
  return (
    <>

      <div>
        <div className="w-64 h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
          <a href="#">
            <img className="rounded-t-lg h-[70%] w-full object-cover" src={props.url} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-wrap">{props.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.num}</p>

          </div>
        </div>

      </div>
    </>
  )
}
