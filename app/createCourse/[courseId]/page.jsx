"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from '../_components/chapterList'
import { Button } from '@/components/ui/button'
import { GenerateChapterContent_AI } from '@/configs/aiModel'
import LoadingDialog from '../_components/loadingDialog'
import service from '@/configs/service'
import { useRouter } from 'next/navigation'

const CourseLayout = ({ params }) => {
    const [course, setcourse] = useState([]);
    const [loading, setloading] = useState(false);
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
    const GenerateChapterContent = () => {
        setloading(true);
        const chapters = course?.courseOutput?.Chapters;
        chapters.forEach(async (chapter, index) => {
            const PROMPT = 'Explain the concept in detail on Topic:' + course?.name + ',Chapter:' + chapter?.['Chapter Name'] + ', in JSON Format with list of array with field as title,explanation on given chapter,code example(Code field in <precode> format) if applicable';
            console.log(PROMPT)
            // if (index < 3) {
            try {
                let videoId = ''
                service.getVideos(course?.name + ':' + chapter?.['Chapter Name']).then(resp => {
                    console.log(resp)
                    videoId = resp[0]?.id?.videoId

                })
                const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
                console.log(result.response?.text())
                const content = JSON.parse(result.response?.text())

                await db.insert(Chapters).values({
                    chapterId: index,
                    courseId: course?.courseId,
                    content: content,
                    videoId: videoId
                })
                setloading(false)


            } catch (e) {
                setloading(false)
                console.log(e)
            }
            await db.update(CourseList).set({
                publish: true
            })
            router.replace('/createCourse/' + course?.courseId + '/finish')
            // }
        })
    }
    return (
        <div className='mt-10 px-7 md:px-20 lg:px-44 bg-gray-900 '>
            <h2 className='font-bold text-center text-gray-300 text-2xl'>Course Layout</h2>
            <LoadingDialog loading={loading} />
            <CourseBasicInfo course={course} />
            <CourseDetail course={course} />
            <ChapterList course={course} />
            <Button className="my-10 rounded border border-red-600 bg-red-600  text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 " onClick={GenerateChapterContent}>Generate Course Content</Button>

        </div>
    )
}

export default CourseLayout