// trivago — Full-Stack Engineer, Marketing Solutions (AI-first marketing engine)
// Düsseldorf, English application, AI-Agent / LangChain / Anthropic focus
// Run: node generate-bewerbung.mjs companies/trivago.mjs

export default {
  slug: 'trivago',
  date: '30.05.2026',
  language: 'en',

  recipient: [
    'trivago N.V.',
    'Marketing Solutions — Hiring Team',
    'Düsseldorf',
  ],

  subject: 'Application: Full-Stack Engineer, Marketing Solutions (AI Marketing Engine)',

  cv: {
    tagline: 'Full-Stack Engineer · TypeScript · React · Multi-Agent AI Systems',
    competencies: [
      'TypeScript · JavaScript',
      'React.js · Next.js',
      'Node.js · Express',
      'LangGraph · Multi-Agent',
      'Claude · Gemini · Groq APIs',
      'RAG · Vector Search',
      'n8n · Workflow Automation',
      'Docker · Git · CI/CD',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B Automation System',
        stack: 'LangGraph · Claude · Gemini · Groq · MongoDB Vector Search · n8n',
        desc: 'Multi-agent orchestration system: agents research, decide, and execute across Gmail, Twitter, Instagram, TikTok. RAG retrieval over vector store, Critic agents and Human-in-the-Loop checkpoints prevent hallucinations.',
      },
      {
        title: 'VSpots — End-to-End Influencer Pipeline',
        stack: 'n8n · Modash API · Groq LLM · Pipeline Orchestration',
        desc: 'Multi-source data ingestion pipeline with LLM scoring: rate-limit handling, error recovery, structured report generation. Concept-to-production in weeks.',
      },
      {
        title: 'Full-Stack SaaS — Stock Management Platform',
        stack: 'React · TypeScript · Node.js · Express · MongoDB · Stripe',
        desc: 'End-to-end web application: scalable backend architecture, REST APIs, authentication, business logic, dashboard analytics and payment integration.',
      },
    ],
    skills: [
      { category: 'Frontend', items: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Redux, HTML, CSS, TailwindCSS, Material-UI' },
      { category: 'Backend', items: 'Node.js, Express.js, REST APIs, Event-Driven Architecture, Stripe API' },
      { category: 'AI & Agents', items: 'LangGraph, Multi-Agent Systems (10+), Claude/Anthropic API, Gemini, Groq, RAG, Critic-Agents, HITL Workflows, MCP' },
      { category: 'Data & Pipelines', items: 'MongoDB, MongoDB Vector Search, SQL/Postgres, n8n Workflow Automation, Webhook Design, API Orchestration' },
      { category: 'DevOps & Tools', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, npm/pnpm, Agile/Scrum, Jira' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `I am applying for the Full-Stack Engineer position in your Marketing Solutions team. What drew me in was the focus on autonomous agent workflows, LLM-driven personalization, and shipping AI systems to production within hours — these are exactly the areas I have been building in for the past one and a half years, both during my retraining as a full-stack developer and in my own projects.`,

      `My technical foundation spans the stack you describe: TypeScript, React, Next.js, and Node.js/Express on the web side, with hands-on experience in REST APIs, Postgres/SQL, MongoDB, Docker, and CI/CD. During my internship at Vidinli Software I built production React/TypeScript frontends with component architecture and state management, and in my own Stock Management SaaS I shipped backend, REST API, authentication, database layer, dashboard analytics, and Stripe integration end-to-end.`,

      `The project that likely fits your description most directly is AI Orchestra: a multi-agent system built on LangGraph that orchestrates Claude, Gemini, and Groq for B2B process automation. It uses MongoDB Vector Search as the retrieval layer, n8n as the connective tissue between agents and external APIs (Gmail, Twitter, Instagram, TikTok), and strict Human-in-the-Loop checkpoints with critic agents to prevent hallucinations. The problems you describe — turning messy real-world data into a reliable context layer, closing feedback loops, building observability into agent workflows — are precisely the questions I have been working through in this system. In a related pipeline (VSpots), I built multi-source data ingestion using the Modash API and Groq for scoring, with proper rate-limit handling and error recovery.`,

      `On the data side, I have hands-on Postgres/SQL experience but have not yet shipped with BigQuery, Kafka, or GCP. Given my work with vector databases, pipeline orchestration in n8n, and multi-source ingestion in VSpots, the conceptual gap is small and I am confident I can be productive there within a few weeks. As a small bonus: through several years in the travel industry before my career switch, I bring a genuine sense of how travelers and accommodation providers think — useful context when shipping marketing systems for a metasearch platform.`,

      `My path into engineering was not linear: before retraining as an IT specialist and full-stack developer, I worked in the travel industry and ran my own café and catering business in Bonn. The high-agency, ownership-driven environment you describe — defaulting to action, clarifying ambiguity by shipping, owning systems end-to-end — is exactly the one I am most productive in. I would be glad to discuss how I can contribute to trivago's marketing engine.`,
    ],
  },
};
