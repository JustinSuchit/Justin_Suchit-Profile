// ---- Websites and systems: edit here to add or change entries ----
const SITES = [
  {
    slug: "jagmohan-sawmill",
    name: "jagmohancoltd.com",
    client: "Jebodh Jagmohan and Company Ltd",
    status: "Live", url: "https://www.jagmohancoltd.com",
    summary: "Designed, built and launched independently for a Trinidad & Tobago lumber, hardware, haulage and site-services supplier.",
    stack: ["Next.js", "React", "Responsive web design", "SEO"],
    role: "Sole designer and developer",
    overview: "A full business website for Jebodh Jagmohan and Company Ltd. I handled requirements gathering with the client, UI/UX design, development, deployment and ongoing updates.",
    work: [
      "Product pages for lumber, tools and concrete sleepers.",
      "A services section covering haulage and site services.",
      "A request-a-quote flow with product pre-selection.",
      "WhatsApp and click-to-call enquiry links.",
      "FAQ, contact and map pages.",
      "Light and dark themes.",
      "SEO and Open Graph metadata."
    ],
    results: "Live at jagmohancoltd.com and maintained with ongoing updates."
  },
  {
    slug: "amcol-hardware",
    name: "amcolhardwarett.com",
    client: "AMCOL Hardware",
    status: "Live", url: "https://www.amcolhardwarett.com/",
    summary: "Day-to-day support and modernization of a large legacy e-commerce site with a catalogue of more than 20,000 products.",
    stack: ["PHP", "SQL", "cPanel", "JavaScript", "Python", "Excel", "Airtable", "InMotion Hosting", "SEO"],
    role: "Web developer and product data specialist",
    overview: "Support for a large legacy e-commerce environment: catalogue and image-data workflows, SEO and performance, deployment, backups and recovery, and production issue resolution.",
    problem: "A legacy PHP-based hardware website with over 20,000 products needed modernization, cleaner product data, better SEO and a structured migration path to a modern platform.",
    work: [
      "Extracted and organized product names, URLs, IDs, categories, brands, specifications and image addresses.",
      "Cleaned and managed large datasets using Excel and Airtable.",
      "Created standardized SEO titles, meta descriptions, image alt text, categories and tags.",
      "Developed processes for transferring approved product information into the website.",
      "Troubleshot the live site and resolved production incidents.",
      "Followed documented deployment, backup and recovery procedures when updating the live system.",
      "Investigated replacing the legacy PHP website with a modern JavaScript-based platform.",
      "Reviewed hosting, payment integration, inventory integration and migration requirements.",
      "Created data-entry guidelines and quality-control procedures."
    ],
    solution: "Built standardized data pipelines using Excel, Airtable and Python scraping, with documented quality-control procedures for the team.",
    results: "A structured framework for managing 20,000+ product records with standardized SEO and quality control."
  },
  {
    slug: "amcol-industrial",
    name: "amcolindustrial.com",
    client: "AMCOL Industrial",
    status: "Live", url: "https://www.amcolindustrial.com/",
    summary: "Development, testing and ongoing improvement of a modern industrial supply platform.",
    stack: ["Next.js", "React", "Supabase", "Vercel", "JavaScript", "GitHub"],
    role: "Front-end developer and QA",
    overview: "Product and category administration, database-backed workflows, authentication, deployment, and ongoing UI and content improvements.",
    problem: "Clickable cards sent visitors to general product pages instead of specific categories, and the site had metadata and responsive layout gaps.",
    work: [
      "Reviewed clickable cards, buttons, navigation, category links and brand links.",
      "Corrected cards that redirected to general product pages instead of specific categories.",
      "Improved page titles, metadata, favicon configuration and responsive layouts.",
      "Worked on product and category administration and database-backed workflows.",
      "Assisted with local development, testing, debugging, GitHub integration and deployment.",
      "Helped evaluate Vercel, InMotion Hosting and WordPress as hosting platforms."
    ],
    solution: "Fixed card redirect logic, standardized metadata and established a GitHub-based deployment workflow.",
    results: "Improved navigation accuracy, SEO metadata and responsive layouts across the site."
  },
  {
    slug: "caribbean-transport-services",
    name: "caribbeantransportservices.com",
    client: "Caribbean Transport Services",
    status: "Live", url: "https://www.caribbeantransportservices.com/",
    summary: "A responsive website for a transportation, logistics and haulage company.",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "GitHub", "Vercel", "SEO"],
    role: "Web developer",
    overview: "Service pages, SEO configuration, sitemaps and a secure admin login approach for a logistics and haulage company.",
    problem: "The company needed a modern, responsive website with proper SEO, service pages and a secure admin area.",
    work: [
      "Created and improved service pages.",
      "Worked on transportation coverage, cargo services, quotation requests and client information.",
      "Configured SEO metadata, favicons, social-sharing images, sitemaps and navigation.",
      "Corrected anchor-link and sitemap issues.",
      "Assisted with domain configuration and deployment.",
      "Designed a protected admin login using a private URL.",
      "Investigated Supabase authentication, rate limiting, dashboard security and access control."
    ],
    solution: "Configured full SEO metadata and sitemaps, fixed anchor links, and designed a private-URL admin access strategy.",
    results: "A live, responsive, SEO-optimized logistics website."
  },
  {
    slug: "amcol-rfq-platform",
    name: "RFQ / Procurement Platform",
    client: "AMCOL Group",
    status: "Internal",
    summary: "A full-stack business application for RFQs, supplier quotations, approvals, notifications and email intake.",
    stack: ["Next.js", "Supabase", "SQL"],
    role: "Developer and requirements contributor",
    overview: "An internal application that replaces a shared inbox for requests for quotation. I contributed to requirements discussions, implementation, testing and troubleshooting.",
    problem: "A shared business inbox received many RFQ, quotation and tender emails that were hard to track and route.",
    work: [
      "RFQ records and supplier quotations.",
      "Approval workflows.",
      "Customer records.",
      "Notifications.",
      "Email-intake automation."
    ],
    results: "In use internally at AMCOL Group. Not publicly accessible."
  }
];

