/**
 * repo-meta.mjs — GitHub repo descriptions, topics and homepage URLs for github.com/cakmakg
 *
 * Written 2026-07-22 after inspecting every repo's README and file tree via the GitHub API.
 * Descriptions are in English (GitHub convention, readable for DACH and international recruiters).
 *
 * `confidence: 'low'` marks repos whose purpose could not be verified from a real README
 * (boilerplate or missing) — check these before applying.
 *
 * Apply with:  node github/apply-repo-meta.mjs           (dry run)
 *              node github/apply-repo-meta.mjs --apply   (writes to GitHub)
 */

// ─── Tier 1: real projects (recruiter-facing) ────────────────────────────────

export const FLAGSHIP = [
  {
    repo: 'AI-Matrix-Agent',
    description: 'Multi-agent AI orchestration platform — hub-and-spoke agent swarm with n8n workflows, HITL approval gates and admin panel',
    topics: ['ai-agents', 'multi-agent-systems', 'llm', 'n8n', 'orchestration', 'nodejs', 'typescript', 'human-in-the-loop'],
    note: 'This is the CV project "AI Orchestra". Has NO README at all — biggest single gap on the profile.',
  },
  {
    repo: 'agentic-starter',
    description: 'Reusable starter scaffold for agentic systems — hub-and-spoke orchestrator, critic loop, HITL and SSE in ~20 files, runs without an API key',
    topics: ['ai-agents', 'llm', 'anthropic', 'starter-template', 'orchestration', 'human-in-the-loop', 'nodejs'],
  },
  {
    repo: 'travelsync-backend',
    description: 'B2B hotel automation platform — reservation engine, AI dynamic pricing and agency contract management (Node.js, Express, MongoDB, Redis)',
    topics: ['saas', 'b2b', 'hotel-management', 'dynamic-pricing', 'nodejs', 'express', 'mongodb', 'rest-api'],
    homepage: 'https://travelsync-backend.vercel.app/',
  },
  {
    repo: 'TravelAgency',
    description: 'RussoLux Tours — production travel agency platform for business and cultural trips to Russia (Next.js 16, TypeScript, MongoDB, i18n)',
    topics: ['nextjs', 'typescript', 'mongodb', 'travel', 'i18n', 'fullstack', 'tailwindcss'],
    homepage: 'https://www.russoluxtours.de',
    note: 'Repo name is generic while the product is "RussoLux Tours" — rename candidate.',
  },
  {
    repo: 'ShopApp',
    description: 'Shophub — multi-tenant SaaS e-commerce platform with industry-specific storefront blueprints (Next.js 16, Prisma, Tailwind)',
    topics: ['saas', 'multi-tenant', 'ecommerce', 'nextjs', 'prisma', 'typescript', 'tailwindcss'],
  },
  {
    repo: 'WCFinder',
    description: 'Find, book and pay for public and private restrooms — web app plus React Native mobile client with Stripe/PayPal payments',
    topics: ['react', 'react-native', 'expo', 'nodejs', 'mongodb', 'stripe', 'paypal', 'fullstack'],
    homepage: 'https://wc-finder-wheat.vercel.app',
  },
  {
    repo: 'restructure-work',
    description: 'RAG chat assistant over your own PDFs — MongoDB Atlas Vector Search, local embeddings and streaming answers (MERN, Groq Llama 3)',
    topics: ['rag', 'vector-search', 'mongodb-atlas', 'llm', 'embeddings', 'mern', 'react', 'nodejs'],
    note: 'Repo name says nothing about the project — strong rename candidate (e.g. rag-pdf-chat).',
  },
  {
    repo: 'reisegesucht-website',
    description: 'German travel portal — Next.js 16 App Router with MVC service layer, JWT auth (argon2) and affiliate search widgets',
    topics: ['nextjs', 'typescript', 'mongodb', 'jwt', 'travel', 'tailwindcss', 'app-router'],
  },
  {
    repo: 'FS-StockApp',
    description: 'Stock management full-stack app — Node.js/Express REST API with Swagger docs and JWT auth plus a React client',
    topics: ['nodejs', 'express', 'mongodb', 'react', 'rest-api', 'swagger', 'jwt', 'fullstack'],
  },
  {
    repo: 'marketing-tool',
    description: 'AI marketing content tool — Next.js and Prisma with Google Gemini for generation, containerised with Docker',
    topics: ['ai', 'nextjs', 'prisma', 'gemini', 'typescript', 'docker', 'marketing'],
    confidence: 'low',
    note: 'README is untouched create-next-app boilerplate; description inferred from Prisma + Gemini files. Verify.',
  },
  {
    repo: 'ai-agent-backend',
    description: 'Node.js backend for an AI agent chat application — Express REST API',
    topics: ['ai', 'nodejs', 'express', 'rest-api', 'llm'],
    confidence: 'low',
    note: 'No README. Description is a safe guess from the file tree — verify and expand.',
  },
  {
    repo: 'ai-agent-frontend',
    description: 'React and TypeScript frontend for the AI agent chat application (Vite, Tailwind CSS)',
    topics: ['react', 'typescript', 'vite', 'tailwindcss', 'ai'],
    confidence: 'low',
    note: 'README is Vite boilerplate. Verify it pairs with ai-agent-backend.',
  },
  {
    repo: 'Flex-Portfoilo-page',
    description: 'Personal portfolio page built with React and Vite',
    topics: ['react', 'vite', 'portfolio', 'frontend'],
    note: 'Repo name has a typo: Portfoilo → Portfolio.',
  },
];

