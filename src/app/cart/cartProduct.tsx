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
    categoryName: string
}



let productData2: IProduct[] = [] 
    const handleAddToCart = async () => {
        // // const cookieStore =  cookies()
        const userId = Cookies.get('user_id');
        console.log(userId)
        // const cookieStore = cookies()
        // const userId = cookieStore.get('user_id')
        // console.log(userId)

        const res = await fetch('http://localhost:3000/api/cart', {
          cache:"no-store",
           method: 'GET',
           
        })
        const result = await res.json()
        
        const filteredOrders = result.res.filter((order: any) => order.user_id === userId)
        const filteredProductId = filteredOrders.map((item: any) => item.product_id)
        console.log(filteredProductId);
        return filteredProductId
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
        "categoryName":category -> name
           }`
        const res = await client.fetch(query)
       console.log(product_id)
       return res
       
    }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const { user_id } = parseCookies(context);
  
//     const res = await fetch("http://localhost:3000/api/cart", {
//       method: "GET",
//     });
//     const result = await res.json();
  
//     const filteredOrders = result.res.filter(
//       (order: any) => order.user_id === user_id
//     );
//     const filteredProductId = filteredOrders.map((item: any) => item.product_id);
  
//     const productData = await getProductData(filteredProductId);
  
//     return {
//       props: {
//         productData2: productData,
//       },
//     };
//   }
  
//   export const result: Promise<any> = getServerSideProps();

//   export const getProductData = async (product_id: string[]) => {
//     const productIds = JSON.stringify(product_id);
//     const query = `*[_type=='product' && _id in ${productIds}] {
//       title,
//       image,
//       _id,
//       price,
//       ref,
//       description,
//       "categoryName": category->name
//     }`;
  
//     const res = await client.fetch(query);
//     return res;
//   }