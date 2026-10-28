/* ===== Vanilla JS – Nusava AYANA Revamp ===== */
'use strict';

/* --------------------------------------------------------------------------
   1. REGION DATA (Interactive Map)
   -------------------------------------------------------------------------- */
const REGIONS = {
  sumatera: {
    name: 'Sumatera',
    label: 'AREA 01 — SUMATERA',
    sub: 'Serambi Melayu & Luhak Minangkabau',
    cat: 'Arsitektur Adat & Wastra Songket',
    desc: 'Sumatera menyimpan peradaban agung berbalut nilai adat nan kokoh. Kemegahan atap gonjong Rumah Gadang Minangkabau, kelembutan tenun Songket berbenang emas Palembang, dan ritme Tari Saman Aceh yang diakui UNESCO.',
    highlights: ['Rumah Gadang Minang', 'Tari Saman (UNESCO)', 'Songket Palembang', 'Ulos Batak Toba'],
    artisans: '1.240+',
    img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-150.png',
    pinX: '18%', pinY: '48%',
  },
  jawa: {
    name: 'Jawa',
    label: 'AREA 02 — JAWA',
    sub: 'Pusat Keraton, Candi & Wayang Kulit',
    cat: 'Filosofi Candi & Seni Adiluhung',
    desc: 'Jawa merefleksikan harmoni spiritualitas dan ketelitian adiluhung. Mahakarya relief Candi Borobudur, wayang kulit purwa yang sarat filosofi hidup, hingga canting batik tulis Surakarta yang tiap helai menyimpan doa.',
    highlights: ['Borobudur (UNESCO)', 'Wayang Kulit Purwa', 'Batik Tulis Keraton', 'Keris Pusaka'],
    artisans: '3.850+',
    img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-30.png',
    pinX: '36%', pinY: '80%',
  },
  bali_nt: {
    name: 'Bali & Nusa Tenggara',
    label: 'AREA 03 — BALI & NTT',
    sub: 'Harmoni Dewata & Wastra Tenun Ikat',
    cat: 'Seni Pertunjukan & Tenun Pewarna Alami',
    desc: 'Pusaran spiritualitas dan seni visual yang mendunia. Ritme vokal magis Tari Kecak di tebing Uluwatu bersanding dengan dedikasi para penenun perempuan Sumba dan Sikka Flores yang mewarisi teknik pewarnaan alam berabad-abad.',
    highlights: ['Tari Kecak Uluwatu', 'Tenun Ikat Sumba', 'Gong Kebyar', 'Desa Adat Sade'],
    artisans: '2.110+',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-110.png',
    pinX: '61%', pinY: '84%',
  },
  kalimantan: {
    name: 'Kalimantan',
    label: 'AREA 04 — KALIMANTAN',
    sub: 'Kearifan Rimba Tropis & Perisai Dayak',
    cat: 'Seni Pahat Kayu Ulin & Manik Adat',
    desc: 'Harmoni kehidupan suku Dayak dengan kelestarian alam belantara Borneo. Terwujud dalam arsitektur Rumah Betang komunal, ukiran perisai Talawang pelindung, serta anyaman manik-manik bernilai spiritual tinggi.',
    highlights: ['Rumah Betang Dayak', 'Perisai Talawang', 'Anyaman Manik', 'Tari Kancet Papatai'],
    artisans: '920+',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-140.png',
    pinX: '43%', pinY: '46%',
  },
  sulawesi: {
    name: 'Sulawesi',
    label: 'AREA 05 — SULAWESI',
    sub: 'Negeri Pelaut Pinisi & Arsitektur Toraja',
    cat: 'Kriya Perahu & Arsitektur Sakral',
    desc: 'Ketangguhan maritim kapal Pinisi Bulukumba yang menembus samudra bersatu dengan sakralitas Rumah Adat Tongkonan Toraja. Dinding berukir motif Pa\'tedong melambangkan silsilah dan kehormatan leluhur Aluk Todolo.',
    highlights: ['Kapal Pinisi (UNESCO)', 'Tongkonan Toraja', 'Tari Pakarena', 'Tenun Sutra Mandar'],
    artisans: '1.450+',
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-130.png',
    pinX: '57%', pinY: '56%',
  },
  maluku_papua: {
    name: 'Maluku & Papua',
    label: 'AREA 06 — MALUKU & PAPUA',
    sub: 'Mutiara Bahari & Mahakarya Pahat Asmat',
    cat: 'Kriya Pahat & Tabuhan Tifa',
    desc: 'Pesona kepulauan rempah Maluku dan kemegahan seni suku Asmat Papua. Ritme tabuhan tifa menyambut tamu diiringi filosofi noken—rajutan serat kayu yang sarat lambang kehidupan dan kesuburan, diakui UNESCO.',
    highlights: ['Pahat Suku Asmat', 'Noken (UNESCO)', 'Alat Musik Tifa', 'Tari Cendrawasih'],
    artisans: '780+',
    img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=85',
    fallback: 'assets/images/image-100.png',
    pinX: '85%', pinY: '65%',
  },
};

