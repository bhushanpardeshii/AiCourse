import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between p-5 bg-gray-900 border-b-2 border-gray-400'>
            <Link href={'/dashboard'}>
                <Image src={'/starlogo.png'} width={60} height={60} />
            </Link>
            <UserButton />
        </div>
    )
}

export default Header