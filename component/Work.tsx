import React from 'react'
import BasicIcons from './BasicIcons'

const Work = () => {
    return (
         <div className='md:h-svh flex md:flex-row flex-col p-5 '>
            <div className='md:w-1/3 w-full   flex flex-row justify-center items-center'>
                <div className='md:flex items-center gap-2 md:w-sm mx-auto text-5xl hidden   justify-center '>
                    <BasicIcons label='work' className='text-5xl' />
                    {/* <h1>About</h1> */}
                </div>
            </div>
            <div className='md:w-2/3 w-full    flex flex-col justify-center items-start'>
              <div className='flex items-center gap-2'>
                    <div className='md:hidden '>
                        <BasicIcons label='work' className='text-5xl' />
                    </div>
                    <h1 className='text-5xl mb-2 font-semibold   '>Work</h1>
                </div>
               <div className='flex flex-col gap-3'>
                 <p>
                    Passionate about building scalable web applications with modern JavaScript frameworks. <br /> Skilled in Next.js, React, TypeScript, Node.js, and Prisma (PostgreSQL with Neon).  <br /> Experienced in designing secure authentication systems (Clerk, JWT), writing clean type-safe code, and deploying robust full-stack apps on Vercel.
                </p>
                <div className='flex items-center  gap-3 my-2'>
                    <button className='btn  tracking-widest btn-outline text-xs'> Technical Skills</button>
                    <button className='btn  tracking-widest btn-outline text-xs'> Projects</button>
                </div>
               </div>
            </div>

        </div>
    )
}

export default Work
