export default function About() {
  return (
    <section className="flex-1 flex flex-col">  
      <div className="max-w-2xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl font-bold mb-8">About</h1>

        <div className="prose prose-sm max-w-none">
          <p>
            I&apos;m an AI Engineer at Accenture building production-grade automation systems. My work focuses on multi-agent orchestration, document intelligence, and scalable LLM applications.
          </p>

          <p>
            I believe in clean architecture, reliable systems, and practical solutions that solve real problems. Currently exploring distributed systems design and production ML patterns.
          </p>

          <h2>Currently Working On</h2>
          <ul>
            <li>Multi-agent orchestration frameworks</li>
            <li>Production-grade document intelligence pipelines</li>
            <li>Scalable LLM applications with enterprise requirements</li>
          </ul>

          <h2>Interests</h2>
          <ul>
            <li>Coffee and exploring new places</li>
            <li>Chess and strategic thinking</li>
            <li>System design and architecture</li>
            <li>Open-source contributions</li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out via email or connect on LinkedIn. I&apos;m always interested in discussing AI systems, engineering challenges, or new ideas.
          </p>
        </div>

        <div className="mt-8">
          <a href="mailto:ayush@example.com" className="px-5 py-2 border border-gray-300 rounded text-sm hover:border-gray-900 transition inline-block">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
