import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {title,description,location,type}=await request.json();
   
    const warehouse = await db.warehouse.create({
      data:{
        title,
        location,
        description,
        warehouseType:type 
      }
    })
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a warehouse",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
  try {
    const warehouse = await db.warehouse.findMany({
      orderBy:{
        createdAt:'desc'//latest warehouse
      }
    })
    return NextResponse.json(warehouse)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch the warehouse",
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
    const deletedWarehouse=await db.warehouse.delete({
      where:{
        id 
      },
    })
    console.log(id)
    return NextResponse.json(deletedWarehouse)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete Warehouse",
      },
      {
        status: 500,
      }
    ) 
    
  }
  
}
