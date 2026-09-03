---
title: "IndoBERT clickbait classifier"
slug: indobert-clickbait-classifier
category: speech-nlp
categoryLabel: "Speech & NLP"
org: "Gemastik 2023"
result: "Top 10"
year: "2023"
stack: [IndoBERT, Transformers]
description: "Fine-tuned indobert-base-p1 to classify Indonesian news headlines. Source and training code on GitHub."
hasWriteup: true
writeupUrl: /projects/indobert-clickbait-classifier/
githubUrl: "https://github.com/KronosDP/Clickbait-Classifier-for-Gemastik-2023"
order: 5
---

Clickbait detection sounds like a solved problem in English, where large labeled datasets and off-the-shelf sentiment tools are abundant. Indonesian is a different story: far less labeled data, informal headline conventions that don't map cleanly onto English clickbait patterns, and general-purpose multilingual models that underperform on the nuance of Indonesian phrasing. For Gemastik 2023 (Top 10 finalist), the goal was a classifier that actually understands *Indonesian* headline manipulation tactics, not a translated English heuristic.

## Why IndoBERT over a multilingual model

IndoBERT (`indobert-base-p1`) is pretrained specifically on Indonesian text, which matters more here than it might for a generic classification task: clickbait relies on subtle lexical and structural cues (exaggeration, withheld information, rhetorical questions used as headlines) that are language-specific, not just topic-specific. Starting from a model that already has a strong Indonesian language prior meant fine-tuning could focus its capacity on the classification task itself, instead of also having to learn Indonesian from a comparatively small labeled dataset.

## The pipeline

Built with PyTorch and Hugging Face Transformers:

1. **Data preparation**: cleaning and labeling a corpus of Indonesian news headlines into clickbait / non-clickbait classes.
2. **Tokenization**: IndoBERT's WordPiece tokenizer, handling Indonesian morphology (affixes like `me-`, `ber-`, `-kan` that change a word's surface form without changing its stem).
3. **Fine-tuning**: a classification head on top of the pretrained encoder, trained end-to-end on the labeled headline set.
4. **Evaluation**: F1-score and precision as the primary metrics, since clickbait detection in a real feed cares about both catching manipulative headlines and not over-flagging legitimate ones.

## Code

The full training pipeline and dataset handling are public: **[github.com/KronosDP/Clickbait-Classifier-for-Gemastik-2023](https://github.com/KronosDP/Clickbait-Classifier-for-Gemastik-2023)**.
