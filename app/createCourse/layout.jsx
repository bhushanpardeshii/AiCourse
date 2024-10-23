"use client"
import React, { useState } from 'react'
import Header from '../dashboard/_component/header'
import { UserInputContext } from '../_context/UserInputContext'

const CreateCourselayout = ({ children }) => {
    const [userCourseInput, setuserCourseInput] = useState([])
    return (
        <UserInputContext.Provider value={{ userCourseInput, setuserCourseInput }}>

            <div className='bg-gray-900 '>
                <Header />
                {children}
            </div>
        </UserInputContext.Provider>
    )
}

export default CreateCourselayout