import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Main() {
    return (
        <div className="w-full">
            <div className="xl:max-w-6xl w-full mx-auto gap-x-8  flex mt-10 ">
                <div className="xl:max-w-5/12 lg:max-w-6/12 w-full md:px-10 lg:px-6 px-6 ">
                    <div className="w-full flex flex-col gap-y-10 pt-12 ">
                        <h1 className="bg-blue-100 md:w-3/12 w-5/12 px-2 flex items-center justify-center rounded-md"><span className="p-2 text-blue-700 font-bold">Sale 70%</span></h1>
                        <h1 className="md:text-6xl text-5xl font-bold">An Industrial Take on Streetwear</h1>
                        <p className="w-8/12">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                        <a href="/products" className="flex gap-x-4 text-white bg-black px-3 py-2 border border-black md:w-5/12 lg:w-4/12 w-10/12"><AiOutlineShoppingCart className="text-4xl m-auto" /><span className="text-center text-md m-auto">Start Shopping</span></a>
                    </div>
                    <div className="w-full grid items-center md:grid-cols-4 grid-cols-2 grid-rows-2 gap-y-4 md:gap-y-0 py-10">
                        <Image src="/Featured1.png" alt="" width={90} height={80}/>
                        <Image src="/Featured2.png" alt="" width={90} height={100} />
                        <Image src="/Featured3.png" alt="" width={90} height={100} />
                        <Image src="/Featured4.png" alt="" width={90} height={100} />
                    </div>
                </div>
                <div className="xl:w-7/12 lg:w-5/12 ml-12 lg:block hidden">
                    <div className="w-[400px] xl:w-[600px] h-[600px] rounded-[50%] bg-0-header_color">
                    <Image src="/header.png" alt="" width={400} height={650} className="absolute top-24 h-[650px] xl:w-[650px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}