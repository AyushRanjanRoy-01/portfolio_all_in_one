import React from 'react'

export default function SectionTitle({ title }: { title?: string }) {
  return (
    <h2 className="text-2xl font-semibold mb-4">{title ?? 'Section Title'}</h2>
  )
}
