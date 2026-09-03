---
title: "Forest fire risk prediction"
slug: forest-fire-risk-prediction
category: data-science
categoryLabel: "Data science"
org: "Omdena x Indonesia AI"
year: "2022"
stack: [Scikit-Learn, Pandas]
description: "Curated and normalised multi-source environmental datasets, then fine-tuned predictors for early detection."
hasWriteup: true
writeupUrl: /projects/forest-fire-risk-prediction/
order: 11
---

Forest fires in Indonesia are a recurring, high-stakes environmental and public-health problem: the annual haze crisis affects air quality across the region, and by the time a fire is visually obvious, the window for cheap intervention has usually closed. This project, run through Omdena in partnership with Indonesia AI, aimed at the earlier end of that timeline: predicting fire risk before ignition, not just detecting fires after the fact.

## The unglamorous part is the part that matters

Forest fire risk prediction lives or dies on data engineering, not modeling cleverness, because the relevant signal is scattered across sources that were never designed to be joined: satellite hotspot records, weather station readings, land cover classifications, and historical fire incident logs, each with its own spatial resolution, sampling frequency and missing-data pattern. My role was curating, preprocessing and normalizing that multi-source environmental data into a training set a model could actually learn from: reconciling mismatched timestamps and spatial grids, handling gaps where a given source simply had no reading for a region, and making sure the label (a location eventually caught fire, or didn't) was aligned correctly against the *pre*-fire feature window rather than leaking post-fire information back into the inputs.

## Fine-tuning for the metric that matters

Once the dataset was usable, the second half of the work was fine-tuning predictive models (scikit-learn) with an eye specifically on early-detection accuracy: in a risk-prediction setting like this, missed fires (false negatives) are far more costly than false alarms, so model selection and thresholding were tuned toward catching real risk early rather than optimizing a generic accuracy number that would look good while quietly under-calling the cases that matter most.

## Why the data work came first

A sophisticated model trained on poorly-aligned, leaky, or mismatched multi-source data will produce confident, wrong risk scores, which in a community-safety context is worse than an honestly uncertain model. Getting the data pipeline right before touching model architecture wasn't a preference, it was the actual bottleneck standing between "a model that scores well on this dataset" and "a model whose risk scores mean something."
