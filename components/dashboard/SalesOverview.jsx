import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";
import { getData } from "@/lib/getData";

export default async function SalesOverview() {
  const categoriesData = getData("categories");
  const itemsData = getData("items");
  const warehousesData = getData("warehouse");
  const suppliersData = getData("suppliers");

  // parallel fetching

  const [categories,items, warehouses, suppliers] = await Promise.all([
    categoriesData,
    itemsData,  
    warehousesData,
    suppliersData,
  ]);
  const InventorySummary =warehouses.map((item,i)=>{
    return{
      title: item.title,
      number: item.StockQty,

    }
  })
  console.log(InventorySummary)

  const SalesActivity = [
    {
      title: "Category",
      number: categories.length,
      unit: "Qty",
      href: "/dashboard/inventory/categories",
      color: "text-blue-600",
    },
    {
      title: "Items ",
      number: items.length,
      unit: "pkgs",
      href: "/dashboard/inventory/items",
      color: "text-red-600",
    },
    {
      title: "Warehouses",
      number: warehouses.length,
      unit: "pkgs",
      href: "/dashboard/inventory/warehouse",
      color: "text-green-600",
    },
    {
      title: "Suppliers",
      number: suppliers.length,
      unit: "Qty",
      href: "/dashboard/inventory/suppliers",
      color: "text-orange-600",
    },
  ];
 
  
  return (
    <div className="bg-blue-50 border-b border-slate-300 p-8 grid grid-cols-12 gap-4 ">
      {/* sales activity */}
      <div className=" col-span-8 border-r border-slate-300 p-8 ">
        <h2 className="mb-6 text-xl">Sales Activity </h2>
        <div className=" pr-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* card */}
          {SalesActivity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} />;
          })}
        </div>
      </div>
      {/* inventory */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
          {InventorySummary.map((item, i) => {
            return <InventorySummaryCard item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
