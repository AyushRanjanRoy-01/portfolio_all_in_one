import React from 'react'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contact">
      <SectionTitle title="Contact" />
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <input className="p-3 border rounded" placeholder="Name" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea className="p-3 border rounded md:col-span-2" placeholder="Message" rows={6} />
        <button disabled className="px-4 py-2 bg-gray-100 text-gray-600 rounded md:col-span-2">Submit (placeholder)</button>
      </form>
    </section>
  )
}
