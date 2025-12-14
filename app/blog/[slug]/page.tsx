export default function BlogPost() {
  return (
    <section className="flex-1 flex flex-col">
      <article className="max-w-2xl mx-auto px-6 py-24 w-full prose prose-sm">
        <h1>Getting Started with LangGraph</h1>
        <p className="text-gray-500">January 15, 2024 · 8 min read</p>

        <h2>Introduction</h2>
        <p>
          LangGraph is a powerful framework for building multi-agent systems with clear state management and control flow. This post covers the fundamentals and practical patterns for production use.
        </p>

        <h2>What is LangGraph?</h2>
        <p>
          LangGraph provides a way to define complex agent workflows as graphs. Each node represents a step, and edges define transitions based on conditions or outcomes.
        </p>

        <h2>Basic Pattern</h2>
        <pre>
          <code>{`from langgraph.graph import StateGraph

def node_1(state):
    return {"value": state["value"] + 1}

def node_2(state):
    return {"value": state["value"] * 2}

graph = StateGraph()
graph.add_node("step_1", node_1)
graph.add_node("step_2", node_2)
graph.add_edge("step_1", "step_2")

compiled = graph.compile()
result = compiled.invoke({"value": 1})`}</code>
        </pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Keep nodes focused and single-responsibility</li>
          <li>Use type hints for state management</li>
          <li>Implement proper error handling</li>
          <li>Log state transitions for debugging</li>
        </ul>

        <h2>Conclusion</h2>
        <p>LangGraph enables building complex, maintainable multi-agent systems. Start simple, iterate, and scale your workflows as needed.</p>
      </article>
    </section>
  )
}
