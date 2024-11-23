import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Shirt,Boxes,Component,ScrollText, ComponentIcon } from 'lucide-react'
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
      icon:Shirt,

    },
    {
      title:"Categories",
      description:"Bundle different items together and sell them as kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New category",
      enabled:"false",
      icon:Boxes,

    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New brand",
      enabled:"true",
      icon:ScrollText,

    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New warehouse",
      enabled:"true",
      icon:ScrollText,

    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contact or transactions ",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New units",
      enabled:"true",
      icon:ComponentIcon,

    },
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/New"/>
        <div className="grid grid-col-1 lg:grid-cols-2 m-4 py-8 px-16 gap-6 ">

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
