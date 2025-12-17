import React from 'react'
import SectionTitle from './SectionTitle'

export default function Roadmap() {
  return (
    <section id="roadmap">
      <SectionTitle title="Roadmap (2025–2027)" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['2025','2026','2027'].map((y) => (
          <div key={y} className="p-4 border rounded">
            <h4 className="font-semibold">{y}</h4>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
