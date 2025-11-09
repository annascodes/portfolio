import React from 'react'
import BasicIcons from './BasicIcons';
import { projects, skills } from '@/lib/hardData';

const About = () => {
    

    return (
        <div className='md:h-svh flex md:flex-row flex-col p-5 '>
            <div className='md:w-1/3 w-full   flex flex-row justify-center items-center'>
                <div className='md:flex items-center gap-2 md:w-sm mx-auto text-5xl hidden   justify-center '>
                    <BasicIcons label='about' className='text-5xl' />
                    {/* <h1>About</h1> */}
                </div>
            </div>
            <div className='md:w-2/3 w-full    flex flex-col justify-center items-start'>
                <div className='flex items-center gap-2'>
                    <div className='md:hidden '>
                        <BasicIcons label='about' className='text-5xl' />
                    </div>
                    <h1 className='text-5xl mb-2 font-semibold   '>About me</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>I am Full stack developer <span className='text-yellow-300 font-bold '>MERN</span> & <span className='text-yellow-300 font-bold '>Nextjs</span> </h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <div className='flex flex-wrap gap-2 items-center'>
                                <h1>Build severl projects in <span className='text-yellow-300 font-bold '>MERN</span> stack </h1>

                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>Build couple of web apps using  <span className='font-bold text-yellow-300'> Nextjs</span> too, all are live.</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>Implemented authentication and authorization using <span className='font-bold text-yellow-300'> JWT</span>, also used third party services like <span className='font-bold text-yellow-300'> Clerk</span> etc. </h1>
                        </div>
                       
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>Built projects like:</h1>
                        </div>
                        <div className='flex flex-col  items-start mt-1 mb-2 gap-3 flex-wrap ml-10'>

                            {projects.map(p => {
                                return (
                                    <div key={p} className="badge badge-outline badge-secondary tracking-widest">{p}</div>
                                )
                            })}


                        </div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>Technical skills:</h1>
                        </div>
                        <div className='flex items-center mt-1  gap-3 flex-wrap ml-10'>

                            {skills.map(s => {
                                return (
                                    <div key={s} className="badge badge-outline badge-secondary tracking-widest">{s}</div>
                                )
                            })}


                        </div>


                    </div>
                    {/* <div className='flex items-center gap-3 my-2'>
                        <button className='btn  tracking-widest btn-outline text-xs'> Technical Skills</button>
                        <button className='btn  tracking-widest btn-outline text-xs'> Projects</button>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default About
