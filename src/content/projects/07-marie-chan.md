---
title: "Marie Chan"
slug: marie-chan
category: backend-platform
categoryLabel: "Backend & platform"
org: "Intergalactic Science Kingdom"
year: "2026"
stack: [Go, Django, OpenRouter]
description: "Go + Django backends behind an interactive AI system, with OpenRouter multi-model routing and speech synthesis."
hasWriteup: true
writeupUrl: /projects/marie-chan/
order: 7
---

Marie Chan is an interactive AI system I architected as a volunteer AI & Backend Engineer for Intergalactic Science Kingdom, combining two backends that don't usually sit in the same project on purpose: Go for what needs to be fast and predictable, Django for everything else.

## Why two backends instead of one

Splitting Go and Django wasn't incidental: each is doing the job it's actually good at:

- **Go** handles the real-time API surface, where consistent low-latency response matters most (the parts of the system a user is actively interacting with live).
- **Django** carries the broader application logic, where Python's ecosystem, and the speed of iterating on business logic in a batteries-included framework, matters more than raw request latency.

That split lets each service scale and evolve independently instead of forcing one runtime to compromise on both fronts at once.

## Multi-model orchestration via OpenRouter

Marie Chan doesn't hard-wire itself to a single LLM provider. Integrating OpenRouter gives the system dynamic routing across multiple models, which in practice means being able to pick a model per request based on cost, latency or capability rather than being locked into whichever provider was chosen at project start, plus deliberate management of context windows so conversations stay coherent without blowing past a model's limits. The system also includes a speech synthesis pipeline, giving the AI a voice output path rather than text-only interaction.

## Building it with the process, not just the code

This was also a deliberate exercise in engineering discipline for an AI-heavy project: the team applied Behavior-Driven Development and Test-Driven Development to guide and validate a workflow that leaned on agentic AI tooling during development. That combination matters specifically *because* the system is AI-heavy: agentic tooling can move fast in the wrong direction just as easily as the right one, and BDD/TDD gave the team a way to keep the system's behavior specified and checked rather than trusting output that merely looked plausible.
