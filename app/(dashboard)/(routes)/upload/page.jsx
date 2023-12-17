'use client'
import React, { useState } from 'react'
import UploadFrom from './_component/UploadFrom'
import { app } from '@/firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '@/app/_utils/RandomString';

const Upload = () => {

  const {user} = useUser()
  const [progress, setProgress]=useState();
  const storage=getStorage(app)
  const db = getFirestore(app);
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
      setProgress(progress)
      progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        saveInfo(File, downloadURL)
    });
    },
    )
  }

  const saveInfo= async(file, fileUrl)=>{
    const docId=Date.now().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password:  "",
      id: generateRandomString(),
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    }).then((res)=>console.log(res))
  }

  return (
    <div className='p-5 px-8 lg:px-28'>
      <h2 className='text-3xl md:text-5xl text-center m-5 '>Start 
      <strong className='text-primary'>Uploading</strong> File and 
      <strong className='text-primary'>Share</strong> it</h2>
      <UploadFrom progress={progress} uploadBtnClick={(File)=>uploadFile(File)}/>
    </div>
  )
}

export default Upload