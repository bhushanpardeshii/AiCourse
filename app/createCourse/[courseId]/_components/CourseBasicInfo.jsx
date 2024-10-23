"use client"
import { Button } from '@/components/ui/button'
import { storage } from '@/configs/firebase'
import Image from 'next/image'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { HiOutlineSwatch } from 'react-icons/hi2'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/configs/db'
import Link from 'next/link'
const CourseBasicInfo = ({ course, edit = true }) => {
    const [selectedFile, setSelectedFile] = useState('');
    useEffect(() => {
        if (course) {
            setSelectedFile(course?.courseBanner)
        }
    }, [course])


    const onFileSelected = async (event) => {

        const file = event.target.files[0];
        setSelectedFile(URL.createObjectURL(file))
        const fileName = Date.now() + '.jpg'
        const storageRef = ref(storage, 'AiCourse/' + fileName)
        await uploadBytes(storageRef, file).then((snapshot) => {
            console.log("upload file completed")
        }).then(resp => {
            getDownloadURL(storageRef).then(async (downloadUrl) => {
                await db.update(CourseList).set({
                    courseBanner: downloadUrl
                }).where(eq(CourseList?.courseId, course?.courseId))

            })

        })

    }
    return (
        <div className=' text-gray-400 p-10 border rounded-xl shadow-sm mt-5 '>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col justify-between'>
                    <div>

                        <h2 className='font-bold text-3xl text-gray-300'>{course?.courseOutput?.["Course Name"] || "Please wait.."}</h2>
                        <p className='text-sm mt-3 '>
                            {course?.courseOutput?.Description}
                        </p>
                        <h2 className='font-medium mt-2 flex gap-2 items-center text-red-700'><HiOutlineSwatch />{course?.category}</h2>
                    </div>
                    {!edit && < Link href={'/course/' + course?.courseId + '/start'}>
                        <Button className="w-full mt-3 rounded border border-red-600 bg-red-600  text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 ">Start</Button>
                    </Link>}
                </div>
                <div>
                    <label htmlFor='upload-image'>

                        <Image src={selectedFile ? selectedFile : '/placeholder.jpg'} alt='courseimg' width={300} height={300} className='w-full rounded-xl h-[250px] object-cover cursor-pointer' />
                    </label>
                    {edit && <input type='file' id="upload-image" className='opacity-0' onChange={onFileSelected} />}

                </div>
            </div>
        </div >
    )
}

export default CourseBasicInfo