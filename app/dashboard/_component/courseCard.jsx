import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineBookOpen } from 'react-icons/hi2'
const CourseCard = ({ course, displayUser = false }) => {
    return (
        <div className='shadow-md shadow-red-800 rounded-lg border p-2 border-red-500
        hover:scale-105 transition-all  cursor-pointer mt-2'>
            <Link href={'/course/' + course?.courseId}>
                <Image src={course?.courseBanner} width={300} height={200} className='w-full object-cover h-[200px] rounded-lg' />
            </Link>
            <div className='p-2'>
                <h2 className='font-medium text-lg'>{course?.courseOutput?.['Course Name'] || course?.courseOutput?.CourseName}</h2>
                <p className='text-gray-400 text-sm my-1'>{course?.category}</p>
                <div className='flex items-center justify-between p-1'>
                    <h2 className='flex gap-2 items-center p-1 text-red-600 '><HiOutlineBookOpen />{course?.courseOutput?.["No of Chapters"] || course?.courseOutput?.NoOfChapters} Chapters</h2>
                    <h2 className='p-1 border border-red-600 text-sm rounded-md text-red-200 '>{course?.courseOutput?.Level} </h2>
                </div>
                {displayUser && <div className='flex gap-2 items-center'>
                    <Image src={course?.userProfileImage} width={30} height={30} className='rounded-full' />
                    <h2 className='text-sm'>{course?.userName}</h2>
                </div>}
            </div>
        </div>
    )
}

export default CourseCard