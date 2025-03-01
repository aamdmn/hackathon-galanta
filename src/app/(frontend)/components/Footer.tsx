import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Avenue</h3>
          <p className="text-gray-400">
            Avenue streamlines event discovery, creation, ticketing and management
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Events</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/events/music" className="text-gray-400 hover:text-white">
                Music
              </Link>
            </li>
            <li>
              <Link href="/events/nightlife" className="text-gray-400 hover:text-white">
                Nightlife
              </Link>
            </li>
            <li>
              <Link href="/events/arts" className="text-gray-400 hover:text-white">
                Arts & Culture
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-400 hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto pt-8 mt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Avenue. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
