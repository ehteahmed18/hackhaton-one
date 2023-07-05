import React from "react";
import Image from "next/image";
import { Image as IImage} from 'sanity';
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image';


export const getProduct = async() => {
    const res = await client.fetch(`*[_type=="product"]{
      title,
      price,
      _id,
      image,
      ref,
      category -> {
        name
      }
    }`)
    return res;
}

interface Product{
    title:string,
    price:number,
    category:{
      name:string
    },
    ref:string,
    _id:string,
    image:IImage
  }

export default async function Products() {
    const data:Product[] = await getProduct()
    // console.log(data)
    return (
        <div className="xl:max-w-7xl mx-auto  mt-16">
            <div className=" 2xl:max-w-7xl xl:max-w-6xl flex flex-col items-center justify-center  mx-auto">
                <h1 className="text-blue-600 text-sm font-semibold mb-3">PRODUCTS</h1>
                <p className="sm:text-4xl text-2xl font-bold">Check What We Have</p>
            </div>
            <div className="xl:max-w-6xl  mt-10 lg:gap-x-20 lg:px-6 xl:px-2 xl:gap-x-2 mx-auto  relative flex overflow-hidden overflow-x-scroll  flex-shrink-0 py-10 no-scrollbar ">
            {data.map((item) => (
                <a href={item.ref}  key={item._id} className="xl:max-w-lg lg:min-w-[448px] xl:min-w-[375px] md:min-w-[640px] min-w-[260px] mx-8 md:mx-0 md:ml-16 lg:ml-0  h-fit  transition duration-100 ease-in hover:scale-105">
                    <div className="flex flex-col items-center justify-center ">
                        <Image src={urlForImage(item.image).url()} alt="product" width={250} height={100} className="sm:h-[400px] m-auto xl:w-screen sm:w-[350px] h-fit" />
                        <p className="sm:text-xl font-semibold mt-2">{item.title}</p>
                        <p className="sm:text-xl font-semibold">${item.price}</p>
                    </div>
                </a>
            ))}
            </div>
        </div>
    )
}