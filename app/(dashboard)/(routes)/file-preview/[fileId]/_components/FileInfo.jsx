import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const FileInfo = ({file}) => {
  console.log(file,'dhaud')
  const [fileType, setFileType] = useState();

  useEffect(()=>{
    file&&setFileType(file?.fileType.split('/')[0]);
    console.log(fileType,"filetyoe");
  },[file])


  return file&&(
    <>
    <div className='text-center border border-blue-200 flex justify-center m-4 flex-col items-center p-2 rounded-md '>
      <Image src={fileType=='image' ? file?.fileUrl :'/file.png'} alt='file' width={100} height={100} className='h-[200px] rounded-md object-contain'/>                            
      <div>
        <h2>{file.fileName}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
      </div>
    </div>
    </>
  )
}

export default FileInfo;