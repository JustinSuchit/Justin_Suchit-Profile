// ---- Project data: edit here to add or change projects ----
const PROJECTS = [
  {
    slug: "amcol-hardware-website-modernization",
    title: "AMCOL Hardware Website Modernization",
    category: "Web Development", status: "In Progress", date: "May 2024",
    url: "https://www.amcolhardwarett.com/",
    summary: "Contributed to the modernization and redevelopment planning of a large hardware and industrial supply website containing more than 20,000 products.",
    overview: "A large-scale website modernization effort covering product data extraction, cleaning, SEO standardization, and migration planning for a catalogue of over 20,000 hardware and industrial supply products.",
    problem: "A legacy PHP-based hardware website with over 20,000 products needed modernization, cleaner product data, better SEO, and a structured migration path to a modern platform.",
    role: "Web developer and product data specialist",
    work: [
      "Extracted and organized product names, URLs, IDs, categories, brands, specifications, and image addresses.",
      "Cleaned and managed large datasets using Excel and Airtable.",
      "Created standardized SEO titles, meta descriptions, image alt text, categories, and tags.",
      "Developed processes for transferring approved product information into the website.",
      "Investigated replacing the legacy PHP website with a modern HTML or JavaScript-based platform.",
      "Reviewed hosting, payment integration, inventory integration, and migration requirements.",
      "Created data-entry guidelines and quality-control procedures.",
      "Designed workflows targeting at least 150 completed product entries per employee per day."
    ],
    solution: "Built standardized data pipelines using Excel, Airtable, and Python scraping, with documented quality-control procedures for the team.",
    results: "Structured framework for managing 20,000+ product records with standardized SEO and quality control.",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Python", "Excel", "Airtable", "cPanel", "InMotion Hosting", "SEO", "Web Scraping"]
  },
  {
    slug: "amcol-industrial-website",
    title: "AMCOL Industrial Website",
    category: "Web Development", status: "Completed", date: "August 2024",
    url: "https://www.amcolindustrial.com/",
    summary: "Contributed to the development, testing, SEO improvement, and optimization of a modern industrial supply website.",
    overview: "Development, testing, SEO, and optimization work on a modern Next.js industrial supply website, including navigation fixes, metadata, and deployment evaluation.",
    problem: "The industrial supply website had navigation issues where clickable cards redirected users to general product pages instead of specific categories, along with metadata and responsive layout gaps.",
    role: "Front-end developer and QA",
    work: [
      "Reviewed clickable cards, buttons, navigation, category links, and brand links.",
      "Corrected issues where cards redirected users to general product pages instead of specific categories.",
      "Improved page titles, metadata, favicon configuration, and responsive layouts.",
      "Assisted with local development, testing, debugging, GitHub integration, and deployment.",
      "Helped evaluate Vercel, InMotion Hosting, and WordPress as possible hosting platforms."
    ],
    solution: "Fixed card redirect logic, standardized metadata, and established a GitHub-based deployment workflow.",
    results: "Improved navigation accuracy, SEO metadata, and responsive layouts across the site.",
    stack: ["Next.js", "React", "JavaScript", "HTML", "CSS", "GitHub", "Vercel", "Cursor", "Codex"]
  },
  {
    slug: "caribbean-transport-services-website",
    title: "Caribbean Transport Services Website",
    category: "Web Development", status: "Completed", date: "October 2024",
    url: "https://www.caribbeantransportservices.com/",
    summary: "Developed and supported a responsive transportation, logistics, and haulage services website.",
    overview: "A responsive website for a transportation, logistics, and haulage company, including service pages, SEO configuration, sitemaps, and an admin login approach.",
    problem: "A logistics and haulage company needed a modern, responsive website with proper SEO, service pages, and a secure admin area.",
    role: "Web developer",
    work: [
      "Created and improved service pages.",
      "Worked on transportation coverage, cargo services, quotation requests, and client information.",
      "Configured SEO metadata, favicons, social-sharing images, sitemaps, and navigation.",
      "Corrected anchor-link and sitemap issues.",
      "Assisted with domain configuration and deployment.",
      "Designed an approach for a protected admin login using a private URL.",
      "Investigated Supabase authentication, rate limiting, dashboard security, and access control."
    ],
    solution: "Configured full SEO metadata and sitemaps, fixed anchor links, and designed a private-URL admin access strategy with Supabase auth investigation.",
    results: "A live, responsive, SEO-optimized logistics website with a secured admin access approach.",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "GitHub", "Vercel", "SEO"]
  },
  {
    slug: "automated-product-image-sourcing-system",
    title: "Automated Product Image Sourcing System",
    category: "Automation", status: "Completed", date: "November 2024",
    summary: "A Python application that searches for product images across a catalogue containing thousands of hardware products.",
    overview: "A Python-based automation tool that searches, scores, and validates product images across a large hardware catalogue, prioritizing official manufacturer sources.",
    problem: "Thousands of hardware products lacked images, and manual sourcing was too slow and inconsistent.",
    role: "Developer",
    work: [
      "Prioritized official manufacturer websites.",
      "Implemented product search, image candidate scoring, confidence thresholds, duplicate detection, and image validation.",
      "Added batch processing, progress tracking, and pause, resume, and stop controls.",
      "Developed both command-line and graphical interfaces.",
      "Separated results into successful, review-required, and failed image matches.",
      "Used browser automation for websites that could not be processed through standard web requests.",
      "Investigated AI-assisted search and image verification.",
      "Evaluated token usage, accuracy, API costs, and search provider limitations."
    ],
    solution: "Built a modular Python tool combining web scraping, browser automation, and AI verification with batch controls and result categorization.",
    results: "A functional batch image-sourcing pipeline with confidence scoring and review workflows.",
    stack: ["Python", "Pandas", "OpenPyXL", "Beautiful Soup", "Requests", "Selenium", "Playwright", "Scrapy", "OpenAI API", "Excel"]
  },
  {
    slug: "rfq-email-automation-system",
    title: "RFQ Email Automation System",
    category: "Automation", status: "Planning", date: "December 2024",
    summary: "An automated Request for Quotation workflow for a shared business email inbox.",
    overview: "A designed automation workflow that monitors a shared inbox for RFQ-related emails and extracts structured data for tracking and response.",
    problem: "A shared business inbox received many RFQ, quotation, and tender emails that were hard to track and route efficiently.",
    role: "Workflow designer",
    work: [
      "Designed a system to monitor incoming emails.",
      "Identified keywords such as RFQ, quotation, tender, job, site visit, and jobsite walkthrough.",
      "Planned AI extraction of customer names, companies, deadlines, requested products, attachments, and contact information.",
      "Designed structured storage using Excel, Airtable, or a database.",
      "Created workflow instructions for Microsoft Power Automate and n8n.",
      "Considered duplicate detection, status tracking, notifications, review stages, and attachment processing."
    ],
    solution: "Designed a keyword-triggered monitoring and AI extraction pipeline with structured storage and review stages.",
    results: "A complete workflow design ready for implementation in Power Automate or n8n.",
    stack: ["Microsoft Power Automate", "n8n", "Outlook", "Excel", "Airtable", "AI extraction", "Workflow Automation"]
  },
  {
    slug: "product-data-and-seo-management-system",
    title: "Product Data and SEO Management System",
    category: "Data Management", status: "Completed", date: "July 2024",
    summary: "A structured product data and SEO framework for a large online hardware catalogue.",
    overview: "A standardized product data and SEO framework including naming conventions, validation rules, and data-entry guidelines for a large online catalogue.",
    problem: "A large online hardware catalogue lacked consistent product naming, SEO metadata, and data-entry standards.",
    role: "Data and SEO specialist",
    work: [
      "Standardized product names, product IDs, categories, meta descriptions, SEO titles, image alt text, and tags.",
      "Created templates to maintain consistent brand language.",
      "Developed data validation and quality-control rules.",
      "Created instructions for employees entering product data.",
      "Prepared product data for publishing through an administrative backend."
    ],
    solution: "Built templates, validation rules, and documented guidelines for consistent product data entry and publishing.",
    results: "A reusable SEO and data framework ensuring consistency across thousands of products.",
    stack: ["Airtable", "Excel", "SEO", "Data Validation", "PIM", "CMS"]
  },
  // In-course projects from the resume
  {
    slug: "kalloos-ecommerce-website",
    title: "Kalloos E-Commerce Website",
    category: "Coursework", status: "Coursework", date: "UWI",
    summary: "A responsive e-commerce website with a product catalogue, database integration, and SEO best practices.",
    overview: "An in-course project at UWI St. Augustine: a responsive e-commerce site with a product catalogue backed by a database and built with SEO practices in mind.",
    role: "Student developer",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "SEO"]
  },
  {
    slug: "network-administration-project",
    title: "Network Administration Project",
    category: "Coursework", status: "Coursework", date: "UWI",
    summary: "A segmented, redundant network design built and tested in Cisco Packet Tracer.",
    overview: "An in-course project covering VLANs, inter-VLAN routing, RIPv2, and EtherChannel to deliver network segmentation and redundancy in Cisco Packet Tracer.",
    role: "Network designer",
    stack: ["Cisco Packet Tracer", "VLANs", "Inter-VLAN Routing", "RIPv2", "EtherChannel"]
  },
  {
    slug: "database-systems-project",
    title: "Database Systems Project",
    category: "Coursework", status: "Coursework", date: "UWI",
    summary: "Relational database design with normalization, SQL queries, and reporting.",
    overview: "An in-course project covering relational database design, normalization, SQL querying, and reporting.",
    role: "Database designer",
    stack: ["SQL", "Database Design", "Normalization", "Reporting"]
  }
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const statusClass = (s) => s.toLowerCase().replace(/\s+/g, "-");
const tags = (list, max) => `<ul class="tags">${list.slice(0, max || list.length).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

// ---- Project grid + filter ----
const grid = document.getElementById("projectGrid");
function renderProjects(filter) {
  const list = PROJECTS.filter((p) => filter === "All" ? true : p.category === filter);
  grid.innerHTML = list.map((p) => `
    <button class="card project" data-slug="${p.slug}" aria-haspopup="dialog">
      <span class="project-meta">
        <span class="status ${statusClass(p.status)}">${esc(p.status)}</span>
        <span>${esc(p.category)}</span><span>${esc(p.date)}</span>
        ${p.url ? '<span class="live">● Live</span>' : ""}
      </span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      ${tags(p.stack, 6)}
      <span class="more">View case file →</span>
    </button>`).join("");
}
renderProjects("All");

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  renderProjects(btn.dataset.filter);
});

// ---- Project detail dialog (deep-linkable via #project/<slug>) ----
const dialog = document.getElementById("projectDialog");
const dialogBody = document.getElementById("dialogBody");
const block = (title, html) => html ? `<div><h3>${title}</h3>${html}</div>` : "";

function openProject(slug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return;
  dialogBody.innerHTML = `
    <div class="dlg">
      <div class="dlg-top">
        <span class="project-meta">
          <span class="status ${statusClass(p.status)}">${esc(p.status)}</span>
          <span>${esc(p.category)}</span><span>${esc(p.date)}</span>
        </span>
        <button class="dlg-close" data-close>← Back to projects</button>
      </div>
      <h2 id="dlgTitle">${esc(p.title)}</h2>
      <p class="dlg-summary">${esc(p.summary)}</p>
      ${p.url ? `<div class="cta-row"><a class="btn btn-primary" href="${p.url}" target="_blank" rel="noopener">Visit website ↗</a></div>` : ""}
      <div class="dlg-body">
        <div class="dlg-main">
          ${block("Overview", p.overview && `<p>${esc(p.overview)}</p>`)}
          ${block("Problem / Business requirement", p.problem && `<p>${esc(p.problem)}</p>`)}
          ${block("My role", p.role && `<p>${esc(p.role)}</p>`)}
          ${block("Responsibilities &amp; achievements", p.work && `<ul class="bullets">${p.work.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`)}
          ${block("Solutions", p.solution && `<p>${esc(p.solution)}</p>`)}
          ${block("Results", p.results && `<p>${esc(p.results)}</p>`)}
        </div>
        <aside class="spec">
          <b>SPEC SHEET</b>
          <dl><dt>Tech stack</dt><dd>${tags(p.stack)}</dd></dl>
          <dl><dt>Category</dt><dd>${esc(p.category)}</dd></dl>
          <dl><dt>Status</dt><dd>${esc(p.status)}</dd></dl>
          <dl><dt>Date</dt><dd>${esc(p.date)}</dd></dl>
        </aside>
      </div>
    </div>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".project");
  if (card) location.hash = "project/" + card.dataset.slug;
});
dialog.addEventListener("click", (e) => {
  if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
});
dialog.addEventListener("close", () => {
  if (location.hash.startsWith("#project/")) history.replaceState(null, "", "#projects");
});
function route() {
  if (location.hash.startsWith("#project/")) openProject(location.hash.slice(9));
  else if (dialog.open) dialog.close();
}
window.addEventListener("hashchange", route);
route();

// ---- Header, mobile menu, active link ----
const header = document.getElementById("siteHeader");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  header.classList.toggle("scrolled", open || window.scrollY > 20);
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

if ("IntersectionObserver" in window) {
  const links = [...navLinks.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll(".section .card, .trajectory li, .section h2").forEach((el) => { el.classList.add("reveal"); reveal.observe(el); });
}

// ---- Contact form: opens the visitor's email app with the message filled in ----
const CONTACT_EMAIL = "justinsuchit37@gmail.com";
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = f.get("subject") || `${f.get("reason")} — from ${f.get("name")}`;
  const body = [
    f.get("message"), "",
    "—",
    `Name: ${f.get("name")}`,
    `Email: ${f.get("email")}`,
    f.get("company") ? `Company: ${f.get("company")}` : null,
    `Reason: ${f.get("reason")}`
  ].filter((l) => l !== null).join("\n");
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("formNote").textContent = "Your email app should now be open with the message ready. If nothing happened, email " + CONTACT_EMAIL + " directly.";
});

document.getElementById("year").textContent = new Date().getFullYear();
