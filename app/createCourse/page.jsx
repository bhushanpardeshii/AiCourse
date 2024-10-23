"use client"
import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineAdjustmentsHorizontal, HiOutlineBookOpen, HiOutlineRectangleStack } from "react-icons/hi2";
import SelectCategory from './_components/selectCategory';
import TopicDesc from './_components/topicDesc';
import SelectOption from './_components/selectOption';
import { UserInputContext } from '../_context/UserInputContext';
import { GenrateCourseLayout_AI } from '@/configs/aiModel';
import LoadingDialog from './_components/loadingDialog';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
const CreateCourse = () => {
    const [activeIndex, setactiveIndex] = useState(0);
    const [loading, setloading] = useState(false);
    const StepperOptions = [
        {
            id: 1,
            name: "Category",
            icon: <HiOutlineRectangleStack />
        },
        {
            id: 2,
            name: "Topic & Desc",
            icon: <HiOutlineBookOpen />
        },
        {
            id: 3,
            name: "Options",
            icon: <HiOutlineAdjustmentsHorizontal />
        },
    ]
    const { userCourseInput, setuserCourseInput } = useContext(UserInputContext);
    const { user } = useUser();
    const router = useRouter();
    useEffect(() => {

    }, [userCourseInput])
    const checkStatus = () => {
        if (userCourseInput?.length == 0) {
            return true;
        }
        if (activeIndex == 0 && (userCourseInput?.category?.length == 0 || userCourseInput?.category?.length == undefined)) {
            return true;
        }
        if (activeIndex == 1 && (userCourseInput?.topic?.length == 0 || userCourseInput?.topic?.length == undefined)) {
            return true;
        }
        else if (activeIndex == 2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapters == undefined)) {
            return true
        }
        return false;
    }
    const GenerateCourseLayout = async () => {
        setloading(true);
        const BASIC_PROMPT = 'Generate a course tutorial on following detail with feild as CourseName,Description,Along with Chapter name,about,Duration:'
        const USER_INPUT_PROMPT = 'Category:' + userCourseInput?.category + ',Topic:' + userCourseInput?.topic + ',Level:' + userCourseInput?.level + ',Duration:' + userCourseInput?.duration + ',NoOfChapters:' + userCourseInput?.noOfChapters + ',in JSON format'
        const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT)
        const result = await GenrateCourseLayout_AI.sendMessage(FINAL_PROMPT)
        console.log(result.response?.text())
        console.log(JSON.parse(result.response?.text()))
        setloading(false);
        SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
    }

    const SaveCourseLayoutInDb = async (courseLayout) => {
        setloading(true)
        var id = uuid4();

        const result = await db.insert(CourseList).values({
            courseId: id,
            name: userCourseInput?.topic,
            level: userCourseInput?.level,
            category: userCourseInput?.category,
            courseOutput: courseLayout,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userProfileImage: user?.imageUrl
        })
        console.log("finish")
        setloading(false)
        router.replace('/createCourse/' + id)
    }

    return (
        <div className='h-screen'>
            <div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h2 className='text-2xl text-gray-200 font-medium'>Create Course</h2>

                    <div className='flex mt-10'>
                        {StepperOptions.map((item, index) => {
                            return (

                                <div key={index} className='flex  items-center' >
                                    <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                        <div className={`bg-gray-800 p-3 rounded-full text-gray-200 text-2xl ${activeIndex >= index && 'bg-red-600'}`}>
                                            {item.icon}
                                        </div>
                                        <h2 className='hidden md:block md:text-md mt-2 text-gray-300'>
                                            {item.name}
                                        </h2>
                                    </div>
                                    {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-700 ${activeIndex >= index && 'bg-purple-800'}`}></div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='px-10 md:px-20 lg:px-44 mt-10'>
                    {activeIndex == 0 ? <SelectCategory /> : null}
                    {activeIndex == 1 ? <TopicDesc /> : null}
                    {activeIndex == 2 ? <SelectOption /> : null}

                    <div className='flex justify-between mt-10 gap-5'>
                        <Button disabled={activeIndex == 0} onClick={() => setactiveIndex(activeIndex - 1)} className=" rounded border border-red-600 bg-red-600  text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
                            Previous
                        </Button>
                        {activeIndex < 2 && <Button disabled={checkStatus()} onClick={() => setactiveIndex(activeIndex + 1)} className=" rounded border border-red-600 bg-red-600  text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
                            Next
                        </Button>}
                        {activeIndex == 2 && <Button disabled={checkStatus()} onClick={() => GenerateCourseLayout()} className=" rounded border border-red-600 bg-red-600  text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
                            Generate Course
                        </Button>}
                    </div>
                </div>
            </div>
            <LoadingDialog loading={loading} />
        </div>
    )
}

export default CreateCourse