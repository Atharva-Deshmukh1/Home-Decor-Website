import React from 'react'

export default function About() {
    return (
        <div className="py-10 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 rounded-lg">
                        <img className='rounded-lg'
                            src="https://i.pinimg.com/736x/5e/85/26/5e8526db2f6512d6d8487efeb0f4586b.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Elevate your living spaces with our products.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to our online haven for exquisite home decor! At EleGance-Hub, we take pride in curating a stunning collection of lamps, paintings, and decoration pieces that effortlessly blend artistry with functionality. Elevate your living spaces with our carefully selected range of lamps, casting a warm and inviting glow to every corner.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Explore our diverse assortment of decoration stuff, meticulously chosen to accentuate your home's aesthetic, from chic vases to intricately designed sculptures. Whether you're seeking to illuminate, inspire, or embellish, EleGance-Hub is your premier destination for transforming your space into a haven of style and sophistication. Embark on a journey of timeless elegance with us, where every piece is a testament to the art of enhancing your home.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
