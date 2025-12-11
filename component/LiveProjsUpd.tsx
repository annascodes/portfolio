import React from 'react'
import BasicIcons from './BasicIcons'
import Link from 'next/link'
import { LiveProjectsList } from '@/lib/hardData'
import { div } from 'framer-motion/client'

const LiveProjsUpd = () => {
    const titles = [
        {
            name: 'Firma',
            link: 'https://firma-web.vercel.app/',
            github: 'https://github.com/annascodes/firma',
            details:
                <div className='mt-2 space-y-2'>
                    <div className='flex items-center gap-2'>
                        <BasicIcons label='checkMark' className='text-yellow-300' />
                        <h1>A place where you can manage you company projects.</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BasicIcons label='checkMark' className='text-yellow-300' />
                        <h1>By making request you can join other companies too.</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BasicIcons label='checkMark' className='text-yellow-300' />
                        <h1>Each company has its users, departments and projects.</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BasicIcons label='checkMark' className='text-yellow-300' />
                        <h1>Projects have tasks with details.</h1>
                    </div>
                </div>
        },

        {
            name: 'Finance Tracker',
            link: 'https://finance-tracker-ai.vercel.app/',
            github: 'https://github.com/annascodes/finance-tracker',
            details:
                <div className="mt-2 space-y-2">
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>An intuitive app to help you track and manage your daily expenses.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>Includes powerful filters to view records by date, label, title, or price etc.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>Each record stores essential details like date, label, title, and amount.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>Comes with an additional note-taking feature to capture quick insights.</p>
                    </div>
                </div>

        },
        {
            name: 'HRM-ERP',
            link: 'https://hrm-erp.vercel.app/',
            github: 'https://github.com/annascodes/hrm-erp',
            details:
                <div className="mt-2 space-y-2">
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>A human resource management app that helps streamline employee-related operations.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>All user activities are securely audited and visible to administrators.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>Includes features for employee creation, ID assignment, and access control.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <BasicIcons label="checkMark" className="text-yellow-300 mt-1" />
                        <p>Employees can apply for leave, and leave balances automatically update based on approvals.</p>
                    </div>
                </div>

        },

    ]

    return (
        <div className=' items-start justify-center  flex flex-col gap-5 p-2 md:p-0 border-0'>

            <div className='flex items-center justify-center md:justify-start border-0 w-full gap-2'>
                <div className='md:hidden '>
                    <BasicIcons label='live' className='text-2xl animate-ping' />
                </div>
                <h1 className='text-5xl font-semibold  text-center m-2 md:text-start border-0 md:mx-auto'>Live Projects</h1>
            </div>


            <div className='flex flex-col items-center w-full gap-2 s'>
                {LiveProjectsList.map(t => {
                    return (
                        <div className='flex md:flex-row flex-col  items-center gap-3 p-5 md:w-4xl border-0'>
                            <img src={t.img} className='w-sm rounded-xl ' alt="" />

                            <div key={t.link} className='mb-2 border-0 w-full p-2'>
                                <div className='flex items-center justify-between gap-2 '>
                                    <div className="tooltip tooltip-right">
                                        <div className="tooltip-content flex items-center gap-2 tooltip-right p-2">
                                            <BasicIcons label='live' className='text-xs animate-ping' />
                                            <h1>live</h1>
                                        </div>
                                        <Link href={t.link} target='_blank' className='btn btn-outline text-xs tracking-widest  '>
                                            <BasicIcons label='folder' />
                                            <span>{t.name} </span>
                                        </Link>
                                    </div>
                                    <div className="tooltip tooltip-left">
                                        <div className="tooltip-content flex items-center gap-2 tooltip-right p-2">
                                            <BasicIcons label='github' />
                                            <h1>source code</h1>
                                        </div>
                                        <Link href={t.github} target='_blank' data-tip='source code' className='btn btn-ghost  text-xs tracking-widest tooltip-right '>
                                            <BasicIcons label='code' className='text-base text-yellow-300' />
                                            <span className='text-xs'> code</span>
                                        </Link>
                                    </div>


                                </div>
                                <div className='ml-10'>
                                    {t.details.map(d => (
                                        <div key={d} className='flex items-center gap-2'>
                                            <BasicIcons label='checkMark' className='text-yellow-400' />
                                            <p>{d}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LiveProjsUpd
