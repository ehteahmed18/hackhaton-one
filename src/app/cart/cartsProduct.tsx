'use client'

import React from "react"
import { Image as IImage, SESSION_ID } from "sanity"
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import { productData, result, handleDelete } from "./cartProduct";
import { urlForImage } from '../../../sanity/lib/image';
import Image from "next/image";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Cookies from "js-cookie";
import getStripePromise from "../lib/stripe"
import Stripe from "stripe";




interface IProduct {
  title: string,
  image: IImage,
  price: number,
  _id: string,
  ref: string,
  description: string,
  categoryName: string,
  quantity: number
}


export default function CartData({quan}:{quan?:number}) {
  const [productData2, setProductData2] = useState<IProduct[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false)
  const [Quan, setQuan] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 1800)
  }, [])

  useEffect(() => {

    result.then((cartItems: any) => {      
      const productIds = cartItems.map((item: any) => item.product_id)
      productData(productIds).then(async (data: IProduct[]) => {           
        try{
          const productsWithQuantity = data.map((product) => {
            const cartItem = cartItems.find((item: any) => item.product_id === product._id);
            return{
              ...product,
              quantity: cartItem.quantity,
            }
          });
          setProductData2(productsWithQuantity)
        }catch(error){
        }
      });
    });
  }, []);
  console.log(productData2);

  const handleIncQuantity = (productId: string) => {
    setProductData2((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecQuantity = (productId: string) => {
    setProductData2((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const calculateTotalProductPrice = (item: IProduct) => {
    return item.price * item.quantity;
  };
  

  const subTotal = productData2.reduce((acc, item) => acc + calculateTotalProductPrice(item), 0);

  const handletoDelete = async (productId: string) => {
    try {
      
      handleDelete(productId)
      setProductData2((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }


  const handletoClick = async () => {
    const stripe = await getStripePromise();
    const res = await fetch("/api/stripesession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(productData2)
    });

    const data = await res.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id })
    }
  };


  return (
    <>
    {dataLoaded ? (
      <div className="w-full pt-10 xl:px-0 px-10">
      <div className="lg:max-w-5xl mx-auto text-2xl font-bold">
        <h1>Shopping Cart</h1>
      </div>
      {productData2.length === 0 ? (
        <p className="lg:max-w-5xl mx-auto flex py-10 justify-center text-4xl font-bold">Your Cart is Empty</p>
      ) : (
        <div className="xl:max-w-5xl mx-auto flex flex-row   flex-wrap lg:flex-nowrap  lg:space-x-10">
          <div className="grid grid-cols-1 xl:min-w-[70%] lg:min-w-[60%]">
            {productData2.map((item: IProduct) => (
              <div key={item._id} className="flex flex-row md:flex-nowrap flex-wrap py-6 space-y-0">
                <div >
                  <Image src={urlForImage(item.image).url()} alt="product" width={200} height={100} className="sm:h-[200px] m-auto  lg:w-[200px] md:w-[340px] rounded-lg " />
                </div>
                <div className="flex flex-col w-full md:pl-6 space-y-4 ">
                  <div className="flex flex-row justify-between  w-full">
                    <p className="text-xl pb-2">{item.title}</p>
                    <button ><AiOutlineDelete onClick={() => handletoDelete(item._id)} className="text-2xl" />
                    </button>
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
                  <div className="flex justify-between">
                    <p className="text-xl font-bold">${item.price}.00</p>
                    <div className="flex">
                    <AiOutlineMinus onClick={() => handleDecQuantity(item._id)} className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                    <span className="">{item.quantity}</span>
                    <AiOutlinePlus onClick={() => handleIncQuantity(item._id)} className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] -2 -black" />
                    </div>
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
            <button onClick={handletoClick} className="bg-black text-white px-4 py-2">Process to Checkout</button>
          </div>
        </div>
    )}
    <Footer />
    </div>
    ) : (<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
  </div>
)}
      
    </>
  );
}