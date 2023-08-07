'use client'

import React from "react"
import {Image as IImage} from "sanity"
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


export default function CartData() {
  const [productData2, setProductData2] = useState<IProduct[]>([]);

  useEffect(() => {
    result.then((filteredProductId: any) => {
      productData(filteredProductId).then((data: IProduct[]) => {
        setProductData2(data);
        console.log(data)
      });
    });
  }, []);
  
  const subTotal = productData2.reduce((acc, item) => acc + item.price, 0);

  // const handletoDelete = async() =>{
  //   const res = await fetch ("/api/cart",{
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       product_id: ""
  //     })
  //   })
  // }

  return (
    <>
      {productData2.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full pt-10 xl:px-0 px-10">
          <div className="lg:max-w-5xl mx-auto text-2xl font-bold">
            <h1>Shopping Cart</h1>
          </div>
        <div className="xl:max-w-5xl mx-auto flex flex-row   flex-wrap lg:flex-nowrap  lg:gap-x-10">
        <div className="grid grid-cols-1 xl:min-w-[70%] lg:min-w-[60%]">
          {productData2.map((item: IProduct) => (
        <div key={item._id} className="flex flex-row md:flex-nowrap flex-wrap py-6 gap-y-6">
          <div >
          <Image src={urlForImage(item.image).url()} alt="product" width={200} height={100} className="sm:h-[200px] m-auto  lg:w-[200px] md:w-[340px] rounded-lg " />
          </div>
            <div className="flex flex-col w-full md:pl-8 gap-y-4 ">
              <div className="flex flex-row justify-between  w-full">
                <p className="text-xl pb-2">{item.title}</p>
                <button><AiOutlineDelete className="text-2xl"/></button>
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
                <p className="text-xl font-bold">${item.price}.00</p>
              </div>
            </div>
        </div>
        ))}
        </div>
        <div className="lg:max-w-[25%] w-full flex flex-col h-[250px]  px-4 py-6 justify-between bg-gray-50 rounded-lg">
            <p className="text-xl font-semibold">Order Summary</p>
            <div className="flex flex-row justify-between">
              <p>Quantity</p>
              <p>{productData2.length}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>SubTotal</p>
              <p>${subTotal}</p>
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