import Image from 'next/image'
import React from 'react'
import { Button } from './button'

const Header = () => {
    return (
        <div className='bg-gray-950 shadow-md px-2 flex justify-between'>

            <Image src={'/finallogo.png'} width={190} height={190} />
            <div className='flex  items-center'>

                <Button className='bg-red-600 hover:bg-[#FF2400] '>Get Started</Button>
            </div>
        </div>
    )
}

export default Header