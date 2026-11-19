// Project Data based on the user's 10 selected Figma UI/UX designs
const projects = [
  {
    id: 1,
    title: "FinTech / Banking App",
    category: "fintech",
    categoryLabel: "Mobile App & FinTech",
    iconColor: "#6366f1",
    tagline: "Next-generation personal finance & wealth management platform",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#0b101b"/>
        <circle cx="200" cy="100" r="80" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4"/>
        <rect x="130" y="45" width="140" height="110" rx="14" fill="#182234" stroke="rgba(255,255,255,0.15)"/>
        <rect x="150" y="65" width="60" height="8" rx="4" fill="#818cf8"/>
        <rect x="150" y="85" width="100" height="14" rx="4" fill="#f8fafc"/>
        <rect x="150" y="115" width="40" height="6" rx="3" fill="#64748b"/>
        <rect x="220" y="115" width="30" height="6" rx="3" fill="#22c55e"/>
        <circle cx="245" cy="70" r="10" fill="#38bdf8" opacity="0.8"/>
      </svg>
    `,
    features: [
      "Mobile banking dashboard",
      "Account balance & transactions",
      "Money transfer & peer pay",
      "Spending analytics & insights",
      "Cards & payment security management"
    ],
    overview: "Designed an intuitive banking experience empowering users to seamlessly monitor account health, execute cross-border transfers in two taps, and analyze expenditure trends with interactive visual charts.",
    tools: ["Figma", "Design Systems", "Prototyping", "User Research"],
    deliverables: ["High-fidelity Prototypes", "Micro-interactions", "Design System UI Kit", "Component Library"]
  },
  {
    id: 2,
    title: "E-Commerce Shopping App",
    category: "ecommerce",
    categoryLabel: "Retail & E-Commerce",
    iconColor: "#ec4899",
    tagline: "Frictionless shopping journey tailored for high retention",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#140d1a"/>
        <circle cx="300" cy="60" r="90" fill="#ec4899" opacity="0.08"/>
        <rect x="120" y="40" width="160" height="120" rx="16" fill="#1c1624" stroke="rgba(236,72,153,0.3)"/>
        <rect x="140" y="55" width="120" height="50" rx="8" fill="#261e33"/>
        <rect x="140" y="115" width="80" height="10" rx="4" fill="#f8fafc"/>
        <rect x="140" y="132" width="45" height="8" rx="4" fill="#ec4899"/>
        <circle cx="245" cy="130" r="12" fill="#ec4899"/>
      </svg>
    `,
    features: [
      "Dynamic product discovery",
      "Smart faceted search & filters",
      "Rich product details & previews",
      "Streamlined cart & one-click checkout",
      "Personalized wishlist & collections"
    ],
    overview: "Redefined mobile retail flow focused on lightning-fast product discovery, clear visual hierarchy, and an optimized checkout funnel designed to reduce cart abandonment.",
    tools: ["Figma", "User Journey Mapping", "Wireframing", "A/B Testing"],
    deliverables: ["Product Detail Spec", "Checkout Flow Flowchart", "Responsive Mobile Screens"]
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "saas",
    categoryLabel: "Enterprise & Web App",
    iconColor: "#38bdf8",
    tagline: "Enterprise data visualization and KPI intelligence cockpit",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#09141f"/>
        <rect x="90" y="40" width="220" height="120" rx="12" fill="#0f2236" stroke="rgba(56,189,248,0.25)"/>
        <path d="M110 130 Q 150 70, 190 100 T 280 60" stroke="#38bdf8" stroke-width="3" fill="none"/>
        <circle cx="190" cy="100" r="4" fill="#38bdf8"/>
        <circle cx="280" cy="60" r="4" fill="#38bdf8"/>
        <rect x="110" y="55" width="40" height="14" rx="4" fill="rgba(255,255,255,0.1)"/>
        <rect x="160" y="55" width="40" height="14" rx="4" fill="rgba(255,255,255,0.1)"/>
      </svg>
    `,
    features: [
      "Customizable data visualization widgets",
      "Real-time KPI cards & telemetry",
      "Interactive multi-axis charts",
      "Automated report generation",
      "Deep query filters and tabular sorting"
    ],
    overview: "Created a modular analytics workspace that turns dense business datasets into actionable executive insights with digestible charts, clear filters, and high-density tables.",
    tools: ["Figma", "Information Architecture", "Data Visualization", "Tokens"],
    deliverables: ["Design Tokens", "B2B SaaS Dashboard UI", "Component Hierarchy"]
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "mobile",
    categoryLabel: "On-Demand & Mobile",
    iconColor: "#f97316",
    tagline: "Ultra-fast food discovery with real-time dispatch tracking",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#17100b"/>
        <circle cx="200" cy="100" r="60" stroke="#f97316" stroke-width="2" opacity="0.3"/>
        <rect x="140" y="45" width="120" height="110" rx="16" fill="#241810" stroke="rgba(249,115,22,0.3)"/>
        <circle cx="200" cy="80" r="22" fill="#f97316" opacity="0.2"/>
        <circle cx="200" cy="80" r="12" fill="#f97316"/>
        <rect x="160" y="115" width="80" height="8" rx="4" fill="#f8fafc"/>
        <rect x="175" y="130" width="50" height="6" rx="3" fill="#f97316"/>
      </svg>
    `,
    features: [
      "Curated restaurant discovery & ratings",
      "Visual categorized menus",
      "Ingredient & meal customization modal",
      "Live GPS order dispatch tracking",
      "Multi-method swift payment processing"
    ],
    overview: "Formulated a vibrant culinary ordering experience with emphasis on appetite-driven visuals, seamless cart customizer modifiers, and interactive GPS order tracking.",
    tools: ["Figma", "User Empathy Mapping", "Interaction Design"],
    deliverables: ["Delivery Driver & Customer Flow", "Interactive Tracking Prototype"]
  },
  {
    id: 5,
    title: "Travel Booking App",
    category: "mobile",
    categoryLabel: "Hospitality & Travel",
    iconColor: "#06b6d4",
    tagline: "Effortless travel planner and multi-destination booking portal",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#081419"/>
        <path d="M120 140 C 180 60, 240 160, 290 70" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4"/>
        <rect x="130" y="50" width="140" height="100" rx="14" fill="#10252e" stroke="rgba(6,182,212,0.3)"/>
        <rect x="150" y="70" width="70" height="8" rx="4" fill="#f8fafc"/>
        <rect x="150" y="88" width="100" height="6" rx="3" fill="#64748b"/>
        <circle cx="240" cy="120" r="14" fill="#06b6d4"/>
      </svg>
    `,
    features: [
      "Multi-carrier flight booking & seat selection",
      "Hotel & luxury stay search",
      "Curated destination discovery stories",
      "Centralized booking management",
      "Interactive day-by-day travel itinerary"
    ],
    overview: "Built an immersive travel companion app highlighting destination photography, clear pricing transparency, and an all-in-one itinerary view for modern globetrotters.",
    tools: ["Figma", "Cross-Platform Design", "Prototyping"],
    deliverables: ["Complete Booking Workflow", "Trip Itinerary Management UI"]
  },
  {
    id: 6,
    title: "Healthcare & Telehealth App",
    category: "health",
    categoryLabel: "Digital Health & Medical",
    iconColor: "#10b981",
    tagline: "Empathetic healthcare accessibility and patient wellness hub",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#091814"/>
        <rect x="130" y="45" width="140" height="110" rx="14" fill="#122921" stroke="rgba(16,185,129,0.3)"/>
        <circle cx="200" cy="80" r="18" fill="rgba(16,185,129,0.2)"/>
        <path d="M200 73 V87 M193 80 H207" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        <rect x="155" y="112" width="90" height="8" rx="4" fill="#f8fafc"/>
        <rect x="170" y="128" width="60" height="6" rx="3" fill="#6ee7b7"/>
      </svg>
    `,
    features: [
      "Specialist doctor discovery & verified ratings",
      "Instant video/clinic appointment booking",
      "Unified patient health records dashboard",
      "Digital medical reports & diagnostic viewer",
      "Prescription management & refill reminders"
    ],
    overview: "Engineered a calm, accessible user interface ensuring patients of all age groups can effortlessly book specialist consultations, view lab results, and manage recurring medications.",
    tools: ["Figma", "Accessibility (WCAG 2.1)", "User Testing"],
    deliverables: ["WCAG Compliant Design System", "Patient Portal Flow"]
  },
  {
    id: 7,
    title: "HR / Employee Management System",
    category: "saas",
    categoryLabel: "Enterprise Software",
    iconColor: "#8b5cf6",
    tagline: "Unified workspace management and workplace culture cockpit",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#120e21"/>
        <rect x="100" y="45" width="200" height="110" rx="12" fill="#1a1532" stroke="rgba(139,92,246,0.3)"/>
        <circle cx="135" cy="75" r="14" fill="#8b5cf6"/>
        <rect x="160" y="68" width="90" height="8" rx="4" fill="#f8fafc"/>
        <rect x="160" y="82" width="60" height="6" rx="3" fill="#a78bfa"/>
        <line x1="120" y1="110" x2="280" y2="110" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <rect x="120" y="125" width="50" height="12" rx="4" fill="rgba(139,92,246,0.2)"/>
        <rect x="180" y="125" width="50" height="12" rx="4" fill="rgba(139,92,246,0.2)"/>
      </svg>
    `,
    features: [
      "Interactive employee directory & org chart",
      "Automated attendance & check-in tracker",
      "Leave request & approval workflows",
      "Employee performance & 360 review analytics",
      "Comprehensive HR admin control center"
    ],
    overview: "Streamlined operational HR overhead by designing an intuitive portal combining organizational transparency, quick leave approvals, and employee recognition metrics.",
    tools: ["Figma", "Workflow Optimization", "UX Strategy"],
    deliverables: ["Role-Based Access Matrix", "HR Command Dashboard"]
  },
  {
    id: 8,
    title: "AI SaaS Product",
    category: "saas",
    categoryLabel: "Artificial Intelligence",
    iconColor: "#f43f5e",
    tagline: "Conversational intelligence workbench for creative & coding workflows",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#180b12"/>
        <rect x="110" y="45" width="180" height="110" rx="14" fill="#26101c" stroke="rgba(244,63,94,0.3)"/>
        <rect x="130" y="65" width="110" height="18" rx="6" fill="#f43f5e" opacity="0.25"/>
        <rect x="160" y="95" width="110" height="18" rx="6" fill="rgba(255,255,255,0.08)"/>
        <circle cx="140" cy="133" r="6" fill="#f43f5e"/>
        <circle cx="156" cy="133" r="6" fill="#fb7185"/>
        <circle cx="172" cy="133" r="6" fill="#fda4af"/>
      </svg>
    `,
    features: [
      "Natural language AI chat interface",
      "Prompt library & recipe presets",
      "Session history with semantic search",
      "Multi-modal file & document upload",
      "Formatted AI-generated results & code runner"
    ],
    overview: "Designed a clean, distraction-free conversational canvas with instant snippet copy, prompt categorization, and contextual model switching.",
    tools: ["Figma", "Human-AI Interaction", "Micro-copy"],
    deliverables: ["AI Studio Interface", "Interactive Chat States", "Prompt Management UI"]
  },
  {
    id: 9,
    title: "Education / LMS Platform",
    category: "education",
    categoryLabel: "EdTech & Learning",
    iconColor: "#eab308",
    tagline: "Gamified learning environment for lifelong skill masteries",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#161309"/>
        <rect x="110" y="40" width="180" height="120" rx="14" fill="#241e0d" stroke="rgba(234,179,8,0.3)"/>
        <rect x="130" y="55" width="140" height="55" rx="8" fill="#362c12"/>
        <polygon points="195,75 208,82 195,90" fill="#eab308"/>
        <rect x="130" y="125" width="90" height="8" rx="4" fill="#f8fafc"/>
        <rect x="130" y="140" width="140" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="130" y="140" width="90" height="4" rx="2" fill="#eab308"/>
      </svg>
    `,
    features: [
      "Student learning progression dashboard",
      "Exploratory course catalog & filtering",
      "Distraction-free video learning interface",
      "Visual milestones & progress tracking",
      "Interactive quiz & assessment interface"
    ],
    overview: "Crafted a motivating EdTech platform incorporating progress bars, milestone celebrations, and focus-mode video players to elevate student course completion rates.",
    tools: ["Figma", "Gamification UI", "Instructional Flow"],
    deliverables: ["Course Player UI", "Gamification Milestone Badges", "Mobile LMS"]
  },
  {
    id: 10,
    title: "Real Estate Platform",
    category: "web",
    categoryLabel: "PropTech & Marketplace",
    iconColor: "#14b8a6",
    tagline: "Modern spatial discovery for residential and commercial realty",
    bannerSvg: `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#081615"/>
        <rect x="100" y="45" width="200" height="110" rx="12" fill="#0f2623" stroke="rgba(20,184,166,0.3)"/>
        <circle cx="160" cy="85" r="8" fill="#14b8a6"/>
        <circle cx="230" cy="110" r="8" fill="#14b8a6"/>
        <path d="M120 120 L160 85 L200 100 L230 75 L270 115" stroke="rgba(20,184,166,0.4)" stroke-width="2" fill="none"/>
        <rect x="120" y="58" width="60" height="8" rx="4" fill="#f8fafc"/>
      </svg>
    `,
    features: [
      "Interactive property listings with high-res galleries",
      "Dynamic split map view with neighborhood data",
      "Precision filters (amenities, price, square footage)",
      "Comprehensive property architectural details",
      "Frictionless booking for site & virtual 3D visits"
    ],
    overview: "Engineered an upscale real estate discovery interface pairing split-screen map navigation with instant scheduling for physical tours and 3D architectural walkthroughs.",
    tools: ["Figma", "Spatial UX", "Responsive Layouts"],
    deliverables: ["Interactive Map Search", "Virtual Tour Modals", "Listing Specifications"]
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects);
  initFilters();
  initModal();
  initScrollAnimations();
  initNavbarScroll();
});

// Render Projects Cards
function renderProjects(items) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = "";

  items.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card reveal active";
    card.dataset.id = proj.id;

    const featureItems = proj.features.map(f => `<li>${f}</li>`).join("");

    card.innerHTML = `
      <div class="project-banner">
        <div class="project-number">0${proj.id}</div>
        <div class="project-banner-svg">${proj.bannerSvg}</div>
      </div>
      <div class="project-content">
        <span class="project-category">${proj.categoryLabel}</span>
        <h3 class="project-title">${proj.title}</h3>
        <ul class="project-features">
          ${featureItems}
        </ul>
        <div class="project-footer">
          <span style="font-size: 0.8rem; color: var(--text-dim); font-weight: 500;">Figma Prototype</span>
          <span class="view-case-study-btn">Explore Case Study →</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openCaseStudyModal(proj));
    container.appendChild(card);
  });
}

