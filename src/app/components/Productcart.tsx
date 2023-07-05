"use client"
import React, { FC } from "react";
import Image from 'next/image'
import { client } from '../../../sanity/lib/client'
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import { data } from "autoprefixer";
import { AiOutlineMinus, AiOutlinePlus,AiOutlineShoppingCart } from "react-icons/ai"

interface IProduct {
    title: string,
    category: string,
    price: number,
    description: string,
    image: IImage,
    // ref: string,
    id: number,
    _id: string

}

export const ProductCart: FC<{ item: IProduct }> = ({ item }) => {

    const handleToAddCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id: item._id
            })
        })
    }
    return (
        <>
            <div key={item.id} className="py-[4] xl:px-[8rem] md:px-[4rem] px-4">
                <div className="lg:flex-row flex-col flex lg:gap-x-10 gap-x-0  ">
                    <div className="flex flex-wrap-reverse min-w-[55%]  lg:flex-nowrap  lg:gap-x-8 gap-x-0 lg:space-y-0 space-y-4">
                        <div className="flex flex-col gap-4">
                            <img className="h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer" src={urlForImage(item.image).url()} alt="" />
                        </div>
                        <div className=" h-full w-full">
                            <Image className=" h-full w-full" src={urlForImage(item.image).url()} alt="" width={200} height={500} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-10 gap-0 space-y-10 lg:space-y-0 py-10 lg:py-0 lg:max-w-[35%]   ">
                        <div>
                            <h3 className="font-[400] text-[1.625rem] leading-[33px] tracking-[0.05em] text-[#212121]">{item.title}</h3>
                            <span className="font-[600] text-[1.3rem] opacity-[0.3]">{item.description}</span>
                        </div>
                        <div>
                            <p className="font-[700] text-[0.9rem] leading-[16px] tracking-[0.05em]">SELECT SIZE</p>
                            <ul className="flex mt-4 gap-4">
                                <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">XS</li>
                                <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">S</li>
                                <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">M</li>
                                <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">L</li>
                                <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">XL</li>
                            </ul>
                        </div>
                        <div className="flex gap-8">
                            <h4 className="">Quantity: </h4>
                            <div className="flex items-center ">
                                <AiOutlineMinus className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                                <span className="">1</span>
                                <AiOutlinePlus className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] border-2 border-black" />
                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={handleToAddCart} className="w-[70%] p-3 text-base font-semibold  bg-black text-white flex items-center justify-center gap-2 text-startcol tracking-wider">
                                <AiOutlineShoppingCart className='md:text-2xl text-xl' />
                                Add to Cart</button>
                            <p className="  font-[700] text-[1.5rem] leading-[30px] tracking-[0.1em]">${item.price}.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}