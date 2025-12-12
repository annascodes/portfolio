import React from 'react'
import TextRotater from './TextRotater'
import Image from 'next/image'

const HeroUpd = () => {
    return (

        <div className="flex md:flex-row  flex-col-reverse items-center gap-2 md:gap-0 justify-center md:h-svh border-0">
            <div className="w-full md:w-1/2 flex flex-col items-start border-0  ">
                <div className='flex items-center justify-start   mx-auto border-0 md:w-md'>
                    <h1 className=" text-9xl font-extrabold  ">Anas</h1>
                    <span className='text-yellow-300 animate-bounce text-9xl'>.</span>
                </div>

                <p className='md:w-md md:p-0 px-9 text-sm tracking-wider mx-auto border-0'>
                    <span>  Full-stack developer </span>
                    <span className='text-yellow-300'>MERN</span>
                    <span> & </span>
                    <span className='text-yellow-300'>Nextjs</span>.
                    <br />
                    <span> Trying to make every project a little better than the last.</span>
                </p>
                <div className='md:w-md md:p-0 px-9 text-sm tracking-wider mt-0 mx-auto border-0'>
                    <TextRotater />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex-col border-0  flex items-center justify-center   mx-auto">
                <Image
                    // src="https://github.com/user-attachments/assets/81d27c62-6de6-4cca-b10c-cbcc2ca18c52"
                     
                    src="https://github.com/user-attachments/assets/8ee8fe17-33d9-4e4d-9fd8-51797ccf0ee1"
                    // src="https://github.com/user-attachments/assets/fbc71fbc-1844-4ca7-8a63-85cd0ba04764"
                   
                    alt="Hero"
                    width={400}   // adjust
                    height={400}  // adjust
                    priority={false}  // lazy load by default
                    className='slide-in-top'
                />
            </div>
            
        </div>

    )
}

export default HeroUpd


/* 
Hey there 👋 I’m A Na S ShuAib, a full-stack developer who loves building things that actually work and look good. I spend most of my time creating modern web apps using Next.js, TypeScript, and Prisma, focusing on clean code, smooth UX, and solid backend logic.
I’m always exploring new ideas, learning new tools, and trying to make every project a little better than the last

*/