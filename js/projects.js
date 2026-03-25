// ─────────────────────────────────────────────
//  projects.js  —  All projects page
// ─────────────────────────────────────────────

const THEME_KEY = 'jerry-portfolio-theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggleIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  const overlay = document.getElementById('theme-overlay');
  overlay.classList.add('flash');
  setTimeout(() => overlay.classList.remove('flash'), 300);
  setTimeout(() => {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    updateToggleIcon(next);
  }, 80);
}

function updateToggleIcon(theme) {
  const knob = document.querySelector('.theme-toggle-knob');
  if (knob) knob.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function buildProjectEntry(p, i) {
  return `
    <div class="project-item" onclick="window.open('${p.link}', '_blank')">
      <span class="project-num">0${i + 1}</span>
      <div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <span class="project-arrow">↗</span>
    </div>
  `;
}

function renderAllProjects() {
  const list = document.getElementById('projects-list-all');
  const total = document.getElementById('projects-total');
  if (!list) return;

  if (total) total.textContent = `${projects.length} total projects`;
  list.innerHTML = projects.map((p, i) => buildProjectEntry(p, i)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const toggle = document.getElementById('theme-toggle-btn');
  if (toggle) toggle.addEventListener('click', toggleTheme);

  renderAllProjects();
});
