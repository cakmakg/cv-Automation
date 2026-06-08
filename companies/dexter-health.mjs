// dexter health GmbH — AI Engineer (LLM Products), Remote (Köln). Healthcare-AI for care teams.
// English application (English = must-have, German = nice-to-have).
// TECH-Profil (AI Engineer, AI-tool-native) → Anschreiben aus bewerbung.md (AI Engineer).
// STRONG FIT: must-have "serious experience with AI dev tools (Claude Code...)" + eval/validation of AI outputs = Critic-Agents/HITL.
// Run: node generate-bewerbung.mjs companies/dexter-health.mjs

export default {
  slug: 'dexter-health',
  date: '02.06.2026',
  language: 'en',

  recipient: [
    'dexter health GmbH',
    'Bonner Wall 126',
    '50677 Köln',
  ],

  subject: 'Application: AI Engineer – LLM Products',

  cv: {
    tagline: 'AI Engineer · LLM Products · Claude Code · Python · TypeScript',
    competencies: [
      'AI Dev Tools · Claude Code',
      'LLM Workflows · Structured Output',
      'Evaluation · Critic-Agents · HITL',
      'Python · FastAPI',
      'TypeScript · Node.js',
      'LangGraph · Multi-Agent',
      'RAG · Vector Search',
      'AWS · Docker · CI/CD',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent LLM System',
        stack: 'LangGraph · Claude · Gemini · OpenAI · Groq · MongoDB',
        desc: 'Provider-agnostic orchestration of multiple LLMs. Critic agents and human-in-the-loop checkpoints validate model outputs before they take effect; RAG retrieval over a vector store; n8n connects agents to external APIs.',
      },
      {
        title: 'Autonomous SecOps Agent — Production AI Pipeline',
        stack: 'LangGraph · Next.js 14 · AWS SageMaker/WAF · WebSocket/SSE',
        desc: 'End-to-end AI feature integrated into a production system: structured outputs and a QA-critic stage keep it reliable, with a real-time Next.js frontend, RBAC and clean API integration to AWS services.',
      },
      {
        title: 'werbung-otomation — Multi-Tenant AI Product',
        stack: 'Anthropic Managed Agents · React · FastAPI · fal.ai',
        desc: 'Multi-tenant pipeline of specialized agents with a policy/compliance and QA stage; React frontend, FastAPI backend, clean integration of external generation APIs — shipped from concept to production.',
      },
    ],
    skills: [
      { category: 'AI & LLM', items: 'Claude Code, Cursor, Codex, LangGraph, Multi-Agent Systems, Claude/Anthropic, Gemini, OpenAI, Groq, RAG, Critic-Agents, HITL, eval loops, MCP' },
      { category: 'Backend', items: 'Python (FastAPI), Node.js, Express, REST APIs, Event-Driven Architecture, structured outputs & validation' },
      { category: 'Frontend', items: 'React.js, Next.js 14, TypeScript, JavaScript (ES6+), TailwindCSS' },
      { category: 'Data & Cloud', items: 'MongoDB, PostgreSQL, MongoDB Vector Search, ChromaDB, AWS (Bedrock/SageMaker/WAF), Docker, Git, CI/CD' },
      { category: 'Quality', items: 'Evaluation & testing of AI outputs, validation/fallback logic, debugging across inputs/outputs/data, automated tests' },
    ],
  },

  anschreiben: {
    anrede: 'Dear Hiring Team,',
    paragraphs: [
      // Block 1 — why dexter
      `I am applying for the AI Engineer (LLM Products) position. Your framing resonated with me immediately: not research, not prompt-only, but turning ambiguous product ideas into production-ready AI features — and using AI development tools every day to do it. That is exactly how I have been working for the past one and a half years.`,

      // Block 2 — AI dev tools + LLM workflows (must-haves)
      `Claude Code is a core part of my daily workflow: I give ideas to AI agents, iterate on the output, and review it critically rather than accepting it blindly. On the engineering side I work in Python (FastAPI) and TypeScript/Node.js, and I design LLM-based workflows with structured outputs, validation logic, and fallback behavior — deliberately staying provider-agnostic across Claude, Gemini, OpenAI, and Groq rather than tying myself to one vendor.`,

      // Block 3 — showcase: eval loops + production + critic
      `The part you describe — building evaluation loops and quality checks for AI-generated outputs — is exactly what I have built into my own systems. In AI Orchestra, critic agents and human-in-the-loop checkpoints validate model outputs before they take effect; in Autonomous SecOps Agent, a QA-critic stage and structured outputs keep a production pipeline reliable, integrated end-to-end with a Next.js frontend and AWS services. I am comfortable debugging AI feature failures across inputs, outputs, data, and backend logic, because that is where most of the real work happens.`,

      // Block 4 — value prop + healthcare/data protection
      `I would bring this directly to dexter: shipping AI product features from idea to production, improving existing workflows for quality, reliability, and latency, and keeping production quality high while moving fast. I also take data protection seriously — in one system I implemented GDPR-compliant PII masking before any LLM call — which feels relevant when building software around care teams and patient data. Your mission of giving caregivers more time with patients is one I would genuinely enjoy contributing to.`,

      // Block 5 — ownership / founder-like
      `Before retraining as an IT specialist and full-stack developer, I ran my own café and catering business in Bonn. That gave me a founder-like sense of ownership and urgency: figuring things out under ambiguity, making decisions, and caring about outcomes more than titles — the mindset you describe.`,
    ],
  },
};
