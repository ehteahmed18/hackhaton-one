'use client'

import React from "react"
import { cookies } from "next/dist/client/components/headers"
import { client } from "../../../sanity/lib/client"
import {Image as IImage} from "sanity"
import  Router  from "next/navigation"
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import { productData, result } from "./cartProduct";
import { urlForImage } from '../../../sanity/lib/image';
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai"




interface IProduct {
    title: string,
    image: IImage,
    price: number,
    _id: string,
    ref:string,
    description: string,
    categoryName: string
}


export default function Cart() {
  const [productData2, setProductData2] = useState<IProduct[]>([]);

  useEffect(() => {
    result.then((filteredProductId: any) => {
      productData(filteredProductId).then((data: IProduct[]) => {
        setProductData2(data);
      });
    });
  }, []);

  return (
    <>
      {productData2.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full pt-10">
          <div className="xl:max-w-5xl mx-auto text-2xl font-bold">
            <h1>Shopping Cart</h1>
          </div>
        <div className="xl:max-w-5xl mx-auto flex flex-row  xl:gap-x-10">
        <div className="grid grid-cols-1 xl:min-w-[70%]">
          {productData2.map((item: IProduct) => (
        <div className="flex flex-row py-6">
          <div >
          <Image src={urlForImage(item.image).url()} alt="product" width={200} height={100} className="sm:h-[200px] m-auto w-screen lg:w-[200px] md:w-[340px] rounded-lg" />
          </div>
            <div className="flex flex-col w-full pl-4 gap-y-4 ">
              <div className="flex flex-row justify-between  w-full">
                <p className="text-xl pb-2">{item.title}</p>
                <a><AiOutlineDelete className="text-2xl"/></a>
              </div>
              <div>
                <p>{item.categoryName}</p>
              </div>
              <div>
                <p className="font-semibold">Delievery Estimation</p>
              </div>
              <div>
                <p className="font-bold text-orange-400">5 Working Days</p>
              </div>
              <div>
                <p className="text-xl">${item.price}.00</p>
              </div>
            </div>
        </div>
        ))}
        </div>
        <div className="xl:min-w-[25%] flex flex-col h-[250px]  px-4 py-6 justify-between bg-gray-50 rounded-lg">
            <p className="text-xl font-semibold">Order Summary</p>
            <div className="flex flex-row justify-between">
              <p>Quantity</p>
              <p>1 product</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>SubTotal</p>
              <p>$225.00</p>
            </div>
            <button className="bg-black text-white px-4 py-2">Process to Checkout</button>
        </div>
        </div>
        </div>
      )}
      <Footer />
    </>
  );
}