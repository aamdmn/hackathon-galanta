import React from 'react'

import BottomNavigation from './components/BottomNavigation'
import EventCard from './components/EventCard'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchFilter from './components/SearchFilter'
import { events } from './data/events'
import './styles.css'

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />

      <main className="flex-grow">
        <Hero />
        <SearchFilter />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                category={event.category}
                imageUrl={event.imageUrl}
                ticketsLeft={event.ticketsLeft}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  )
}
