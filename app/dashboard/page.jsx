import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddCourse from './_component/addCourse'
import UserCourseList from './_component/userCourseList'

function Dashboard() {
    return (
        <div className='bg-gray-900'>
            <AddCourse />
            <UserCourseList />
        </div>
    )
}

export default Dashboard