/* --------------------------------------------------------------------------
   2. PRODUCT DATA (Marketplace)
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  { id: 1, name: 'Batik Tulis Kawung Keraton', cat: 'wastra', daerah: 'Yogyakarta', price: 2_850_000, rating: 4.9, sold: 342, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80', verified: true },
  { id: 2, name: 'Tenun Ikat Sumba Timur', cat: 'wastra', daerah: 'NTT', price: 3_400_000, rating: 4.8, sold: 218, img: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=500&q=80', verified: true },
  { id: 3, name: 'Ukiran Perisai Dayak', cat: 'kriya', daerah: 'Kalimantan', price: 1_650_000, rating: 4.7, sold: 156, img: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=500&q=80', verified: true },
  { id: 4, name: 'Keris Pusaka Luk 13', cat: 'kriya', daerah: 'Surakarta', price: 8_500_000, rating: 5.0, sold: 44, img: 'https://images.unsplash.com/photo-1592492152545-9695d3f473f4?auto=format&fit=crop&w=500&q=80', verified: true },
  { id: 5, name: 'Gamelan Bonang Barung', cat: 'musik', daerah: 'Jawa Tengah', price: 5_200_000, rating: 4.9, sold: 67, img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=500&q=80', verified: false },
  { id: 6, name: 'Kain Songket Palembang', cat: 'wastra', daerah: 'Sumatera Selatan', price: 4_100_000, rating: 4.8, sold: 189, img: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=500&q=80', verified: true },
  { id: 7, name: 'Lukisan Wayang Kamasan', cat: 'seni', daerah: 'Bali', price: 1_850_000, rating: 4.9, sold: 103, img: 'https://images.unsplash.com/photo-1605106901227-991bd663255b?auto=format&fit=crop&w=500&q=80', verified: false },
  { id: 8, name: 'Anyaman Manik Dayak', cat: 'kriya', daerah: 'Kalimantan', price: 680_000, rating: 4.6, sold: 412, img: 'https://images.unsplash.com/photo-1558618047-f8c57a6a4901?auto=format&fit=crop&w=500&q=80', verified: true },
];

/* --------------------------------------------------------------------------
   3. JOURNAL DATA (Slider)
   -------------------------------------------------------------------------- */
