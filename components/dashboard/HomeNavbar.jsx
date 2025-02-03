"use client"
import { Building2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNavbar() {
   const {data:session,status}=useSession()
   if (status === "loading") {
    return <p>Loading...</p>;
  }
  const username= session?.user?.name.toUpperCase();
    const pathname =usePathname()
    console.log(pathname)
const navLinks=[
    {
        title:"Dashboard",
        href:"/dashboard/home/overview"
    },
    {
        title:"Getting Started",
        href:"/dashboard/home/getting-started"
    },
    {
        title:" Recent Updates",
        href:"/dashboard/home/updates"
    },
    {
        title:"Announcements",
        href:"/dashboard/home/announcement"
    },
   
]
  return (

    <div className='h-32 p-5  header-bg bg-slate-50 border-b-1 border-slate-200 '>
        <div className="flex space-x-3 ">
            <div className="flex w-12 h-12 bg-white rounded-lg items-center justify-center ">
                <Building2/>
            </div>
            <div className="flex flex-col"> 
          <p className='text-slate-700 font-semibold'>Hello,{username}</p>
          <span className='text-sm '>Garat</span>
         </div>


        </div>
        <nav className='sticky-mt-6 flex space-x-4 '>
            {navLinks.map((item,i)=>{
                return(

                    <Link key={i} href={item.href } 
                    className={`{pathname===item.href? "py-1 border-b border-blue-600 :"py-1"}`}>
                    {item.title}
                    </Link>
                )
            })
            }
           
        </nav>

    </div>
  )
}
