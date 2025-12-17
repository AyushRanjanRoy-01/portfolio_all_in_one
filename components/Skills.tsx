import React from 'react'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="p-4 border rounded text-center">
            <div className="h-8 w-8 bg-gray-200 mx-auto mb-3" />
            <div className="text-sm">Placeholder</div>
          </div>
        ))}
      </div>
    </section>
  )
}
