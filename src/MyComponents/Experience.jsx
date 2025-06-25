import { Briefcase } from 'lucide-react'
import React from 'react'

const Experience = () => {
    return (
        <section id='experience' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-2 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><Briefcase style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Experience</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>Here's my professional journey and the experiences that have shaped my skills in software development.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience