import React from "react";
import Image from "next/image";


export const Unique = () => {
    return (
        <div className="w-full  mt-16 bg-gray-50 py-10">
            <div className="xl:max-w-7xl mx-auto  flex flex-col ">
                <div className="w-full flex xl:justify-end md:justify-center lg:items-center">
                    <h1 className="lg:text-5xl md:text-4xl md:px-4 xl:px-0 lg:px-4 md:w-8/12 w-5/12 text-3xl px-6 xl:w-5/12 font-bold">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
                <div className="w-full  xl:flex-nowrap flex flex-wrap mt-5 px-6 md:px-10 lg:px-6 gap-y-6 xl:gap-y-0 ">
                    <div className="xl:max-w-6/12 lg:w-full  grid grid-cols-2 relative  mt-5 xl:mt-0">
                        <div className="leading-[110px] font-bold lg:text-[6.875rem] ssm:text-[5rem] sssm:text-[4rem] text-[3rem] md:text-[5.5rem] opacity-[0.07] z-1 absolute pl-4">Different From Others</div>
                        <div className="md:w-[70%] w-[80%]  z-2 flex flex-col gap-y-4 mb-4 ">
                            <h1 className="font-semibold text-lg">Using Good Quality Materials</h1>
                            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="md:w-[70%] w-[80%]   z-2 flex flex-col gap-y-4 mb-4 ">
                            <h1 className="font-semibold text-lg">100% Handmade Products</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="md:w-[70%] w-[80%]  z-2 flex flex-col gap-y-4  mb-4 ">
                            <h1 className="font-semibold text-lg">Modern Fashion Design</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="md:w-[70%] w-[80%]  z-2 flex flex-col gap-y-4 mb-4 ">
                            <h1 className="font-semibold text-lg">Discout For Bulk Orders</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="xl:min-w-[50%]  flex xl:flex-nowrap flex-wrap gap-x-10 lg:w-full  lg:mt-10 xl:mt-0">
                        <div className=" xl:max-w-[50%] m-auto md:m-0">
                            <Image src="/feature.png" alt="" width={270} height={100} className="xl:py-4" />
                        </div>
                        <div className=" lg:max-w-[60%] xl:max-w-[50%] md:max-w-[50%] md:py-4 py-8 xl:py-2 flex flex-col space-y-10 items-start md:justify-center">
                            <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <button  className="xl:max-w-[50%] md:w-[40%] w-[50%] bg-gray-900 text-white text-center p-3 text-sm border-2 border-t-gray-500 border-l-gray-500 border-r-black border-b-black"><a href="/products">See All Products</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}