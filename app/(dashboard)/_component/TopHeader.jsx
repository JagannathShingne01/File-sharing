import React from 'react'
import {AlignJustify} from 'lucide-react'
import {UserButton} from '@clerk/nextjs'
import Image from 'next/image'

const TopHeader = () => {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src='/logo.svg' width={50} height={50} className='md:hidden'/>
        <UserButton />
    </div>
  )
}

export default TopHeader