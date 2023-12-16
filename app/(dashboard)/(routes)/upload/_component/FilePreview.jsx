import React from 'react'
import Image from 'next/image'
import {X} from 'lucide-react'

const FilePreview = ({file, removefile}) => {
  return (
    <div className='flex items-center gap-2 justify-between mt-5 border border-blue-400 rounded-lg p-2 bg-blue-50'>
        <div className='flex items-center p-2'>
            <Image src='/file.png' width={50} height={50} alt='fileicon'/>
            <div className='text-left'>
                <h3>{file?.name}</h3>
                <h3 className='text-[12px] text-gray-400'>{file?.type} / {(file.size/1024/1024).toFixed(2)} MB</h3>
            </div>
        </div>
        <X className='text-red-500 cursor-pointer mr-5' onClick={removefile}/>
    </div>
  )
}

export default FilePreview


//1.35