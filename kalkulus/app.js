/* ==============================================================================
   web/app.js
   Application Logic for Calculus 1 SP 2026 Homework Portal
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Application State ---
    const state = {
        data: null,
        activePR: 1, // Default active PR
        mode: 'inline', // 'inline' or 'separate'
        activeTab: 'problems', // 'problems' or 'solutions' (for separate mode)
        searchQuery: '',
        theme: 'dark' // 'dark' or 'light'
    };

    // --- DOM Elements ---
    const prListEl = document.getElementById('pr-list');
    const contentDisplayEl = document.getElementById('content-display');
    const activePrTitleEl = document.getElementById('active-pr-title');
    const activePrSubtitleEl = document.getElementById('active-pr-subtitle');
    const downloadProblemPdfEl = document.getElementById('download-problem-pdf');
    const downloadSolutionPdfEl = document.getElementById('download-solution-pdf');
    
    const modeInlineBtn = document.getElementById('mode-inline');
    const modeSeparateBtn = document.getElementById('mode-separate');
    const separateTabsEl = document.getElementById('separate-tabs');
    const tabProblemsBtn = document.getElementById('tab-problems');
    const tabSolutionsBtn = document.getElementById('tab-solutions');
    
    const searchInputEl = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    const menuToggleEl = document.getElementById('menu-toggle');
    const sidebarEl = document.getElementById('sidebar');
    const sidebarOverlayEl = document.getElementById('sidebar-overlay');

    // --- Initialize Application ---
    async function init() {
        try {
            // Load theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                state.theme = savedTheme;
                if (savedTheme === 'light') {
                    document.body.classList.remove('dark-mode');
                    document.body.classList.add('light-mode');
                }
            }

            // Fetch parsed problems data
            const response = await fetch('problems_data.json');
            if (!response.ok) {
                throw new Error('Gagal mengambil data PR.');
            }
            state.data = await response.json();
            
            // Build sidebar PR list
            renderSidebar();
            
            // Set up event listeners
            setupEventListeners();
            
            // Parse Hash URL for deep linking
            parseUrlHash();
            
            // Render active PR content
            renderContent();
            
        } catch (error) {
            console.error('Initialization error:', error);
            contentDisplayEl.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">⚠️</span>
                    <h3>Terjadi Kesalahan</h3>
                    <p>${error.message}</p>
                </div>
            `;
        }
    }

    // --- Render Sidebar Navigation ---
    function renderSidebar() {
        prListEl.innerHTML = '';
        state.data.prs.forEach(pr => {
            const li = document.createElement('li');
            li.className = `pr-item ${pr.pr_number === state.activePR ? 'active' : ''}`;
            li.dataset.pr = pr.pr_number;
            
            li.innerHTML = `
                <a class="pr-link">
                    <span class="pr-link-num">PR ${pr.pr_number}</span>
                    <span class="pr-link-title">${pr.pr_title}</span>
                </a>
            `;
            
            li.addEventListener('click', () => {
                // Switch active PR
                document.querySelectorAll('.pr-item').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                state.activePR = pr.pr_number;
                
                // Close sidebar on mobile
                closeMobileSidebar();
                
                // Clear search on PR switch
                clearSearch();
                
                // Render content
                renderContent();
            });
            
            prListEl.appendChild(li);
        });
    }

    // --- Render Content based on current state ---
    function renderContent() {
        const pr = state.data.prs.find(p => p.pr_number === state.activePR);
        if (!pr) return;

        // Set Headers
        activePrTitleEl.textContent = `PR ${pr.pr_number}: ${pr.pr_title}`;
        activePrSubtitleEl.textContent = `Materi latihan mahasiswa untuk persiapan ujian.`;
        
        // Set PDF download links
        downloadProblemPdfEl.href = `${pr.pdf_url}`;
        downloadSolutionPdfEl.href = `${pr.sol_pdf_url}`;

        // Clear display area
        contentDisplayEl.innerHTML = '';

        // Check if there are topics
        if (!pr.topics || pr.topics.length === 0) {
            contentDisplayEl.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">📂</span>
                    <h3>Soal belum tersedia</h3>
                    <p>Materi untuk PR ini belum diunggah.</p>
                </div>
            `;
            return;
        }

        // Apply filters (search)
        let filteredTopics = JSON.parse(JSON.stringify(pr.topics)); // deep clone
        let matchCount = 0;
        
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filteredTopics = filteredTopics.map(topic => {
                // Filter problems in this topic
                topic.problems = topic.problems.filter(prob => {
                    const probMatch = prob.problem_raw.toLowerCase().includes(query) || 
                                      prob.problem_html.toLowerCase().includes(query);
                    const solMatch = prob.solution_raw.toLowerCase().includes(query) || 
                                     prob.solution_html.toLowerCase().includes(query);
                    return probMatch || solMatch;
                });
                return topic;
            }).filter(topic => topic.problems.length > 0 || topic.topic_name.toLowerCase().includes(query));
            
            // Recalculate total matches
            filteredTopics.forEach(t => matchCount += t.problems.length);
        }

        if (state.searchQuery && filteredTopics.length === 0) {
            contentDisplayEl.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">🔍</span>
                    <h3>Pencarian Tidak Ditemukan</h3>
                    <p>Tidak ada soal atau solusi yang cocok dengan kata kunci "${state.searchQuery}".</p>
                </div>
            `;
            return;
        }

        // --- Render Mode: Inline Reveal ---
        if (state.mode === 'inline') {
            separateTabsEl.style.display = 'none';
            
            filteredTopics.forEach((topic, tIdx) => {
                const topicSection = document.createElement('div');
                topicSection.className = 'topic-section';
                
                topicSection.innerHTML = `
                    <header class="topic-header">
                        <h3 class="topic-title">Topik ${tIdx + 1}: ${topic.topic_name}</h3>
                        <span class="topic-points">${topic.points} Poin</span>
                    </header>
                `;
                
                const cardList = document.createElement('div');
                cardList.className = 'card-list';
                
                topic.problems.forEach(prob => {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'problem-card-wrapper';
                    
                    const pCardId = `prob-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
                    const sCardId = `sol-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
                    
                    // Problem Card
                    const pCard = document.createElement('div');
                    pCard.className = 'problem-card';
                    pCard.id = pCardId;
                    pCard.innerHTML = `
                        <div class="card-header">
                            <span class="card-label">Soal ${pr.pr_number}.${prob.id}</span>
                            <div class="card-actions">
                                <button class="card-btn card-btn-primary toggle-sol-btn" data-target="${sCardId}">
                                    👁️ Tampilkan Solusi
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            ${prob.problem_html}
                        </div>
                    `;
                    
                    // Solution Card (Collapsible)
                    const sCardCollapse = document.createElement('div');
                    sCardCollapse.className = 'solution-collapse';
                    sCardCollapse.id = sCardId;
                    
                    const sCard = document.createElement('div');
                    sCard.className = 'solution-card';
                    sCard.innerHTML = `
                        <div class="card-header">
                            <span class="card-label">Solusi Soal ${pr.pr_number}.${prob.id}</span>
                            <div class="card-actions">
                                <button class="card-btn card-btn-teal hide-sol-btn" data-target="${sCardId}">
                                    ❌ Sembunyikan
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            ${prob.solution_html}
                        </div>
                    `;
                    
                    sCardCollapse.appendChild(sCard);
                    wrapper.appendChild(pCard);
                    wrapper.appendChild(sCardCollapse);
                    cardList.appendChild(wrapper);
                });
                
                topicSection.appendChild(cardList);
                contentDisplayEl.appendChild(topicSection);
            });
            
            // Attach toggle functionality for Inline Mode
            setupInlineToggles();
        }
        
        // --- Render Mode: Separate Page (Cross-Ref) ---
        else if (state.mode === 'separate') {
            separateTabsEl.style.display = 'flex';
            
            // Set tab button active states
            tabProblemsBtn.className = `tab-btn ${state.activeTab === 'problems' ? 'active' : ''}`;
            tabSolutionsBtn.className = `tab-btn ${state.activeTab === 'solutions' ? 'active' : ''}`;

            filteredTopics.forEach((topic, tIdx) => {
                const topicSection = document.createElement('div');
                topicSection.className = 'topic-section';
                
                topicSection.innerHTML = `
                    <header class="topic-header">
                        <h3 class="topic-title">Topik ${tIdx + 1}: ${topic.topic_name}</h3>
                        <span class="topic-points">${topic.points} Poin</span>
                    </header>
                `;
                
                const cardList = document.createElement('div');
                cardList.className = 'card-list';
                
                topic.problems.forEach(prob => {
                    const pCardId = `prob-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
                    const sCardId = `sol-pr${pr.pr_number}-t${tIdx + 1}-p${prob.id}`;
                    
                    if (state.activeTab === 'problems') {
                        // Render problem cards only
                        const pCard = document.createElement('div');
                        pCard.className = 'problem-card';
                        pCard.id = pCardId;
                        pCard.innerHTML = `
                            <div class="card-header">
                                <span class="card-label">Soal ${pr.pr_number}.${prob.id}</span>
                                <div class="card-actions">
                                    <button class="card-btn card-btn-primary jump-to-sol-btn" data-target-tab="solutions" data-target-id="${sCardId}">
                                        ➡️ Lihat Solusi
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                ${prob.problem_html}
                            </div>
                        `;
                        cardList.appendChild(pCard);
                    } else {
                        // Render solution cards only
                        const sCard = document.createElement('div');
                        sCard.className = 'solution-card';
                        sCard.id = sCardId;
                        sCard.innerHTML = `
                            <div class="card-header">
                                <span class="card-label">Solusi Soal ${pr.pr_number}.${prob.id}</span>
                                <div class="card-actions">
                                    <button class="card-btn card-btn-teal jump-to-prob-btn" data-target-tab="problems" data-target-id="${pCardId}">
                                        ⬅️ Kembali ke Soal
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                ${prob.solution_html}
                            </div>
                        `;
                        cardList.appendChild(sCard);
                    }
                });
                
                topicSection.appendChild(cardList);
                contentDisplayEl.appendChild(topicSection);
            });
            
            // Attach jump link listeners
            setupSeparateJumpLinks();
        }

        // --- Render Mathematics & TikZ ---
        compileMathAndTikz();
    }

    // --- Inline Toggles Logic ---
    function setupInlineToggles() {
        document.querySelectorAll('.toggle-sol-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.dataset.target;
                const collapseEl = document.getElementById(targetId);
                
                if (collapseEl) {
                    collapseEl.classList.toggle('open');
                    const isOpen = collapseEl.classList.contains('open');
                    btn.innerHTML = isOpen ? '❌ Sembunyikan' : '👁️ Tampilkan Solusi';
                    btn.className = `card-btn ${isOpen ? 'card-btn-teal' : 'card-btn-primary'} toggle-sol-btn`;
                }
            });
        });

        document.querySelectorAll('.hide-sol-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.dataset.target;
                const collapseEl = document.getElementById(targetId);
                
                if (collapseEl) {
                    collapseEl.classList.remove('open');
                    // Reset the corresponding toggle button
                    const toggleBtn = document.querySelector(`.toggle-sol-btn[data-target="${targetId}"]`);
                    if (toggleBtn) {
                        toggleBtn.innerHTML = '👁️ Tampilkan Solusi';
                        toggleBtn.className = 'card-btn card-btn-primary toggle-sol-btn';
                    }
                }
            });
        });
    }

    // --- Separate Jumps Logic ---
    function setupSeparateJumpLinks() {
        // Jump to Solution Button
        document.querySelectorAll('.jump-to-sol-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.dataset.targetId;
                state.activeTab = 'solutions';
                
                // Re-render solutions tab
                renderContent();
                
                // Scroll to target and pulse highlight
                scrollToCard(targetId);
            });
        });

        // Jump to Problem Button
        document.querySelectorAll('.jump-to-prob-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.dataset.targetId;
                state.activeTab = 'problems';
                
                // Re-render problems tab
                renderContent();
                
                // Scroll to target and pulse highlight
                scrollToCard(targetId);
            });
        });
    }

    // --- Scroll & Highlight Card helper ---
    function scrollToCard(cardId) {
        setTimeout(() => {
            const cardEl = document.getElementById(cardId);
            if (cardEl) {
                cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                cardEl.classList.add('highlight-pulse');
                
                // Clear highlight class after animation finishes
                setTimeout(() => {
                    cardEl.classList.remove('highlight-pulse');
                }, 1600);
            }
        }, 150); // slight delay to wait for browser DOM render
    }

    // --- Compile MathJax and TikZ Elements ---
    function compileMathAndTikz() {
        // 1. MathJax typesetting
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([contentDisplayEl]).catch(err => {
                console.warn('MathJax typesetting failed:', err);
            });
        }

        // 2. Programmatically inject script elements to trigger TikZJax rendering
        // In index.html, innerHTML injections do not trigger script execution. We must rebuild them.
        document.querySelectorAll('.tikz-container').forEach(container => {
            const tikzCode = container.dataset.tikz;
            
            // Check if there is already a rendered SVG or script
            // If already processed, a SVG will be present.
            if (container.querySelector('svg')) {
                return;
            }
            
            // Remove existing static script tags if they are dead
            container.querySelectorAll('script').forEach(s => s.remove());
            
            // Create a fresh script tag that browser will observe and execute
            const script = document.createElement('script');
            script.type = 'text/tikz';
            script.textContent = '\n' + tikzCode + '\n';
            
            container.appendChild(script);
        });
    }

    // --- Event Listeners Setup ---
    function setupEventListeners() {
        // Mode Switches
        modeInlineBtn.addEventListener('click', () => {
            if (state.mode !== 'inline') {
                state.mode = 'inline';
                modeSeparateBtn.classList.remove('active');
                modeInlineBtn.classList.add('active');
                renderContent();
            }
        });

        modeSeparateBtn.addEventListener('click', () => {
            if (state.mode !== 'separate') {
                state.mode = 'separate';
                modeInlineBtn.classList.remove('active');
                modeSeparateBtn.classList.add('active');
                renderContent();
            }
        });

        // Tab Buttons
        tabProblemsBtn.addEventListener('click', () => {
            if (state.activeTab !== 'problems') {
                state.activeTab = 'problems';
                renderContent();
            }
        });

        tabSolutionsBtn.addEventListener('click', () => {
            if (state.activeTab !== 'solutions') {
                state.activeTab = 'solutions';
                renderContent();
            }
        });

        // Search Input
        let searchTimeout;
        searchInputEl.addEventListener('input', (e) => {
            const value = e.target.value;
            state.searchQuery = value;
            
            // Toggle clear search button
            clearSearchBtn.style.display = value ? 'block' : 'none';
            
            // Debounce input to prevent lagging math compilation
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                renderContent();
            }, 300);
        });

        clearSearchBtn.addEventListener('click', () => {
            clearSearch();
            renderContent();
        });

        // Themes Toggle
        const toggleTheme = () => {
            const isLight = document.body.classList.contains('light-mode');
            if (isLight) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                state.theme = 'dark';
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                state.theme = 'light';
            }
            localStorage.setItem('theme', state.theme);
        };
        
        themeToggleDesktop.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);

        // Mobile Sidebar Drawer Toggle
        menuToggleEl.addEventListener('click', toggleMobileSidebar);
        sidebarOverlayEl.addEventListener('click', closeMobileSidebar);
    }

    // --- Search Helper ---
    function clearSearch() {
        searchInputEl.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
    }

    // --- Mobile Sidebar Drawer Helpers ---
    function toggleMobileSidebar() {
        menuToggleEl.classList.toggle('open');
        sidebarEl.classList.toggle('open');
        sidebarOverlayEl.classList.toggle('visible');
    }

    function closeMobileSidebar() {
        menuToggleEl.classList.remove('open');
        sidebarEl.classList.remove('open');
        sidebarOverlayEl.classList.remove('visible');
    }

    // --- Deep Linking via Hash URLs ---
    function parseUrlHash() {
        const hash = window.location.hash;
        if (!hash) return;

        // Pattern: #pr[1-6] or #prob-pr[1-6]-t[0-9]-p[0-9] or #sol-pr[1-6]-t[0-9]-p[0-9]
        const prMatch = hash.match(/^#pr([1-6])/);
        const cardMatch = hash.match(/^#(prob|sol)-pr([1-6])-t([0-9]+)-p([0-9]+)/);
        
        if (cardMatch) {
            const mode = cardMatch[1]; // 'prob' or 'sol'
            const prNum = parseInt(cardMatch[2]);
            
            state.activePR = prNum;
            
            // Select active PR in sidebar UI
            document.querySelectorAll('.pr-item').forEach(el => {
                if (parseInt(el.dataset.pr) === prNum) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });

            if (mode === 'prob') {
                state.mode = 'separate';
                state.activeTab = 'problems';
                modeInlineBtn.classList.remove('active');
                modeSeparateBtn.classList.add('active');
                
                // Highlight problem card
                scrollToCard(hash.substring(1));
            } else {
                state.mode = 'separate';
                state.activeTab = 'solutions';
                modeInlineBtn.classList.remove('active');
                modeSeparateBtn.classList.add('active');
                
                // Highlight solution card
                scrollToCard(hash.substring(1));
            }
        } else if (prMatch) {
            const prNum = parseInt(prMatch[1]);
            state.activePR = prNum;
            document.querySelectorAll('.pr-item').forEach(el => {
                if (parseInt(el.dataset.pr) === prNum) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        }
    }

    // Run Initialization
    init();
});
