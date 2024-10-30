import React from 'react'
import { TextGenerateEffect } from './text-generate-effect'
import { BackgroundBeams } from './background-beams'
import Link from 'next/link'

const Hero = () => {
    const words = '  Unlock personalized education with AI-driven course creation.Tailor your learning journey to fit your unique goals and pace.'
    return (
        <div>
            <section className="min-h-screen bg-black text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-red-600 via-pink-700 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
                        >
                            Ai Course Generator
                            <span className="py-4 text-[#FF3F3F] text-2xl md:text-4xl sm:block"><br />Custom Learning Paths,<br />Powered By AI</span>
                        </h1>
                        <TextGenerateEffect words={words} />
                        <div className=" mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className=" z-10  block w-full rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/dashboard"
                            >
                                Get Started
                            </Link>


                        </div>
                    </div>
                </div>
            </section>
            <BackgroundBeams />
        </div>
    )
}

export default Hero