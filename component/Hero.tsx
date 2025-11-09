import React from 'react'

const Hero = () => {
    return (

        <div className="flex md:flex-row flex-col items-center gap-2 md:gap-0 justify-center h-svh  ">
            <div className="w-1/3   flex items-center justify-center   mx-auto">
                <div className="bg-stone-300 text-black p-10 rounded-r-full slide-in-top">
                    <h1 className="text-6xl font-thin animate-pulse  ">Hello!</h1>
                    <h1 className=" text-center tracking-widest">its me,</h1>
                </div>
            </div>
            <div className="w-2/3   flex items-center justify-center   mx-auto">
                <h1 className="text-9xl font-extrabold ">Anas</h1>
                <span className='text-yellow-300 animate-bounce text-9xl'>.</span>
            </div>
        </div>

    )
}

export default Hero
