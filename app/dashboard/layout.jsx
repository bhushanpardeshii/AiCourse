"use client"
import React, { useState } from 'react'
import Sidebar from './_component/sidebar'
import Header from './_component/header'
import { UserCourseListContext } from '../_context/UserCourseListContext'

const DashboardLayout = ({ children }) => {
    const [userCourseList, setUserCourseList] = useState([]);
    return (
        <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>

            <div className='h-screen bg-gray-900'>
                <div className='md:w-64 hidden md:block'>
                    <Sidebar />
                </div>
                <div className='md:ml-64'>
                    <Header />

                    <div className='p-10 text-white'>
                        {children}
                    </div>
                </div>
            </div>
        </UserCourseListContext.Provider>
    )
}

export default DashboardLayout