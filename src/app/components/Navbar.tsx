"use client"
import React, { useState } from "react";
import {FiCircle} from "react-icons/fi";
import Image from "next/image";
import {AiOutlineMenu,AiOutlineClose,AiOutlineShoppingCart} from "react-icons/ai"


export default function Navbar(){
    const list = [
        {name:"Female",link:"/female"},
        {name:"Male",link:"/male"},
        {name:"Kids",link:"/kids"},
        {name:"All Products",link:"/product"}
    ]
    const [open,setOpen] = useState(false)
    return(
        <div className="w-full top-0 left-0">
            <div className="2xl:max-w-7xl xl:max-w-6xl w-full lg:flex xl:gap-x-4 lg:space-x-14 mx-auto  items-center   bg-white py-6 md:px-6 lg:px-3 px-7">
                <a href="/" className=" flex font-bold  xl:text-2xl text-lg items-center xl:pr-16 "> 
                <Image src="/Logo.png" alt="" width={150} height={100} className="lg:w-[80px] xl:w-[150px]" />
                </a>
                <div onClick={() => setOpen(!open)} className="md:text-3xl text-2xl absolute sm:right-12 right-6 md:top-6 top-7 lg:hidden">{open ? <AiOutlineClose/> : <AiOutlineMenu/> }</div>
                <ul className={`lg:flex lg:items-center xl:gap-x-8 lg:gap-x-4 lg:pb-0 pb-4 absolute lg:static bg-white lg:z-auto z-[1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in k ${open ? 'top-20 opacity-100':'top-[-490px]'}  opacity-100`}>
                    {
                    list.map((link) => (
                        <li key={link.name} className="ml-6 xl:text-md text-md lg:my-0 my-8">
                            <a className="text-black hover:text-gray-400" href={link.link}>{link.name}</a>
                        </li>
                    ))
                    }
                    <li className="ml-2 lg:text-sm px-4 md:my-0 my-8"><input type="search" className="sm:hidden rounded-md px-2 sm:px-4 sm:pr-16 pr-10 md:block border border-black" placeholder="What you looking for"></input></li>
                    <li><a href="/cart"><AiOutlineShoppingCart className="text-5xl m-auto bg-gray-100 rounded-full p-3"/></a></li>
                </ul>
            </div>
            
        </div>
    )
}