const SYSTEMS = [
  {
    slug: "image-sourcing",
    name: "Automated product image sourcing",
    client: "AMCOL Hardware", status: "Internal",
    summary: "A Python tool that finds, scores and validates product images across a catalogue of thousands of hardware products.",
    stack: ["Python", "Pandas", "OpenPyXL", "Beautiful Soup", "Requests", "Selenium", "Playwright", "Scrapy", "OpenAI API"],
    role: "Developer",
    problem: "Thousands of hardware products lacked images, and manual sourcing was too slow and inconsistent.",
    work: [
      "Prioritized official manufacturer websites.",
      "Implemented product search, image candidate scoring, confidence thresholds, duplicate detection and image validation.",
      "Added batch processing, progress tracking, and pause, resume and stop controls.",
      "Developed both command-line and graphical interfaces.",
      "Separated results into successful, review-required and failed matches.",
      "Used browser automation for websites that standard web requests could not process.",
      "Evaluated token usage, accuracy, API costs and search provider limits for AI-assisted verification."
    ],
    results: "A working batch image-sourcing pipeline with confidence scoring and review workflows."
  },
  {
    slug: "product-data-seo",
    name: "Product data and SEO framework",
    client: "AMCOL Hardware", status: "Internal",
    summary: "Naming conventions, validation rules and data-entry guidelines for a large online hardware catalogue.",
    stack: ["Airtable", "Excel", "SEO", "Data validation", "PIM", "CMS"],
    role: "Data and SEO specialist",
    problem: "The catalogue lacked consistent product naming, SEO metadata and data-entry standards.",
    work: [
      "Standardized product names, IDs, categories, meta descriptions, SEO titles, image alt text and tags.",
      "Created templates to keep brand language consistent.",
      "Developed data validation and quality-control rules.",
      "Wrote instructions for employees entering product data.",
      "Prepared product data for publishing through the administrative backend."
    ],
    results: "A reusable SEO and data framework that keeps thousands of products consistent."
  }
];

const ALL = [...SITES, ...SYSTEMS];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const lamp = (s) => `<span class="lamp lamp-${s.toLowerCase()}"></span>${esc(s)}`;

// ---- Case notes dialog (deep-linkable via #case/<slug>) ----
const dialog = document.getElementById("caseDialog");
const caseBody = document.getElementById("caseBody");
const part = (title, html) => html ? `<div><h3>${title}</h3>${html}</div>` : "";

