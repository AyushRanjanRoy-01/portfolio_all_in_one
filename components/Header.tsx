'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-fafafa border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-3xl font-normal text-gray-900 hover:underline transition serif-display">
          Ayush Ranjan Roy
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/work" className="text-sm text-gray-600 hover:text-gray-900 transition tracking-wide">
            Projects
          </Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition tracking-wide">
            Blogs
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition tracking-wide">
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
                Projects
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blogs
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
