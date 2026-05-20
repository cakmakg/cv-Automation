# Article Digest — Gökhan Cakmak
# Detailed proof points, project metrics, and narrative anchors.
# This file takes precedence over cv.md for specific project details.

---

## Core Narrative

**Exit story:** I started as an entrepreneur — running a mobile catering business gave me systems thinking, customer focus, and the ability to execute under pressure. When I pivoted to IT and AI, I didn't just study frameworks — I built real systems. My path is unconventional, but that's exactly what makes me effective: I write code to solve real problems, not as an end in itself.

**Signature move:** I combine multi-agent LLM orchestration with n8n automation to build reliable, production-grade AI pipelines — with HITL quality gates to keep hallucinations out.

---

## Project: AI Orchestra

**What:** Multi-agent orchestration system for B2B process automation.

**Tech:** LangGraph, MongoDB Vector Search, n8n, Claude API, Gemini

**Architecture:**
- Multiple autonomous AI agents communicating via defined protocols
- n8n as the "digital nervous system" — bridges agents to external APIs (Gmail, Twitter, Instagram, TikTok)
- RAG layer with MongoDB Vector Search for semantic context retrieval
- HITL checkpoints at critical decision points (content approval, output validation)
- QA-Loops and Critic-Agents to self-check outputs before delivery

**Key proof point:** Built HITL quality gates specifically to prevent hallucinations in automated B2B workflows — zero-tolerance architecture.

**STAR story:**
- **Situation:** B2B automation tasks fail silently when LLMs hallucinate — no one catches it until damage is done
- **Task:** Build a multi-agent system that's reliable enough to run unsupervised B2B workflows
- **Action:** Designed HITL checkpoints + critic-agent layer + RAG grounding to prevent hallucinations
- **Result:** System runs automated B2B workflows with human review only at defined approval gates
- **Reflection:** Reliability > speed in production AI. One hallucination that reaches a client destroys trust.

---

## Project: KI-System für Cyber-Security-Logs (in development)

**What:** AI system for automated analysis and classification of security log data.

**Architecture:**
- Event-driven workflow triggered by log ingestion
- LLM-based classification and anomaly detection
- Zero-tolerance design: precision over recall

**Why it matters:** Shows ability to apply AI in high-stakes, precision-critical domains. Not just automation — verifiable correctness.

---

## Project: VSpots — Influencer Research Automation

**What:** Automated influencer research pipeline for marketing teams.

**Tech:** n8n, Modash API, Groq LLM

**Architecture:**
- n8n workflow handles API polling, data normalization, and routing
- Modash API provides influencer discovery and analytics data
- Groq LLM scores and evaluates influencers based on defined criteria
- End-to-end: raw data in → scored, ranked report out

**Key proof point:** Real API integration at production level — rate limit handling, error recovery, data validation all built in.

---

## Project: Full-Stack SaaS — Stock Management Platform

**What:** Production SaaS application for inventory management.

**Tech:** Node.js, React.js, MongoDB, Stripe API

**Key proof point:** Full ownership — backend architecture, authentication, business logic, frontend UX, payment integration. Shipped end-to-end.

---

## Anschreiben-Kernbotschaft (Bewerbung Vorlage)

*Diese Narrative für Motivationsschreiben und Interview-Vorbereitung verwenden:*

**Opening hook (aus Octonomy-Bewerbung, anpassbar):**
> "Sie bauen autonome AI-Worker, die Prozesse zuverlässig und frei von Halluzinationen automatisieren. Genau diese Vision teile ich: Als Entwickler mit tiefem Fokus auf AI-Architekturen baue ich selbst solche Systeme und weiß aus der Praxis, was es braucht, damit sie produktiv und stabil laufen."

**Entrepreneur differentiator:**
> "Mein Weg in die IT ist nicht der klassische. Bevor ich Entwickler wurde, habe ich ein eigenes Café- und Catering-Unternehmen geführt. Diese Zeit prägt mich bis heute: Ich schreibe Code nicht zum Selbstzweck, sondern um echte Probleme zu lösen. Ich denke extrem kundenorientiert und weiß, dass gute Software vor allem im echten Leben funktionieren muss."

**Technical depth signal:**
> "In meinem Projekt AI Orchestra habe ich ein System aus mehreren autonomen KIs zur Automatisierung von B2B-Prozessen gebaut (LangGraph, MongoDB Vector Search). Um Halluzinationen zu vermeiden, sichere ich die Qualität durch strikte Human-in-the-Loop-Prozesse ab."

---

## Competitive Advantage Summary

| Vorteil | Beweis |
|---------|--------|
| Multi-agent systems in production | AI Orchestra: LangGraph + HITL + Critic-Agents |
| n8n expert | VSpots + AI Orchestra: real API integrations |
| Hallucination prevention | Explicit HITL architecture in every agent system |
| Full-stack shipping | SaaS Stock Management: frontend to backend to DB |
| Entrepreneur mindset | 3 Jahre Selbstständigkeit: execution under pressure |
| DACH market ready | Deutsch fließend, Bonn-based, DACH-Netzwerk |
