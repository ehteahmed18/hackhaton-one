'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1020,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="w-full mt-16 border border-black">
                <div className="xl:max-w-6xl flex flex-col items-center justify-center  mx-auto">
                    <h1 className="text-blue-600 text-sm font-semibold mb-3">PRODUCTS</h1>
                    <p className="sm:text-4xl text-2xl font-bold">Check What We Have</p>
                </div>
                <div className="xl:max-w-6xl mx-auto border h-auto border-black relative z-1">
                    <Slider {...settings} className="border border-black w-full relative z-1 overflow-hidden h-auto space-x-2">
                        <div className=" w-5/12 border border-black h-auto">
                            <div>
                                <Image src="/event2.png" alt="" width={300} height={100} className="h-[400px]" />
                            </div>
                        </div>    
                        <div className="w-[394.67px] border border-black h-auto">
                            <div>
                                <Image src="/event2.png" alt="" width={300} height={100} className="h-[400px]" />
                            </div>
                        </div>    
                        <div className="w-[394.67px] border border-black h-auto">
                            <div>
                                <Image src="/event2.png" alt="" width={300} height={100} className="h-[400px]" />
                            </div>
                        </div>    
                    </Slider>
                </div>
            </div>
        )
    }
}
