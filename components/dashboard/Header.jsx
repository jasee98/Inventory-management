import React from 'react'
import  { Bell, ChevronDown, History, LayoutGrid, Settings, Users} from 'lucide-react'
import { Plus } from 'lucide-react';
import SearchInput from './Searchinput';
import Image from 'next/image';


export default function Header() {
  return (
    <div className='bg-gray-50 h-14 flex items-center justify-between px-8
    boarder-b boarder-slate-200 shadow'>
        <div className='flex gap-3'>
            {}
           <button>
             <History className='w-6  h-6'/>
           </button>
           <SearchInput/>
        </div>
        <div className='flex'>
            
                <div className="pr-2 border-r border-gray-300">
                <button className='p-1 rounded-lg bg-blue-600'>
                <Plus className='text-slate-50 w-4 h-5'/> 
            </button> 
                </div>
            <div className="flex border-r border-gray-300 space-x-2">
            <button className=' border-r border-gray-300 p-1 
            rounded-lg hover:bg-slate-200'>
                <Users className='text-slate-900 w-4 h-4 '/> 
            </button> 
            <button className=' border-r border-gray-300 p-1 
            rounded-lg hover:bg-slate-200'>
                <Bell className='text-slate-900 w-4 h-4 '/> 
            </button> 
            <button className=' border-r border-gray-300 p-1 
            rounded-lg hover:bg-slate-200'>
                <Settings className='text-slate-900 w-4 h-4 '/> 
            </button> 
           
            </div>
            <div className="flex gap-6">
              <button className='flex items-center'><span>Garat </span>
              <ChevronDown className='w-4 h-4'/>

              </button>
              <button>
              <Image src="/download.jpeg" alt='user image' width={96} height={96} 
              className="rounded-full  w-8 h-8 boarder boarder-slate-800"/>
              </button>
              <button className='flex items-center'>
              <LayoutGrid className='w-6 h-6 text-slate-900'/>

              </button>
              
            </div>
        </div>
    </div>

  )
}
