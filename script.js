/* ============================================================
   THE WARRIOR GYM — script.js
   ------------------------------------------------------------
   HOW TO EDIT
   1. EVERYTHING business-related is in CONFIG below. Change it
      there once and the whole page updates: phone, WhatsApp,
      address, map links, socials, prices, timings, trainers,
      stats, trial message.
   2. Below CONFIG are independent modules (header, reveal,
      counters, carousels, accordion, open-now badge, form).
      None of them need editing unless you change behaviour.
   3. Nothing here talks to a server. The form opens WhatsApp.
      A backend hook is marked with "BACKEND HOOK".
   ------------------------------------------------------------ */

document.documentElement.classList.add('js');

/* ============================================================
   1. CONFIG — EDIT EVERYTHING HERE
   ============================================================ */
const CONFIG = {
  brand: 'The Warrior Gym',
  city: 'Kirti Nagar, New Delhi',

  // --- Contact -------------------------------------------------
  // Keep dialable format for `phone`, digits-only for `whatsapp`.
  phone: '+91 XXXXX XXXXX',          // e.g. '+91 98110 12345'
  whatsappNumber: '91XXXXXXXXXX',    // e.g. '919811012345'  (no +, no spaces)
  email: '[EMAIL]@example.com',      // e.g. 'hello@thewarriorgym.in'
  fullAddress: '[FULL ADDRESS], Kirti Nagar, New Delhi – 110015',
  geo: { lat: 28.6526558, lng: 77.1390799 },

  // --- Links ---------------------------------------------------
  instagramUrl: 'https://instagram.com/[PLACEHOLDER]',
  facebookUrl: 'https://facebook.com/[PLACEHOLDER]',
  youtubeUrl: 'https://youtube.com/@[PLACEHOLDER]',
  // Used by the "Open in Google Maps" + "Read all reviews" links.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Warrior+Gym+Kirti+Nagar+New+Delhi',
  mapsReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Warrior+Gym+Kirti+Nagar+New+Delhi',

  // --- Labels shown in the UI ----------------------------------
  trialMessage: 'Hi! I want to book my free trial at The Warrior Gym.',

  // --- Stats strip (numbers count up on scroll) ----------------
  stats: [
    { value: 5.0, decimals: 1, suffix: '',  label: 'Google Rating' },
    { value: 500, decimals: 0, suffix: '+', label: 'Members Trained' },
    { value: 4,   decimals: 0, suffix: '',  label: 'Expert Trainers' },
    { value: 7,   decimals: 0, suffix: '',  label: 'Days Open' }
  ],

  // --- Trainers ------------------------------------------------
  trainers: [
    {
      name: '[TRAINER NAME]',
      role: '[SPECIALITY — e.g. Strength & Powerlifting]',
      bio: '[1–2 lines: years coaching, who they work best with.]',
      cert: '[CERTIFICATION / QUALIFICATION]'
    },
    {
      name: '[TRAINER NAME]',
      role: '[SPECIALITY — e.g. Fat Loss & Nutrition]',
      bio: '[1–2 lines: years coaching, who they work best with.]',
      cert: '[CERTIFICATION / QUALIFICATION]'
    },
    {
      name: '[TRAINER NAME]',
      role: '[SPECIALITY — e.g. Functional / HIIT]',
      bio: '[1–2 lines: years coaching, who they work best with.]',
      cert: '[CERTIFICATION / QUALIFICATION]'
    },
    {
      name: '[TRAINER NAME]',
      role: '[SPECIALITY — e.g. Beginner & Senior Fitness]',
      bio: '[1–2 lines: years coaching, who they work best with.]',
      cert: '[CERTIFICATION / QUALIFICATION]'
    }
  ],

  // --- Pricing -------------------------------------------------
  // popular: true on exactly one plan.
  prices: [
    {
      name: 'Monthly',
      for: 'Try it properly',
      amount: '₹[PRICE]',
      period: 'per month · no joining fee',
      features: ['Full gym access', 'Floor trainer guidance', 'Locker + changing room', 'Cancel anytime'],
      popular: false
    },
    {
      name: 'Quarterly',
      for: 'Best value',
      amount: '₹[PRICE]',
      period: 'for 3 months · save [X]%',
      features: ['Full gym access', 'Floor trainer guidance', 'Goal plan + progress check', '1 free PT session', 'Body composition check'],
      popular: true
    },
    {
      name: 'Annual',
      for: 'Committed',
      amount: '₹[PRICE]',
      period: 'for 12 months · save [X]%',
      features: ['Full gym access', 'Floor trainer guidance', 'Quarterly plan reset', '3 free PT sessions', 'Membership freeze [X] days'],
      popular: false
    }
  ],

  // --- Timings (24h "HH:MM"; leave open/close empty = closed) ---
  timings: [
    { day: 'Monday',    open: '05:30', close: '22:30' },
    { day: 'Tuesday',   open: '05:30', close: '22:30' },
    { day: 'Wednesday', open: '05:30', close: '22:30' },
    { day: 'Thursday',  open: '05:30', close: '22:30' },
    { day: 'Friday',    open: '05:30', close: '22:30' },
    { day: 'Saturday',  open: '06:00', close: '21:00' },
    { day: 'Sunday',    open: '07:00', close: '13:00' }
  ],

  // Shown in the footer; edit freely.
  footerHours: 'Mon–Fri [OPEN]–[CLOSE]<br>Sat [OPEN]–[CLOSE] · Sun [OPEN]–[CLOSE]',

  // --- Placeholder photo (used until real photos are added) ----
  photoPlaceholder:
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#1B1B1E"/><stop offset="1" stop-color="#0E0E10"/>' +
      '</linearGradient></defs>' +
      '<rect width="600" height="750" fill="url(#g)"/>' +
      '<g fill="none" stroke="#C8963E" stroke-opacity=".35" stroke-width="1.5">' +
      '<path d="M300 300 372 330v40c0 44-30 78-72 92-42-14-72-48-72-92v-40z"/></g>' +
      '<text x="300" y="480" fill="#C8963E" fill-opacity=".85" font-family="Oswald,Arial,sans-serif" ' +
      'font-size="18" letter-spacing="4" text-anchor="middle">REPLACE WITH</text>' +
      '<text x="300" y="508" fill="#C8963E" fill-opacity=".85" font-family="Oswald,Arial,sans-serif" ' +
      'font-size="18" letter-spacing="4" text-anchor="middle">REAL PHOTO</text>' +
      '<text x="300" y="548" fill="#6B6B70" font-family="Oswald,Arial,sans-serif" ' +
      'font-size="13" letter-spacing="2" text-anchor="middle">600 × 750</text>' +
      '</svg>'
    )
};

