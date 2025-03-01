import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-background text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Avenue
        </Link>
        <div className="flex space-x-4">
          <Link href="/explore" className="hover:text-gray-300">
            Explore
          </Link>
          <Link
            href="/create-event"
            className="bg-white text-black px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-2">Create Event</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
