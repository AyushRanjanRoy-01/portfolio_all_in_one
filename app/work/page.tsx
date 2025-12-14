export default function Work() {
  const projects = [
    {
      title: 'Multi-Agent Document Intelligence Pipeline',
      hook: 'Automated client onboarding from weeks to days',
      description: 'Built consensus-based LLM system with GPT-4 and Claude for reliable document extraction',
      tech: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Azure AI'],
      impact: '60% faster deployments, 95% accuracy',
      github: 'https://github.com',
    },
    {
      title: 'RAG Pipeline for Enterprise Search',
      hook: 'Intelligent document retrieval across massive datasets',
      description: 'Production-ready retrieval system with vector embeddings and semantic search',
      tech: ['Python', 'ChromaDB', 'OpenAI', 'FastAPI'],
      impact: '10x improvement in search relevance',
      github: 'https://github.com',
    },
    {
      title: 'Async Workflow Orchestration',
      hook: 'Parallel processing for high-throughput automation',
      description: 'Built async pipeline handling 10k+ documents/day with fault tolerance',
      tech: ['Python asyncio', 'Celery', 'Redis', 'PostgreSQL'],
      impact: '5x throughput increase',
      github: 'https://github.com',
    },
  ]

  return (
    <section className="flex-1 flex flex-col">
      <div className="max-w-4xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-12 last:border-0">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.hook}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-3">{project.impact}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
