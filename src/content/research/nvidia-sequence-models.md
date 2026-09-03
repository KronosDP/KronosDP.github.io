---
title: "NVIDIA AI Research Intern"
question: "Can linear-attention RNNs recognise formal regular languages?"
slug: sequence-model-capacity-regular-languages
org: "NVIDIA · AI Research Intern · Jan-Jun 2025"
role: "Sole researcher on this workstream"
dateRange: "Jan-Jun 2025"
duration: "6 months, remote"
modelsCompared: ["RWKV-v4", "RWKV-v7", "Transformer", "LSTM", "GRU"]
stack: ["PyTorch", "CUDA C++", "Python"]
summary: >
  Attention-free recurrent models like RWKV promise linear-time inference. The
  open question is capacity: does the compressed recurrent state actually
  retain what a Transformer's full attention window retains? I built a
  controlled setting where the answer is checkable rather than vibes-based.
figureCaption: "Fig. 1: per-language-class comparison across RWKV-v7, Transformer, LSTM and GRU."
image: /images/research/rwkv-l1-l4-comparison.png
benchmarkIntro: >
  Four synthetic regular languages, chosen so each isolates a different
  failure mode rather than blending them:
languages:
  - code: L1
    description: "Parity counting, requiring an unbounded modular counter in state."
  - code: L2
    description: "Substring matching, requiring positional recall over long spans."
  - code: L3
    description: "Language union, requiring tracking two hypotheses at once."
  - code: L4
    description: "Composed constraints: the combination, as an upper-bound check."
hardNegativesIntro: >
  Random negatives are too easy: a model can pass by learning surface
  statistics. Every negative in the suite is a perturbation of a positive at
  edit distance 1-3, so a correct answer requires the decision boundary to
  sit exactly on the language, not near it.
hardNegativeExamples:
  - verdict: accept
    sequence: "a b a b a b"
    note: "positive"
  - verdict: reject
    sequence: "a b a b a a"
    note: "edit distance 1"
  - verdict: reject
    sequence: "a b b b a b"
    note: "edit distance 1, different position"
cudaIntro: >
  RWKV's WKV state transition is sequential, so the naive PyTorch
  implementation launches a kernel per timestep and dominates training time.
  I wrote wkv_kernel.cu as a custom C++/CUDA extension with a fused forward
  and backward pass, which made sweeps over sequence length and model size
  affordable enough to run the full architecture grid.
resultsNote: >
  Quantitative results from this internship are not published. The setup,
  benchmark design and kernel are described here in full; I'm happy to walk
  through findings and their limitations in conversation.
prevProjectSlug: multimodal-emotion-detection
nextProjectSlug: speaker-verification-distilled
order: 1
---
