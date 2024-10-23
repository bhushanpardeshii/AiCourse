"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { useRouter } from 'next/navigation';

const FinishScreen = ({ params }) => {
    const [course, setcourse] = useState([]);
    const { user } = useUser();
    const router = useRouter();
    useEffect(() => {
        params && GetCourse();
    }, [params, user])
    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId), eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)))
        setcourse(result[0]);
        console.log(result);
    }
    return (
        <div className='px-10 md:px-20 lg:px-44 my-7 h-screen'>
            <h2 className='flex items-center justify-center text-3xl text-gray-300'>Congrats your course is ready!</h2>

            <CourseBasicInfo course={course} edit={false} />

        </div>
    )
}

export default FinishScreen