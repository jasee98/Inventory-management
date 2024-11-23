"use client"
import React from 'react'
import { useState } from 'react'
import { CreditCard, X } from 'lucide-react'
export default function DashboardBanner() {
    const[hidden,setHidden]=useState(false)
  return (
    

    <div className={`${hidden? "hidden":" justify-between items-center grid grid-cols-12 py-6 px-16 bg-white gap-4 relative"}`}>
        {/* icons */}
        {/* <div className="col-span-2">

        </div> */}
        <CreditCard className='w-16 h-16 text-slate-500 '/>
        {/* text */}
        <div className='col-span-6'>
            <h2 className='font-bold text-2xl '>Start accepting online payments.</h2>
            <p> Business are moving towards online payments as they are easy,
            secure and fast.Try them for your business today.</p>
        </div>
        {/* button */}

        <div className="col-span-3"> 
            <button className='py-2.5 px-4 uppercase bg-blue-700 text-white
                            rounded-lg'>Enable</button>



        {/* close button */}
        <button onClick={ () => setHidden(true)}
        className="absolute top-4 right-16">
            <X/>
        </button>
        
        </div>
    </div>
  )
}
