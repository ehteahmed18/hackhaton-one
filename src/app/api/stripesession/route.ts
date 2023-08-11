import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15"
})


export const POST = async(request:NextRequest) => {
    const res = await request.json()
    console.log(res)
    try {
    if(res.length > 0){
        
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                submit_type:"pay",
                mode: 'payment',
                payment_method_types:["card"],
                billing_address_collection:"auto",
                shipping_options:[
                    {shipping_rate:"shr_1NdgEuEVjLZDoh47ID3Th9N7"},
                    {shipping_rate:"shr_1NdgEUEVjLZDoh47CHBqfAM9"},
                ],
                line_items: res.map((item:any) => {
                    return{
                        price_data: {
                            currency: "pkr",
                            product_data: {
                                name: item.name
                            },
                            unit_amount: item.price *100,
                            quantity: item.quantity
                        },
                    }
                }),
                success_url: `${request.headers.get("origin")}/?success=true`,
                cancel_url: `${request.headers.get("origin")}/?canceled=true`,
            });
            return NextResponse.json({session})
        }
        else{
            return NextResponse.json({message:"No Data Found"});
        }
    }
    catch (error: any) {
        return NextResponse.json(error.message);
      }
}
