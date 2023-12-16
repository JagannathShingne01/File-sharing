import React from 'react'
import UploadFrom from './_component/UploadFrom'

const Upload = () => {
  return (
    <div className='p-5 px-8 lg:px-28'>
      <h2 className='text-3xl md:text-5xl text-center m-5 '>Start <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it</h2>
      <UploadFrom/>
    </div>
  )
}

export default Upload