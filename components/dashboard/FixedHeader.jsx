import { HelpCircle, LayoutGrid, List, MoreHorizontal, MoreVertical, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader({newLink,title}) {
  return (
    <div className='flex justify-between items-center bg-white py-5 px-4 '>
        <button className='text-2xl'>{title}</button>
        <div className="flex gap-4">
            {/* New */}
            <Link href={newLink} className='p-1 px-3 text-white rounded-sm flex 
            items-center space-x-2 bg-blue-600 '>
                <Plus className='text-slate-50 w-4 h-4'/> 
                <span>New</span>
            </Link> 
            {/* Layout */}
            <div className="flex rounded-md overflow-hidden">
                <button className='bg-gray-400 p-2 border-r border-gray-400 '>
                    <List className='w-4 h-4'/>
                </button>
                <button className='bg-gray-200 p-2 '>
                    <LayoutGrid className='w-4 h-4'/>
                </button>
            </div>
            {/* More */}
            <button className='bg-gray-200 p-2 rounded-md'>
                <MoreHorizontal className='w-4 h-4'/>
            </button>
            {/* Help */}
            <button className='bg-orange-500 text-white p-2 rounded-md'>
                <HelpCircle className='w-4 h-4'/>
            </button>
           
        </div>
    </div>
  )
}
