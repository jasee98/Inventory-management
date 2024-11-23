
import { Shirt,Boxes,Component,ScrollText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function OptionCard({optionData}) {

  
    const{title,description,link,linkTitle,icon:Icon,enabled}=optionData
  return (

    <div className="shadow-xl bg-white flex flex-col items-center 
          justify-center gap-4 p-6">
            <h2 className='text-xl font-bold '>{title}</h2>
            <div className="">
              <Icon strokeWidth=".5px" className='w-36 h-36 '/>
            </div>
            <p className="line-clamp-1">
              {description}
              
            </p>
            {enabled? (
                <Link href={link} className='py-2 px-3 text-white rounded-sm inline-flex 
                items-center space-x-2 bg-blue-600 '>
                  {linkTitle} </Link>
            ):(
                <button className='p-1 px-3 text-white rounded-sm inline-flex 
            items-center space-x-2 bg-blue-600 '>
              Enable</button>


            )}
            


              
          </div>
  )
}
