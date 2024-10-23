import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext';
const SelectOption = () => {
    const { userCourseInput, setuserCourseInput } = useContext(UserInputContext);
    const handleInputChange = (fieldValue, value) => {
        setuserCourseInput(
            prev => ({
                ...prev,
                [fieldValue]: value

            })
        )
    }
    return (
        <div className='px-10 md:px-20 lg:px-44 text-gray-300 '>
            <div className='grid grid-cols-2 gap-10'>
                <div>

                    <label className='text-sm'>Difficulty</label>
                    <Select onValueChange={(value) => handleInputChange('level', value)}
                        defaultValue={userCourseInput?.level}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 text-white">
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Course duration</label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)}
                        defaultValue={userCourseInput?.duration}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 text-white">
                            <SelectItem value="1 hour">1 hour</SelectItem>
                            <SelectItem value="2 hour">2 hour</SelectItem>

                        </SelectContent>
                    </Select>

                </div>
                <div>
                    <label className='text-sm'>Add Video</label>
                    <Select onValueChange={(value) => handleInputChange('displayVideo', value)}
                        defaultValue={userCourseInput?.displayVideo}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 text-white">
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>

                        </SelectContent>
                    </Select>

                </div>
                <div>
                    <label className='text-sm'>No. of Chapters</label>
                    <Input type="number"
                        defaultValue={userCourseInput?.noOfChapters}
                        onChange={(event) => handleInputChange('noOfChapters', event.target.value)} />


                </div>

            </div>

        </div>
    )
}

export default SelectOption