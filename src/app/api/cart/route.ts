import { NextRequest, NextResponse, userAgent } from "next/server"
import { db, cartTable } from "@/app/lib/drizzle"
import { v4 as uuid } from "uuid"
import { cookies } from "next/dist/client/components/headers"
import { eq } from "drizzle-orm"

export const GET = async (request: NextRequest) => {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({ res })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "something went wrong" })
    }
}
export const POST = async (request: NextRequest) => {

    const req = await request.json()
    const uid = uuid()
    const setCookies = cookies()
    const user_id = cookies().get("user_id")
    // console.log(user_id)
    if (!user_id) {
        setCookies.set("user_id", uid)
    }


    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        return NextResponse.json({ res })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "something went wrong" })
    }
}

export const PUT = async (request:NextRequest) => {
    const req = await request.json();
    const user_id = cookies().get("user_id")
    console.log(user_id)
    
    try {
        const res= await db.update(cartTable).set({
            quantity: req.quantity,
            // product_id: req.product_id
        }).where(eq( cartTable.product_id, req.product_id )||
            eq(cartTable.user_id , `${user_id}`
        ))
        return NextResponse.json({res})
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Something went wrong' });
    }
}

export const DELETE = async (request: NextRequest) => {
    // const req = await request.json();

    try {
        const res = await db.delete(cartTable);
        return NextResponse.json({res})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Something went wrong' });
    }
}