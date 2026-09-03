---
title: "Anti-bullying reporting system"
slug: sikap-anti-bullying
category: backend-platform
categoryLabel: "Backend & platform"
org: "SIKAP"
year: "2025"
stack: [Django, Flutter]
description: "Django + Flutter, anonymous by design. UAT run across dozens of Indonesian schools, following ADDIE and UCD."
hasWriteup: true
writeupUrl: /projects/sikap-anti-bullying/
order: 8
---

SIKAP is a cross-platform anti-bullying information and reporting system I helped engineer, aimed at Indonesian schools. The hardest requirement wasn't a technical one in the usual sense: it was trust: a student who has just been bullied, or who's watched it happen to someone else, will not report it through a system that feels like it might expose them. Anonymity had to be a property of the architecture, not a checkbox in a privacy policy.

## Anonymous by design, not by promise

"Anonymous by design" meant treating identity-linkage as something to actively engineer *out* of the reporting flow, rather than just omitting a name field on a form: the backend (Django) is structured so a submitted report doesn't carry an identifiable trail back to the reporting student by default, which matters because a system that merely doesn't *display* the reporter's name but still logs it somewhere recoverable hasn't actually solved the trust problem; it's just hidden it.

## Cross-platform by necessity

The mobile client is built in Flutter, which was the practical choice for reaching students across a range of devices without maintaining separate native codebases, a resourcing reality for a project built by a small volunteer/school-partnership team, not just a technical preference.

## Testing it with the people who'd actually use it

This wasn't a system I was comfortable shipping on the strength of internal testing alone. We ran User Acceptance Testing across dozens of Indonesian schools, following ADDIE (Analyze, Design, Develop, Implement, Evaluate) for the instructional/rollout side and UCD (User-Centered Design) for the product side, meaning the UAT rounds weren't a final sign-off step, they fed back into redesigning report flows and UI based on what students and school staff actually did with the system, not what we assumed they'd do.

## Why this project stuck with me

Most systems fail their most vulnerable users quietly, by being technically fine but socially unusable. Getting UAT feedback from real students across dozens of schools was the only way to find out whether SIKAP had actually solved the trust problem, or just the reporting-form problem.
