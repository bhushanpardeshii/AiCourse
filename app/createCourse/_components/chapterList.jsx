import React from 'react'
import { HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi2'

const ChapterList = ({ course }) => {
    return (
        <div>
            <h2 className='font-medium text-xl my-4 text-red-600'>Chapters</h2>
            <div className='mt-2 flex flex-col gap-4'>
                {course?.courseOutput?.Chapters.map((chapter, index) => {
                    return (
                        <div key={index} className=' border p-5 rounded-lg flex items-center justify-between'>
                            <div className='flex gap-5 items-center'>
                                <h2 className='bg-red-700 h-10 w-10 flex-none text-white rounded-full text-center p-2'>{index + 1}</h2>
                                <div className='text-gray-300'>
                                    <h2 className='font-medium text-lg'>{chapter?.["Chapter Name"]}</h2>
                                    <p className='text-gray-400 text-sm'>{chapter?.About}</p>
                                    <p className='flex gap-1 text-red-700 items-center'> <HiOutlineClock className='text-xl text-red-700' />{chapter?.Duration}</p>
                                </div>
                            </div>
                            <HiOutlineCheckCircle className='text-4xl text-gray-400 flex-none' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChapterList