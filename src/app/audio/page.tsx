import React from 'react'
import AUDIO_DATA from '@/app/_data/audio.json'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    const audioList = AUDIO_DATA?.audios || []

    if (!audioList.length) {
        return (
            <div className="text-center text-white py-10">
                <h2 className="text-2xl font-semibold">No audio content available</h2>
                <p className="mt-4 text-gray-400">Please check back later.</p>
            </div>
        )
    }

    return (
        <div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10'>
                {audioList.map((audio) => (
                    <li key={audio.slug} className='bg-white rounded-lg shadow-md hover:shadow-lg transition hover:scale-105'>
                        <Link href={audio.link} target="_blank" rel="noopener noreferrer" className='block'>
                            <Image
                                src={audio.cover}
                                alt={audio.title}
                                width={300}
                                height={300}
                                className='w-full h-48 object-cover rounded-md mb-4 rounded-bl-none rounded-br-none'
                            />

                            <h3 className='text-lg font-semibold text-gray-800 px-4 pb-4'>{audio.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default page