const ARTICLES = [
  { tag: 'Wastra', title: 'Benang Emas yang Menghidupi Generasi Penenun Sumba', author: 'Laras Winarti', date: 'Oktober 2026', read: '7 mnt', img: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=600&q=80' },
  { tag: 'Festival', title: 'Nyepi Tanpa Cahaya: Menemukan Keheningan di Antara Gamelan', author: 'Bima Adyatama', date: 'Oktober 2026', read: '5 mnt', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
  { tag: 'Profil Pengrajin', title: 'Pak Surya: 40 Tahun Menatah Keris Pusaka Solo', author: 'Nindya Kusuma', date: 'September 2026', read: '9 mnt', img: 'https://images.unsplash.com/photo-1592492152545-9695d3f473f4?auto=format&fit=crop&w=600&q=80' },
  { tag: 'Tradisi Lisan', title: 'Pantun Melayu: Melodi yang Merangkai Sabang dan Merauke', author: 'Faisal Ardiansyah', date: 'September 2026', read: '6 mnt', img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=600&q=80' },
  { tag: 'Arsitektur', title: 'Tongkonan: Rumah yang Menghubungkan Manusia dan Leluhur', author: 'Rara Puspita', date: 'Agustus 2026', read: '8 mnt', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80' },
];

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL — IntersectionObserver
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  // Immediately reveal hero elements for instant first-paint
  document.querySelectorAll('#hero .reveal, #hero .reveal-left, #hero .reveal-right, #hero .reveal-popup').forEach(el => {
    el.classList.add('visible');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-popup').forEach(el => {
    if (!el.closest('#hero')) observer.observe(el);
  });

  // Dedicated video arch entrance reveal animation
  const archFrame = document.getElementById('video-arch-frame');
  if (archFrame) {
    const videoObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          archFrame.classList.add('in-view');
          videoObs.unobserve(archFrame);
        }
      });
    }, { threshold: 0.12 });
    videoObs.observe(archFrame);
  }
}

/* --------------------------------------------------------------------------
   5. ANIMATED NUMBER COUNTER
   -------------------------------------------------------------------------- */
function animateCounter(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4); // quartic ease-out
    const num = Math.floor(ease * target).toLocaleString('id-ID');
    el.innerHTML = `${num}<span class="text-[#D99B26] font-light ml-0.5">${suffix}</span>`;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 1800, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

/* --------------------------------------------------------------------------
   6. NAVBAR — sticky scroll behaviour
   -------------------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const subNav = document.getElementById('sub-nav');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    // Show sub-nav after hero (≈600px from top)
    if (y > 600) {
      subNav?.classList.remove('hidden-subnav');
    } else {
      subNav?.classList.add('hidden-subnav');
    }
    lastY = y;
  }, { passive: true });

  // Mobile drawer
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  openBtn?.addEventListener('click', () => drawer?.classList.remove('translate-x-full'));
  closeBtn?.addEventListener('click', () => drawer?.classList.add('translate-x-full'));
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.add('translate-x-full'));
  });
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL for nav links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* --------------------------------------------------------------------------
   8. PARALLAX — ornaments + video arch scroll expansion
   -------------------------------------------------------------------------- */
function initParallax() {
  const wayangL = document.getElementById('wayang-left');
  const wayangR = document.getElementById('wayang-right');
  const cloudBg = document.querySelectorAll('.cloud-parallax');
  const archFrame = document.getElementById('video-arch-frame');

  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;

      // Wayang drift (slow parallax)
      if (wayangL) wayangL.style.transform = `translateY(${y * 0.08}px)`;
      if (wayangR) wayangR.style.transform = `translateY(${y * 0.06}px)`;

      // Cloud ornament
      cloudBg.forEach((el, i) => {
        el.style.transform = `translateY(${y * (0.04 + i * 0.02)}px)`;
      });

      // Video arch expansion: as user scrolls into the arch section,
      // gradually open the arch border-radius toward 0 (full-width)
      if (archFrame) {
        const rect = archFrame.getBoundingClientRect();
        const viewH = window.innerHeight;
        // start expanding when top of frame enters bottom of viewport
        const progress = Math.max(0, Math.min(1, 1 - rect.top / viewH));
        const radius = Math.round((1 - progress) * 50); // 50% → 0%
        archFrame.style.borderRadius = `${radius}% ${radius}% 0 0 / ${Math.round(radius * 0.16)}% ${Math.round(radius * 0.16)}% 0 0`;
      }

      ticking = false;
    });
    ticking = true;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   9. VIDEO MODAL
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const modal   = document.getElementById('video-modal');
  const modalVid = document.getElementById('modal-video');
  const openBtns = document.querySelectorAll('[data-open-modal="video"]');
  const closeBtn = document.getElementById('video-modal-close');

  const open = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Small timeout so transition fires
    setTimeout(() => {
      if (modalVid) {
        modalVid.muted = false;
        modalVid.play().catch(() => {});
      }
    }, 50);
  };

  const close = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (modalVid) { modalVid.pause(); modalVid.currentTime = 0; }
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  closeBtn?.addEventListener('click', close);
  modal?.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* --------------------------------------------------------------------------
   10. AREA SWITCHER (Interactive Map)
   -------------------------------------------------------------------------- */
