'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-gray-600 hover:underline transition serif-display">
          Ayush Ranjan Roy
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/work" className="text-gray-600 hover:text-gray-900 transition">
            Work
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">
            Writing
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="/work" className="text-gray-600 hover:text-gray-900">
                Work
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Writing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
