import db from "@/lib/db";
import { NextResponse } from "next/server";

 




export async function POST(request) {
  try {
    const {addStockQty,itemId,receivingWarehouseId,notes,referenceNumber}=await request.json();
   
    const adjustment = await db.addStockAdjustment.create({
      data:{
        addStockQty:parseInt(addStockQty),
      itemId,
      receivingWarehouseId,
      notes,
      referenceNumber,
    }
  })
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request){
  try {
    
    const adjustments=await db.addStockAdjustment.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
    return NextResponse.json(adjustments)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch the adjustments",
      },
      {
        status: 500,
      }
    ) 
  }
}

