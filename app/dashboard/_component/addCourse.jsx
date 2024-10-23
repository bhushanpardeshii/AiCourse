"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'

const AddCourse = () => {
    const { user } = useUser();
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext)
    return (
        <div className=' flex justify-between'>
            <div>
                <h2 className='text-2xl text-gray-300'>Hello, <span className='font-bold text-red-500'>
                    {user?.firstName} </span></h2>
                <p className='text-sm text-gray-300'>Create new courses with AI,Share with friends and Earn money</p>
            </div>
            <div>
                <Link href={userCourseList >= 3 ? '/dashboard/upgrade' : '/createCourse'}>
                    <Button className='bg-red-600 hover:bg-[#ff0000] text-md'>+ Create AI Course</Button>
                </Link>
            </div>
        </div >
    )
}

export default AddCourse