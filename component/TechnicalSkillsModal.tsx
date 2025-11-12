
'use client'
import { skills } from '@/lib/hardData';
import React from 'react'
import BasicIcons from './BasicIcons';

const TechnicalSkillsModal = () => {
    const modalId = `technicalSkills`
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className='btn  tracking-widest btn-outline text-xs'
                onClick={() => {
                    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
                    modal?.showModal()
                }}>Technical skills</button>
            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label='filledDot' className='text-xl text-yellow-300' />
                            <h1>Technical skills:</h1>
                        </div>
                        <div className='flex items-center mt-1  gap-3 flex-wrap ml-10'>

                            {skills.map(s => {
                                return (
                                    <div key={s} className="badge badge-outline badge-xl text-sm badge-secondary tracking-widest">{s}</div>
                                )
                            })}


                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default TechnicalSkillsModal
