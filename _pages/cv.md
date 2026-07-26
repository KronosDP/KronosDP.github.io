---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<style>
  .cv-header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card-surface-bg, #001E67);
    border: 1px solid var(--card-surface-border, rgba(153, 182, 255, 0.25));
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }
  .cv-download-btn {
    background: #5274CC;
    color: #ffffff !important;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(82, 116, 204, 0.3);
  }
  .cv-download-btn:hover {
    background: #3b5cb3;
  }
  .cv-download-btn.secondary-btn {
    background: rgba(153, 182, 255, 0.1);
    border: 1px solid rgba(153, 182, 255, 0.25);
    color: var(--global-text-color, #CCDAFF) !important;
    box-shadow: none;
  }
  .cv-download-btn.secondary-btn:hover {
    background: rgba(153, 182, 255, 0.2);
  }
  .cv-section-title {
    font-size: 1.35rem;
    font-weight: 800;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid rgba(153, 182, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cv-item {
    margin-bottom: 1.5rem;
  }
  .cv-item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0.25rem;
  }
  .cv-company {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .cv-role {
    font-style: italic;
    color: var(--accent-sky, #99B6FF);
    font-weight: 600;
  }
  .cv-location-date {
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0.85;
  }
  .cv-nvidia-highlight {
    background: var(--card-surface-bg, #001E67);
    border: 1px solid rgba(134, 239, 172, 0.35);
    border-left: 4px solid #86efac;
    padding: 1rem 1.25rem;
    border-radius: 0 8px 8px 0;
    margin-bottom: 1.5rem;
  }
  .cv-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    background: rgba(153, 182, 255, 0.1);
    border: 1px solid rgba(153, 182, 255, 0.2);
    color: #CCDAFF;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  .cv-tag.nvidia-tag {
    background: rgba(134, 239, 172, 0.12);
    border-color: rgba(134, 239, 172, 0.35);
    color: #86efac;
  }
</style>

<div class="cv-header-actions">
  <div>
    <strong>Darrel Danadyaksa Poli</strong> &bull; Software Engineer | AI Engineer | AI Researcher
    <br><small><i class="fas fa-map-marker-alt"></i> Depok, Indonesia &nbsp;|&nbsp; <i class="fas fa-envelope"></i> darrel.danadyaksa19@gmail.com</small>
  </div>
  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <a href="/cv/resume-ai.pdf" target="_blank" class="cv-download-btn">
      <i class="fas fa-file-pdf"></i> Download PDF (AI / Research CV)
    </a>
    <a href="/cv/resume.pdf" target="_blank" class="cv-download-btn secondary-btn">
      <i class="fas fa-file-pdf"></i> Download PDF (Software Eng CV)
    </a>
    <a href="https://www.linkedin.com/in/darrel-danadyaksa-poli/" target="_blank" class="cv-download-btn secondary-btn">
      <i class="fab fa-linkedin"></i> LinkedIn Profile
    </a>
  </div>
</div>

Summary
======
Final Year Computer Science student with strong expertise across **Software Engineering**, **Backend Architecture**, and **Artificial Intelligence**. Experienced in AI research at **NVIDIA**, production speech model distillation at **Meeting.ai**, building scalable web and mobile applications (Django, Go, Laravel, Flutter), and leading software engineering teams.

Education
======
### **University of Indonesia** &mdash; *Depok, Indonesia*
**Undergraduate Computer Science** *(Aug 2022 &ndash; Aug 2026)*
* **Focus Areas:** Software Engineering, Web & Mobile Development, Deep Learning, Natural Language Processing, Computer Vision, Algorithms & Complexity.
* **Academic Mentorship:** Teaching Assistant for Software Engineering Project, Operating Systems, Calculus 1 (Regular & International), and Calculus 2.
* **Student Psychological Support:** Peer Counselor at Curhat Sama Panda, supporting student mental health at Faculty of Computer Science.

AI Research & Engineering Experience
======

<div class="cv-nvidia-highlight">
  <div class="cv-item-header">
    <div>
      <span class="cv-company" style="color: #76B900;"><i class="fab fa-nvidia"></i> NVIDIA</span> &mdash; <span class="cv-role">AI Research Intern</span>
    </div>
    <div class="cv-location-date">Remote &bull; Jan 2025 &ndash; Jun 2025</div>
  </div>
  <ul>
    <li><strong>Benchmarked Novel Architectures:</strong> Evaluated Non-Transformer sequence model architectures (<strong>RWKV</strong>) against standard <strong>Transformers</strong> for formal regular language recognition tasks, delivering comparative insights to senior research supervisors.</li>
    <li><strong>Sequence Architecture Analysis:</strong> Investigated structural representations and formal language capacity across <strong>Transformer</strong>, <strong>RNN</strong>, <strong>LSTM</strong>, and <strong>GRU</strong> models.</li>
    <li><strong>Research Dissemination:</strong> Conducted monthly technical presentations detailing empirical findings, loss convergence dynamics, and theoretical trade-offs to guide architectural research directions.</li>
  </ul>
  <div>
    <span class="cv-tag nvidia-tag">NVIDIA Research</span>
    <span class="cv-tag nvidia-tag">RWKV</span>
    <span class="cv-tag nvidia-tag">Transformers</span>
    <span class="cv-tag nvidia-tag">Formal Languages</span>
    <span class="cv-tag nvidia-tag">PyTorch</span>
  </div>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Meeting.ai</span> &mdash; <span class="cv-role">AI Engineer Intern</span>
    </div>
    <div class="cv-location-date">Jakarta, Indonesia &bull; Jul 2025 &ndash; Dec 2025</div>
  </div>
  <ul>
    <li><strong>ASR Performance Stress-Testing:</strong> Benchmarked Automatic Speech Recognition (ASR) pipelines under high concurrency (10+ simultaneous sessions) to isolate latency bottlenecks and ensure deployment stability.</li>
    <li><strong>Speaker Verification Optimization:</strong> Compression-optimized a Speaker Verification model using knowledge distillation, significantly reducing parameter footprint while maintaining accuracy and achieving faster inference throughput.</li>
    <li><strong>Active Learning Pipeline:</strong> Architected a user-in-the-loop correction mechanism within the Speaker Verification pipeline to dynamically resolve clustering ambiguities and continuously improve downstream model accuracy.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Intergalactic Science Kingdom</span> &mdash; <span class="cv-role">AI Engineer & Back End Engineer (Volunteer)</span>
    </div>
    <div class="cv-location-date">Remote &bull; Jan 2026 &ndash; Jul 2026</div>
  </div>
  <ul>
    <li><strong>Marie Chan Full-Stack Architecture:</strong> Architected and deployed <em>Marie Chan</em>, an interactive AI system combining Go (Golang) and Django backends for real-time API performance and backend stability.</li>
    <li><strong>Agentic AI & BDD/TDD Workflows:</strong> Applied Behavior-Driven Development (BDD) and Test-Driven Development (TDD) to guide and validate software engineering workflows powered by Agentic AI.</li>
    <li><strong>LLM Pipeline Orchestration:</strong> Integrated OpenRouter API for dynamic multi-model LLM routing, optimizing inference latency, context window management, and speech synthesis pipelines.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Indonesia AI x OMDENA Forest Fire Project</span> &mdash; <span class="cv-role">AI & Data Science Contributor</span>
    </div>
    <div class="cv-location-date">Indonesia &bull; Aug 2022 &ndash; Sep 2022</div>
  </div>
  <ul>
    <li><strong>Data Engineering:</strong> Curated, preprocessed, and normalized multi-source environmental datasets to enhance training data quality for forest fire risk prediction models.</li>
    <li><strong>Model Fine-Tuning:</strong> Fine-tuned predictive algorithms to maximize early detection accuracy and support proactive community safety initiatives.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Gemastik 2023</span> &mdash; <span class="cv-role">BERT Clickbait Classification Researcher</span>
    </div>
    <div class="cv-location-date">Indonesia &bull; Jul 2023 &ndash; Oct 2023</div>
  </div>
  <ul>
    <li><strong>Transformer Fine-Tuning:</strong> Fine-tuned a BERT-based transformer model on Indonesian news and textual datasets to detect, classify, and filter clickbait headlines.</li>
    <li><strong>Indonesian NLP & Tokenization:</strong> Implemented specialized Indonesian text tokenization, custom text pre-processing, and hyperparameter optimization for high-accuracy text classification.</li>
  </ul>
</div>

Volunteering & Leadership Experience
======

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Candidate College</span> &mdash; <span class="cv-role">Back End Developer (Co-Head of Web Dev)</span>
    </div>
    <div class="cv-location-date">Indonesia &bull; Jun 2024 &ndash; Oct 2024</div>
  </div>
  <ul>
    <li><strong>RESTful API & Database Engineering:</strong> Developed and maintained server-side logic, databases, and RESTful APIs using Laravel, collaborating with front-end teams and stakeholders to ensure high performance.</li>
    <li><strong>Database Modeling & Architecture:</strong> Created Entity-Relationship (EER) diagrams and database models aligned with business needs, enforcing clean code practices, design patterns, and scalable software architecture principles.</li>
    <li><strong>API Documentation & Leadership:</strong> Led Swagger integration for automated API documentation as Co-Head of the Website Development Division, improving API accessibility for internal and external teams.</li>
    <li><strong>DevOps & Testing:</strong> Implemented CI/CD pipelines and robust test suites to ensure code quality, maintainability, and streamlined deployments.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">SIKAP</span> &mdash; <span class="cv-role">Software Engineer</span>
    </div>
    <div class="cv-location-date">Indonesia &bull; Aug 2025 &ndash; Nov 2025</div>
  </div>
  <ul>
    <li><strong>Cross-Platform Engineering:</strong> Engineered a cross-platform anti-bullying information system using Django for the backend and Flutter for the mobile interface, ensuring secure and anonymous reporting.</li>
    <li><strong>UAT & User-Centered Design:</strong> Conducted User Acceptance Testing (UAT) across dozens of Indonesian schools, utilizing direct user feedback to refine features and improve system stability following ADDIE and UCD principles.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Student Executive Board (BEM UI)</span> &mdash; <span class="cv-role">Coordinator, Information Technology Division</span>
    </div>
    <div class="cv-location-date">Depok, Indonesia &bull; Jul 2025 &ndash; Jan 2026</div>
  </div>
  <ul>
    <li><strong>Engineering Leadership:</strong> Directed and reviewed software development workflows, applying industry-standard software engineering methodologies and architectural best practices.</li>
    <li><strong>Technical Guidance & Quality Control:</strong> Provided hands-on technical guidance on system architecture, maintainability, and quality control mechanisms for ongoing IT projects across multiple divisions.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <div>
      <span class="cv-company">Rentang Jiwa</span> &mdash; <span class="cv-role">Peer Counselor</span>
    </div>
    <div class="cv-location-date">Indonesia &bull; Jan 2024 &ndash; Jun 2024</div>
  </div>
  <ul>
    <li>Offered structured peer counseling and psychoeducation using counseling psychology best practices to build client rapport and facilitate psychological support.</li>
  </ul>
</div>

Projects & Achievements
======
* **SafetyPin Startup (2025):** Co-founded SafetyPin, a social security startup leveraging technology and intelligent reporting systems to enhance personal safety solutions.
* **Multimodal Emotion Detection (Satria Data 2025):** Engineered an end-to-end emotion detection system combining BERT for textual feature extraction, Whisper for speech representations, and VAD for noise filtering.
* **Illegal Parking CV System (Gemastik 2024):** Designed and trained an object detection pipeline to identify illegal parking violations from surveillance feeds.
* **BERT Clickbait Classification (Gemastik 2023):** Fine-tuned a BERT-based transformer model on Indonesian textual datasets to detect clickbait headlines.
* **Garuda Hacks 4.0 Honorable Mention (2023):** Awarded Honorable Mention for building *Tak Sendiri*, a conversational AI agent for preliminary depression screening.
* **Certified Peer Counselor Training (2023):** Completed certified training in peer counseling and psychological support.

Teaching Experience
======
* **Teaching Assistant for Software Engineering Project** &bull; University of Indonesia (2025)
* **Teaching Assistant for Operating Systems** &bull; University of Indonesia (2025)
* **Teaching Assistant for Calculus 1 (Regular & International)** &bull; University of Indonesia (2023 &ndash; 2024)
* **Teaching Assistant for Calculus 2** &bull; University of Indonesia (2024)

Technical Skills & Expertise
======
* **Software Engineering & Backend:** RESTful APIs, System Architecture, Database Design (EER), Microservices, Agentic AI Workflows, Behavior-Driven Development (BDD), Test-Driven Development (TDD), CI/CD, DevOps.
* **Programming Languages:** Python, Go (Golang), Java, PHP, Rust, Dart, SQL (PostgreSQL, MySQL).
* **Frameworks & Libraries:** Django, Spring Boot, Laravel, Flutter, PyTorch, TensorFlow, Keras, HuggingFace, OpenCV, Scikit-Learn, Pandas, NumPy.
* **Developer Tools & Cloud:** Docker, Git, GCP, Supabase, Postman, Linux/Unix, OpenRouter LLM APIs.
* **Soft Skills & Leadership:** Software Engineering Leadership, Code Review, Mentoring, Critical Thinking, Active Listening, Agile/Scrum.
