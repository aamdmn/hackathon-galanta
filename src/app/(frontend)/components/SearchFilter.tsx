import React from 'react'
import { LayoutGrid } from 'lucide-react'

const SearchFilter: React.FC = () => {
  return (
    <div className="bg-black p-[6px] rounded-xl max-w-lg mx-auto">
      <div className="grid grid-cols-5 gap-2">
        <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white transition-colors rounded-lg">
          <LayoutGrid className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium">Typ</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white transition-colors rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm font-medium">Miesto</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white transition-colors rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium">Cena</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white transition-colors rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium">Dátum</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-2 py-3 px-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white transition-colors rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="text-sm font-medium">Jazyk</span>
        </button>
      </div>
    </div>
  )
}

export default SearchFilter
