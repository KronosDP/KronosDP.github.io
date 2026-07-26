---
permalink: /
title: "Welcome"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .hero-banner {
    background: var(--card-surface-bg, #001E67);
    border: 1px solid var(--card-surface-border, rgba(153, 182, 255, 0.25));
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }

  .hero-title {
    font-size: 1.9rem;
    font-weight: 800;
    margin: 0 0 0.4rem 0;
    color: var(--global-text-color, #ffffff);
  }

  .hero-subtitle {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--accent-sky, #99B6FF);
    margin-bottom: 1.25rem;
    letter-spacing: 0.3px;
  }

  .target-roles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .role-badge {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.8rem;
    border-radius: 20px;
    background: rgba(82, 116, 204, 0.15);
    border: 1px solid rgba(153, 182, 255, 0.25);
    color: var(--global-text-color, #CCDAFF);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .role-badge.nvidia-badge {
    background: rgba(134, 239, 172, 0.12);
    border-color: rgba(134, 239, 172, 0.4);
    color: #86efac;
  }

  .hero-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.75rem;
  }

  .highlight-card {
    background: rgba(10, 22, 51, 0.4);
    border: 1px solid rgba(153, 182, 255, 0.15);
    border-radius: 8px;
    padding: 1.1rem;
  }

  .highlight-title {
    font-size: 0.92rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .highlight-desc {
    font-size: 0.85rem;
    line-height: 1.5;
    opacity: 0.9;
    margin: 0;
  }

  .hero-cta-wrap {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.55rem 1.25rem;
    border-radius: 6px;
    text-decoration: none !important;
    transition: all 0.2s ease;
  }

  .cta-primary {
    background: #5274CC;
    color: #ffffff !important;
    box-shadow: 0 4px 14px rgba(82, 116, 204, 0.4);
  }

  .cta-primary:hover {
    background: #3b5cb3;
    transform: translateY(-1px);
  }

  .cta-secondary {
    background: rgba(153, 182, 255, 0.1);
    color: var(--global-text-color, #CCDAFF) !important;
    border: 1px solid rgba(153, 182, 255, 0.25);
  }

  .cta-secondary:hover {
    background: rgba(153, 182, 255, 0.2);
  }

  .section-heading {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 2rem 0 1rem 0;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid rgba(153, 182, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>

<!-- RECRUITER HERO LANDING BANNER -->
<div class="hero-banner">
  <h1 class="hero-title">Darrel Danadyaksa Poli</h1>
  <div class="hero-subtitle">Software Engineer &bull; AI Engineer &bull; AI Researcher</div>

  <div class="target-roles">
    <span class="role-badge nvidia-badge"><i class="fab fa-nvidia"></i> Ex-NVIDIA AI Research Intern</span>
    <span class="role-badge"><i class="fas fa-brain"></i> AI & Deep Learning</span>
    <span class="role-badge"><i class="fas fa-tachometer-alt"></i> Speech ASR & Distillation</span>
    <span class="role-badge"><i class="fas fa-server"></i> Go & Django Backend Architecture</span>
  </div>

  <div class="hero-highlights">
    <div class="highlight-card" style="border-top: 2px solid #86efac;">
      <div class="highlight-title" style="color: #86efac;"><i class="fab fa-nvidia"></i> NVIDIA AI Research</div>
      <p class="highlight-desc">Benchmarked RWKV-v7 vs Transformers for formal regular languages (L<sub>1</sub>&ndash;L<sub>4</sub>) using custom WKV CUDA C++ kernels and 1&ndash;3 edit near-miss hard negative sampling.</p>
    </div>
    <div class="highlight-card" style="border-top: 2px solid #99B6FF;">
      <div class="highlight-title" style="color: #99B6FF;"><i class="fas fa-microphone-alt"></i> Meeting.ai AI Engineer</div>
      <p class="highlight-desc">Stress-tested ASR under 10+ concurrent live streams & compressed speaker verification via knowledge distillation.</p>
    </div>
    <div class="highlight-card" style="border-top: 2px solid #CCDAFF;">
      <div class="highlight-title" style="color: #CCDAFF;"><i class="fas fa-graduation-cap"></i> TA @ Univ. of Indonesia</div>
      <p class="highlight-desc">Teaching Assistant for Software Engineering Project, Operating Systems, and Calculus I & II.</p>
    </div>
  </div>

  <div class="hero-cta-wrap">
    <a href="/portfolio/" class="cta-btn cta-primary"><i class="fas fa-cubes"></i> View Portfolio Showcase</a>
    <a href="/cv/" class="cta-btn cta-secondary"><i class="fas fa-file-alt"></i> Full Resume & CV</a>
    <a href="mailto:darrel.danadyaksa19@gmail.com" class="cta-btn cta-secondary"><i class="fas fa-envelope"></i> Contact Me</a>
  </div>
</div>

<div class="section-heading"><i class="fas fa-user"></i> About Me</div>

Hello! I'm **Darrel Danadyaksa Poli**, a final-year Computer Science student at the **University of Indonesia (UI)** specializing in **Software Engineering**, **Backend Architecture**, and **Artificial Intelligence**.

My technical journey spans deep learning research at **NVIDIA** (sequence model capacity & formal language recognition), production speech engineering at **Meeting.ai** (ASR stress-testing & knowledge distillation), full-stack development (**Go**, **Django**, **Laravel**, **Flutter**), and co-founding social technology startups (**SafetyPin**).

Beyond engineering and AI research, I have served as a **Peer Counselor** at Faculty of Computer Science UI (*Curhat Sama Panda*), supporting student mental health and psychological well-being. In my free time, I enjoy aviation simulation (virtual piloting), music theory, philosophy, and cooking.

Feel free to explore my interactive [Portfolio](/portfolio/) or review my complete [Curriculum Vitae](/cv/).
