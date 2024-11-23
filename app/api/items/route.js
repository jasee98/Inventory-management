import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // title,
// description,
// categoryId,
// SKU,
// barcode,
// qty,
// supplierId,
// buyingPrice,
// sellingPrice,
// reOrderPoint,
// warehouseId,
// imageUrl,
// weight,
// dimension,
// taxRate,
// unitId,
// brandId,
// notes 
    const  data  = await request.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Item",
      },
      {
        status: 500,
      }
    );
  }
}
