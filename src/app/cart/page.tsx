

import React from "react"
import {Image as IImage} from "sanity"
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import { productData, result } from "./cartProduct";
import { urlForImage } from '../../../sanity/lib/image';
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai"
import CartData from "./cartsProduct";





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

return (
    <>
      <CartData/>
    </>
  );
}