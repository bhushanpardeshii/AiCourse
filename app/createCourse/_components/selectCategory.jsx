import { UserInputContext } from '@/app/_context/UserInputContext';
import categoryList from '@/app/_shared/categoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

const SelectCategory = () => {
    const { userCourseInput, setuserCourseInput } = useContext(UserInputContext);
    const handleCategoryChange = (category) => {
        setuserCourseInput(prev => ({
            ...prev,
            category: category
        }))
    }
    return (
        <div className='px-10 md:px-20'>
            <h2 className='text-gray-300 my-5'>Select Category</h2>
            <div className='grid grid-cols-3 gap-10 '>
                {categoryList.map((item, index) => {
                    return (
                        <div key={index} className={`flex flex-col p-5 border border-purple-600 items-center rounded-xl hover:bg-purple-600 cursor-pointer ${userCourseInput?.category == item.name && 'bg-purple-600'}`} onClick={() => handleCategoryChange(item.name)}>
                            <Image src={item.icon} width={80} height={80} />
                            <h2 className='text-white'>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectCategory