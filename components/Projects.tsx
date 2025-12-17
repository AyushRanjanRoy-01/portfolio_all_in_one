import React from 'react'
import SectionTitle from './SectionTitle'

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">Image</div>
            <div className="p-4">
              <h3 className="font-semibold">Placeholder Title</h3>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
              <div className="mt-4">
                <button className="px-3 py-1 text-sm border rounded text-gray-700">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
