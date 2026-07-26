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
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.12) 0%, rgba(20, 25, 35, 0.7) 100%);
    border: 1px solid rgba(74, 144, 226, 0.3);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .hero-title {
    font-size: 1.85rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4a90e2;
    margin-bottom: 1.25rem;
  }

  .target-roles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .role-badge {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.3rem 0.75rem;
    border-radius: 20px;
    background: rgba(74, 144, 226, 0.15);
    border: 1px solid rgba(74, 144, 226, 0.35);
    color: var(--global-text-color, #eee);
  }

  .role-badge.nvidia-badge {
    background: rgba(118, 185, 0, 0.15);
    border-color: #76B900;
    color: #76B900;
  }

  .hero-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .highlight-card {
    background: rgba(120, 120, 120, 0.08);
    border: 1px solid rgba(120, 120, 120, 0.2);
    border-radius: 8px;
    padding: 1rem;
  }

  .highlight-title {
    font-size: 0.95rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }

  .highlight-desc {
    font-size: 0.85rem;
    opacity: 0.85;
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
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    text-decoration: none !important;
    transition: all 0.2s ease;
  }

  .cta-primary {
    background: #4a90e2;
    color: #fff !important;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }

  .cta-primary:hover {
    background: #357abd;
  }

  .cta-secondary {
    background: rgba(120, 120, 120, 0.15);
    color: var(--global-text-color, #eee) !important;
    border: 1px solid rgba(120, 120, 120, 0.3);
  }

  .cta-secondary:hover {
    background: rgba(120, 120, 120, 0.3);
  }

  .section-heading {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 2rem 0 1rem 0;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid rgba(120, 120, 120, 0.2);
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
    <div class="highlight-card" style="border-left: 3px solid #76B900;">
      <div class="highlight-title" style="color: #76B900;"><i class="fab fa-nvidia"></i> NVIDIA AI Research</div>
      <p class="highlight-desc">Benchmarked non-Transformer sequence models (RWKV) against Transformers for formal regular language capacity.</p>
    </div>
    <div class="highlight-card" style="border-left: 3px solid #4a90e2;">
      <div class="highlight-title" style="color: #4a90e2;"><i class="fas fa-microphone-alt"></i> Meeting.ai AI Engineer</div>
      <p class="highlight-desc">Stress-tested ASR under 10+ concurrent live streams & compressed speaker verification via knowledge distillation.</p>
    </div>
    <div class="highlight-card" style="border-left: 3px solid #9b59b6;">
      <div class="highlight-title" style="color: #9b59b6;"><i class="fas fa-graduation-cap"></i> TA @ Univ. of Indonesia</div>
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
