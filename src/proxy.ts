import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/getSession";

export async function proxy(req:NextRequest) {
    const session = await getSession()
    if(!session){
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`)
    }
    return NextResponse.next()
}
export const config = {
    matcher: '/dashboard/:path*',
}


//jab user login na ho to usko dashboard pe nhi bhejna hai aur isi ke liye ye proxy(middleware) ban rahe