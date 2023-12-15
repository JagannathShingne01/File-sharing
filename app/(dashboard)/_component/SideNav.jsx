'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {Upload, File, Shield} from 'lucide-react'


const SideNav = () => {
    const menuList = [
        {
            id:1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id:2,
            name: 'File',
            icon: File,
            path: '/file'
        },
        {
            id:3,
            name: 'Upgrade',
            icon: Shield,
            path:  '/upgrade'
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'>
            <Image src='/logo.svg' height={50} width={50} alt='Logo' />
        </div>
        <div className='flex flex-col float-left  text-black w-full'>
            {menuList.map((item, index)=> (
                        <div key={item.name}>
                           <button className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${activeIndex == index ? 'bg-blue-50 text-primary' : null}`}
                           onClick={()=>setActiveIndex(index)}
                           >
                           <item.icon/>
                            <h2 className=''>
                                {item.name}
                            </h2>
                           </button>
                        </div>
        ))}
        </div>
    </div>
  )
}

export default SideNav