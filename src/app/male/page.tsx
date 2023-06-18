import React from "react";
import Image from "next/image";
import { Image as IImage } from 'sanity';
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const getProduct = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        image,
        _id,
        price,
        description,
        "categoryName":category -> name
    }`)
    return res
}

interface Product {
    title: string,
    image: IImage,
    price: number,
    _id: string,
    description: string,
    categoryName: string
}

export default async function Product() {
    const data: Product[] = await getProduct()
    const data1:Product[] = data.filter(item => 
        item.categoryName === "Male"    
    )
    console.log(data1)
    return (
        <>
            <Navbar />
            <div className="w-full ">
                <div className="xl:max-w-6xl  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-20 px-10 ssm:px-16  md:px-16 lg:px-6 xl:m-auto  pt-10 ">
                    {data1.map((item) => (
                        <div key={item._id} className="lg:w-9/12 md:w-11/12  ">
                            <div  className="   flex flex-col items-start justify-center  ">
                                <Image src={urlForImage(item.image).url()} alt="product" width={200} height={100} className="sm:h-[250px] m-auto w-screen lg:w-[270px] md:w-[340px] h-fit" />
                                <p className="sm:text-lg font-semibold mt-2 pl-2">{item.title}</p>
                                <p className=" text-sm font-semibold mt-2 pl-2 text-gray-600">{item.description}</p>
                                <p className="sm:text-xl mt-3 font-semibold pl-2">${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}