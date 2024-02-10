import React from 'react'

const LivingRoom = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-10 h-full mt-[-50px] md:mt-[-100px] sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="text-2xl pl-2 font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                            <p className="hidden ml-4 max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                                These are some of the unique and trending ideas for decorating your living room.
                            </p>
                        </div>

                        
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                        <a href="https://kotart.in/cdn/shop/products/Kotart-Modern-Abstract-Art-Paintings-for-Living-Room-Bedroom-Wall-Decor-Paintings-for-Home-Decor-2.jpg?v=1697554365&width=1946"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://kotart.in/cdn/shop/products/Kotart-Modern-Abstract-Art-Paintings-for-Living-Room-Bedroom-Wall-Decor-Paintings-for-Home-Decor-2.jpg?v=1697554365&width=1946" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Modern</span>
                        </a>



                        <a href="https://cityfurnish.com/blog/wp-content/uploads/2023/07/living-room-filled-with-furniture-red-wall-generative-ai-image-min.jpg"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/living-room-filled-with-furniture-red-wall-generative-ai-image-min.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Classic</span>
                        </a>


                        <a href="https://www.realsimple.com/thmb/oV5u3dWgGOLEsua9h1j5IpEeXDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/color-scheme-GettyImages-1281326948-cc79d0c3d20d4969a7b1d1c859f1cee6.jpg"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://www.realsimple.com/thmb/oV5u3dWgGOLEsua9h1j5IpEeXDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/color-scheme-GettyImages-1281326948-cc79d0c3d20d4969a7b1d1c859f1cee6.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Asthetic</span>
                        </a>


                        <a href="https://i.pinimg.com/736x/56/0a/18/560a186050cdae148c2ae6764550bb54.jpg"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://i.pinimg.com/736x/56/0a/18/560a186050cdae148c2ae6764550bb54.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Modern</span>
                        </a>
                    </div>
                </div>

            </div>
    </>
  )
}

export default LivingRoom
