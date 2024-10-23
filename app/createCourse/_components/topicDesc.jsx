import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

const TopicDesc = () => {
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
        <div className='mx-20 lg:mx-44'>
            <div className='mt-5 text-white'>
                <label>Write the topic you wanted to generate a course</label>
                <Input placeholder={'Topic'}
                    defaultValue={userCourseInput?.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)} />
            </div>
            <div className='mt-5 text-white'>
                <label>Tell me more about course</label>
                <Textarea placeholder={'About your Course'}
                    defaultValue={userCourseInput?.description}
                    onChange={(e) => handleInputChange('description', e.target.value)} />
            </div>

        </div>
    )
}

export default TopicDesc