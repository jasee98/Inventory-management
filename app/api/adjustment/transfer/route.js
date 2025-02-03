import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log(request.json)
    const {
      transferStockQty,
      itemId,
      receivingWarehouseId,
      givingWarehouseId,
      notes,
      referenceNumber,
    } = await request.json();

    const adjustment = await db.transferStockAdjustment.create({
      data:{
      transferStockQty:parseInt(transferStockQty),
      itemId,
      receivingWarehouseId,
      givingWarehouseId,
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
