import { LiveProjectsList } from '@/lib/hardData'
import { div } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'
import BasicIcons from './BasicIcons'

const LiveProjsDiv = () => {
    /* 
        *| Doing this for the new feature.
        -| Ugrading the most used one to the best of UX.
        -| Not happening in the most upgrading and user supportive.
    */
    return (
        <div
        //  className='h-svh flex justify-center items-center '
        className='p-2'
        >
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    LiveProjectsList.map(l => (
                        <div key={l.name} className=' border  border-neutral-700 md:w-md '>
                            <div className='w-full border-0 '>
                                <img src={l.img} className='w-full h-full object-contain' alt="" />
                            </div>
                            <div className='flex items-center justify-between gap-0 p-5'>
                                <div className='flex items-center gap-2'>
                                    <BasicIcons label='folder' className='text-2xl' />
                                    <h1 className='text-2xl font-bold'>{l.name}</h1>
                                </div>
                                <div className='flex items-center text-xs gap-2 '>
                                    <Link href={l.link} className='btn btn-xs btn-outline text-xs tracking-widest'>Live</Link>
                                    <Link href={l.link} className='btn btn-xs btn-outline text-xs tracking-widest'>Source code</Link>
                                </div>
                            </div>

                            {/* <div>
                                {
                                    l.details.map(d => (
                                        <div key={d} className='flex items-center gap-2'>
                                            <BasicIcons label='checkMark' className='text-yellow-400' />
                                            <p>{d}</p>
                                        </div>
                                    ))
                                }
                            </div> */}

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LiveProjsDiv