// Filter Functionality
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      if (filter === "all") {
        renderProjects(projects);
      } else {
        const filtered = projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

// Modal handling
function initModal() {
  const overlay = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
    }
  });
}

function openCaseStudyModal(proj) {
  const overlay = document.getElementById("caseStudyModal");
  const modalContent = document.getElementById("modalBody");
  if (!overlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <span style="font-size: 0.85rem; color: var(--accent-blue); font-weight: 600; text-transform: uppercase;">
        ${proj.categoryLabel}
      </span>
      <span style="color: var(--text-dim);">•</span>
      <span style="font-size: 0.85rem; color: var(--text-dim);">Project #0${proj.id}</span>
    </div>
    <h2 style="font-size: 2rem; margin-bottom: 12px; color: #fff;">${proj.title}</h2>
    <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 24px;">${proj.tagline}</p>
    
    <div style="border-radius: 12px; overflow: hidden; margin-bottom: 28px; border: 1px solid rgba(255,255,255,0.08); background: #000;">
      ${proj.bannerSvg}
    </div>

    <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: #f8fafc;">Design Overview</h4>
    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px;">
      ${proj.overview}
    </p>

    <h4 style="font-size: 1.1rem; margin-bottom: 12px; color: #f8fafc;">Key Modules & Screens</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;">
      ${proj.features.map(f => `
        <div style="padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; font-size: 0.85rem; color: #e2e8f0; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--accent-indigo); font-weight: bold;">✓</span> ${f}
        </div>
      `).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-bottom: 28px;">
      <div>
        <span style="display: block; font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px;">Tools & Methodologies</span>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${proj.tools.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <div>
        <span style="display: block; font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px;">Key Deliverables</span>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${proj.deliverables.map(d => `<span class="tag">${d}</span>`).join("")}
        </div>
      </div>
    </div>

    <div style="display: flex; gap: 14px;">
      <a href="https://www.figma.com" target="_blank" class="btn-primary" style="flex: 1; justify-content: center; font-size: 0.9rem;">
        Open In Figma ↗
      </a>
      <button onclick="document.getElementById('caseStudyModal').classList.remove('active')" class="btn-secondary" style="cursor: pointer; font-size: 0.9rem;">
        Back to Gallery
      </button>
    </div>
  `;

  overlay.classList.add("active");
}

// Scroll Animations
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    reveals.forEach(element => {
      const top = element.getBoundingClientRect().top;
      if (top < triggerBottom) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal();
}

// Navbar Glass Effect on Scroll
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar .nav-container");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.background = "rgba(10, 12, 16, 0.75)";
      navbar.style.backdropFilter = "blur(20px)";
      navbar.style.webkitBackdropFilter = "blur(20px)";
      navbar.style.border = "1px solid rgba(255, 255, 255, 0.12)";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
      navbar.style.background = "var(--glass-bg)";
      navbar.style.backdropFilter = "blur(16px)";
      navbar.style.webkitBackdropFilter = "blur(16px)";
      navbar.style.border = "1px solid var(--glass-border)";
      navbar.style.boxShadow = "none";
    }
  });
}
