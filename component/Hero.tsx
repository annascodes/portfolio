import React from 'react'

const Hero = () => {
    return (

        <div className="flex md:flex-row flex-col items-center gap-2 md:gap-0 justify-center h-svh  ">
            <div className="w-full md:w-1/3   flex items-center justify-center   mx-auto">
                <div className="bg-stone-300 text-black p-10 rounded-r-full slide-in-top">
                    <h1 className="text-6xl font-thin animate-pulse  ">Hello!</h1>
                    <h1 className=" text-center tracking-widest">its me,</h1>
                </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col items-start border-0  ">
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
            </div>
        </div>

    )
}

export default Hero


/* 
Hey there 👋 I’m A Na S ShuAib, a full-stack developer who loves building things that actually work and look good. I spend most of my time creating modern web apps using Next.js, TypeScript, and Prisma, focusing on clean code, smooth UX, and solid backend logic.
I’m always exploring new ideas, learning new tools, and trying to make every project a little better than the last

*/