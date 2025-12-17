import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="max-w-2xl px-6 py-24 text-center">
        <h1 className="text-7xl font-bold mb-4 hover:underline transition-all duration-300 cursor-pointer">Ayush Ranjan Roy</h1>
        <p className="text-xl text-gray-600 mb-2">AI Engineer</p>
        <p className="text-lg text-gray-600 mb-8">Building intelligent automation systems</p>
        
        <p className="text-gray-700 mb-6 max-w-lg mx-auto leading-relaxed">
          Currently working on multi-agent orchestration and document intelligence at Accenture
        </p>
        
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm">
          Python, FastAPI, PostgreSQL, LangChain/LangGraph, Azure AI
        </p>

        <div className="flex gap-3 justify-center mb-12">
          <Link href="/project" className="px-5 py-2 border border-gray-300 rounded text-sm hover:border-gray-900 transition">
            View projects
          </Link>
          <Link href="/blog" className="px-5 py-2 border border-gray-300 rounded text-sm hover:border-gray-900 transition">
            Read Blogs
          </Link>
          <Link href="/about" className="px-5 py-2 border border-gray-300 rounded text-sm hover:border-gray-900 transition">
            About Me
          </Link>
        </div>

        <div className="flex gap-6 justify-center text-gray-600">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