function initAreaSwitcher() {
  const tabs  = document.querySelectorAll('.area-tab[data-area]');
  const pins  = document.querySelectorAll('.radar-dot[data-area]');
  const panel = document.getElementById('area-info-panel');
  if (!tabs.length || !panel) return;

  let current = 'jawa';

  function updatePanel(key) {
    const r = REGIONS[key];
    if (!r) return;
    current = key;

    // Tabs
    tabs.forEach(t => t.classList.toggle('active', t.dataset.area === key));
    pins.forEach(p => p.classList.toggle('active-pin', p.dataset.area === key));

    // Fade out → update → fade in
    panel.classList.add('fade-out');
    setTimeout(() => {
      panel.innerHTML = buildAreaPanel(r);
      panel.classList.remove('fade-out');
      panel.classList.add('fade-in');
    }, 280);
  }

  function buildAreaPanel(r) {
    return `
      <div class="flex items-center justify-between mb-4 pb-3 border-b border-[#E8D9C0]">
        <span class="text-eyebrow text-[#9A6F00] font-bold">${r.cat}</span>
        <span class="text-[11px] font-sans font-bold tracking-widest uppercase text-[#D99B26]">Zona Terverifikasi</span>
      </div>
      <h3 class="font-display font-bold text-3xl sm:text-4xl text-[#3E3630] mb-2 leading-tight">${r.name}</h3>
      <p class="text-base text-[#6B6158] mb-5 italic font-garamond">${r.sub}</p>
      <div class="w-full h-60 sm:h-72 lg:h-80 rounded-sm overflow-hidden mb-6 border border-[#E8D9C0] shadow-sm">
        <img src="${r.img}" onerror="this.src='${r.fallback}'" alt="${r.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy">
      </div>
      <p class="text-sm sm:text-base text-[#6B6158] leading-relaxed mb-6">${r.desc}</p>
      <div class="border-t border-[#E8D9C0] pt-5 mb-6">
        <p class="text-eyebrow text-[#9A6F00] font-bold mb-3">Warisan Budaya Unggulan</p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
          ${r.highlights.map(h => `<li class="flex items-center gap-2 text-xs sm:text-sm text-[#3E3630] font-medium"><span class="w-1.5 h-1.5 rounded-full bg-[#D99B26] flex-shrink-0"></span>${h}</li>`).join('')}
        </ul>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8D9C0]">
        <div class="flex items-baseline gap-1.5">
          <strong class="text-2xl font-display font-bold text-[#3E3630]">${r.artisans}</strong>
          <span class="text-xs text-[#6B6158] font-sans uppercase tracking-wider">Pengrajin Budaya Aktif</span>
        </div>
        <a href="#pasar" class="inline-flex items-center gap-2 px-6 py-3 bg-[#3E3630] text-[#FCF0DA] text-xs font-sans font-bold tracking-[0.16em] uppercase hover:bg-[#D99B26] hover:text-white transition-all duration-300">Jelajahi Karya →</a>
      </div>
    `;
  }

  tabs.forEach(t => t.addEventListener('click', () => updatePanel(t.dataset.area)));
  pins.forEach(p => {
    p.addEventListener('click', () => updatePanel(p.dataset.area));
    p.addEventListener('mouseenter', () => updatePanel(p.dataset.area));
  });

  // Default
  updatePanel(current);
}

