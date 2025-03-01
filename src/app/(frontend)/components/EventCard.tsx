import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface EventCardProps {
  id: string
  title: string
  date: string
  time: string
  category: string
  imageUrl: string
  ticketsLeft?: number
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  category,
  imageUrl,
  ticketsLeft,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-background transition-all duration-300 hover:shadow-xl">
      <Link href={`/events/${id}`}>
        <div className="relative h-80 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                category === 'NIGHTLIFE'
                  ? 'bg-purple-900 text-purple-100'
                  : category === 'MUSIC'
                    ? 'bg-red-900 text-red-100'
                    : 'bg-green-900 text-green-100'
              }`}
            >
              {category}
            </span>
          </div>

          {/* Bookmark Button */}
          <button className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>

          {/* Date and Time */}
          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-white font-medium">{date}</p>
            <p className="text-gray-300 text-sm">{time}</p>
          </div>

          {/* Tickets Left */}
          {ticketsLeft !== undefined && ticketsLeft <= 10 && (
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center px-2 py-1 rounded bg-red-900/80 text-red-100 text-xs font-medium">
                ONLY {ticketsLeft} TICKETS LEFT
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default EventCard
