export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-fafafa mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-3">
            <a href="mailto:ayush@example.com" className="text-sm text-gray-600 hover:text-gray-900 transition">
              ayush@example.com
            </a>
          </div>

          <div className="flex gap-8 text-gray-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900 transition">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900 transition">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900 transition">
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
