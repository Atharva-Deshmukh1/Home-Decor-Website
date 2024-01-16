import React from "react";
import { Link } from "react-router-dom";
import LivingRoom from "../LivngRoom/LivingRoom";
import InteriorIdeas from "../InteriorIdeas/InteriorIdeas";

export default function Home() {
    return (
        <>

            <div
                className="bg-center bg-cover bg-no-repeat p-12 bg-black h-[500px] brightness-[1]"
                style={{ backgroundImage: `url('https://www.build-review.com/wp-content/uploads/2022/12/AdobeStock_521077579.jpg')` }}>

                <div className="text-center gap-20">

                    <div className="w-44 h-40 flex  bg-slate-300 text-cyan-300 ">
                        
                            <div className="relative flex">
                                <img className="w-20 h-20 rounded-full bg-slate-800 absolute inset-x-2 bottom-2" src="" alt="" />
                                <h2 className="text-black">something</h2>
                            </div>
                      
                    </div>


                </div>

            </div>


            <LivingRoom />


            <InteriorIdeas />




        </>
    );
}
