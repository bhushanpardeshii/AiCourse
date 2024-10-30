"use client"
import React, { useState } from 'react'
import Sidebar from './_component/sidebar'
import Header from './_component/header'
import { UserCourseListContext } from '../_context/UserCourseListContext'
import { HiBars3 } from "react-icons/hi2";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignOutButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }) => {
    const [userCourseList, setUserCourseList] = useState([]);
    return (
        <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>

            <div className='min-h-screen bg-gray-900'>
                <div className='md:w-64 hidden md:block'>
                    <Sidebar />
                </div>
                <div className='md:ml-64'>
                    <Header />
                    <div className='md:hidden text-3xl mx-5 mt-5 text-red-600'>

                        <Sheet>
                            <SheetTrigger><HiBars3 /></SheetTrigger>
                            <SheetContent side='left'>
                                <SheetHeader>
                                    <SheetTitle>
                                        <div className='flex justify-center'>

                                            <Image src={'/finallogo.png'} width={190} height={190} />
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription>
                                        <div className=' flex flex-col mt-10 text-xl gap-5 text-gray-200'>
                                            <Link href={'/dashboard'}><h2>Home</h2></Link>
                                            <Link href={'/dashboard/explore'}><h2>Explore</h2></Link>
                                            <Link href={'/dashboard/upgrade'}><h2>Upgrade</h2></Link>
                                            <SignOutButton>
                                                <h2>Logout</h2>
                                            </SignOutButton>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>
                    <div className='p-5 text-white'>
                        {children}
                    </div>
                </div>
            </div>
        </UserCourseListContext.Provider>
    )
}

export default DashboardLayout