"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import React, { useEffect, useState } from 'react'
import CourseCard from '../_component/courseCard';

const Explore = () => {
    const [courseList, setCourseList] = useState();
    useEffect(() => {
        getAllCourse()
    }, [])
    const getAllCourse = async () => {
        const result = await db.select().from(CourseList).limit(9).offset(0);
        setCourseList(result);
        console.log(result);
    }
    return (
        <div >
            <h2 className='font-bold text-3xl p-2'>Explore More Courses</h2>
            <p className='text-gray-300 p-2'>Explore more courses by other users</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {courseList?.map((course, index) => {
                    return (
                        <CourseCard course={course} displayUser={true} />
                    )
                })}
            </div>
        </div>
    )
}

export default Explore