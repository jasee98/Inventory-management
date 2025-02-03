import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){
    try {
      const item = await db.item.findUnique({
        where:{
          id
        }
      })
      return NextResponse.json(item)
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "Failed to fetch the Item",
        },
        {
          status: 500,
        }
      ) 
    }
  }

  export async function PUT(request,{params:{id}}){
    try {
        const{title}=await request.json()
      const item = await db.item.update({
        where:{
          id,
        },
        include:{
            warehouse:true,
        }
      })
      console.log(item)
      return NextResponse.json(item)
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "Failed to Update the Item",
        },
        {
          status: 500,
        }
      ) 
    }
  }