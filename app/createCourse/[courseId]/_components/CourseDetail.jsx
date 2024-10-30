import React from 'react'

import { HiOutlineBookOpen, HiOutlineChartBar, HiOutlineClock, HiOutlinePlayCircle } from "react-icons/hi2";
const CourseDetail = ({ course }) => {
    return (
        <div className='border p-6 rounded-xl shadow-sm mt-3 text-gray-300'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='flex gap-2'>
                    <HiOutlineChartBar className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs'>Skill level</h2>
                        <h2 className='font-medium text-lg'>{course?.level}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineClock className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs'>Duration</h2>
                        <h2 className='font-medium text-lg'>{course?.courseOutput?.Duration}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineBookOpen className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs'>No Of Chapters</h2>
                        <h2 className='font-medium text-lg'>{course?.courseOutput?.["No of Chapters"] || course?.courseOutput?.NoOfChapters}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlinePlayCircle className='text-4xl text-red-700' />
                    <div>
                        <h2 className='text-xs'>Include Video</h2>
                        <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseDetail