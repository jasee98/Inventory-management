import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    <div 
                             className="mb-4 shadow rounded-lg border border-slate-200
                 hover:border-blue-400
    bg-white py-2 px-4 cursor-pointer flex items-center justify-between 
                 gap-3 transition-all duration-300">
                         <h2 className='uppercase text-sm  text-slate-500'>{item.title} </h2>
                         <h4 className='font-semibold text-2xl'>{item.number}</h4>

                </div>
  )
}
