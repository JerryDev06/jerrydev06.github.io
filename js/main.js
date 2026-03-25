// ─────────────────────────────────────────────
//  main.js  —  Rendering, theme toggle, reveal
// ─────────────────────────────────────────────

// ── THEME ────────────────────────────────────
const THEME_KEY = "jerry-portfolio-theme";

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateToggleIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  // Flash overlay
  const overlay = document.getElementById("theme-overlay");
  overlay.classList.add("flash");
  setTimeout(() => overlay.classList.remove("flash"), 300);

  // Apply after brief delay so flash is visible
  setTimeout(() => {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
    updateToggleIcon(next);
  }, 80);
}

function updateToggleIcon(theme) {
  const knob = document.querySelector(".theme-toggle-knob");
  if (knob) knob.textContent = theme === "dark" ? "🌙" : "☀️";
}

// ── SKILLS ───────────────────────────────────
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  skills.forEach((s) => {
    const el = document.createElement("div");
    el.className = "skill-item";
    el.innerHTML = `
      <div class="skill-icon">${s.icon.startsWith('http') ? `<img src="${s.icon}" width="28" height="28">` : s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-cat">${s.cat}</div>
    `;
    grid.appendChild(el);
  });
}

// ── PROJECTS ─────────────────────────────────
function buildProjectEntry(p, i) {
  return `
    <span class="project-num">0${i + 1}</span>
    <div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
    <span class="project-arrow">↗</span>
  `;
}

function renderProjects() {
  const list = document.getElementById("projects-list");
  const count = document.getElementById("projects-count");
  if (!list) return;
  const preview = projects.slice(0, 3);
  if (count) count.textContent = `${projects.length} total projects`;
  preview.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "project-item";
    el.onclick = () => window.open(p.link, "_blank");
    el.innerHTML = buildProjectEntry(p, i);
    list.appendChild(el);
  });
}

// ── LOG ENTRY HTML ────────────────────────────
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
          ${l.tags.map((t) => `<span class="log-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
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

function renderAchievementsPreview() {
  const timeline = document.getElementById("achievements-timeline");
  const count = document.getElementById("achievements-count");
  if (!timeline) return;

  const preview = achievements.slice(0, 2);
  if (count) count.textContent = `${achievements.length} total achievements`;
  preview.forEach((a) => {
    timeline.innerHTML += buildAchievementEntry(a);
  });
}

// ── DAILY LOG — homepage preview (latest 3) ───
function renderLogPreview() {
  const timeline = document.getElementById("log-timeline");
  const count = document.getElementById("log-count");
  if (!timeline) return;

  const preview = logs.slice(0, 3);
  count.textContent = `${logs.length} total entries`;
  preview.forEach((l) => {
    timeline.innerHTML += buildLogEntry(l);
  });
}

// ── SCROLL REVEAL ─────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── INIT ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const toggle = document.getElementById("theme-toggle-btn");
  if (toggle) toggle.addEventListener("click", toggleTheme);

  renderSkills();
  renderAchievementsPreview();
  renderProjects();
  renderLogPreview();
  initScrollReveal();
});
