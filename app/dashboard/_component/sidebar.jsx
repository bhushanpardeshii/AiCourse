"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import { HiOutlineHome, HiOutlinePower, HiOutlineRocketLaunch, HiOutlineSwatch } from "react-icons/hi2";
import { Progress } from "@/components/ui/progress"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import UserCourseList from './userCourseList';
import { SignOutButton } from '@clerk/nextjs';


const Sidebar = () => {
    const path = usePathname();
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext)
    const menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineSwatch />,
            path: '/dashboard/explore'
        },
        {
            id: 1,
            name: 'Upgrade',
            icon: <HiOutlineRocketLaunch />,
            path: '/dashboard/upgrade'
        },


    ]
    return (
        <div className='bg-gray-800 fixed h-full md:w-64 p-5 shadow-md'>
            <Image src={'/finallogo.png'} width={180} height={100} />
            <hr />
            <ul>
                {menu.map((item, index) => {
                    return (
                        <Link href={item.path} key={index}>
                            <div className={`text-gray-200 flex gap-3 items-center m-2 p-3 hover:text-red-500 hover:cursor-pointer hover:rounded-lg hover:bg-gray-900 ${item.path == path && 'text-red-500 bg-gray-900 rounded-lg'}`}>
                                <div className='text-red-600 text-2xl'>
                                    {item.icon}
                                </div>
                                <h2 className='text-lg'>{item.name}</h2>

                            </div>
                        </Link>
                    )
                })}
                <SignOutButton>
                    <div className='text-xl text-gray-200 flex gap-3 items-center m-2 p-3 hover:text-red-500 hover:cursor-pointer hover:rounded-lg hover:bg-gray-900  rounded-lg'>
                        <HiOutlinePower className='text-red-600 text-2xl' />
                        Logout
                    </div>
                </SignOutButton>
            </ul>
            <div className='absolute bottom-10 w-[80%] '>
                <Progress value={(userCourseList?.length / 2) * 100} />
                <h2 className='text-gray-300 text-sm my-2'>{userCourseList?.length}/2 Courses created</h2>
                <h2 className='text-gray-400 text-xs'>Upgrade your plan for unlimited Courses</h2>
            </div>
        </div>
    )
}

export default Sidebar