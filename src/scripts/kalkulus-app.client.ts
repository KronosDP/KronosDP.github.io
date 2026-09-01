// Client-side logic for the Kalkulus 1 Practice Portal.
// Ported from the standalone kalkulus/app.js SPA: same sidebar/search/mode
// behavior and the same TikZJax re-injection trick (innerHTML doesn't
// execute <script> tags, so a fresh one is built after each render), but
// MathJax is replaced with client-side KaTeX auto-render to match the rest
// of the site's build-time KaTeX, and markup/classes target the new design.
import renderMathInElement from 'katex/contrib/auto-render';
import { mathMacros } from '../lib/math-macros.mjs';

interface Problem {
  id: number;
  problem_raw: string;
  problem_html: string;
  solution_raw: string;
  solution_html: string;
}
interface Topic {
  topic_name: string;
  points: string;
  problems: Problem[];
}
interface PR {
  pr_number: number;
  pr_title: string;
  pdf_url: string;
  sol_pdf_url: string;
  topics: Topic[];
}
interface KalkulusData {
  course_code: string;
  course_name: string;
  prs: PR[];
}

type Mode = 'inline' | 'separate';
type Tab = 'problems' | 'solutions';

const state = {
  data: null as KalkulusData | null,
  activePR: 1,
  mode: 'inline' as Mode,
  activeTab: 'problems' as Tab,
  searchQuery: '',
};

const el = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

const prListEl = el<HTMLUListElement>('kalkulus-pr-list');
const contentEl = el('kalkulus-content');
const activeTitleEl = el('kalkulus-active-title');
const activeSubtitleEl = el('kalkulus-active-subtitle');
const downloadProblemEl = el<HTMLAnchorElement>('kalkulus-download-problem');
const downloadSolutionEl = el<HTMLAnchorElement>('kalkulus-download-solution');
const modeInlineBtn = el('kalkulus-mode-inline');
const modeSeparateBtn = el('kalkulus-mode-separate');
const separateTabsEl = el('kalkulus-separate-tabs');
const tabProblemsBtn = el('kalkulus-tab-problems');
const tabSolutionsBtn = el('kalkulus-tab-solutions');
const searchInputEl = el<HTMLInputElement>('kalkulus-search-input');
const clearSearchBtn = el('kalkulus-clear-search');
const menuToggleEl = el('kalkulus-menu-toggle');
const sidebarEl = el('kalkulus-sidebar');
const overlayEl = el('kalkulus-overlay');

async function init() {
  try {
    const res = await fetch('/kalkulus/problems_data.json');
    if (!res.ok) throw new Error('Gagal mengambil data PR.');
    state.data = await res.json();
    renderSidebar();
    setupEventListeners();
    parseUrlHash();
    renderContent();
  } catch (error) {
    contentEl.innerHTML = `<div class="empty-state"><h3>Terjadi Kesalahan</h3><p>${error instanceof Error ? error.message : String(error)}</p></div>`;
  }
}

function renderSidebar() {
  if (!state.data) return;
  prListEl.innerHTML = '';
  for (const pr of state.data.prs) {
    const li = document.createElement('li');
    li.className = `kalkulus-pr-item ${pr.pr_number === state.activePR ? 'is-active' : ''}`;
    li.dataset.pr = String(pr.pr_number);
    li.innerHTML = `<span class="kalkulus-pr-item__num">PR ${pr.pr_number}</span><span class="kalkulus-pr-item__title">${pr.pr_title}</span>`;
    li.addEventListener('click', () => {
      document.querySelectorAll('.kalkulus-pr-item').forEach((n) => n.classList.remove('is-active'));
      li.classList.add('is-active');
      state.activePR = pr.pr_number;
      closeMobileSidebar();
      clearSearch();
      renderContent();
    });
    prListEl.appendChild(li);
  }
}

