// ─────────────────────────────────────────────
//  logs.js  —  All logs page logic
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

function buildLogEntry(l) {
  return `
    <div class="log-entry">
      <div class="log-date-col">
        <div class="log-date">${l.date}</div>
        <div class="log-day">${l.day}</div>
      </div>
      <div class="log-content-col">
        <div class="log-title">${l.title}</div>
        <div class="log-blocks">
          <div class="log-block">
            <span class="log-block-label">Did</span>
            <span class="log-block-text">${l.did}</span>
          </div>
          <div class="log-block">
            <span class="log-block-label">Learned</span>
            <span class="log-block-text">${l.learned}</span>
          </div>
        </div>
        <div class="log-tags">
          ${l.tags.map(t => `<span class="log-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAllLogs(filter = '') {
  const timeline = document.getElementById('log-timeline-all');
  const total = document.getElementById('log-total');
  if (!timeline) return;

  const query = filter.toLowerCase().trim();
  const filtered = query
    ? logs.filter(l =>
        l.title.toLowerCase().includes(query) ||
        l.did.toLowerCase().includes(query) ||
        l.learned.toLowerCase().includes(query) ||
        l.tags.some(t => t.toLowerCase().includes(query))
      )
    : logs;

  total.textContent = `${filtered.length} / ${logs.length} entries`;
  timeline.innerHTML = filtered.length
    ? filtered.map(buildLogEntry).join('')
    : `<div class="log-entry" style="justify-content:center; padding: 3rem; font-family: var(--mono); font-size: 0.75rem; color: var(--muted);">No entries match "${filter}"</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const toggle = document.getElementById('theme-toggle-btn');
  if (toggle) toggle.addEventListener('click', toggleTheme);

  renderAllLogs();

  const search = document.getElementById('log-search');
  if (search) {
    search.addEventListener('input', (e) => renderAllLogs(e.target.value));
  }
});
