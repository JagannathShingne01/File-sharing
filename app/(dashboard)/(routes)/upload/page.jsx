'use client'
import React, { useEffect, useState } from 'react'
import UploadFrom from './_component/UploadFrom'
import { app } from '@/firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '@/app/_utils/RandomString';
import { useRouter } from 'next/navigation';

const Upload = () => {

  const {user} = useUser()
  const [progress, setProgress]=useState();
  const [uploadCompleted,setUploadCompleted] = useState(false);
  const [fileDocId,setFileDocId] = useState()
  const router = useRouter()
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
    const docId = generateRandomString().toString()
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,                       
      password:  "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+docId,
    });
    setFileDocId(docId)
    
  }

useEffect(()=>{
  progress==100 && setTimeout(()=>{
    setUploadCompleted(true);
  },2000)
},[progress==100])

useEffect(()=>{
  uploadCompleted&&setTimeout(()=>{
    setUploadCompleted(false);
    router.push('/file-preview/'+fileDocId)
  },2000)
},[uploadCompleted==true])
  
  return (
    <div className='p-5 px-8 lg:px-28'>
     
    {!uploadCompleted 
        ? <div>
            <h2 className='text-3xl md:text-5xl text-center m-5 '>Start 
            <strong className='text-primary'>Uploading</strong> File and 
            <strong className='text-primary'>Share</strong> it</h2>  <UploadFrom progress={progress} uploadBtnClick={(File)=>uploadFile(File)}/>
          </div>
        : <div>Uploding....</div>  
        }
    </div>
  )
}

export default Upload