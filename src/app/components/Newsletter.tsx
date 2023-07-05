import React from "react";

export default function Newsletter() {
    return (
        <div className="w-full mt-12 ">
            <div className="2xl:max-w-7xl xl:max-w-6xl  mx-auto relative flex flex-col justify-center items-center py-32 z-[1] px-6 md:px-10 lg:px-6 text-center">
                <div className="lg:text-[7.5rem] md:text-[6rem] ssm:text-[4.3rem] sssm:text-[3.8rem] text-[3.2rem] absolute opacity-[0.07] font-bold z-[-1] leading-[151px]">Newsletter</div>

                <h1 className="text-4xl font-bold mb-4">Subscribe our Newsletter</h1>
                <p className="mb-6 ">Get the latest information and promo offers directly</p>
                <form className="flex md:flex-nowrap flex-wrap justify-center items-center gap-x-4 md:space-y-0 space-y-4">
                    <input type="email" placeholder="Input email address" className="border pl-2 md:pr-20 pr-10 md:py-2 "/>
                    <button className="border bg-black text-white py-2 px-3">Get Started</button>
                </form>
            </div>
        </div>
    )
}