function openCase(slug) {
  const s = ALL.find((x) => x.slug === slug);
  if (!s) return;
  caseBody.innerHTML = `
    <div class="case-in">
      <div class="case-top">
        <p class="site-status">${lamp(s.status)}</p>
        <button class="btn" data-close>Close</button>
      </div>
      <h2 id="caseTitle">${esc(s.name)}</h2>
      <p class="case-sum">${esc(s.summary)}</p>
      ${s.url ? `<div class="actions"><a class="btn btn-solid" href="${s.url}" target="_blank" rel="noopener">Visit site</a></div>` : ""}
      <div class="case-grid">
        <div class="case-main">
          ${part("Overview", s.overview && `<p>${esc(s.overview)}</p>`)}
          ${part("The problem", s.problem && `<p>${esc(s.problem)}</p>`)}
          ${part("What I did", `<ul>${s.work.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`)}
          ${part("Approach", s.solution && `<p>${esc(s.solution)}</p>`)}
          ${part("Outcome", s.results && `<p>${esc(s.results)}</p>`)}
        </div>
        <aside class="case-side">
          <div><h3>Client</h3><p>${esc(s.client)}</p></div>
          <div><h3>My role</h3><p>${esc(s.role)}</p></div>
          <div><h3>Built with</h3><ul>${s.stack.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
        </aside>
      </div>
    </div>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open]");
  if (opener) location.hash = "case/" + opener.dataset.open;
});
dialog.addEventListener("click", (e) => {
  if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
});
dialog.addEventListener("close", () => {
  if (location.hash.startsWith("#case/")) history.replaceState(null, "", location.pathname);
});
function route() {
  if (location.hash.startsWith("#case/")) openCase(location.hash.slice(6));
  else if (dialog.open) dialog.close();
}
window.addEventListener("hashchange", route);

// ---- Per-page setup: runs on first load and after every page turn ----
const CONTACT_EMAIL = "justinsuchit37@gmail.com";
function init() {
  const board = document.getElementById("board");
  if (board) {
    board.innerHTML = SITES.map((s) => `
      <article class="site">
        <p class="site-status">${lamp(s.status)}</p>
        <div>
          <button class="site-name" data-open="${s.slug}" aria-haspopup="dialog">${esc(s.name)}</button>
          <p class="site-client">${esc(s.client)}</p>
          <p class="site-desc">${esc(s.summary)}</p>
        </div>
        <p class="site-stack">${s.stack.slice(0, 4).map(esc).join(", ")}</p>
        <div class="site-links">
          ${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">Visit site</a>` : ""}
          <button data-open="${s.slug}" aria-haspopup="dialog">Case notes</button>
        </div>
      </article>`).join("");
    document.getElementById("systems").innerHTML = SYSTEMS.map((s) => `
      <button class="system" data-open="${s.slug}" aria-haspopup="dialog">
        <b>${esc(s.name)}</b><span>${esc(s.summary)}</span>
      </button>`).join("");
  }
  const form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const subject = `${f.get("reason")} from ${f.get("name")}`;
    const body = [
      f.get("message"), "",
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      f.get("company") ? `Company: ${f.get("company")}` : null
    ].filter((l) => l !== null).join("\n");
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("formNote").textContent = `Email draft opened. If nothing happened, write to ${CONTACT_EMAIL} directly.`;
  });
  route();
}

// ---- Page turns: links between pages flip like a book instead of reloading ----
const PAGES = ["index.html", "websites.html", "experience.html", "skills.html", "education.html", "contact.html"];
const pageIndex = (pathname) => {
  let file = pathname.split("/").pop() || "index.html";
  if (!file.includes(".")) file += ".html";
  return PAGES.indexOf(file);
};
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cache = new Map();
const load = (url) => {
  if (!cache.has(url)) cache.set(url, fetch(url).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); }));
  return cache.get(url);
};
let current = pageIndex(location.pathname);
let turning = false;

function setRail(i) {
  document.querySelectorAll("#rail li").forEach((li, n) => {
    li.className = n === i ? "now" : n < i ? "passed" : "";
    const a = li.querySelector("a");
    if (n === i) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}
const play = (el, cls, ms) => new Promise((done) => {
  el.classList.add(cls);
  const t = setTimeout(done, ms + 150);
  el.addEventListener("animationend", (e) => { if (e.target === el) { clearTimeout(t); done(); } }, { once: true });
});
const aimPerspective = () => {
  const stage = document.querySelector(".stage");
  stage.style.perspectiveOrigin = `50% ${window.scrollY + window.innerHeight / 2 - stage.offsetTop}px`;
};

async function turnTo(href, push) {
  const url = new URL(href, location.href);
  const to = pageIndex(url.pathname);
  if (to < 0 || turning) return;
  turning = true;
  let next;
  try {
    const doc = new DOMParser().parseFromString(await load(url.pathname), "text/html");
    next = doc.querySelector("main");
    if (!next) throw new Error("no main");
    document.title = doc.title;
  } catch (err) {
    location.href = url.href; // e.g. opened from a file: fall back to a normal page load
    return;
  }
  const dir = to >= current ? "fwd" : "back";
  const old = document.querySelector("main");
  const animate = !reducedMotion.matches;
  if (dialog.open) dialog.close();
  setRail(to);
  if (animate) { aimPerspective(); await play(old, "out-" + dir, 420); }
  next = document.importNode(next, true);
  old.replaceWith(next);
  if (push) history.pushState(null, "", url.pathname + url.hash);
  window.scrollTo({ top: 0, behavior: "instant" });
  current = to;
  init();
  if (animate) { aimPerspective(); await play(next, "in-" + dir, 500); next.classList.remove("in-" + dir); }
  next.focus({ preventScroll: true });
  turning = false;
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a || a.target || a.hasAttribute("download") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || pageIndex(url.pathname) < 0) return;
  e.preventDefault();
  if (pageIndex(url.pathname) === current) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  turnTo(url.href, true);
});
document.addEventListener("pointerover", (e) => {
  const a = e.target.closest && e.target.closest("a[href]");
  if (!a || a.target) return;
  const url = new URL(a.href, location.href);
  if (url.origin === location.origin && url.protocol !== "file:" && pageIndex(url.pathname) >= 0) load(url.pathname).catch(() => cache.delete(url.pathname));
});
window.addEventListener("popstate", () => {
  if (pageIndex(location.pathname) !== current) turnTo(location.href, false);
});
document.addEventListener("keydown", (e) => {
  if (dialog.open || e.metaKey || e.ctrlKey || e.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
  const target = PAGES[current + step];
  if (step && target) turnTo(target, true);
});

init();
document.getElementById("year").textContent = new Date().getFullYear();