function renderContent() {
  if (!state.data) return;
  const pr = state.data.prs.find((p) => p.pr_number === state.activePR);
  if (!pr) return;

  activeTitleEl.textContent = `PR ${pr.pr_number}: ${pr.pr_title}`;
  activeSubtitleEl.textContent = 'Materi latihan mahasiswa untuk persiapan ujian.';
  downloadProblemEl.href = pr.pdf_url;
  downloadSolutionEl.href = pr.sol_pdf_url;

  contentEl.innerHTML = '';

  if (!pr.topics || pr.topics.length === 0) {
    contentEl.innerHTML = `<div class="empty-state"><h3>Soal belum tersedia</h3><p>Materi untuk PR ini belum diunggah.</p></div>`;
    return;
  }

  let topics: Topic[] = JSON.parse(JSON.stringify(pr.topics));
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    topics = topics
      .map((topic) => ({
        ...topic,
        problems: topic.problems.filter(
          (p) =>
            p.problem_raw.toLowerCase().includes(query) ||
            p.solution_raw.toLowerCase().includes(query) ||
            topic.topic_name.toLowerCase().includes(query),
        ),
      }))
      .filter((t) => t.problems.length > 0 || t.topic_name.toLowerCase().includes(query));

    if (topics.length === 0) {
      contentEl.innerHTML = `<div class="empty-state"><h3>Pencarian tidak ditemukan</h3><p>Tidak ada soal atau solusi yang cocok dengan kata kunci "${state.searchQuery}".</p></div>`;
      return;
    }
  }

  if (state.mode === 'inline') {
    separateTabsEl.style.display = 'none';
    for (const [tIdx, topic] of topics.entries()) {
      const section = document.createElement('div');
      section.className = 'topic-section';
      section.innerHTML = `<header class="topic-header"><h3 class="topic-title">Topik ${tIdx + 1}: ${topic.topic_name}</h3><span class="topic-points">${topic.points} Poin</span></header>`;
      const list = document.createElement('div');
      list.className = 'card-list';

      for (const prob of topic.problems) {
        const pId = `prob-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
        const sId = `sol-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
          <div class="problem-card" id="${pId}">
            <div class="card-header"><span class="card-label">Soal ${pr.pr_number}.${prob.id}</span><button class="card-btn toggle-sol-btn" data-target="${sId}">Tampilkan Solusi</button></div>
            <div class="card-body">${prob.problem_html}</div>
          </div>
          <div class="solution-collapse" id="${sId}">
            <div class="solution-card">
              <div class="card-header"><span class="card-label">Solusi Soal ${pr.pr_number}.${prob.id}</span><button class="card-btn card-btn-teal hide-sol-btn" data-target="${sId}">Sembunyikan</button></div>
              <div class="card-body">${prob.solution_html}</div>
            </div>
          </div>`;
        list.appendChild(wrapper);
      }
      section.appendChild(list);
      contentEl.appendChild(section);
    }
    setupInlineToggles();
  } else {
    separateTabsEl.style.display = 'flex';
    tabProblemsBtn.classList.toggle('is-active', state.activeTab === 'problems');
    tabSolutionsBtn.classList.toggle('is-active', state.activeTab === 'solutions');

    for (const [tIdx, topic] of topics.entries()) {
      const section = document.createElement('div');
      section.className = 'topic-section';
      section.innerHTML = `<header class="topic-header"><h3 class="topic-title">Topik ${tIdx + 1}: ${topic.topic_name}</h3><span class="topic-points">${topic.points} Poin</span></header>`;
      const list = document.createElement('div');
      list.className = 'card-list';

      for (const prob of topic.problems) {
        const pId = `prob-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
        const sId = `sol-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
        const card = document.createElement('div');
        if (state.activeTab === 'problems') {
          card.innerHTML = `<div class="problem-card" id="${pId}"><div class="card-header"><span class="card-label">Soal ${pr.pr_number}.${prob.id}</span><button class="card-btn jump-to-sol-btn" data-target-tab="solutions" data-target-id="${sId}">Lihat Solusi &rarr;</button></div><div class="card-body">${prob.problem_html}</div></div>`;
        } else {
          card.innerHTML = `<div class="solution-card" id="${sId}"><div class="card-header"><span class="card-label">Solusi Soal ${pr.pr_number}.${prob.id}</span><button class="card-btn card-btn-teal jump-to-prob-btn" data-target-tab="problems" data-target-id="${pId}">&larr; Kembali ke Soal</button></div><div class="card-body">${prob.solution_html}</div></div>`;
        }
        list.appendChild(card);
      }
      section.appendChild(list);
      contentEl.appendChild(section);
    }
    setupSeparateJumpLinks();
  }

  compileMathAndTikz();
}

function setupInlineToggles() {
  document.querySelectorAll<HTMLButtonElement>('.toggle-sol-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target!);
      target?.classList.toggle('open');
      const isOpen = target?.classList.contains('open');
      btn.textContent = isOpen ? 'Sembunyikan' : 'Tampilkan Solusi';
      btn.classList.toggle('card-btn-teal', Boolean(isOpen));
    });
  });
  document.querySelectorAll<HTMLButtonElement>('.hide-sol-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target!);
      target?.classList.remove('open');
      const toggleBtn = document.querySelector<HTMLButtonElement>(`.toggle-sol-btn[data-target="${btn.dataset.target}"]`);
      if (toggleBtn) {
        toggleBtn.textContent = 'Tampilkan Solusi';
        toggleBtn.classList.remove('card-btn-teal');
      }
    });
  });
}

function setupSeparateJumpLinks() {
  document.querySelectorAll<HTMLButtonElement>('.jump-to-sol-btn, .jump-to-prob-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.dataset.targetTab as Tab;
      renderContent();
      scrollToCard(btn.dataset.targetId!);
    });
  });
}

function scrollToCard(cardId: string) {
  setTimeout(() => {
    const card = document.getElementById(cardId);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('highlight-pulse');
    setTimeout(() => card.classList.remove('highlight-pulse'), 1600);
  }, 150);
}

function compileMathAndTikz() {
  renderMathInElement(contentEl, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\[', right: '\\]', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
    ],
    macros: mathMacros,
    throwOnError: false,
  });

  contentEl.querySelectorAll<HTMLElement>('.tikz-container').forEach((container) => {
    if (container.querySelector('svg')) return;
    const tikzCode = container.dataset.tikz ?? '';
    container.querySelectorAll('script').forEach((s) => s.remove());
    const script = document.createElement('script');
    script.type = 'text/tikz';
    script.textContent = `\n${tikzCode}\n`;
    container.appendChild(script);
  });
}

function setupEventListeners() {
  modeInlineBtn.addEventListener('click', () => setMode('inline'));
  modeSeparateBtn.addEventListener('click', () => setMode('separate'));
  tabProblemsBtn.addEventListener('click', () => setTab('problems'));
  tabSolutionsBtn.addEventListener('click', () => setTab('solutions'));

  let searchTimeout: ReturnType<typeof setTimeout>;
  searchInputEl.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement).value;
    state.searchQuery = value;
    clearSearchBtn.style.display = value ? 'block' : 'none';
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(renderContent, 300);
  });
  clearSearchBtn.addEventListener('click', () => {
    clearSearch();
    renderContent();
  });

  menuToggleEl.addEventListener('click', toggleMobileSidebar);
  overlayEl.addEventListener('click', closeMobileSidebar);
}

function setMode(mode: Mode) {
  if (state.mode === mode) return;
  state.mode = mode;
  modeInlineBtn.classList.toggle('is-active', mode === 'inline');
  modeSeparateBtn.classList.toggle('is-active', mode === 'separate');
  renderContent();
}

function setTab(tab: Tab) {
  if (state.activeTab === tab) return;
  state.activeTab = tab;
  renderContent();
}

function clearSearch() {
  searchInputEl.value = '';
  state.searchQuery = '';
  clearSearchBtn.style.display = 'none';
}

function toggleMobileSidebar() {
  sidebarEl.classList.toggle('is-open');
  overlayEl.classList.toggle('is-visible');
}
function closeMobileSidebar() {
  sidebarEl.classList.remove('is-open');
  overlayEl.classList.remove('is-visible');
}

function parseUrlHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const cardMatch = hash.match(/^#(prob|sol)-pr([1-6])-t([0-9]+)-p([0-9]+)/);
  const prMatch = hash.match(/^#pr([1-6])/);

  if (cardMatch) {
    const [, kind, prNum] = cardMatch;
    state.activePR = parseInt(prNum, 10);
    state.mode = 'separate';
    state.activeTab = kind === 'prob' ? 'problems' : 'solutions';
    modeInlineBtn.classList.remove('is-active');
    modeSeparateBtn.classList.add('is-active');
    highlightActivePr();
    scrollToCard(hash.substring(1));
  } else if (prMatch) {
    state.activePR = parseInt(prMatch[1], 10);
    highlightActivePr();
  }
}

function highlightActivePr() {
  document.querySelectorAll<HTMLLIElement>('.kalkulus-pr-item').forEach((elem) => {
    elem.classList.toggle('is-active', Number(elem.dataset.pr) === state.activePR);
  });
}

init();
