// import { scalekit } from "@/lib/scalekit";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req:NextRequest) {
//     const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
//     const url=scalekit.getAuthorizationUrl(redirectUri)
//     console.log(url)
//     return NextResponse.redirect(url)
// }

import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const redirectUri =
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  console.log("Redirect URI:", redirectUri);

  const url = scalekit.getAuthorizationUrl(redirectUri);

  console.log(url);

  return NextResponse.redirect(url);
}

//Ye login route user ko Scalekit authentication page par bhejne ke liye use hota hai. 
// Sabse pehle ye app ka callback URL banata hai (/api/auth/callback), 
// jahan login complete hone ke baad user wapas aayega. Fir scalekit.getAuthorizationUrl() 
// ke through authentication URL generate hota hai. console.log() debugging ke liye redirect 
// URI aur generated URL print karta hai. Last me NextResponse.redirect(url) user ko Scalekit 
// login page par redirect kar deta hai taki user login process start kar sake.