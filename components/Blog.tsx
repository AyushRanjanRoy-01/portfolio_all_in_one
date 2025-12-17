import React from 'react'
import SectionTitle from './SectionTitle'

export default function Blog() {
  return (
    <section id="blog">
      <SectionTitle title="Blog Preview" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <div className="h-32 bg-gray-100 flex items-center justify-center">Image</div>
            <div className="p-4">
              <h4 className="font-semibold">Placeholder Title</h4>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
