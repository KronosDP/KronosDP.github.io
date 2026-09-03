---
title: "Illegal parking detection"
slug: illegal-parking-detection
category: computer-vision
categoryLabel: "Computer vision"
org: "Gemastik 2024"
result: "Top 10"
year: "2024"
stack: [YOLOv8, OpenCV]
description: "YOLOv8 + ByteTrack multi-object tracking on live CCTV, flagging boundary intrusion and vehicle dwell-time violations."
hasWriteup: true
writeupUrl: /projects/illegal-parking-detection/
order: 4
---

Gemastik is Indonesia's national student ICT competition, and the computer vision track in 2024 asked for a system that could enforce parking rules from existing CCTV infrastructure: no new sensors, just a camera feed and a model that understands what "illegally parked" means well enough to flag it automatically. The system placed in the Top 10.

## Detection and tracking, not just detection

A single-frame detector can tell you a car is there, but it can't tell you if that car has been there for twenty seconds or twenty minutes, and it can't tell if the "car in the no-parking zone" in this frame is the same car as three frames ago or a different one that just arrived. So the pipeline is built as detection *plus* tracking:

- **YOLOv8** runs per-frame object detection on the CCTV stream, localizing vehicles.
- **ByteTrack** takes those per-frame detections and assigns persistent IDs across frames, using both high- and low-confidence detections in its association step (rather than discarding low-confidence boxes outright, which is where a lot of naive trackers lose vehicles during partial occlusion).

That persistent ID is what turns "a car is in the frame" into "car #47 has been in the frame for N seconds": the actual unit the rule engine needs.

## Two rules, both built on the same tracked state

With stable per-vehicle tracking in place, the system checks two independent violation types against each tracked vehicle:

1. **Boundary intrusion**: comparing each vehicle's bounding box against a defined no-parking polygon (drawn against the camera's fixed field of view), flagging entry into a restricted zone.
2. **Dwell-time violation**: accumulating how long a given tracked ID has stayed within a parking zone, and flagging it once that duration crosses the allowed threshold.

Both checks only work because the tracking layer keeps vehicle identity stable frame-to-frame. Without ByteTrack, "how long has this car been here" isn't a well-defined question, since every frame would just be an unconnected detection.

## Why CCTV, specifically

The framing constraint (using CCTV that's already installed rather than proposing new hardware) was deliberate. A detection system that requires cities to install new sensors is a research prototype; one that runs on the camera infrastructure that already exists on Indonesian streets is something that could actually be deployed.
