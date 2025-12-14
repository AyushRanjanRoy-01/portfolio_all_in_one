export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <a href="mailto:ayush@example.com" className="text-gray-600 hover:text-gray-900 transition">
              ayush@example.com
            </a>
          </div>

          <div className="flex gap-6 text-gray-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
              Twitter
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © {currentYear} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
