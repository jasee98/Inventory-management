"use client"
import React, { useState } from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useSession } from 'next-auth/react';
import Login from '../login/page';

export default function Layout({children}) {
  const [showSidebar,setShowSidebar]= useState(false);
  const{data:session,status}=useSession()
  if (status==='loading'){
    return<p>Loading User Please wait... </p>
  }
  if (status === "unauthenticated") {
    return <Login/>
  }
  return (
    <div className='flex' >        
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> 
      <main className='sm:ml-60 ml-0 w-full bg-slate-100 min-h-screen'>
        <Header setShowSidebar={setShowSidebar}/>
        

        {children}
      </main>




        
        </div>
  )
}

export const dynamic = "force-static"