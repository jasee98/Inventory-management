import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function () {
  const SalesActivity = [
    {
      title: "To be Packed ",
      number: "0",
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped ",
      number: "0",
      unit: "pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered ",
      number: "0",
      unit: "pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced ",
      number: "0",
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];
  const InventorySummary = [
    {
      title: "Quantity in hand",
      number: "10",
    },
    {
      title: "Quantity received  ",
      number: "0",
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
