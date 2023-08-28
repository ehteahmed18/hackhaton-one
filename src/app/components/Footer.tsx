import React from "react";
import Image from "next/image";
import {FaTwitter,FaFacebookF,FaLinkedinIn} from "react-icons/fa"


export default function Footer() {
    return (
        <div className="w-full mt-5">
            <div className="2xl:max-w-7xl xl:max-w-6xl  mx-auto px-6 md:px-10 lg:px-6 flex lg:flex-nowrap flex-wrap py-20 lg:space-y-0 space-y-8 lg:space-x-20 space-x-0">
                <div className="lg:w-4/12 md:w-6/12 w-full space-y-10">
                    <div className=" flex font-bold  xl:text-2xl text-lg items-center ">
                        <Image src="/Logo.png" alt="" width={200} height={100} />
                    </div>
                    <p className="text-lg text-gray-600">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="w-full flex space-x-4">
                        <a href="/" className=" bg-gray-200 rounded-md">
                        <FaTwitter className="md:text-5xl text-4xl md:p-3 p-2"/>
                        </a>
                        <a href="/" className=" bg-gray-200 rounded-md">
                        <FaFacebookF className="md:text-5xl text-4xl md:p-3 p-2"/>
                        </a>
                        <a href="/" className=" bg-gray-200 rounded-md">
                        <FaLinkedinIn className="md:text-5xl text-4xl md:p-3 p-2"/>
                        </a>
                    </div>
                </div>
                <div className="lg:w-7/12 w-full  flex lg:justify-evenly lg:flex-nowrap flex-wrap lg:space-y-0 space-y-4 lg:space-x-8 space-x-0">
                    <div className="lg:w-3/12 w-full  space-y-6">
                        <h1 className="text-2xl font-bold text-gray-600">Company</h1>
                        <ul className="text-gray-600 text-lg space-y-2">
                            <li>About</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12 w-full  space-y-6">
                    <h1 className="text-2xl font-bold text-gray-600">Support</h1>
                        <ul className="text-gray-600 text-lg space-y-2">
                            <li>Support Carrer</li>
                            <li>24h of Service</li>
                            <li>Quick Chat</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12 w-full  space-y-6">
                    <h1 className="text-2xl font-bold text-gray-600">Contact</h1>
                        <ul className="text-gray-600 text-lg space-y-2">
                            <li>Whatsapp</li>
                            <li>Support 24h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}