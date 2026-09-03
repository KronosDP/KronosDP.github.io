---
title: "Speaker verification, distilled for deployment"
slug: speaker-verification-distilled
category: speech-nlp
categoryLabel: "Speech & NLP"
org: "Meeting.ai"
year: "2025"
stack: [ASR, Distillation, Active learning]
description: "Knowledge distillation to cut the parameter footprint while holding accuracy, an ASR harness at 10+ concurrent live sessions to find latency bottlenecks, and a user-in-the-loop step that resolves clustering ambiguity as it runs."
hasWriteup: true
writeupUrl: /projects/speaker-verification-distilled/
featured: true
figureCaption: "Meeting.ai: AI work assistant"
image: /images/projects/meeting-ai-embed.jpg
order: 2
---

Meeting.ai runs live speech products (transcription and speaker identification during real meetings), which means every model in the pipeline is on the clock twice: it has to be accurate, and it has to return an answer before the conversation has moved on. As an AI Engineer Intern there, I worked on three connected problems inside the speech pipeline: how fast the ASR stack holds up under real concurrency, how small the speaker verification model can get before it stops being useful, and how the system recovers when it isn't sure who's speaking.

## Finding out where ASR actually breaks

Every ASR benchmark you'll find online is single-stream: one audio file in, one transcript out, measured in isolation. That number is close to useless for a product where 10+ meetings can be transcribing simultaneously on the same infrastructure. I built a stress-testing harness that ran many concurrent live sessions against the pipeline and instrumented it end-to-end, so instead of a single latency number we had a per-stage breakdown: where queuing happened, which stage's latency grew non-linearly with concurrency, and at what session count the pipeline stopped meeting its real-time budget. That's the difference between "the model is fast" and "the *system* is fast," and only the second one matters once it's shipped.

## Shrinking the speaker verification model

The speaker verification model has to run inline in a real-time pipeline, so its size is a direct cost, both in latency and in how many concurrent sessions a given GPU can serve. I applied knowledge distillation to compress it: training a smaller student model to match a larger teacher's behavior rather than training from scratch on labels alone, which recovers accuracy the student wouldn't reach on its own. The result was a meaningfully smaller parameter footprint with accuracy held close to the original and noticeably faster inference: the exact trade a production speech pipeline needs, since a marginal accuracy loss is usually acceptable if it buys back latency headroom for concurrency.

## When the model isn't sure, ask instead of guess

Speaker verification in practice isn't just "is this voice A or B"; it clusters speakers over the course of a meeting, and clustering has an honest failure mode: two speakers who sound similar, or one speaker whose voice shifts partway through a call, produce ambiguous cluster assignments. Rather than let the system commit silently to a possibly-wrong guess, I architected an active-learning step: a user-in-the-loop correction mechanism that surfaces the ambiguous cases and folds the correction back into the pipeline, so the system's accuracy compounds from real usage instead of staying frozen at whatever the training set happened to cover.

## What I can't share here

Meeting.ai's specific latency figures, model architectures and infrastructure details are proprietary, so this write-up describes the problems and the methods rather than the numbers. I'm happy to go into more depth on any of it in conversation.
