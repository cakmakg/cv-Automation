// InnoCraft (Matomo) — Full Stack Engineer, Innovation Team
// 100% Remote Germany, English application, Python/JS + AI-powered analytics focus
// Run: node generate-bewerbung.mjs companies/innocraft.mjs

export default {
  slug: 'innocraft',
  date: '01.06.2026',
  language: 'en',

  recipient: [
    'InnoCraft Ltd. (trading as Matomo)',
    'Innovation Team — Hiring',
    '(100% Remote, Germany)',
  ],

  subject: 'Application: Full Stack Engineer — Innovation Team (Remote Germany)',

  cv: {
    tagline: 'Full-Stack Engineer · Python · TypeScript · AI Innovation Systems',
    competencies: [
      'Python · FastAPI',
      'TypeScript · JavaScript',
      'Node.js · Express',
      'React.js · Next.js',
      'LangGraph · Multi-Agent',
      'MongoDB · Vector RAG',
      'AWS · MCP · Anthropic',
      'Docker · Git · CI/CD',
    ],
    projects: [
      {
        title: 'AI Orchestra — Multi-Agent B2B Automation System',
        stack: 'LangGraph · Claude · Gemini · OpenAI · MongoDB Vector Search · n8n',
        desc: 'Multi-agent orchestration across Gmail, Twitter, Instagram, TikTok. RAG retrieval over a vector store; critic agents and Human-in-the-Loop checkpoints prevent hallucinations in production.',
      },
      {
        title: 'Autonomous SecOps Agent — AI Security Command Center',
        stack: 'LangGraph · AWS SageMaker RCF · AWS WAF · MCP · Next.js 14',
        desc: 'Six-node LangGraph pipeline with anomaly scoring on logs and WAF auto-mitigation under HITL approval. Multi-tenant RBAC, AES-256-GCM secrets, real-time React Flow agent graph with WebSocket/SSE.',
      },
      {
        title: 'Otonom-Travelagency — Fully Autonomous AI Travel Agency',
        stack: 'LangGraph · Amadeus · Hotelbeds · Stripe · ChromaDB · TS+Python monorepo',
        desc: 'Eight-node LangGraph flow with HITL gate on bookings and GDPR PII masking before every LLM call. Next.js frontend over a TypeScript gateway and Python FastAPI agent service.',
      },
    ],
    skills: [
      { category: 'Backend', items: 'Python (FastAPI 3.11+), Node.js, Express.js, REST APIs, Event-Driven Architecture' },
      { category: 'Frontend', items: 'JavaScript (ES6+), TypeScript, React.js, Next.js 14, Redux, Zustand, TailwindCSS' },
      { category: 'AI & Agents', items: 'LangGraph, Multi-Agent Systems, Anthropic Managed Agents, Claude/Gemini/OpenAI, RAG, HITL, MCP' },
      { category: 'Data & Cloud', items: 'MongoDB, MongoDB Vector Search, ChromaDB, SQL/Postgres, AWS Bedrock/SageMaker/WAF, n8n' },
      { category: 'DevOps & Security', items: 'Docker, Git/GitHub, CI/CD, Linux, Playwright, AES-256-GCM, GDPR PII masking, Multi-tenant RBAC' },
    ],
  },

  anschreiben: {
    paragraphs: [
      `I am applying for the Full Stack Engineer position on Matomo's Innovation Team. What drew me in is the specific shape of the work — privacy-first, open-source analytics, rapid prototyping, and turning AI-powered concepts into features that actually ship into the core product. That is exactly the kind of work I have spent the past year and a half on: building AI and automation systems end-to-end, from concept and prototype through deployment, in small autonomous setups where the engineer owns the full path.`,

      `My backend foundation is Python (FastAPI 3.11+) and Node.js/Express, with TypeScript, React, and Next.js on the frontend. The job description lists PHP or Python on the backend, JavaScript on the frontend, plus Python and Node where needed — that is essentially my stack today, with one honest gap: I have not yet shipped a PHP codebase in production. Given my Python and Node depth, and how quickly I have picked up new ecosystems on the fly (FastAPI, n8n, MCP, fal.ai, AWS SageMaker), I expect a few weeks to be productive in PHP while contributing immediately on the Python and JavaScript side.`,

      `The project that most directly maps to your description is AI Orchestra: a LangGraph multi-agent system that orchestrates Claude, Gemini, and OpenAI across Gmail, Twitter, Instagram, and TikTok. MongoDB Vector Search acts as the retrieval layer, n8n connects the agents to external APIs, and strict HITL checkpoints with critic agents keep the system from hallucinating in production. The Autonomous SecOps Agent runs a six-node LangGraph pipeline on AWS SageMaker RCF for anomaly scoring, with WAF auto-mitigation through HITL approval, multi-tenant RBAC under AES-256-GCM, and a real-time React Flow agent graph in Next.js 14. Otonom-Travelagency wraps Amadeus, Hotelbeds, Stripe, and Twilio behind a LangGraph flow with GDPR PII masking before every LLM call. Each was a small, fast build with the same pattern Matomo seems to value: ship a real prototype, validate it end-to-end, then harden it.`,

      `Two pieces that matter for an open-source analytics product. Privacy and compliance are not late additions in my work — Otonom-Travelagency masks PII (email, IBAN, credit card, passport) before any LLM call, and werbung-otomation enforces ad-content rules through a YAML policy engine with per-tenant overrides. AI-powered tooling is part of my daily workflow rather than something I read about: Anthropic Managed Agents, the Model Context Protocol, multi-LLM orchestration, and Claude as a working partner on the code itself. I treat these as accelerators for experimentation and delivery, which is exactly the angle the role describes.`,

      `My path into engineering was not linear: before retraining as a Fachinformatiker and full-stack developer, I worked in tourism and ran my own mobile coffee bar and catering business in Bonn. The ownership-driven, small-team setup you describe — defaulting to action, balancing speed with sustainable quality, escalating only when needed — is the environment I am most productive in. I am based in Bonn, work remotely already, and I am fluent in German.`,
    ],
  },
};
