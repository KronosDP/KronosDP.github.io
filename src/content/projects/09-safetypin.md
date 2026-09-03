---
title: "SafetyPin"
slug: safetypin
category: backend-platform
categoryLabel: "Backend & platform"
org: "SafetyPin"
year: "2025"
stack: [Django, Flutter]
description: "Co-founded. Real-time geolocation tracking and automated emergency alert dispatch on Django and Flutter."
hasWriteup: true
writeupUrl: /projects/safetypin/
order: 9
---

SafetyPin started from a simple but uncomfortable premise: in a personal-safety emergency, the seconds spent unlocking a phone, opening the right app and typing out what's happening are the seconds you don't have. I co-founded SafetyPin to close that gap: a platform built so that raising an alert and getting help moving are close to the same action.

## The core loop: detect, locate, dispatch

The system is built on Django (backend) and Flutter (cross-platform mobile client), structured around one real-time path:

1. **Trigger**: the user raises an alert through the mobile app, designed to be fast under stress, not a multi-step form.
2. **Locate**: the app streams real-time geolocation to the backend for the duration of the incident, so responders and emergency contacts aren't working from a single stale coordinate.
3. **Dispatch**: the backend automatically pushes an alert to the user's configured emergency contacts (and relevant responders) carrying that live location, without requiring the user to manually message each of them individually mid-emergency.

## Why real-time, not just accurate

A location that's accurate but five minutes old is close to useless if the person is moving: fleeing a situation, being moved against their will, or simply in transit when the emergency starts. Streaming location rather than sending a single snapshot was a deliberate choice to keep the alert useful for the entire duration of the incident, not just the instant it was raised.

## The product decision behind "automated"

Automated dispatch matters because it removes a decision point from someone who may not be in a state to make good decisions calmly: instead of the user having to choose *who* to contact and compose *what* to say while something is actively going wrong, the system does that immediately on trigger, using contacts and context configured in advance, when the user could think clearly.
