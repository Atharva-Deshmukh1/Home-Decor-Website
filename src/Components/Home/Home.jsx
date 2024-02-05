import React from "react";
import { Link } from "react-router-dom";
import LivingRoom from "../LivngRoom/LivingRoom";
import InteriorIdeas from "../InteriorIdeas/InteriorIdeas";
import Products from "../Products/Products";
import Box from "../Box/Box";
export default function Home() {
    return (
        <div className="dark:bg-gray-800">
            <div
                className="bg-center bg-cover bg-no-repeat p-12 h-[500px] brightness-[0.6] blur-[2px]"
                style={{ backgroundImage: `url('https://www.build-review.com/wp-content/uploads/2022/12/AdobeStock_521077579.jpg')` }}>
                    

            </div>
                <div class=" w-full flex items-center justify-center text-4xl font-bold">
                    <span class="text-9xl relative top-[-350px] bg-gradient-to-t from-white via-white to-transparent text-transparent bg-clip-text blur-[0px]">
                        EleGance-Hub
                    </span>
                        {/* <div className="flex">
                        <Box />
                        <Box />
                        <Box />
                        </div> */}
                </div>

            {/* <div>
                <h1 className="text-center pt-10 mt-[-100px] text-4xl text-white">Featured Products</h1>
                <div className="text-white flex gap-28 justify-center content-center flex-wrap p-10">

                    <Products itemName="Lamp" img={<img className='rounded-full hover:border-double hover:border-4 hover:border-slate-100' src="https://assets.mydeal.com.au/48285/bedside-lamp-3-way-dimmable-spiral-led-table-lamp-nightstand-desk-reading-light-10472877_00.jpg?v=638299888338386473&imgclass=dealpageimage" alt="" />} link="/Lamps" />

                    <Products itemName="Small Greenery Decor" img={<img className='rounded-full hover:border-double hover:border-4 hover:border-slate-100' src="https://image.made-in-china.com/2f0j00VuTRNPFfbjoe/Home-Decor-Green-Plant-Pine-Trees-Pot-Vase-Artificial-Small-Bonsai-with-Pot.webp" alt="" />} link="/GreenPots" />

                    <Products itemName="Modern Art" img={<img className='rounded-full hover:border-double hover:border-4 hover:border-slate-100' src="https://kotart.in/cdn/shop/files/PaintingBBR151_1.jpg?v=1697558736" alt="" />} link="/ModernArt" />
                </div>
            </div> */}

            <LivingRoom />


            <InteriorIdeas />





        </div>
    );
}