/* --------------------------------------------------------------------------
   11. MARKETPLACE — filter + cart + quick view
   -------------------------------------------------------------------------- */
function initMarketplace() {
  const grid = document.getElementById('product-grid');
  const filterBtns = document.querySelectorAll('.filter-tab[data-filter]');
  const cartCountEl = document.getElementById('cart-count');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const qvModal = document.getElementById('quick-view-modal');
  const qvClose = document.getElementById('qv-close');

  if (!grid) return;

  let cartCount = 0;
  let activeFilter = 'all';

  function renderProducts(filter) {
    const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    grid.innerHTML = list.map(p => buildProductCard(p)).join('');
    // Re-attach events after re-render
    grid.querySelectorAll('[data-buy]').forEach(btn => btn.addEventListener('click', handleBuy));
    grid.querySelectorAll('[data-qv]').forEach(btn => btn.addEventListener('click', handleQV));
  }

  function buildProductCard(p) {
    const priceStr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(p.price);
    const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
    return `
      <article class="product-card flex flex-col" data-cat="${p.cat}">
        <div class="img-wrap h-52 bg-[#F4E8D3]">
          <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='assets/images/image-90.png'">
          <button data-qv="${p.id}" class="quick-view-overlay" aria-label="Lihat Cepat">
            <span class="text-white text-xs font-semibold tracking-widest uppercase">Lihat Cepat</span>
          </button>
        </div>
        <div class="p-4 flex flex-col flex-1">
          ${p.verified ? '<span class="text-[11px] font-bold tracking-widest uppercase text-[#9A6F00] mb-1">✦ Terverifikasi</span>' : ''}
          <h4 class="font-display text-sm font-semibold text-[#3E3630] leading-snug mb-0.5">${p.name}</h4>
          <p class="text-[11px] text-[#6B6158] mb-2">${p.daerah}</p>
          <div class="flex items-center gap-1 mb-3">
            <span class="text-[#D99B26] text-xs leading-none">${'★'.repeat(Math.round(p.rating))}</span>
            <span class="text-xs text-[#6B6158]">(${p.sold})</span>
          </div>
          <div class="mt-auto flex items-center justify-between gap-2">
            <span class="font-semibold text-sm text-[#3E3630]">${priceStr}</span>
            <button data-buy="${p.id}" data-name="${p.name}" class="px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase bg-[#3E3630] text-[#FCF0DA] hover:bg-[#D99B26] hover:text-white transition-colors duration-300">Dukung</button>
          </div>
        </div>
      </article>`;
  }

  function handleBuy(e) {
    const btn = e.currentTarget;
    cartCount++;
    if (cartCountEl) {
      cartCountEl.textContent = cartCount;
      cartCountEl.classList.remove('hidden');
      cartCountEl.classList.add('bump');
      setTimeout(() => cartCountEl.classList.remove('bump'), 300);
    }
    showToast(`"${btn.dataset.name}" ditambahkan ke keranjang`);
  }

  function handleQV(e) {
    const id = parseInt(e.currentTarget.dataset.qv);
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || !qvModal) return;
    const priceStr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(p.price);
    document.getElementById('qv-content').innerHTML = `
      <div class="grid sm:grid-cols-2 gap-6">
        <img src="${p.img}" class="w-full h-64 sm:h-80 object-cover rounded-sm" onerror="this.src='assets/images/image-90.png'">
        <div class="flex flex-col justify-between">
          <div>
            <p class="text-eyebrow mb-2">${p.cat} · ${p.daerah}</p>
            <h3 class="font-display font-semibold text-xl text-[#3E3630] mb-3">${p.name}</h3>
            <p class="text-sm text-[#6B6158] leading-relaxed">Karya otentik pengrajin lokal terverifikasi Nusava. Dibuat dengan teknik tradisional turun-temurun yang menggunakan bahan alam pilihan.</p>
          </div>
          <div class="mt-4 border-t border-[#E8D9C0] pt-4">
            <p class="text-xl font-semibold text-[#3E3630] mb-4">${priceStr}</p>
            <button data-buy="${p.id}" data-name="${p.name}" class="w-full py-3 font-bold text-xs tracking-widest uppercase bg-[#3E3630] text-[#FCF0DA] hover:bg-[#D99B26] transition-colors duration-300">Dukung Pengrajin</button>
          </div>
        </div>
      </div>`;
    qvModal.querySelector('[data-buy]')?.addEventListener('click', e => { handleBuy(e); closeQV(); });
    qvModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeQV() {
    qvModal?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.remove('hide');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hide'), 3000);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderProducts(activeFilter);
    });
  });

  qvClose?.addEventListener('click', closeQV);
  qvModal?.addEventListener('click', e => { if (e.target === qvModal) closeQV(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeQV(); });

  renderProducts(activeFilter);
}

