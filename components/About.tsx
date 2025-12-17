import React from 'react'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about">
      <SectionTitle title="About" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="h-36 w-36 bg-gray-100 rounded-full flex items-center justify-center">Avatar</div>
      </div>
    </section>
  )
}
