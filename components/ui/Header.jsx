import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='bg-black shadow-md px-2 flex justify-between'>

            <Image src={'/finallogo.png'} width={190} height={190} />
            <div className='flex  items-center'>

                <Link
                    className="z-10 block w-full rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="/dashboard"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default Header