// ─── Tier 2: bootcamp and practice repos (honest labels) ─────────────────────

export const PRACTICE = [
  { repo: '20-PersonnelApi',   description: 'Personnel and department REST API with role-based access control (Node.js, Express, MVC) — bootcamp project', topics: ['nodejs', 'express', 'rest-api', 'mongodb', 'bootcamp'] },
  { repo: '26-StockApi',       description: 'Stock management REST API with Swagger documentation (Node.js, Express, MongoDB) — bootcamp project', topics: ['nodejs', 'express', 'rest-api', 'swagger', 'bootcamp'] },
  { repo: 'Capstone-BlogApi',  description: 'Blog API capstone project with Swagger and Postman documentation (Node.js, Express) — Clarusway capstone', topics: ['nodejs', 'express', 'rest-api', 'capstone', 'bootcamp'] },
  { repo: 'flightAPI',         description: 'Flight reservation REST API (Node.js, Express, MongoDB, Swagger) — bootcamp project', topics: ['nodejs', 'express', 'rest-api', 'mongodb', 'bootcamp'] },
  { repo: 'PizzaAPI',          description: 'Pizza ordering REST API (Node.js, Express, MongoDB) — bootcamp project', topics: ['nodejs', 'express', 'rest-api', 'bootcamp'] },
  { repo: 'FS-TodoApp',        description: 'Full-stack todo application — bootcamp project', topics: ['react', 'nodejs', 'fullstack', 'bootcamp'] },
  { repo: '29-BlogApp_Template', description: 'Blog app frontend template built with React — bootcamp project', topics: ['react', 'frontend', 'bootcamp'] },
  { repo: '03-netflix',        description: 'Netflix clone UI built with Next.js and Tailwind CSS — practice project', topics: ['nextjs', 'react', 'tailwindcss', 'clone', 'practice'] },
  { repo: 'ShoppingCard',      description: 'Shopping cart app built with React — Clarusway bootcamp project', topics: ['react', 'frontend', 'bootcamp'] },
  { repo: 'WeatherApp',        description: 'Weather app in vanilla JavaScript consuming a public weather API — practice project', topics: ['javascript', 'api', 'practice'] },
  { repo: 'travel-agency',     description: 'Travel agency landing page built with Next.js — practice project', topics: ['nextjs', 'react', 'landing-page', 'practice'] },
  { repo: 'my-app',            description: 'Next.js practice project', topics: ['nextjs', 'react', 'practice'] },
  { repo: 'Styled-Component',  description: 'Styled-Components practice with React', topics: ['react', 'styled-components', 'css-in-js', 'practice'] },
  { repo: 'nodeJS',            description: 'Node.js exercises and notes from the bootcamp', topics: ['nodejs', 'learning', 'bootcamp'] },
  { repo: 'JavaScript',        description: 'JavaScript exercises and notes from the bootcamp', topics: ['javascript', 'learning', 'bootcamp'] },
  { repo: 'React',             description: 'React exercises and notes from the bootcamp', topics: ['react', 'learning', 'bootcamp'] },
  { repo: 'my-first-app',      description: 'First React app — learning project', topics: ['react', 'learning'] },
  { repo: 'Boostrap-Web-Page', description: 'Responsive web page built with Bootstrap — practice project', topics: ['bootstrap', 'html', 'css', 'practice'], note: 'Typo: Boostrap → Bootstrap.' },
  { repo: 'Calculato',         description: 'Calculator built with HTML, CSS and JavaScript — practice project', topics: ['javascript', 'html', 'css', 'practice'], note: 'Typo: Calculato → Calculator.' },
  { repo: 'Home',              description: 'HTML and CSS landing page — practice project', topics: ['html', 'css', 'practice'] },
  { repo: 'Animation-Game',    description: 'Browser game built with CSS animations — practice project', topics: ['css', 'animation', 'game', 'practice'] },
  { repo: 'Prallax-Wenseite',  description: 'Parallax scrolling webpage — practice project', topics: ['html', 'css', 'parallax', 'practice'], note: 'Typo: Prallax-Wenseite → Parallax-Webseite.' },
  { repo: 'google.landing-page', description: 'Google homepage clone built with HTML and CSS — practice project', topics: ['html', 'css', 'clone', 'practice'] },
  { repo: 'survay-form',       description: 'Survey form built with HTML and CSS — practice project', topics: ['html', 'css', 'forms', 'practice'], note: 'Typo: survay → survey.' },
  { repo: 'setanlee_project-html-css', description: 'HTML and CSS layout practice project', topics: ['html', 'css', 'practice'] },
  { repo: 'pokemon',           description: 'Pokemon card layout built with CSS — practice project', topics: ['css', 'html', 'practice'] },
];

// ─── Repos needing a decision, not just a description ────────────────────────

export const NEEDS_DECISION = [
  {
    repo: 'travelsync-frontend',
    issue: 'Empty repo — contains only a one-line README.md, no code. travelsync-backend already ships a /frontend folder.',
    options: ['delete the repo', 'push the actual frontend here and split it from the backend'],
  },
  {
    repo: 'cakmakg',
    issue: 'This is the GitHub profile README repo and it has no README — so the profile page shows no intro at all.',
    options: ['add a profile README with a short intro, the 4 flagship projects and contact links'],
  },
];

export const ALL = [...FLAGSHIP, ...PRACTICE];
