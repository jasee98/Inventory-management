import { NextResponse } from "next/server";

export 




async function POST(request) {
  try {
    const {AddStockQty,ReceivingWarehouseId,notes,referenceNumber}=await request.json();
   
    const adjustment = { TransferStockQty,ReceivingBranchId,notes };
    console.log(adjustment);
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
