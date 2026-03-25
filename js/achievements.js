// ─────────────────────────────────────────────
//  achievements.js  —  All achievements page
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
function buildAchievementEntry(a) {
  const tag = a.link ? `a href="${a.link}" target="_blank"` : `div`;
  const closeTag = a.link ? `a` : `div`;
  return `
    <${tag} class="log-entry" style="text-decoration:none; color:inherit; cursor:${a.link ? 'pointer' : 'default'};">
      <div class="log-date-col">
        <div class="log-date">${a.date}</div>
        <div class="log-day">Achievement</div>
      </div>
      <div class="log-content-col">
        <div class="log-title">${a.title}${a.link ? ' ↗' : ''}</div>
        <div class="log-blocks">
          <div class="log-block">
            <span class="log-block-text">${a.detail}</span>
          </div>
        </div>
        <div class="log-tags">
          ${a.tags.map(t => `<span class="log-tag">${t}</span>`).join('')}
        </div>
      </div>
    </${closeTag}>
  `;
}
function renderAllAchievements() {
  const timeline = document.getElementById('achievements-timeline-all');
  const total = document.getElementById('achievements-total');
  if (!timeline) return;

  if (total) total.textContent = `${achievements.length} total achievements`;
  timeline.innerHTML = achievements.map(buildAchievementEntry).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const toggle = document.getElementById('theme-toggle-btn');
  if (toggle) toggle.addEventListener('click', toggleTheme);

  renderAllAchievements();
});
