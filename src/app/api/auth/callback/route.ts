import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")
      const redirectUri =
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
    if(!code){
        return NextResponse.json({message:"Code is not found"},{status:400})
    }
    const session = await scalekit.authenticateWithCode(code, redirectUri)
    console.log(session)
    const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`)
    response.cookies.set("access_token", session.accessToken, {
        httpOnly:true,
        maxAge:24*60*60*1000,
        secure:false,
        path:"/"
    })
    return response
}


//searchParamas se URl se loi bhi parameters le sakte h
//code variable me same callback URL bana raha hai jo login route me use hua tha.
//session variable OAuth authorization code ko exchange karta hai aur:- 
// 1.code verify karta hai
// 2.token generate karta hai
// 3.session create karta hai
//response variable Login successful hone ke baad: user ko homepage par bhej raha hai.
// response.cookies.set("access_token", session.accessToken,: - Access token browser cookie me save karta hai. and Ab user logged-in state me rahega.

//SUMMARY
//Ye callback route user ke login process ko complete karta hai. 
// Jab user Scalekit se successfully login karta hai, tab Scalekit user ko /api/auth/callback 
// route par redirect karta hai URL ke andar ek code ke saath. Ye code URL se nikala jata hai aur 
// authenticateWithCode() function ke through access token me convert kiya jata hai. Fir us access 
// token ko browser cookies me save kar diya jata hai using response.cookies.set(), taki user future 
// equests me logged-in rahe. Uske baad user ko homepage par redirect kar diya jata hai. Later, getSession() 
// function isi saved access_token ko cookie se read karke logged-in user ki details fetch karta hai.