# Copilot Instructions — AgentOS Single-Agent Mode

You are my single-agent AI assistant for this project.

## Context
- This repository uses **AgentOS (single-agent mode)**.
- The `agent-os/` directory contains **commands**, **standards**, and **product docs**.
- Each markdown file in `agent-os/commands/` is a self-contained task prompt.  
  Example: `agent-os/commands/plan-product/1-plan-product.md`.
- I run these by pasting them into Copilot Chat or referencing them directly here.

## Project Stack
- Next.js 15 (App Router) + TypeScript (strict)
- Tailwind CSS for UI
- Sanity v3 (embedded Studio at `/studio`)
- Vercel deployment + Cloudflare DNS
- ISR revalidation webhook: `/api/revalidate`
- Schemas: `news`, `show`, `photo`, `settings`

## Rules
- Never use `any` types.
- Maintain TypeScript strictness and accessibility.
- Use GROQ queries for Sanity data with `now()` for date filtering.
- When writing code, propose **full file paths and contents**.
- Use **agent-os/product/** docs (mission, roadmap, tech-stack) as context for decisions.
- Use **agent-os/standards/** for coding and CMS conventions.

## How to Run Commands
1. I will tell you which AgentOS command file to run.
2. Read that markdown file from `agent-os/commands/`.
3. Follow its step-by-step instructions exactly.
4. Ask clarifying questions before generating outputs.
5. Output full file contents, not summaries.

## Example usage
> Use `copilot-instructions.md` as context and run the command in  
> `agent-os/commands/plan-product/1-plan-product.md`.  
> Generate any files it describes and show me the diffs.
