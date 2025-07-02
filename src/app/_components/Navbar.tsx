import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='shadow-md border-b border-violet-950 px-2 md:px-0'>
            <Link href={'/'} className='cursor-pointer'>
                <h1 className="md:text-3xl text-xl font-semibold max-w-6xl mx-auto py-4 text-white flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M8 15h.01" /><path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" /><path d="M15 12a5 5 0 0 1 0 6" /></svg>
                    PodTechCast
                </h1>
            </Link>
        </nav>
    )
}

export default Navbar
