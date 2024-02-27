import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const InteriorIdeas = () => {

    useEffect(()=>{
        AOS.init({duration:"1500" });
    }, []);

  return (
    <>
    <div className="flex items-center gap-12 dark:bg-gray-800 p-2 md:p-10" data-aos="fade-right">
                            <h2 className="text-2xl pl-8 pb-4 font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                            <p className="hidden ml-4 max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                                These are some of the modern ideas/designs for your rooms.
                            </p>
                        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 dark:bg-gray-800 mt-[-50px]" data-aos="fade-right">
                <div className="grid gap-4 ">
                    <div className="overflow-hidden">
                        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2q8rNsv6OiT3VBE34WTc6yXFkk625GBF4tg&usqp=CAU">
                            <img src="https://i.pinimg.com/736x/e8/ae/9f/e8ae9f8fc427b2581f8fc8085cf35d90.jpg" className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200 " alt="" />
                        </a>

                    </div>
                    <div className="overflow-hidden">
                        <a href="">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://frillx.com/cdn/shop/products/warm-white-round-fiber-ball-16-lamps-home-decoration-string-lights-decorative-fairy-lights-mini-copper-wire-lights-for-bedroom-decor-christmas-party-wedding-dec-430638_1445x.jpg?v=1646291553" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="https://i.ytimg.com/vi/0ZntIG3FfcU/maxresdefault.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://i.ytimg.com/vi/0ZntIG3FfcU/maxresdefault.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 overflow-hidden">
                    
                    <div className="overflow-hidden">
                        <a href="">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://hips.hearstapps.com/hmg-prod/images/kitchen-cabinets-jaredkuzia-nedw-pleasantbelmont-kitchenislandvert-1607978874.jpg?crop=1.00xw:0.802xh;0,0.148xh&resize=640:*" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="https://cityfurnish.com/blog/wp-content/uploads/2023/06/luxury-hotel-room-with-modern-design-elegance-generated-by-ai-min.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://cityfurnish.com/blog/wp-content/uploads/2023/06/luxury-hotel-room-with-modern-design-elegance-generated-by-ai-min.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 overflow-hidden">
                    <div className="overflow-hidden">
                        <a href="https://i.pinimg.com/564x/d3/01/dd/d301ddc7bf17cf39174570edf56ed59a.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://i.pinimg.com/564x/d3/01/dd/d301ddc7bf17cf39174570edf56ed59a.jpg" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://www.home-designing.com/wp-content/uploads/2014/09/bachelor-bedroom.jpeg" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="https://i.pinimg.com/564x/a9/64/df/a964df35514f45c172195243dde2929e.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://i.pinimg.com/564x/a9/64/df/a964df35514f45c172195243dde2929e.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 overflow-hidden">
                    <div className="overflow-hidden">
                        <a href="https://hisforhomeblog.com/images/must-have-home-decor/girls-bedroom.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://hisforhomeblog.com/images/must-have-home-decor/girls-bedroom.jpg" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/05/Cottage-Style-Design.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/05/Cottage-Style-Design.jpg" alt="" />
                        </a>
                    </div>
                    <div className="overflow-hidden">
                        <a href="">
                        <a href="https://www.nobroker.in/blog/wp-content/uploads/2021/07/home-decor-trends.jpg">
                        <img className="h-auto max-w-full rounded-lg hover:scale-110 cursor-pointer transition duration-200" src="https://www.nobroker.in/blog/wp-content/uploads/2021/07/home-decor-trends.jpg" alt="" />
                        </a>
                        </a>
                    </div>
                </div>
            </div>
    </>
  )
}

export default InteriorIdeas
