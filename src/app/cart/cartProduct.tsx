import { cookies } from "next/dist/client/components/headers"
import Cookies from "js-cookie";
import {Image as IImage} from "sanity"
import { client } from "../../../sanity/lib/client"
import { GetServerSidePropsContext } from "next";
// import { parseCookies } from "next-cookies";


interface IProduct {
    title: string,
    image: IImage,
    price: number,
    _id: string,
    ref:string,
    description: string,
    categoryName: string,
    quantity:number
}
interface IData {
    user_id: string,
    product_id: string,
     quantity: number
}


let productData2: IProduct[] = [] 
    const handleAddToCart = async () => {
        const userId = Cookies.get('user_id');
   
        const res = await fetch('https://e-commerce-website-ehtexhamahmed2000-gmailcom.vercel.app/api/cart', {
           method: 'GET',      
        })
        const result = await res.json()
        const filteredOrders = result.res.filter((order: any) => order.user_id === userId)
        console.log(filteredOrders);
        
        const cartItems = filteredOrders.map((item: IData) => ({
            product_id: item.product_id,
            quantity: item.quantity,
          }));
          return cartItems;
    }
    export const result: Promise<any> = handleAddToCart();

    
    export const productData = async (product_id: string[]) => {
        const productIds = JSON.stringify(product_id);
        let query = `*[_type=='product' && _id in ${productIds}] {
            title,
        image,
        _id,
        price,
        ref,
        description,
        quantity,
        "categoryName":category -> name
           }`
        const res = await client.fetch(query)
       console.log(product_id)
       console.log(res)
       return res
       
    }

    export  const handleDelete = async (item: any) => {
        console.log(item)
        const userId = Cookies.get('user_id');
        console.log(userId)

        const res = await fetch('/api/cart', {
            method: "DELETE",
            body: JSON.stringify({
                product_id: item,
                user_id: userId,
            }) ,
        })
        // return res;
    }
        