/* ============================================================
   2. SMALL HELPERS
   ============================================================ */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const waLink = (msg = CONFIG.trialMessage) =>
  `https://wa.me/${CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;

const telLink = () => `tel:${CONFIG.phone.replace(/[^\d+]/g, '')}`;

/* ============================================================
   3. INJECT CONFIG INTO THE DOM
   ============================================================ */
function hydrateLinks() {
  $$('[data-link]').forEach((el) => {
    const kind = el.dataset.link;
    const msg  = el.dataset.msg || CONFIG.trialMessage;

    if (kind === 'phone')     el.href = telLink();
    if (kind === 'whatsapp')  el.href = waLink(msg);
    if (kind === 'instagram') el.href = CONFIG.instagramUrl;
    if (kind === 'facebook')  el.href = CONFIG.facebookUrl;
    if (kind === 'youtube')   el.href = CONFIG.youtubeUrl;
  });

  // Text nodes that print the config values
  const phoneText = $('#phoneLink');
  if (phoneText) phoneText.textContent = CONFIG.phone;
  const navPhone = $('#navPhone');
  if (navPhone) navPhone.textContent = CONFIG.phone;
  const footerPhone = $('#footerPhone');
  if (footerPhone) footerPhone.textContent = CONFIG.phone;

  const emailLink = $('#emailLink');
  if (emailLink) { emailLink.href = `mailto:${CONFIG.email}`; emailLink.textContent = CONFIG.email; }

  const addr = $('#addressText');
  if (addr) addr.textContent = CONFIG.fullAddress;
  const fAddr = $('#footerAddress');
  if (fAddr) fAddr.textContent = CONFIG.fullAddress;

  const reviews = $('#mapsReviewsLink');
  if (reviews) reviews.href = CONFIG.mapsReviewsUrl;
  const dirs = $('#directionsLink');
  if (dirs) dirs.href = CONFIG.mapsUrl;

  const fHours = $('#footerHours');
  if (fHours) fHours.innerHTML = CONFIG.footerHours;

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Photos without a real src get the labelled placeholder
  $$('img[data-photo]').forEach((img) => {
    if (!img.getAttribute('src')) img.src = CONFIG.photoPlaceholder;
    img.addEventListener('error', () => { img.src = CONFIG.photoPlaceholder; }, { once: true });
  });
}

/* ============================================================
   4. STATS
   ============================================================ */
function renderStats() {
  const grid = $('#statGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.stats.map((s, i) => {
    const final = s.value.toFixed(s.decimals) + s.suffix;
    return `<li class="stat">
      <span class="stat-value" data-target="${s.value}" data-decimals="${s.decimals}" data-suffix="${s.suffix}">${reduceMotion ? final : '0'}</span>
      <span class="stat-label">${s.label}</span>
    </li>`;
  }).join('');

  if (reduceMotion) return;

  const values = $$('.stat-value', grid);
  const run = (el) => {
    const target = parseFloat(el.dataset.target);
    const dec = parseInt(el.dataset.decimals, 10);
    const suffix = el.dataset.suffix;
    const dur = 1200;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) { values.forEach(run); return; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  values.forEach((v) => io.observe(v));
}

/* ============================================================
   5. TRAINERS + PRICING
   ============================================================ */
function renderTrainers() {
  const grid = $('#trainerGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.trainers.map((t) => `
    <article class="card trainer-card reveal">
      <figure class="photo">
        <!-- REPLACE WITH REAL PHOTO: <img src="assets/trainer-x.jpg" alt="${t.name} at The Warrior Gym" loading="lazy"> -->
        <img data-photo alt="[REPLACE WITH REAL PHOTO] ${t.name}, ${t.role}" loading="lazy" width="600" height="750">
      </figure>
      <div class="trainer-body">
        <h3>${t.name}</h3>
        <p class="trainer-role">${t.role}</p>
        <p>${t.bio}</p>
        <p class="trainer-cert">${t.cert}</p>
      </div>
    </article>
  `).join('');
}

function renderPrices() {
  const grid = $('#priceGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.prices.map((p) => `
    <article class="price-card${p.popular ? ' price-card--popular' : ''} reveal">
      ${p.popular ? '<span class="popular-tag">Most Popular</span>' : ''}
      <h3>${p.name}</h3>
      <p class="price-for">${p.for}</p>
      <p class="price-amount">${p.amount}</p>
      <p class="price-period">${p.period}</p>
      <ul class="price-feats">
        ${p.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
      <a class="btn ${p.popular ? 'btn-primary' : 'btn-ghost'} btn-block"
         data-link="whatsapp"
         data-msg="Hi! I want to join The Warrior Gym — please share the current ${p.name} plan price."
         href="#contact">Enquire — ${p.name}</a>
    </article>
  `).join('');
}

/* ============================================================
   6. HEADER + MOBILE NAV
   ============================================================ */
function initHeader() {
  const header = $('#siteHeader');
  const burger = $('#burger');
  const nav = $('#primaryNav');
  if (!header || !burger || !nav) return;

  const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.classList.toggle('menu-open', open);
  };

  burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      burger.focus();
    }
  });

  // Reset state if the viewport grows to desktop while the panel is open
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ============================================================
   7. REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const items = $$('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = Array.from(el.parentElement?.children || []);
      const delay = Math.min(siblings.indexOf(el), 5) * 70;
      setTimeout(() => el.classList.add('is-visible'), delay);
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach((el) => io.observe(el));

  // Safety net: anything still hidden after 3s becomes visible
  setTimeout(() => items.forEach((el) => el.classList.add('is-visible')), 3000);
}

/* ============================================================
   8. CAROUSELS (transformations + testimonials)
   ============================================================ */
function initCarousels() {
  $$('[data-carousel]').forEach((root) => {
    const track = $('.carousel-viewport', root);
    const prev = $('[data-dir="-1"]', root);
    const next = $('[data-dir="1"]', root);
    if (!track) return;

    const step = () => {
      const card = track.firstElementChild;
      const gap = parseFloat(getComputedStyle(track).columnGap || '16') || 16;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= maxScroll;
    };

    const scrollByDir = (dir) =>
      track.scrollBy({ left: dir * step(), behavior: reduceMotion ? 'auto' : 'smooth' });

    prev?.addEventListener('click', () => scrollByDir(-1));
    next?.addEventListener('click', () => scrollByDir(1));

    // Keyboard support on the scroll container
    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollByDir(1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollByDir(-1); }
    });

    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
  });
}

/* ============================================================
   9. FAQ ACCORDION (one open at a time, full ARIA)
   ============================================================ */
function initAccordion() {
  const triggers = $$('.acc-trigger');

  triggers.forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close any open sibling
      triggers.forEach((other) => {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(other.getAttribute('aria-controls'));
        if (p) p.hidden = true;
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
    });
  });
}

/* ============================================================
   10. TIMINGS TABLE + "OPEN NOW" BADGE
   ============================================================ */
function nowInDelhi() {
  // Always compute in IST so the badge is right even for overseas visitors
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(new Date());

  const get = (t) => parts.find((p) => p.type === t)?.value || '';
  const hour = parseInt(get('hour'), 10) % 24;
  const minute = parseInt(get('minute'), 10);
  return { day: get('weekday'), minutes: hour * 60 + minute };
}

const toMinutes = (hhmm) => {
  if (!hhmm) return null;
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const fmt = (hhmm) => {
  if (!hhmm) return 'Closed';
  const [h, m] = hhmm.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
};

function renderTimings() {
  const table = $('#timingsTable');
  if (!table) return;

  const { day: today, minutes: nowMin } = nowInDelhi();
  const tbody = $('tbody', table);

  tbody.innerHTML = CONFIG.timings.map((t) => {
    const row = `<tr class="${t.day === today ? 'is-today' : ''}">
        <td>${t.day}${t.day === today ? ' · today' : ''}</td>
        <td>${t.open ? `${fmt(t.open)} – ${fmt(t.close)}` : 'Closed'}</td>
      </tr>`;
    return row;
  }).join('');

  table.classList.remove('is-loading');

  // Open-now state
  const entry = CONFIG.timings.find((t) => t.day === today);
  const openM = entry ? toMinutes(entry.open) : null;
  const closeM = entry ? toMinutes(entry.close) : null;
  const isOpen = openM !== null && nowMin >= openM && nowMin < closeM;

  const badge = $('#openBadge');
  const badgeText = $('#openBadgeText');
  if (badge && badgeText) {
    badge.dataset.state = isOpen ? 'open' : 'closed';
    if (isOpen) {
      badgeText.textContent = `Open now · till ${fmt(entry.close)}`;
    } else if (openM !== null && nowMin < openM) {
      badgeText.textContent = `Closed · opens ${fmt(entry.open)}`;
    } else {
      // Find the next day that opens
      const idx = CONFIG.timings.findIndex((t) => t.day === today);
      let nextDay = null;
      for (let i = 1; i <= 7; i++) {
        const cand = CONFIG.timings[(idx + i) % 7];
        if (cand.open) { nextDay = cand; break; }
      }
      badgeText.textContent = nextDay ? `Closed · opens ${nextDay.day} ${fmt(nextDay.open)}` : 'Closed today';
    }
  }
}

/* ============================================================
   11. CONTACT FORM → WhatsApp (validation + backend hook)
   ============================================================ */
function initForm() {
  const form = $('#trialForm');
  if (!form) return;

  const status = $('#formStatus');
  const fields = [
    { el: $('#name'),  err: $('#name-error'),  test: (v) => v.trim().length >= 2, msg: 'Please enter your name.' },
    { el: $('#phone'), err: $('#phone-error'), test: (v) => /^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s()-]/g, '')), msg: 'Enter a valid 10-digit Indian mobile number.' },
    { el: $('#goal'),  err: $('#goal-error'),  test: (v) => v !== '', msg: 'Pick your goal.' },
    { el: $('#time'),  err: $('#time-error'),  test: (v) => v !== '', msg: 'Pick a preferred time.' }
  ];

  const validateField = (f) => {
    if (!f.el) return true;
    const ok = f.test(f.el.value);
    f.el.setAttribute('aria-invalid', String(!ok));
    if (f.err) f.err.textContent = ok ? '' : f.msg;
    return ok;
  };

  fields.forEach((f) => {
    f.el?.addEventListener('blur', () => validateField(f));
    f.el?.addEventListener('input', () => {
      if (f.el.getAttribute('aria-invalid') === 'true') validateField(f);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const results = fields.map(validateField);
    const firstBad = fields[results.findIndex((ok) => !ok)];
    if (firstBad) {
      firstBad.el.focus();
      if (status) status.textContent = '';
      return;
    }

    const data = new FormData(form);
    const message =
      `New trial request — The Warrior Gym\n` +
      `Name: ${data.get('name')}\n` +
      `Phone: ${data.get('phone')}\n` +
      `Goal: ${data.get('goal')}\n` +
      `Preferred time: ${data.get('time')}`;

    /* BACKEND HOOK
       Replace the two lines below with:
         await fetch(form.action, { method: 'POST', body: data });
         status.textContent = 'Got it — we will call you shortly.';
       and set action/method on the <form> in index.html.
    */
    if (status) status.textContent = 'Opening WhatsApp with your details…';
    window.open(waLink(message), '_blank', 'noopener');
    form.reset();
    fields.forEach((f) => f.el?.setAttribute('aria-invalid', 'false'));
    setTimeout(() => { if (status) status.textContent = 'Message ready — hit send in WhatsApp.'; }, 900);
  });
}

/* ============================================================
   12. SCROLL PROGRESS BAR
   ============================================================ */
function initProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;

  let queued = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    bar.style.transform = `scaleX(${p})`;
    queued = false;
  };
  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

/* ============================================================
   13. BOOT
   ============================================================ */
function boot() {
  hydrateLinks();
  renderStats();
  renderTrainers();
  renderPrices();
  hydrateLinks();      // re-run for JS-rendered links
  renderTimings();
  initHeader();
  initReveal();
  initCarousels();
  initAccordion();
  initForm();
  initProgress();

  // Keep the open/closed badge honest while the tab stays open
  setInterval(renderTimings, 60_000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
