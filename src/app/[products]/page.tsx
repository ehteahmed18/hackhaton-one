
import { client } from '../../../sanity/lib/client'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image"
import { AiOutlineMinus, AiOutlinePlus,AiOutlineShoppingCart } from "react-icons/ai"
import Image from 'next/image';
import { ProductCart } from '../components/Productcart';







export default async function Products({params}:{params: {products: string} }) {

    const params2 = params.products
    // console.log(params2)
    
    
    
    
    const productData = async () => {
        const res = await client.fetch(`*[_type=="product" && ref == '${params2}']{
            title,
            image,
            image2,
            image3,
            image4,
            _id,
            price,
            reference,
            description,
            quantity,
            "categoryName":category -> name
        }`)
        return res
        
    }
    interface IProduct {
        title: string,
        category: string,
        price: number,
        description:string,
        image: IImage,
        image2: IImage,
        image3: IImage,
        image4: IImage,
        // ref: string,
        id: number,
        _id: string,
        quantity: number
    
    }
    // console.log(productData());
    
    const data: IProduct[] = await productData()
    // console.log(data);
    
    return (
        <>
        
            <div className="w-full mt-[6.8rem] mb-[5rem]">
                <div className='xl:max-w-7xl mx-auto'>
                {data.map((item) => (
                    <ProductCart key={item._id} item={item}/>
                ))}
                </div>
            </div>

        <Footer/>
        </>
    )
}