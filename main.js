const STORIES = [
  {
    id: 1,
    title: "The Kids Who Remember",
    category: "audio",
    categoryLabel: "Audio Documentary",
    excerpt: "Children and teenagers across Asheville share what it felt like when the water came — and what life looks like now.",
    body: "",
    hasAudio: true,
    audioSrc: "audio/haris.mp3",
    href: "haris.html"
  },
  {
    id: 2,
    title: "Story Title TBD",
    category: "political",
    categoryLabel: "Political",
    excerpt: "Placeholder — political reporting from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 3,
    title: "Story Title TBD",
    category: "cultural",
    categoryLabel: "Cultural",
    excerpt: "Placeholder — cultural story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 4,
    title: "Story Title TBD",
    category: "environmental",
    categoryLabel: "Environmental",
    excerpt: "Placeholder — environmental story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
{
  id: 5,
  title: "Lost and Found",
  category: "cultural",
  categoryLabel: "Cultural",
  excerpt: "After the floodwaters receded, volunteers dedicated themselves to returning the scattered remnants of people's lives.",
  body: "",
  hasAudio: true,
  audioSrc: "audio/soundscape/sydney.wav",
  href: "sydney.html"
},
  {
    id: 6,
    title: "Story Title TBD",
    category: "cultural",
    categoryLabel: "Cultural",
    excerpt: "Placeholder — cultural story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
{
  id: 7,
  title: "Uprooted",
  category: "political",
  categoryLabel: "Housing",
  excerpt: "Amid public funding chaos, post-Helene housing recovery has been slow, uneven and deeply community-driven.",
  body: "",
  hasAudio: false,
  href: "ogden.html"
},
  {
    id: 8,
    title: "Story Title TBD",
    category: "political",
    categoryLabel: "Political",
    excerpt: "Placeholder — political story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 9,
    title: "Story Title TBD",
    category: "cultural",
    categoryLabel: "Cultural",
    excerpt: "Placeholder — cultural story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 10,
    title: "Story Title TBD",
    category: "audio",
    categoryLabel: "Audio",
    excerpt: "Placeholder — audio story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: true,
    audioSrc: ""
  },
  {
    id: 11,
    title: "Story Title TBD",
    category: "environmental",
    categoryLabel: "Environmental",
    excerpt: "Placeholder — environmental story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 12,
    title: "Story Title TBD",
    category: "political",
    categoryLabel: "Political",
    excerpt: "Placeholder — political story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
    id: 13,
    title: "Story Title TBD",
    category: "cultural",
    categoryLabel: "Cultural",
    excerpt: "Placeholder — cultural story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: false
  },
  {
  id: 14,
  title: "FEMA Funding Presents a Fractured Landscape",
  category: "political",
  categoryLabel: "Political",
  excerpt: "Between the DHS shutdown, leadership changes and an uncertain political future, FEMA assistance for Helene survivors is deeply complicated.",
  body: "",
  hasAudio: false,
  href: "ali.html"
},
  {
    id: 15,
    title: "Story Title TBD",
    category: "audio",
    categoryLabel: "Audio",
    excerpt: "Placeholder — audio story from Asheville.",
    body: "Full story coming soon.",
    hasAudio: true,
    audioSrc: ""
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[c]));
}

/* ═══════════════════════════════════════════
   0. SCROLL TO TOP ON EVERY PAGE LOAD
═══════════════════════════════════════════ */
if (history.scrollRestoration) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

const vid = document.getElementById("hero-video");
if (vid) {
  vid.loop = false;
  vid.muted = true;
  vid.play().catch(() => {});

  function unlockAudio() {
    vid.muted = false;
    vid.currentTime = 0;
    vid.play().catch(() => {
      vid.muted = true;
      vid.play().catch(() => {});
    });
  }

  document.addEventListener('mousemove', unlockAudio, { once: true });
  document.addEventListener('scroll', unlockAudio, { once: true });
  document.addEventListener('touchstart', unlockAudio, { once: true });
  document.addEventListener('click', unlockAudio, { once: true });
}
/* ═══════════════════════════════════════════
   2. ABOUT PAGE
═══════════════════════════════════════════ */
const mainSite = document.getElementById("main-site");
const aboutPage = document.getElementById("about-page");
const backBtn = document.getElementById("back-btn");
const navAboutLink = document.getElementById("nav-about-link");

function showAbout(e) {
  if (e) e.preventDefault();
  if (mainSite) mainSite.style.display = "none";
  if (aboutPage) aboutPage.style.display = "block";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showHome() {
  if (aboutPage) aboutPage.style.display = "none";
  if (mainSite) mainSite.style.display = "block";
  window.scrollTo({ top: 0, behavior: "instant" });
}

if (navAboutLink) navAboutLink.addEventListener("click", showAbout);
if (backBtn) backBtn.addEventListener("click", showHome);

/* ═══════════════════════════════════════════
   3. NAV
═══════════════════════════════════════════ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const pastHero = window.scrollY > (window.innerHeight - 120);

  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  }

  const scrollHint = document.querySelector(".scroll-hint");
  if (scrollHint) {
    scrollHint.style.opacity = pastHero ? "0" : "1";
    scrollHint.style.pointerEvents = pastHero ? "none" : "auto";
  }
});

/* ═══════════════════════════════════════════
   4. HAMBURGER
═══════════════════════════════════════════ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const open = navLinks.style.display === "flex";

    Object.assign(navLinks.style, {
      display: open ? "none" : "flex",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      background: "rgba(34,64,80,.97)",
      padding: "1.4rem 2rem",
      gap: "1.1rem"
    });
  });
}

/* ═══════════════════════════════════════════
   5. ANIMATED STAT COUNTERS
═══════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const steps = 60;
  const inc = target / steps;
  let cur = 0;
  let step = 0;

  const t = setInterval(() => {
    step++;
    cur = Math.min(Math.round(inc * step), target);
    el.textContent = cur;
    if (step >= steps) clearInterval(t);
  }, 1800 / steps);
}

const statsGrid = document.querySelector(".stats-grid");

if (statsGrid) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".stat-number").forEach(animateCounter);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 }).observe(statsGrid);
}

/* ═══════════════════════════════════════════
   6. STORY FILTERS
═══════════════════════════════════════════ */
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    document.querySelectorAll(".story-card").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

/* ═══════════════════════════════════════════
   7. STORY MODAL
═══════════════════════════════════════════ */
const modal = document.getElementById("story-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");

function openModal(id) {
  const story = STORIES.find((s) => s.id === id);
  if (!story || !modal || !modalContent) return;

  if (story.href) {
    window.location.href = story.href;
    return;
  }

  const hasPlayableAudio = Boolean(story.audioSrc);

  const audioBlock = story.hasAudio
    ? `
      <div class="modal-audio">
        <span>🎧 ${hasPlayableAudio ? "Listen here" : "Audio coming soon"}</span>
        ${
          hasPlayableAudio
            ? `<audio controls preload="none" src="${escapeHtml(story.audioSrc)}"></audio>`
            : `<span>The player will appear once the audio file is added.</span>`
        }
      </div>
    `
    : "";

  modalContent.innerHTML = `
    <p class="modal-category">${escapeHtml(story.categoryLabel)}</p>
    <h2>${escapeHtml(story.title)}</h2>
    ${story.body
      .split("\n")
      .filter(Boolean)
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("")}
    ${audioBlock}
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".card-read-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(Number(btn.dataset.id));
  });
});

document.querySelectorAll(".story-card").forEach((card) => {
  card.addEventListener("click", () => {
    openModal(Number(card.dataset.id));
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(Number(card.dataset.id));
    }
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
/* ═══════════════════════════════════════════
   RAINFALL TEASER CHART
═══════════════════════════════════════════ */
(function() {
  const canvas = document.getElementById('rainfallViz');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const STATIONS = [
    {name:'Gulf of Mexico',  loc:'Origin',      rain:0.2,  x:0.04},
    {name:'Pensacola, FL',   loc:'FL Panhandle',rain:1.1,  x:0.13},
    {name:'Tallahassee, FL', loc:'Florida',     rain:2.4,  x:0.22},
    {name:'Perry, FL',       loc:'Landfall',    rain:3.8,  x:0.31},
    {name:'Valdosta, GA',    loc:'Georgia',     rain:4.2,  x:0.40},
    {name:'Atlanta, GA',     loc:'Georgia',     rain:5.1,  x:0.49},
    {name:'Greenville, SC',  loc:'Upstate SC',  rain:6.8,  x:0.58},
    {name:'Hendersonville',  loc:'NC Foothills',rain:9.4,  x:0.67},
    {name:'Asheville, NC',   loc:'Blue Ridge',  rain:14.2, x:0.76},
    {name:'Boone, NC',       loc:'High Country',rain:11.6, x:0.85},
    {name:'Dissipation',     loc:'Appalachians',rain:6.2,  x:0.94},
  ];

  const MAXRAIN = 15;
  let prog = 0;
  let hovIdx = -1;
  let started = false;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function setup() {
    const wrap = canvas.parentElement;
    const W = wrap.clientWidth;
    const H = Math.round(W * 0.4);
    canvas.width = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    return { W, H };
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x+r,y); c.lineTo(x+w-r,y); c.arcTo(x+w,y,x+w,y+r,r);
    c.lineTo(x+w,y+h-r); c.arcTo(x+w,y+h,x+w-r,y+h,r);
    c.lineTo(x+r,y+h); c.arcTo(x,y+h,x,y+h-r,r);
    c.lineTo(x,y+r); c.arcTo(x,y,x+r,y,r);
    c.closePath();
  }

  function draw() {
    const { W, H } = setup();
    const PAD_L=20, PAD_R=24, PAD_T=48, PAD_B=88;
    const chartW = W - PAD_L - PAD_R;
    const chartH = H - PAD_T - PAD_B;
    const baseY = PAD_T + chartH;

    /* teal-tinted background */
    ctx.fillStyle = '#0d2320';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(2,100,90,0.18)';
    ctx.fillRect(0, 0, W, H);

    /* mountain silhouette */
    ctx.beginPath();
    ctx.moveTo(PAD_L, baseY);
    [[0,.0],[.3,.04],[.45,.06],[.55,.10],[.62,.18],[.67,.28],[.72,.38],
     [.76,.52],[.80,.44],[.84,.38],[.88,.32],[.92,.22],[.96,.12],[1,.06]]
    .forEach(([rx,ry]) => ctx.lineTo(PAD_L + rx*chartW, baseY - ry*chartH*0.55));
    ctx.lineTo(PAD_L + chartW, baseY);
    ctx.closePath();
    ctx.fillStyle = 'rgba(2,100,90,0.18)';
    ctx.fill();

    const drawnCount = prog * (STATIONS.length - 1);

    /* area fill under path */
    ctx.beginPath();
    STATIONS.forEach((s,i) => {
      if(i > drawnCount) return;
      const x = PAD_L + s.x*chartW;
      const p = i <= Math.floor(drawnCount) ? 1 : drawnCount - Math.floor(drawnCount);
      const y = baseY - (s.rain/MAXRAIN)*chartH*easeOut(Math.min(drawnCount-i+1,1))*p;
      i===0 ? ctx.moveTo(x, baseY) : null;
      ctx.lineTo(x, y);
    });
    for(let i=Math.min(Math.floor(drawnCount),STATIONS.length-1);i>=0;i--)
      ctx.lineTo(PAD_L + STATIONS[i].x*chartW, baseY);
    ctx.fillStyle = 'rgba(196,93,58,0.08)';
    ctx.fill();

    /* path line */
    ctx.beginPath();
    STATIONS.forEach((s,i) => {
      if(i > drawnCount) return;
      const x = PAD_L + s.x*chartW;
      const ap = easeOut(Math.min(drawnCount-i+1,1));
      const y = baseY - (s.rain/MAXRAIN)*chartH*ap;
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    });
    ctx.strokeStyle='rgba(196,93,58,0.7)'; ctx.lineWidth=2;
    ctx.lineJoin='round'; ctx.lineCap='round'; ctx.stroke();

    /* bars + labels */
    STATIONS.forEach((s,i) => {
      if(i > drawnCount + 0.05) return;
      const ap = easeOut(Math.min(drawnCount-i+1,1));
      const x = PAD_L + s.x*chartW;
      const barH = (s.rain/MAXRAIN)*chartH*ap;
      const barW = Math.max(chartW/STATIONS.length*0.38, 6);
      const isAsheville = s.name === 'Asheville, NC';
      const isHov = i === hovIdx;

      let col = s.rain >= 9 ? 'rgba(196,93,58,0.7)'
               : s.rain >= 5 ? 'rgba(212,135,76,0.65)'
               : 'rgba(34,64,80,0.22)';
      if(isAsheville) col = '#C45D3A';

      ctx.fillStyle = isHov ? '#C45D3A' : col;
      ctx.fillRect(x - barW/2, baseY - barH, barW, barH);

      if(ap > 0.6) {
        ctx.beginPath();
        ctx.arc(x, baseY-barH, isAsheville||isHov ? 5 : 3, 0, Math.PI*2);
        ctx.fillStyle = isAsheville ? '#C45D3A' : 'rgba(196,93,58,0.6)';
        ctx.fill();
      }

      if(ap > 0.8) {
        ctx.font = isAsheville ? "700 11px 'Lora',Georgia,serif" : "400 10px 'Lora',Georgia,serif";
        ctx.fillStyle = isAsheville ? '#9FE1CB' : 'rgba(247,243,237,0.55)';
        ctx.textAlign = 'center';
        ctx.fillText(s.name.replace(/, (NC|GA|SC|FL)$/,''), x, baseY+16);
        ctx.font = "400 9px 'Lora',Georgia,serif";
        ctx.fillStyle = 'rgba(247,243,237,0.28)';
        ctx.fillText(s.loc, x, baseY+28);
        ctx.textAlign = 'left';
      }

      if(s.loc==='Landfall' && ap>0.9) {
        ctx.font="700 10px 'Lora',Georgia,serif";
        ctx.fillStyle='rgba(212,135,76,0.8)';
        ctx.textAlign='center';
        ctx.fillText('▲ LANDFALL', x, baseY-barH-12);
        ctx.textAlign='left';
      }

      if(isAsheville && ap>0.9) {
        ctx.font="700 12px 'Lora',Georgia,serif";
        ctx.fillStyle='#9FE1CB';
        ctx.fillText('14"+ in 24hrs', x+8, baseY-barH-14);
        ctx.font="400 10px 'Lora',Georgia,serif";
        ctx.fillStyle='rgba(159,225,203,0.6)';
        ctx.fillText('Asheville, NC', x+8, baseY-barH+1);
      }
    });

    /* hover tooltip */
    if(hovIdx>=0 && hovIdx<STATIONS.length) {
      const s = STATIONS[hovIdx];
      const x = PAD_L + s.x*chartW;
      const y = baseY - (s.rain/MAXRAIN)*chartH;
      const tw=130, th=44;
      let tx=x+12, ty=y-th-8;
      if(tx+tw > W-PAD_R) tx=x-tw-12;
      if(ty < PAD_T) ty=y+10;
      ctx.fillStyle='rgba(2,60,50,0.95)';
      roundRect(ctx,tx,ty,tw,th,4); ctx.fill();
      ctx.font="700 11px 'Lora',Georgia,serif";
      ctx.fillStyle='#F7F3ED';
      ctx.fillText(s.name, tx+8, ty+16);
      ctx.font="400 10px 'Lora',Georgia,serif";
      ctx.fillStyle='rgba(159,225,203,0.9)';
      ctx.fillText(s.rain+'" rainfall (placeholder)', tx+8, ty+31);
    }
  }

  function animate() {
    if(prog < 1) prog = Math.min(prog + 0.007, 1);
    draw();
    requestAnimationFrame(animate);
  }

  /* only start animating when section scrolls into view */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting && !started) {
        started = true;
        animate();
      }
    });
  }, { threshold: 0.2 });
  observer.observe(canvas);

  /* hover */
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const W = rect.width;
    const chartW = W - 20 - 24;
    let closest=-1, minD=999;
    STATIONS.forEach((s,i) => {
      const x = 52 + s.x*chartW;
      const d = Math.abs(mx-x);
      if(d<minD){ minD=d; closest=i; }
    });
    hovIdx = minD < 32 ? closest : -1;
  });
  canvas.addEventListener('mouseleave', () => { hovIdx=-1; });
  canvas.style.cursor = 'crosshair';

  window.addEventListener('resize', () => { if(started) draw(); });

  /* initial static render so it's not blank before scroll */
  setup();
  draw();
})();
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo(0, 0);
});