/* --------------------------------------------------------------------------
   12. JOURNAL SLIDER
   -------------------------------------------------------------------------- */
function initJournalSlider() {
  const track  = document.getElementById('journal-track');
  const dotsEl = document.getElementById('journal-dots');
  const prevBtn = document.getElementById('journal-prev');
  const nextBtn = document.getElementById('journal-next');
  if (!track) return;

  // Render slides
  track.innerHTML = ARTICLES.map(a => `
    <article class="journal-card flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-[#FFFDF9]">
      <div class="card-img h-48 overflow-hidden">
        <img src="${a.img}" alt="${a.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='assets/images/image-80.png'">
      </div>
      <div class="p-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-eyebrow">${a.tag}</span>
          <span class="text-xs text-[#6B6158]">· ${a.read} baca</span>
        </div>
        <h4 class="font-display font-semibold text-base sm:text-lg text-[#3E3630] leading-snug mb-3">${a.title}</h4>
        <div class="flex items-center justify-between border-t border-[#E8D9C0] pt-3">
          <span class="text-xs text-[#6B6158]">${a.author}</span>
          <span class="text-xs text-[#6B6158]">${a.date}</span>
        </div>
      </div>
    </article>`).join('');

  // Dots
  if (dotsEl) {
    dotsEl.innerHTML = ARTICLES.map((_, i) => `<button class="journal-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Artikel ${i+1}"></button>`).join('');
  }

  let current = 0;
  const cards = track.querySelectorAll('.journal-card');
  const cardW = () => (cards[0]?.offsetWidth || 300) + 16; // gap-4 = 16px

  const go = (idx) => {
    current = Math.max(0, Math.min(idx, ARTICLES.length - 1));
    track.style.transform = `translateX(-${current * cardW()}px)`;
    dotsEl?.querySelectorAll('.journal-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  };

  prevBtn?.addEventListener('click', () => go(current - 1));
  nextBtn?.addEventListener('click', () => go(current + 1));
  dotsEl?.querySelectorAll('.journal-dot').forEach(d => d.addEventListener('click', () => go(+d.dataset.idx)));

  // Touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   13. SUBNAV ACTIVE SECTION TRACKING
   -------------------------------------------------------------------------- */
function initSubNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.sub-nav-link[href^="#"]');
  if (!links.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* --------------------------------------------------------------------------
   14. NEWSLETTER FORM
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    if (!input?.value) return;
    const btn = form.querySelector('button[type=submit]');
    if (btn) { btn.textContent = 'Terima Kasih!'; btn.disabled = true; }
    input.value = '';
    setTimeout(() => { if (btn) { btn.textContent = 'Berlangganan'; btn.disabled = false; } }, 3000);
  });
}

/* --------------------------------------------------------------------------
   15. BOOT
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initParallax();
  initVideoModal();
  initAreaSwitcher();
  initMarketplace();
  initJournalSlider();
  initSubNavTracking();
  initNewsletter();
});
