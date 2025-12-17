import React from 'react'
import SectionTitle from './SectionTitle'

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <SectionTitle title="Concept Case Studies" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-4 border rounded">
            <h4 className="font-semibold">Placeholder Title</h4>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
