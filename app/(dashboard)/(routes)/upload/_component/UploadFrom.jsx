'use client'
import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';

const UploadFrom = ({uploadBtnClick}) => {

    const [File, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const onFileSelect = (File)=>   {
        if(File && File.size>2000000){
            setErrorMsg("Maximum file Upload Size is 2MB")
            return;
        }
        setErrorMsg(null)
        setFile(File)
    }

  return (
        <div className='text-center'>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-96 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-12 h-12 mb-4 text-primary dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-lg md:text-xl  text-gray-500 dark:text-gray-400"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX Size: 2MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => onFileSelect(e.target.files[0])}/>
                </label>
            </div> 
            {errorMsg ? <AlertMsg msg={errorMsg}/> : null}
            {File ? <FilePreview file={File} removefile={()=>setFile(null)}/> :null}
            <button disabled={!File} className='p-2 bg-primary text-white w-[30%] rounded-lg mt-5 disabled:bg-gray-400' 
            onClick={()=>uploadBtnClick(File)}
            >
                Upload
            </button>
        </div>

  )
}

export default UploadFrom







//dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600