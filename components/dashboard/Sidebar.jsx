
"use client"
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
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Subscriptioncard from "./Subscriptioncard";

import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar() {
    const InventoryLinks =[
        {
            title:"Items",
            href:"/dashboard/inventory/items/new",
        },
        {
            title:"Categories",
            href:"/dashboard/inventory/categories/new",
        },
        {
          title:"Brands",
          href:"/dashboard/inventory/brands/new",
      },
      {
        title:"Units",
        href:"/dashboard/inventory/units/new",
    },
    {
      title:"Warehouse",
      href:"/dashboard/inventory/warehouse/new",
  },
        {
            title:"Inventory Adjustment",
            href:"/dashboard/inventory",
        }
    ]
    const salesLink =[
        {
            title:"Customers",
            href:"#",
        },
        {
            title:"Sales Orders",
            href:"#",
        },
        {
            title:"Packages",
            href:"#",
        },
        {
            title:"Shipments",
            href:"#",
        },
        {
            title:"Invoices",
            href:"#",
        },
        {
            title:"Sales Reciepts",
            href:"#",
        },
        {
            title:"Payment Recieved",
            href:"#",
        },
        {
            title:"Sales returns",
            href:"#",
        },
        {
            title:"Credit",
            href:"#",
        }
    ]
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-white fixed   ">
      {/* {top part } */}
      <div className="flex flex-col ">
        {/* logo */}
        <div
          className=" bg-slate-950 flex  space-x-2 items-center
            py-3 px-2"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold"> Inventory</span>
        </div>
        {/* link */}
        <nav className="flex flex-col gap-8 px-3 py-6">
          <Link
            href="/"
            className=" flex items-center space-x-2 bg-blue-600
            text-slate-50 p-2 rounded-md "
          >
            <Home className="w-4 h-4 " />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink icon={BaggageClaim}  
          items={InventoryLinks} title="Inventory"/>
          <SidebarDropdownLink icon={ShoppingBasket}  
          items={salesLink} title="Sales"/>

          
          
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
