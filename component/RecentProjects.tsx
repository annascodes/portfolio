import React from 'react'
import { LuSchool } from "react-icons/lu";
import BasicIcons, { IconsAndLabels } from './BasicIcons';
import Link from 'next/link';

const RecentProjects = () => {
    // const titles = ['school', 'cart', 'boxes', 'wall']

    // const titles = ['boxes', 'work', 'about', 'wall']

    const titles = [
        {
            name: 'Firma',
            link: 'https://firma-web.vercel.app/'
        },
        
        {
            name: 'Finance Tracker',
            link: 'https://finance-tracker-ai.vercel.app/'
        },
        {
            name: 'HRM-ERP',
            link: 'https://hrm-erp.vercel.app/'
        },

    ]

    // const titles = ['Project Management',
    //     'HRM apps', 'E-Store',
    //     'RBAC systems'
    // ]

    return (
        <div>

            <div className='md:h-svh  bg-stone-300 text-black border-neutral-800 flex flex-row justify-around items-center gap-2 flex-wrap p-5'>

                <h1 className=' text-center w-full text-neutral-800 mb-5 md:mb-0   md:text-6xl text-5xl tracking-widest   '>Live projects </h1>

                {titles.map(t => {
                    return (
                        // <ProjectCard key={t} title={t} label={t as keyof typeof IconsAndLabels} />
                        <ProjectCard key={t.name} title={t.name} link={t.link}  />
                    )
                })}
            </div>
        </div>
    )
}

export default RecentProjects

const ProjectCard = ({ title, label, link }: { title: string, label?: keyof typeof IconsAndLabels, link:string }) => {
    return (
        <Link href={link} target='_blank' className='slide-in-top cursor-pointer bg-stone-300  text-neutral-800 duration-300 hover:bg-neutral-800 hover:text-stone-300  shadow-2xl  rounded-xl md:h-56  md:w-64 w-32 h-32 flex flex-col justify-center px-4 '>
            <div className='hover:scale-125 duration-300'>
                <BasicIcons label={label? label: 'folder'} className='md:text-7xl text-5xl mx-auto my-4' />
                 <h1 className='text-center hover:scale-110 duration-300   tracking-widest '>{title}</h1>
            </div>

           

        </Link>
    )
}
