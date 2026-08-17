---
permalink: /
title: "Software Engineer & AI Researcher"
hide_title: true
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<div class="homepage">

  <!-- ===================== 1. HERO ===================== -->
  <section class="homepage__hero">
    <span class="dot-grid homepage__dots homepage__dots--bl" aria-hidden="true"></span>
    <span class="dot-grid homepage__dots homepage__dots--mr" aria-hidden="true"></span>

    <div class="homepage__hero-inner">
      <img
        class="homepage__avatar homepage__rise homepage__rise--1"
        src="{{ site.author.avatar | prepend: "/images/" | prepend: base_path }}"
        alt="Darrel Danadyaksa Poli"
        width="76" height="76" loading="eager" decoding="async">

      <p class="homepage__kicker homepage__rise homepage__rise--2">Hi, I&rsquo;m Darrel Danadyaksa Poli</p>

      <span class="homepage__divider homepage__rise homepage__rise--2" aria-hidden="true">
        <span class="homepage__divider-dot"></span>
        <span class="homepage__divider-dot"></span>
        <span class="homepage__divider-dot"></span>
        <span class="homepage__divider-rule"></span>
      </span>

      <h1 class="homepage__title homepage__rise homepage__rise--3">
        <span class="homepage__title-line">Research That Ships,</span>
        <span class="homepage__title-line">Software That <span class="brace">{Scales}</span></span>
      </h1>

      <p class="homepage__lede homepage__rise homepage__rise--4">Final-year Computer Science student at the University of Indonesia. AI research at NVIDIA, production speech models at Meeting.ai, and backends in Django, Go and Laravel.</p>

      <div class="homepage__cta homepage__rise homepage__rise--5">
        <a class="pill-btn pill-btn--filled" href="#about">About me</a>
        <a class="pill-btn pill-btn--ghost" href="mailto:darrel.danadyaksa19@gmail.com">Let&rsquo;s talk <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>

    <div class="social-rail">
      <span class="social-rail__label">Follow me</span>
      <span class="social-rail__line" aria-hidden="true"></span>
      <ul class="social-rail__links">
        <li><a href="https://github.com/KronosDP" aria-label="GitHub" rel="me noopener" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/darrel-danadyaksa-poli/" aria-label="LinkedIn" rel="me noopener" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="https://instagram.com/kronos_darrel" aria-label="Instagram" rel="me noopener" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </section>

  <!-- ===================== 2. STATS ===================== -->
  <section class="stack" aria-label="Highlights">
    <div class="stat-grid">
      <div class="stat-card">
        <span class="stat-card__num">NVIDIA</span>
        <span class="stat-card__label">AI Research Intern, Jan&ndash;Jun 2025</span>
      </div>
      <div class="stat-card">
        <span class="stat-card__num">99.7<span class="stat-card__unit">%</span></span>
        <span class="stat-card__label">Satria Data 2025 leaderboard accuracy</span>
      </div>
      <div class="stat-card">
        <span class="stat-card__num">Top 10</span>
        <span class="stat-card__label">Gemastik 2023 national finalist</span>
      </div>
      <div class="stat-card">
        <span class="stat-card__num">5</span>
        <span class="stat-card__label">courses taught as Teaching Assistant at UI</span>
      </div>
    </div>
  </section>

  <!-- ===================== 3. ABOUT ===================== -->
  <section class="stack homepage__about" id="about">
    <span class="eyebrow">about</span>
    <h2 class="section-title">Engineer first, researcher by habit</h2>

    <p>Hello! I&rsquo;m <strong>Darrel Danadyaksa Poli</strong>, a final-year Computer Science student at the <strong>University of Indonesia (UI)</strong> specializing in <strong>Software Engineering</strong>, <strong>Backend Architecture</strong>, and <strong>Artificial Intelligence</strong>.</p>

    <p>My technical journey spans deep learning research at <strong>NVIDIA</strong> (sequence model capacity &amp; formal language recognition), production speech engineering at <strong>Meeting.ai</strong> (ASR stress-testing &amp; knowledge distillation), full-stack development (<strong>Go</strong>, <strong>Django</strong>, <strong>Laravel</strong>, <strong>Flutter</strong>), and co-founding social technology startups (<strong>SafetyPin</strong>).</p>

    <p>Beyond engineering and AI research, I have served as a <strong>Peer Counselor</strong> at Faculty of Computer Science UI (<em>Curhat Sama Panda</em>), supporting student mental health and psychological well-being. In my free time, I enjoy aviation simulation (virtual piloting), music theory, philosophy, and cooking.</p>

    <p>Feel free to explore my interactive <a href="{{ base_path }}/portfolio/">Portfolio</a> or review my complete <a href="{{ base_path }}/cv/">Curriculum Vitae</a>.</p>
  </section>

  <!-- ===================== 4. WHAT I DO ===================== -->
  <section class="stack">
    <span class="eyebrow">what i do</span>
    <h2 class="section-title">Four things I keep coming back to</h2>

    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card__icon"><i class="fas fa-brain" aria-hidden="true"></i></div>
        <h3 class="feature-card__title">AI Research</h3>
        <p class="feature-card__body">Benchmarked RWKV-v7 against Transformers on formal regular languages (L<sub>1</sub>&ndash;L<sub>4</sub>) at NVIDIA, with a custom PyTorch WKV CUDA C++ operator and 1&ndash;3 edit-distance hard negatives.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon"><i class="fas fa-microphone-lines" aria-hidden="true"></i></div>
        <h3 class="feature-card__title">Production Speech AI</h3>
        <p class="feature-card__body">Stress-tested ASR under 10+ concurrent live streams at Meeting.ai and compressed speaker verification through knowledge distillation.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon"><i class="fas fa-server" aria-hidden="true"></i></div>
        <h3 class="feature-card__title">Backend &amp; Platform</h3>
        <p class="feature-card__body">REST APIs and system architecture in Go, Django, Laravel and Flutter, with CI/CD, BDD and TDD workflows.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
        <h3 class="feature-card__title">Teaching &amp; Mentoring</h3>
        <p class="feature-card__body">Teaching Assistant for AI &amp; Data Science, Software Engineering Project, Operating Systems, and Calculus I &amp; II.</p>
      </div>
    </div>
  </section>

  <!-- ===================== 5. TOOLKIT ===================== -->
  <section class="stack">
    <span class="eyebrow">toolkit</span>
    <h2 class="section-title">Tools, grouped by how often I reach for them</h2>

    <div class="skill-list">
      <div class="skill-row" style="--fill: 100%">
        <span class="skill-row__label">Python</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">daily</span>
      </div>
      <div class="skill-row" style="--fill: 100%">
        <span class="skill-row__label">PyTorch</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">daily</span>
      </div>
      <div class="skill-row" style="--fill: 70%">
        <span class="skill-row__label">Go</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">production</span>
      </div>
      <div class="skill-row" style="--fill: 70%">
        <span class="skill-row__label">Django</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">production</span>
      </div>
      <div class="skill-row" style="--fill: 70%">
        <span class="skill-row__label">Docker</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">production</span>
      </div>
      <div class="skill-row" style="--fill: 70%">
        <span class="skill-row__label">Flutter</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">production</span>
      </div>
      <div class="skill-row" style="--fill: 40%">
        <span class="skill-row__label">Rust</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">familiar</span>
      </div>
      <div class="skill-row" style="--fill: 40%">
        <span class="skill-row__label">Laravel</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">familiar</span>
      </div>
      <div class="skill-row" style="--fill: 40%">
        <span class="skill-row__label">Spring Boot</span>
        <span class="skill-track"><span class="skill-fill"></span></span>
        <span class="skill-row__tier">familiar</span>
      </div>
    </div>
  </section>

</div>
