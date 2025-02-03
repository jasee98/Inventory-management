"use client";
import {
  ChevronLeft,
  ShoppingCart,
  Home,
  BaggageClaim,
  ShoppingBag,
  ShoppingBasket,
  Cable,
  BarChart4,
  Files,
  PlusCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Subscriptioncard from "./Subscriptioncard";

import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar({showSidebar,setShowSidebar}) {
  console.log(showSidebar)
  const InventoryLinks = [
    {
      title: "All",
      href: "/dashboard/inventory",
    },
    {
      title: "Items",
      href: "/dashboard/inventory/items",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse",
    },
    {
      title: "Inventory Adjustment",
      href: "/dashboard/inventory/adjustments",
    },
    {
      title: "Supplier",
      href: "/dashboard/inventory/supplier",
    },
  ];
  const salesLink = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Reciepts",
      href: "#",
    },
    {
      title: "Payment Recieved",
      href: "#",
    },
    {
      title: "Sales returns",
      href: "#",
    },
    {
      title: "Credit",
      href: "#",
    },
  ];
  return (
    <div className={`${showSidebar?"w-60 min-h-screen bg-slate-800 text-white fixed lg:block z-50":"w-60 min-h-screen bg-slate-800 text-white fixed lg:block hidden z-50"}`}>
      {/* {top part } */}
      <div className="flex flex-col ">
        {/* logo */}
       <div className="flex justify-between">
         <Link
        href="/dashboard/home/overview"
        className=" bg-slate-950 flex  space-x-2 items-center py-3 px-2 w-full"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold"> Inventory</span>
        </Link>
        <button className=" bg-slate-950 px-4 py-3 lg:hidden"onClick={()=>setShowSidebar(false)}>
          <X className="h-6 w-6 text-white" />
        </button>
        </div>  
        <nav className="flex flex-col gap-8 px-3 py-6">
          <Link
            href="/dashboard/inventory"
            className=" flex items-center space-x-2 bg-blue-600
            text-slate-50 p-2 rounded-md "
          >
            <Home className="w-4 h-4 " />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink
            icon={BaggageClaim}
            items={InventoryLinks}
            title="Inventory"
            setShowSidebar={setShowSidebar}
          />
          <SidebarDropdownLink
            icon={ShoppingBasket}
            items={salesLink}
            title="Sales"
          />

          <button className="p-2 flex items-center space-x-2 ">
            <ShoppingBasket className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link href="/" className="p-2 flex items-center space-x-2">
            <Cable className="w-4 h-4 " />
            <span>Integrations</span>
          </Link>
          <Link href="/" className="p-2 flex items-center space-x-2">
            <BarChart4 className="w-4 h-4 " />
            <span>Reports</span>
          </Link>
          <Link href="/" className="p-2 flex items-center space-x-2">
            <Files className="w-4 h-4 " />
            <span>Documents</span>
          </Link>
        </nav>
      </div>

      {/* bottom */}
      <Subscriptioncard />

      <div className="flex flex-col ">
        <button
          className=" bg-slate-950 flex space-x-2 items-center 
         justify-center py-3 px-2 "
        >
          <ChevronLeft />
        </button>
      </div>
      <div />

      <div />
      {/* subscription card  */}
      {/* footer icon */}
    </div>
  );
}
