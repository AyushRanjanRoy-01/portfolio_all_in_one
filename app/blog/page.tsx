import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      slug: 'getting-started-with-langgraph',
      title: 'Getting Started with LangGraph',
      date: '2024-01-15',
      readTime: '8 min read',
      description: 'Building production-grade multi-agent systems',
    },
    {
      slug: 'rag-best-practices',
      title: 'RAG Best Practices for Production',
      date: '2024-01-10',
      readTime: '12 min read',
      description: 'Lessons learned scaling retrieval-augmented generation systems',
    },
    {
      slug: 'document-intelligence-at-scale',
      title: 'Document Intelligence at Scale',
      date: '2024-01-05',
      readTime: '10 min read',
      description: 'Handling high-volume document processing with accuracy',
    },
  ]

  return (
    <section className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl font-bold mb-12">Writing</h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-blue-600 transition mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-2">
                {post.date} · {post.readTime}
              </p>
              <p className="text-gray-700">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
