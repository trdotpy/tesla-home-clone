import React from 'react'
import { GrDown } from 'react-icons/gr'

const Sections = ({ product }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${product.image})`,
            }}
            className="h-screen w-screen bg-center bg-cover bg-no-repeat"
        >
            {/* ---PRODUCTS--- */}
            <div className="flex flex-col justify-between items-center h-screen">
                <div className="flex flex-col items-center mt-40 pt-2">
                    <h1 className="text-5xl text-[#303338] mb-2">
                        {product.name}
                    </h1>
                    <p className="text-[#2D3136]">{product.desc}</p>
                </div>

                {/* ---BUTTONS--- */}
                <div className="flex flex-col md:flex-row gap-y-2">
                    <button className="bg-[#3f4245f3] text-white text-sm w-64  mx-3 px-12 py-3 rounded cursor-pointer mb-28">
                        {product.btnLeft}
                    </button>
                    <button className="bg-[#E4E4E2] text-[#54565A] text-sm w-64  mx-3 px-12 py-3 rounded cursor-pointer mb-28">
                        {product.btnRight}
                    </button>
                </div>

                {/* ---ARROW--- */}
                {/* <div className='flex items-center justify-center text-gray-600'>
                    <GrDown 
                        style={{
                            animation: 'animateDown infinite 1.5s',
                        }}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Sections
