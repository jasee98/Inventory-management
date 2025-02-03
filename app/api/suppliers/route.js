import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      location,
      phone,
      email,
      address,
      contactPerson,
      notes,
      supplierCode,
      taxID,
      paymentTerms,
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        title,
        location,
        phone,
        email,
        address,
        contactPerson,
        notes,
        supplierCode,
        taxID,
        paymentTerms,
      },
    });
    console.log(supplier);
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a supplier",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    const suppliers= await db.supplier.findMany({
      orderBy: {
        createdAt: "desc", 
      },
    });
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch the supplier",
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request) {
  try {
    const id=request.nextUrl.searchParams.get("id")
    const deletedSupplier=await db.supplier.delete({
      where:{
        id 
      },
    })
    console.log(id)
    return NextResponse.json(deletedSupplier)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete Supplier",
      },
      {
        status: 500,
      }
    ) 
    
  }
  
}
