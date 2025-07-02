"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import AUDIO_DATA from '@/app/_data/audio.json'

const Page = () => {
  const { slug } = useParams()
  const audioData = AUDIO_DATA.audios.find(audio => audio.slug === slug)

  if (!audioData) {
    return (
      <div className='text-center text-white py-10'>
        <h2 className='text-2xl font-semibold'>Audio not found</h2>
        <p className='mt-4 text-gray-400'>The requested audio file does not exist.</p>
      </div>
    )
  }
  return (
    <div>
      <h1 className='text-xl md:text-2xl font-semibold text-center text-white mt-10'>A deep discussion about {audioData.title}</h1>
      <div className='max-w-2xl mx-auto mt-10'>
        <audio controls className='w-full'>
          <source src={audioData.playLink} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}

export default Page
