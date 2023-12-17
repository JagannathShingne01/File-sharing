import React from 'react'

const ProgessBar = ({progress}) => {
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full'>
        <div
        style={{width:`${progress}%`}} 
        className='bg-primary rounded-full h-4 text-[10px] text-white'>
                    {`${Number(progress).toFixed(0)}%`}</div>
    </div>
  )
}

export default ProgessBar