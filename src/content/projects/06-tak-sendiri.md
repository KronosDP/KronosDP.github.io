---
title: "Tak Sendiri"
slug: tak-sendiri
category: speech-nlp
categoryLabel: "Speech & NLP"
org: "Garuda Hacks 4.0"
result: "Honorable Mention"
year: "2023"
stack: [LLM, NLP]
description: "Conversational agent for early depression screening with a crisis-referral path, built with a counselor's eye, not just an LLM's."
hasWriteup: true
writeupUrl: /projects/tak-sendiri/
order: 6
---

Tak Sendiri ("Not Alone") was built at Garuda Hacks 4.0, where it received an Honorable Mention. The starting premise was narrow on purpose: an LLM chatbot that just "talks about feelings" is not a mental health tool, and pretending otherwise is actually dangerous: it can miss warning signs a trained screener would catch, or worse, respond badly to someone in crisis. So the design brief I set for the team was to build the system around the structure of an actual screening conversation, and use the LLM as the interface layer, not the judgment layer.

## Designing with a counselor's eye

I'm a certified peer counselor and have worked as one at my university's student mental-health service, and that background directly shaped the product decisions here, not just the messaging copy:

- **The conversation follows a screening structure**, not a free-form chat. Rather than letting the LLM improvise, the flow is grounded in the kind of structured questions an early depression screening instrument actually asks, so the system is gathering the same signal a human screener would look for instead of just generating empathetic-sounding text.
- **A crisis-referral path is a first-class feature, not a fallback.** If responses indicate risk that's beyond what a screening chatbot should handle, the system's job shifts from "continue the conversation" to "get this person to a human and a real resource," clearly and without friction.
- **The agent is explicit about what it isn't.** A screening conversation only works if the person trusts it's not overselling itself as therapy or diagnosis; it's a first, lower-barrier step toward getting help, which is also why "crisis referral" has to be a real path and not a disclaimer at the bottom of the screen.

## The technical side

The conversational layer combines an LLM with an NLP pipeline that interprets responses against the screening structure, parsing free-text answers back into the categories the screening logic needs, so the system can track risk signal over the course of the conversation rather than treating each message in isolation.

## Why this one mattered to me

Most hackathon mental-health projects are built by people optimizing for the demo. This one worked backwards from a screening framework I'd actually want a friend to go through, because the team building it included someone who'd sat on the other side of that conversation.
