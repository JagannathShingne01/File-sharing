import React, { useState } from 'react'
import {Copy} from 'lucide-react'

const FileShareFrom = ({file, onPasswordSave}) => {
    const [isPasswordEnable, setIsEnablePassword] = useState(false);
    const [password, setPassword] = useState('');
  return file&& (
    <div className='flex flex-col gap-2 mx-2'>
        <div>
            <label className='text-[14px] text-gray-500' htmlFor="text"> Short Url</label>
            <div className='flex gap-5 p-2 border rounded-md justify-between'>
                <input type="text" value={file.shortUrl} disabled className='disabled:text-gray-500 bg-transparent outline-none'/>
                <Copy className='text-gray-400 hover:text-gray-600'/>
            </div>
        </div>
        <div>
            <input type="checkbox" onChange={(e)=>setIsEnablePassword(e.target.checked)} />
            <label> Enable Password?</label>
        </div>

        {isPasswordEnable? 
        <div className='flex gap-3 items-center '>
            <div className='border rounded-md w-full p-2'>
                <input type="password" 
                className='disabled:text-gray-500 bg-transparent outline-none'
                onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className='p-2 bg-primary text-white rounded-md disabled:text-gray-300 hover:bg-primary'
                disabled={password?.length<3}
                onClick={()=>onPasswordSave(password)}
            >
                save
            </button>
        </div> : null}
    </div>
  )
}

export default FileShareFrom