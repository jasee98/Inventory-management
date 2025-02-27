import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import {  LayoutGrid, LayoutPanelTop, Slack, Warehouse, Scale, Diff, Factory } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function inventory() {
 
  const OptionCards=[
   
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      link:"/dashboard/inventory/items/new",
      linkTitle:"New Item",
      enabled:"true",
      icon:LayoutGrid,

    },
    {
      title:"Categories",
      description:"Bundle different items together and sell them as kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New category",
      enabled:"false",
      icon:LayoutPanelTop,

    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New brand",
      enabled:"true",
      icon:Slack,

    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New warehouse",
      enabled:"true",
      icon:Warehouse,

    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New units",
      enabled:"true",
      icon:Scale,

    },
    {
      title:"Inventory Adjustment",
      description:"Transfer Stock from the main warehouse ",
      link:"/dashboard/inventory/adjustments/new",
      linkTitle:"New adjustments",
      enabled:"true",
      icon:Diff,

    },
    {
      title:"Supplier",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/supplier/new",
      linkTitle:"New supplier",
      enabled:"true",
      icon:Factory,

    },
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/New"/>
        <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 m-4 py-8 px-16 gap-6 ">

        {
          OptionCards.map((card,i)=>{
            return(
              <OptionCard optionData={card} key={i}/>
            )
          })
        }
          
        </div>
        </div>
  )
}
