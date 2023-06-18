import React from "react"
import Image from "next/image"


export default function Event(){
    return(
        <div className="w-full mt-16 ">
            <div className="xl:max-w-6xl flex flex-col items-center justify-center  mx-auto">
                <h1 className="text-blue-600 text-sm font-semibold mb-3">PROMOTIONS</h1>
                <p className="sm:text-4xl text-2xl font-bold">Our Promotions Events</p>
            </div>
            <div className="xl:max-w-6xl px-6 md:px-10 lg:px-6 flex lg:flex-nowrap flex-wrap gap-x-8 lg:gap-y-0 gap-y-4 py-12 mx-auto">
                <div className="lg:w-5/12 w-full flex flex-col gap-y-4 ">
                    <div className="w-full flex justify-center md:items-center bg-gray-200 ">
                        <div className="w-6/12 py-8 pl-6 ">
                            <h1 className="font-semibold text-3xl pt-4">GET UP TO <span className="font-extrabold text-3xl">60%</span></h1>
                            <p className="text-lg">For the summer season</p>
                        </div>
                        <div className="sm:w-6/12 lg:w-8/12 flex lg:h-[216px] "><Image src="/event1.png" alt="" width={350} height={100} /></div>
                    </div>
                    <div className="w-full text-white px-8 pt-12 pb-9 text-center items-center justify-center flex flex-col bg-black ">
                        <h3 className="sm:text-4xl text-2xl pb-4 font-bold">GET 30% OFF</h3>
                        <p className="sm:text-md text-sm ">USE PROMO CODE</p>
                        <p className="sm:px-16 px-12 py-2 sm:text-lg text-md  rounded-md bg-gray-700 mt-1">DINEWEEKENDSALE</p>
                    </div>
                </div>
                <div className="lg:w-7/12 w-full flex md:flex-nowrap flex-wrap gap-x-4 sm:gap-y-0 gap-y-4 ">
                    <div className="sm:w-6/12 w-full  bg-0-event_color_1 pt-6">
                        <div className="flex flex-col ml-4">
                            <p className="text-md">Flex Sweatshirt</p>
                            <p className="text-lg font-bold "><span className=" font-normal mr-2">$100.00</span>$75.00</p>
                        </div>
                        <Image src="/event2.png" alt="" width={280} height={380} className="h-[365px] m-auto"/>
                    </div>
                    <div className="sm:w-6/12 w-full bg-0-event_color_2 pt-6">
                        <div className="flex flex-col ml-4">
                            <p className="text-md">Flex Push Button Bomber</p>
                            <p className="text-lg font-bold "><span className=" font-normal mr-2">$225.00</span>$190.00</p>
                        </div>
                        <Image src="/event3.png" alt="" width={280} height={380} className="m-auto"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}