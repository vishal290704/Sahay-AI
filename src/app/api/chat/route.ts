import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const {message, ownerId} = await req.json()
        if(!message || !ownerId){
            return NextResponse.json(
                {message:"message and ownerID is required"},
                {status:400}
            )
        }
    } catch (error) {
        
    }
}