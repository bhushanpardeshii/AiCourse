"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './courseCard'
import { UserCourseListContext } from '@/app/_context/UserCourseListContext'


const UserCourseList = () => {
    const [courseList, setCourseList] = useState([]);
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext)
    const { user } = useUser();
    useEffect(() => {
        user && GetUserCourse();
    }, [user])
    const GetUserCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress))
        setCourseList(result)
        setUserCourseList(result)
        console.log(result)
    }
    return (
        <div className='mt-10'>
            <h2 className='text-white font-medium text-xl'>My AI Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {courseList.map((course, index) => {
                    return (
                        <CourseCard course={course} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default UserCourseList