/**
 * HOTPRESSO CAFÉ - INTERACTIVE JAVASCRIPT
 * Developed for Hotpresso Sales Demo by Buildicy
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initStickyHeader();
  initLiveHoursStatus();
  initMenuFilterAndSearch();
  initGalleryLightbox();
  initSmoothScrollLinks();
  initScrollReveal();
  initShareButton();
  initDemoCustomizer();
});

/* ==========================================================================
   1. MOBILE NAVIGATION & DRAWER
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = drawer ? drawer.querySelectorAll('.mobile-link') : [];

  if (!toggleBtn || !drawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.add('open');
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && 
        !drawer.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

/* ==========================================================================
   2. STICKY HEADER SCROLL EFFECT
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. LIVE OPERATING HOURS STATUS (11:00 AM - 11:00 PM)
   ========================================================================== */
function initLiveHoursStatus() {
  const badgeText = document.getElementById('liveStatusText');
  const pulseDot = document.querySelector('.pulse-dot');
  if (!badgeText) return;

  // Check current time in IST (Coimbatore: UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  const currentHour = istTime.getHours();
  const currentMinutes = istTime.getMinutes();
  const decimalTime = currentHour + (currentMinutes / 60);

  // Opening hours: 11:00 AM (11.0) to 11:00 PM (23.0)
  const isOpen = decimalTime >= 11.0 && decimalTime < 23.0;

  if (isOpen) {
    badgeText.innerHTML = '<strong>Open Now</strong> · Today 11 AM–11 PM';
    if (pulseDot) pulseDot.style.backgroundColor = '#22c55e';
  } else {
    badgeText.innerHTML = '<strong>Opens at 11 AM</strong> · Daily 11 AM–11 PM';
    if (pulseDot) pulseDot.style.backgroundColor = '#f59e0b';
  }
}

/* ==========================================================================
   4. FILTERABLE & SEARCHABLE MENU
   ========================================================================== */
function initMenuFilterAndSearch() {
  const filterButtons = document.querySelectorAll('.menu-filter-btn');
  const menuItems = document.querySelectorAll('.menu-item-row');
  const searchInput = document.getElementById('menuSearchInput');
  const emptyNotice = document.getElementById('menuEmptyState');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterMenu() {
    let visibleCount = 0;

    menuItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const itemName = (item.querySelector('.menu-item-name')?.textContent || '').toLowerCase();
      const itemDesc = (item.querySelector('.menu-item-desc')?.textContent || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || itemCategory === activeCategory;
      const matchesSearch = !searchTerm || itemName.includes(searchTerm) || itemDesc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        item.style.display = 'flex';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterMenu();
    });
  }
}

/* ==========================================================================
   5. GALLERY LIGHTBOX
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.vibe-gallery-item');
  const modal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !lightboxImg || !closeBtn) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || 'Hotpresso Café Experience';
      const desc = item.querySelector('p')?.textContent || '';

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85rem;color:#d2c1a5">${desc}</span>`;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. SMOOTH SCROLLING WITH OFFSET
   ========================================================================== */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   7. SUBTLE EDITORIAL SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.product-card, .menu-item-row, .why-card, .review-card, .vibe-gallery-item, .offer-card, .location-info-card, .location-map-card');
  
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

/* ==========================================================================
   8. NATIVE MOBILE WEB SHARE API
   ========================================================================== */
function initShareButton() {
  const shareBtn = document.getElementById('btnShareCafe');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Hotpresso Café | Saravanampatti, Coimbatore',
      text: 'Check out Hotpresso Café at Meena Food Court, Saravanampatti! Fresh coffee, rich hot chocolate, and refreshing matcha.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          fallbackWhatsAppShare();
        }
      }
    } else {
      fallbackWhatsAppShare();
    }
  });

  function fallbackWhatsAppShare() {
    const waText = encodeURIComponent('Check out Hotpresso Café in Saravanampatti, Coimbatore: ' + window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${waText}`, '_blank');
  }
}

/* ==========================================================================
   9. CLIENT PITCH: DEMO LIVE CUSTOMIZER
   ========================================================================== */
function initDemoCustomizer() {
  const openBtn = document.getElementById('openCustomizerBtn');
  const closeBtn = document.getElementById('closeCustomizerBtn');
  const modal = document.getElementById('customizerModal');
  const form = document.getElementById('customizerForm');
  const resetBtn = document.getElementById('resetCustomizerBtn');

  if (!openBtn || !modal || !form) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const priceVal = document.getElementById('inputHotChocPrice').value.trim();
    const offerTitleVal = document.getElementById('inputOfferTitle').value.trim();
    const offerSubVal = document.getElementById('inputOfferSub').value.trim();

    // Update Hot Chocolate price in featured card
    if (priceVal) {
      const priceElement = document.querySelector('.featured-grid .product-card:first-child .price-value');
      if (priceElement) priceElement.textContent = priceVal;
    }

    // Update Offer Spotlight banner
    if (offerTitleVal) {
      const offerTitleElem = document.querySelector('.offer-card .offer-item-title');
      if (offerTitleElem) offerTitleElem.textContent = offerTitleVal;
    }

    if (offerSubVal) {
      const offerSubElem = document.querySelector('.offer-card .offer-item-sub');
      if (offerSubElem) offerSubElem.textContent = offerSubVal;
    }

    closeModal();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const priceElement = document.querySelector('.featured-grid .product-card:first-child .price-value');
      if (priceElement) priceElement.textContent = 'From ₹___';

      const offerTitleElem = document.querySelector('.offer-card .offer-item-title');
      if (offerTitleElem) offerTitleElem.textContent = 'Hot Chocolate + Croissant Combo';

      const offerSubElem = document.querySelector('.offer-card .offer-item-sub');
      if (offerSubElem) offerSubElem.textContent = 'Available for a limited time';

      form.reset();
      closeModal();
    });
  }
}

