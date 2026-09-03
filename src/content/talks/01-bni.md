---
title: "ODP BNI: Officer Development Program"
slug: odp-bni-officer-development-program
eyebrow: "corporate training · BNI"
description: "Trainer for a ~30-person officer development cohort. Delivered a 6-hour session on Day 22 (Retrieval-Augmented Generation & Evaluation) of a 30-working-day Data Analytics, AI & Big Data bootcamp run by Pusilkom UI for BNI University, taking trainees from naive RAG to hybrid search, reranking and RAG-triad evaluation."
tags: ["training", "industry audience", "RAG", "LLM"]
year: "2026"
venue: "Pusilkom UI, for BNI University"
image: /images/talks/bni-odp-group-photo.jpg
gallery:
  - src: /images/talks/bni-odp-group-photo.jpg
    caption: "With the ODP cohort and Pusilkom UI staff after the Day 22 session."
  - src: /images/talks/bni-odp-chunking-session-1.jpg
    caption: "Live in the notebook: why chunking strategy directly controls retrieval precision."
  - src: /images/talks/bni-odp-chunking-session-2.jpg
    caption: "The Goldilocks tradeoff (chunk size vs. overlap), worked through with the cohort."
featured: true
isPlaceholder: false
order: 1
---

BNI's Officer Development Program (ODP) runs new officers through a 30-working-day Data Analytics, AI & Big Data bootcamp before they hit the floor, organised by Pusilkom UI on BNI's behalf. I was brought in for Day 22, which Pusilkom had scoped as the RAG day: a 6-hour block for a ~30-person cohort, most of whom had spent the previous three weeks on statistics, SQL and classical ML, not language models.

## Why RAG, and why this cohort

Officer trainees at a bank are exactly the audience RAG is built for: people who will eventually need an internal assistant to answer questions grounded in policy documents, product terms and compliance rules, where a hallucinated answer is a real liability, not a curiosity. So instead of treating RAG as a NLP-research topic, I framed the whole session around one question a bank actually has to answer: *how do you stop the model from confidently making things up about a product it was never told about?*

## How the day was structured

Six hours is enough time to go past the "chatbot with a vector database" mental model that most naive-RAG tutorials leave people with, so I split the session roughly into:

- **Naive RAG, and where it quietly breaks.** Chunking a document store, embedding it, and doing top-k similarity search is enough to build a demo, but the trainees walked through concrete failure cases first: queries that need information split across chunks, near-duplicate chunks that crowd out the right one, and questions the retriever answers confidently even when nothing relevant was actually indexed.
- **Hybrid search.** Combining dense embedding similarity with sparse lexical retrieval (BM25-style) so exact terms (account types, product codes, regulation numbers) aren't lost to semantic drift, which matters a lot more in banking documents than in general-purpose Q&A.
- **Reranking.** Treating retrieval as a two-stage problem: a cheap, high-recall first pass, then a more expensive cross-encoder reranker over the candidate set before anything reaches the generation step.
- **RAG-triad evaluation.** Rather than eyeballing outputs, evaluating each of the three legs that can independently fail: is the retrieved context relevant to the query, is the answer grounded in that context, and is the answer actually relevant to what was asked, so the cohort had a vocabulary for diagnosing *why* a RAG pipeline gave a bad answer, not just that it did.

## What stuck

The most useful moment of the day, from a trainer's perspective, wasn't a slide; it was watching trainees try to break a retrieval pipeline live with adversarial queries once they understood the failure modes, instead of trusting whatever the demo returned. That's the actual goal of a session like this: not memorising a RAG diagram, but building the instinct to ask "what would make this pipeline lie to me?" before you ship it into a workflow where officers are making real decisions from its answers.
