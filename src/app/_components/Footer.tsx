import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className=" text-white py-10 shadow-xl shadow-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div>
        <h2 className="text-2xl font-bold text-white">
          PodTechCast
        </h2>
        <p className="text-sm mt-3 text-gray-300">
          Learn while you listen. Empower your tech journey with audio-first content.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Explore</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
        </ul>
      </div>

      {/* <div>
        <h3 className="text-lg font-semibold mb-4">Connect</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>Email: hello@podtechcast.com</li>
          <li>Twitter: @podtechcast</li>
          <li>LinkedIn: /podtechcast</li>
        </ul>
      </div> */}

    </div>

    <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
      © 2025 PodTechCast. All rights reserved.
    </div>
  </div>
</footer>

  )
}

export default Footer
