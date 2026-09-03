---
title: "Multimodal emotion & journaling system"
slug: multimodal-emotion-detection
category: speech-nlp
categoryLabel: "Speech & NLP"
org: "Satria Data 2025"
year: "2025"
stack: [BERT, Whisper, Multimodal]
description: "Video (ViT-B16 + LSTM), audio (CNN + GRU) and Whisper-transcribed text (IndoBERT) proposed for 8-class multilabel emotion detection. Text-only ablation (the only modality with reported numbers) reaches 0.6975 micro-F1 / 0.2740 macro-F1."
hasWriteup: true
writeupUrl: /projects/multimodal-emotion-detection/
figureCaption: "fusion architecture diagram"
image: /images/projects/emotion-fusion-diagram.svg
order: 3
---

Satria Data is BPS's (Indonesia's national statistics agency) national data science competition, and the 2025 track we entered was built around a genuinely hard framing problem: journaling apps ask people to reflect on their day, but text alone misses a lot of what someone is actually feeling: tone of voice, hesitation, facial expression. We proposed a multimodal system that reads emotion the way a person would notice it in a video journal entry: from what's said, how it's said, and how it looks being said.

## The three-modality architecture

The proposal fused three independent encoders, each matched to what its input modality actually carries:

- **Video**: a ViT-B16 backbone extracting per-frame visual features, fed into an LSTM to model how expression changes over the course of the entry rather than treating it as a single still image.
- **Audio**: a CNN+GRU stack over the raw waveform, targeting prosodic cues (pitch, pace, energy) that text transcription throws away entirely.
- **Text**: Whisper transcribes the spoken journal entry, and the resulting text is classified by IndoBERT, giving the system a semantic read on top of the acoustic and visual ones.

The target task itself is deliberately hard: 8-class **multilabel** emotion classification, meaning an entry can carry more than one emotion at once (e.g. relief and exhaustion together) rather than being forced into a single label, a much more honest model of how people actually feel than single-label sentiment classification.

## What we actually measured, and what we didn't

Of the three modalities, only the text branch has reported numbers: the IndoBERT text-only ablation reached **0.6975 micro-F1 / 0.2740 macro-F1**. The gap between those two numbers is itself informative: micro-F1 is pulled up by the more frequent emotion classes, while macro-F1 (which weights every class equally) exposes that the model struggles much more on rarer emotions, exactly the classes where multilabel, multimodal signal should matter most. The full video+audio+text fusion was the proposed architecture for the competition submission; the video and audio branches and the fusion layer itself were not carried through to a reported evaluation, so I'm not going to claim results for them here that we don't have. If you want to talk through the fusion strategy we designed for combining the three encoders, or why the macro-F1 gap shows up, I'm glad to go into it.
