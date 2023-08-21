import { type } from "os";

export const product = {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"title",
            title:"Product Title",
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"image",
            title:"Product Image",
            type:"image"
        },
        {
            name:"price",
            title:"Product Price",
            type:"number"
        },
        {
            name:"ref",
            title:"Product Ref",
            type:"string"
        },
        {
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[
                {
                    type:"category"
                }
            ]
        },
        {
            name:"quantity",
            title:"Quantity",
            type:"number"
        }
    ]
}