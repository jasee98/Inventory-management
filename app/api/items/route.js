import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    console.log(itemData);
    const item = await db.item.create({
      data: {
        title:itemData.title,
        description:itemData.description,
        categoryId:itemData.categoryId,
        sku:itemData.sku, 
        barcode:itemData.barcode,
        quantity:parseInt(itemData.qty),
        supplierId:itemData.supplierId,
        buyingPrice:parseFloat(itemData.buyingPrice),
        sellingPrice:parseFloat(itemData.sellingPrice),
        reOrderPoint:parseInt(itemData.reOrderPoint),
        warehouseId:itemData.warehouseId,
        imageUrl:itemData.imageUrl,
        weight:parseInt(itemData.weight),
        dimension:itemData.dimension,
        taxRate:parseFloat(itemData.taxRate),
        unitId:itemData.unitId,
        brandId:itemData.brandId,
        notes:itemData.notes,
      },
    });

    return NextResponse.json(item);
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
export async function GET(request){
  try {
    
    const items = await db.item.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
    return NextResponse.json(items)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch the Items",
      },
      {
        status: 500,
      }
    ) 
  }
}
export async function DELETE(request) {
  try {
    const id=request.nextUrl.searchParams.get("id")
    const deletedItem=await db.item.delete({
      where:{
        id 
      },
    })
    console.log(id)
    return NextResponse.json(deletedItem)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete Item",
      },
      {
        status: 500,
      }
    ) 
    
  }
  
}
