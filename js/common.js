/* ============================================================
   فایل مشترک - باربی باش
   هدر، فوتر، بنر و توابع مشترک UI
   ============================================================ */

const SITE = {
  name: 'باربی‌باش',
  nameEn: 'Barbiebash',
  tagline: 'لاغری طبیعی و سالم',
  whatsapp: '989307167748',
  telegram: 'barbibash2427',
  phone: '09307167748',
  phoneDisplay: '۰۹۳۰۷۱۶۷۷۴۸'
};

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path.replace('.html', '') || 'index';
}

function renderGlobalBanner() {
  return `
  <div class="global-banner">
    <i class="fa-solid fa-gift blink"></i>
    <span id="globalBannerText">جشنواره تخفیف سراسری ${GLOBAL_DISCOUNT || 15}٪ — ارسال رایگان بالای ۵ میلیون تومان</span>
  </div>`;
}

function renderNavbar() {
  const page = getCurrentPage();
  const isActive = (p) => page === p ? 'active' : '';
  return `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="images/logo/logo.png" alt="${SITE.name}" class="brand-logo" width="140" height="40" onerror="this.style.display='none'">
        <span class="brand-text d-none">${SITE.name}</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="منو">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link ${isActive('index')}" href="index.html">خانه</a></li>
          <li class="nav-item"><a class="nav-link ${isActive('shop')}" href="shop.html">فروشگاه</a></li>
          <li class="nav-item"><a class="nav-link ${isActive('about')}" href="about.html">درباره ما</a></li>
          <li class="nav-item"><a class="nav-link ${isActive('faq')}" href="faq.html">سوالات متداول</a></li>
          <li class="nav-item"><a class="nav-link ${isActive('contact')}" href="contact.html">تماس</a></li>
        </ul>
        <div class="d-flex align-items-center gap-3">
          <a href="cart.html" class="position-relative text-decoration-none cart-link" aria-label="سبد خرید" style="color:var(--pink); font-size:1.35rem;">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="cart-badge">۰</span>
          </a>
          <a href="shop.html" class="btn btn-pink btn-sm px-4 d-none d-md-inline-flex">خرید کنید</a>
        </div>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4 py-5">
        <div class="col-lg-4">
          <div class="footer-brand mb-3">
            <img src="images/logo/logo-white.png" alt="${SITE.name}" class="footer-logo" width="130" onerror="this.style.display='none'">
            <h5 class="text-white mt-2 mb-1">${SITE.name}</h5>
            <p class="text-white-50 small mb-0">${SITE.tagline}</p>
          </div>
          <p class="text-white-50 small">مکمل‌های گیاهی لاغری با فرمولاسیون علمی و تأیید متخصصان. سلامتی شما اولویت ماست.</p>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="text-white mb-3">دسترسی سریع</h6>
          <ul class="list-unstyled footer-links">
            <li><a href="index.html">خانه</a></li>
            <li><a href="shop.html">فروشگاه</a></li>
            <li><a href="about.html">درباره ما</a></li>
            <li><a href="faq.html">سوالات متداول</a></li>
            <li><a href="contact.html">تماس با ما</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h6 class="text-white mb-3">پشتیبانی</h6>
          <ul class="list-unstyled footer-links">
            <li><a href="faq.html">راهنمای خرید</a></li>
            <li><a href="faq.html">شرایط ارسال</a></li>
            <li><a href="contact.html">پیگیری سفارش</a></li>
            <li><a href="contact.html">مشاوره رایگان</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h6 class="text-white mb-3">تماس و سفارش</h6>
          <div class="contact-info">
            <a href="https://wa.me/${SITE.whatsapp}" class="d-flex align-items-center gap-2 mb-2 text-white-50 text-decoration-none" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp fa-lg" style="color:#25D366"></i>
              <span>واتساپ</span>
            </a>
            <a href="https://t.me/${SITE.telegram}" class="d-flex align-items-center gap-2 mb-2 text-white-50 text-decoration-none" target="_blank" rel="noopener">
              <i class="fa-brands fa-telegram fa-lg" style="color:#0088cc"></i>
              <span>تلگرام @${SITE.telegram}</span>
            </a>
            <a href="tel:${SITE.phone}" class="d-flex align-items-center gap-2 text-white-50 text-decoration-none">
              <i class="fa-solid fa-phone"></i>
              <span>${SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom py-3 border-top border-white-10 text-center">
        <p class="mb-0 text-white-50 small">© ${new Date().getFullYear()} ${SITE.name}. تمامی حقوق محفوظ است.</p>
      </div>
    </div>
  </footer>`;
}

function injectCommonUI() {
  // Banner
  const bannerPlaceholder = document.getElementById('global-banner-placeholder');
  if (bannerPlaceholder) {
    bannerPlaceholder.outerHTML = renderGlobalBanner();
  } else if (!document.querySelector('.global-banner')) {
    document.body.insertAdjacentHTML('afterbegin', renderGlobalBanner());
  }

  // Navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = renderNavbar();
  }

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = renderFooter();
  } else if (!document.querySelector('.site-footer')) {
    document.body.insertAdjacentHTML('beforeend', renderFooter());
  }

  // Update cart badge after injection
  if (typeof updateCartBadge === 'function') {
    updateCartBadge();
  }
}

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `site-toast show ${type}`;
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Enhanced add to cart with feedback
function addToCartWithFeedback(id, qty = 1) {
  if (typeof addToCart === 'function') {
    addToCart(id, qty);
    const product = typeof getProductById === 'function' ? getProductById(id) : null;
    const name = product ? product.name : 'محصول';
    showToast(`${name} به سبد خرید اضافه شد`, 'success');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectCommonUI();
});
