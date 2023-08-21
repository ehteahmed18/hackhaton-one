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
                    {shipping_rate:"shr_1NgwY4EVjLZDoh47mM0q0XyZ"},
                    {shipping_rate:"shr_1NgwWlEVjLZDoh47UBxz4Y3v"},
                ],
                line_items: res.map((item:any) => {
                    return{
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.title
                            },
                            unit_amount: item.price *100,
                        },
                        quantity: item.quantity
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
