---
title: "Compfest"
slug: compfest-18-academy-ensemble-learning-xai
eyebrow: "tech festival · Compfest"
description: "Speaker at Indonesia's largest student-run tech festival. Delivered 'Ensemble Learning & Explainable AI' for the COMPFEST 18 Academy track, a 2-hour Zoom lecture on bagging, boosting and stacking through to SHAP and LIME, for CS students."
tags: ["talk", "student audience", "XAI", "ensemble learning"]
year: "2026"
venue: "COMPFEST 18 Academy (Zoom)"
slidesUrl: "/files/talk-ensemble-xai-compfest.pdf"
relatedWriteupUrl: /teaching/2026-08-18-ensemble-learning-and-explainable-ai/
relatedWriteupLabel: "Full lecture notes: Ensemble Learning & XAI"
image: /images/talks/compfest.jpg
gallery:
  - src: /images/talks/compfest.jpg
    caption: "Opening slide of the COMPFEST 18 Academy session, live on Zoom."
  - src: /images/talks/compfest-zoom-cohort-1.jpg
    caption: "Live on Zoom with the COMPFEST 18 Academy committee and mentee cohort."
  - src: /images/talks/compfest-zoom-cohort-2.jpg
    caption: "The full call (committee, mentors and mentees) before the session got underway."
  - src: /images/talks/compfest-slide-adverse-action.png
    caption: "196 trees, AUC 0.866, and now explain that to the applicant you just rejected."
  - src: /images/talks/compfest-slide-permutation-importance.png
    caption: "Gini impurity vs. permutation importance on held-out data: the random-noise feature drops from 2nd to dead last."
featured: false
isPlaceholder: false
order: 2
---

COMPFEST is Indonesia's largest student-run tech festival, and its Academy track is the part aimed squarely at CS students who want a masterclass rather than a keynote. I was invited to lead the COMPFEST 18 Academy session on **Ensemble Learning & Explainable AI**, a 2-hour Zoom lecture built around a problem most tabular-data courses skip: getting a model to work is only half the job, you also have to be able to explain why it made the call it made.

## The arc of the session

I built the two hours as one continuous argument rather than two disconnected topics:

1. **Why a crowd of weak models beats one strong one.** Starting from the variance-reduction identity behind bagging and majority voting, then walking through bagging, boosting and stacking as three different answers to "how do you combine models," each solving a different problem (variance, bias, and heterogeneous representations, respectively).
2. **Why that same model is now a black box.** Once you have a 300-tree gradient-boosted ensemble winning on the leaderboard, you've traded interpretability for accuracy, and in regulated domains like banking and credit, that trade has real consequences: adverse-action notices, fairness audits, and regulators who don't accept "the model decided" as an answer.
3. **How to actually explain it.** From the trap of scikit-learn's built-in `feature_importances_` (which I demonstrated failing live, with a pure-noise column ranking 2nd out of 11 features) through permutation importance, to LIME's local linear approximation and SHAP's game-theoretic Shapley values, ending on TreeSHAP's polynomial-time trick for tree ensembles specifically.

## Why this matters more than a typical ML lecture

Most student audiences have seen Random Forest and XGBoost in a Kaggle context, where the only thing that matters is the leaderboard score. I wanted the cohort to leave with a different reflex: before a model touches a real decision, ask who has to be satisfied by the explanation: the applicant who wants one sentence they can act on, the regulator who wants a global audit, and the engineer who wants a diagnostic for why the model is quietly failing on one segment of the data. Those three answers pull in different directions, and picking the wrong explanation method for the audience is its own kind of failure.

## Full write-up

The session was dense enough that I turned my prep into a full set of lecture notes: worked derivations (including the Shapley value formula and LIME's closed-form weighted least squares solution), the wolf-vs-husky LIME case study, and a five-step "Monday morning" checklist for applying this on a real project. If you want the complete version: **[Full lecture notes: Ensemble Learning & Explainable AI](/teaching/2026-08-18-ensemble-learning-and-explainable-ai/)**, or the [slide deck itself](/files/talk-ensemble-xai-compfest.pdf).
