'use client'

import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Placeholder Title</h1>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="mt-6 space-x-3">
            <button className="px-4 py-2 border rounded text-sm text-gray-700">Placeholder</button>
            <button className="px-4 py-2 border rounded text-sm text-gray-700">Placeholder</button>
          </div>
        </div>
        <div className="h-56 bg-gray-100 rounded flex items-center justify-center">Placeholder Image</div>
      </div>
    </section>
  )
}
