'use client'
import React from 'react'
import UploadFrom from './_component/UploadFrom'
import { app } from '@/firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const Upload = () => {

  const storage=getStorage(app)
  const uploadFile = (File)=>{
    const metadata = {
                        contentType: File.type
                      };
    const storageRef = ref(storage, 'file-upload/' + File?.name);
    const uploadTask = uploadBytesResumable(storageRef, File, metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
    });
    },
    )
  }
  return (
    <div className='p-5 px-8 lg:px-28'>
      <h2 className='text-3xl md:text-5xl text-center m-5 '>Start 
      <strong className='text-primary'>Uploading</strong> File and 
      <strong className='text-primary'>Share</strong> it</h2>
      <UploadFrom uploadBtnClick={(File)=>uploadFile(File)}/>
    </div>
  )
}

export default Upload