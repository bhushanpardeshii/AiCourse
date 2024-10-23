"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/chapterListCard'
import ChapterContent from './_components/chapterContent'

const CourseStart = ({ params }) => {
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();
    useEffect(() => {
        GetCourse()
    }, [])
    const GetCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseId, params?.courseId))
        console.log(result)
        setCourse(result[0])
        GetSelectedChapterContent(0);
    }
    const GetSelectedChapterContent = async (chapterid) => {
        const result = await db.select().from(Chapters).where(and(eq(Chapters.chapterId, chapterid), eq(Chapters.courseId, course?.courseId)))
        setChapterContent(result[0]);
        console.log(result)

    }
    return (
        <div>
            <div className='fixed md:w-64 hidden md:block h-screen bg-gray-700 '>
                <h2 className='text-gray-300 font-medium text-lg bg-gray-900 text-center p-3'>{course?.courseOutput?.['Course Name']}</h2>
                <div>
                    {course?.courseOutput?.Chapters.map((chapter, index) => {
                        return (
                            <div key={index} className={`cursor-pointer hover:bg-gray-800 ${selectedChapter?.['Chapter Name'] == chapter?.['Chapter Name'] && 'bg-gray-800'}`}
                                onClick={() => { setSelectedChapter(chapter); GetSelectedChapterContent(index) }}

                            >
                                <ChapterListCard chapter={chapter} index={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='md:ml-64'>
                <ChapterContent chapter={selectedChapter} content={chapterContent} />
            </div>

        </div>
    )
}

export default CourseStart