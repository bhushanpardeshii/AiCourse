import React from 'react'
import { HiOutlineClock } from 'react-icons/hi2'
const ChapterListCard = ({ chapter, index }) => {
  return (
    <div className='grid grid-cols-5 p-3 text-gray-300 items-center border-b-2 border-gray-400 '>
      <div>
        <h2 className='p-1 bg-red-700 w-8 h-8 text-white rounded-full text-center'>
          {index + 1}
        </h2>
      </div>
      <div className='col-span-4'>
        <h2 className='font-medium'>{chapter?.['Chapter Name']}</h2>
        <h2 className='text-red-500 flex items-center gap-2 text-sm '><HiOutlineClock />{chapter?.Duration}</h2>

      </div>

    </div>
  )
}

export default ChapterListCard