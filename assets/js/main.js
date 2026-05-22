/* ========================================
   main.js — Mobile nav, product rendering,
   quote form mailto handler, active link highlighting.
   ======================================== */

(function () {
  // ---------- Mobile nav toggle ----------
  function initNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Đóng menu khi click 1 link (nav mobile)
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
      })
    );
  }

  // ---------- Highlight active nav link ----------
  function initActiveLink() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach((a) => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('is-active');
      }
    });
  }

  // ---------- Render products ----------
  function categoryLabel(catId) {
    const lang = (window.CKA_I18N && window.CKA_I18N.getLang()) || 'vi';
    const cat = (window.CKA_CATEGORIES || []).find((c) => c.id === catId);
    return cat ? cat[lang] : catId;
  }

  function productCard(p) {
    const lang = (window.CKA_I18N && window.CKA_I18N.getLang()) || 'vi';
    const t = (window.CKA_I18N && window.CKA_I18N.t) || ((vi) => vi);
    const name = p.name[lang] || p.name.vi;
    const cat = categoryLabel(p.category);
    const ctaText = t('Yêu cầu báo giá', 'Request quote');
    const quoteUrl = 'contact.html?product=' + encodeURIComponent(p.id);
    return (
      '<article class="product-card" data-category="' + p.category + '" data-product-id="' + p.id + '">' +
        '<div class="product-img"><img src="images/' + p.image + '" alt="' + name + '" loading="lazy"></div>' +
        '<div class="product-body">' +
          '<span class="product-cat">' + cat + '</span>' +
          '<h3 class="product-name">' + name + '</h3>' +
          '<a class="btn btn-secondary" href="' + quoteUrl + '">' + ctaText + '</a>' +
        '</div>' +
      '</article>'
    );
  }

  function renderGrid(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = items.map(productCard).join('');
  }

  function renderFeatured() {
    const items = (window.CKA_PRODUCTS || []).filter((p) => p.featured);
    renderGrid('featured-grid', items);
  }

  function renderCatalog(category) {
    const all = window.CKA_PRODUCTS || [];
    const items = !category || category === 'all' ? all : all.filter((p) => p.category === category);
    renderGrid('product-grid', items);
    const empty = document.getElementById('product-empty');
    if (empty) empty.style.display = items.length === 0 ? 'block' : 'none';
  }

  function renderCategoryTabs() {
    const wrap = document.getElementById('category-tabs');
    if (!wrap) return;
    const lang = (window.CKA_I18N && window.CKA_I18N.getLang()) || 'vi';
    wrap.innerHTML = (window.CKA_CATEGORIES || [])
      .map((c, i) => {
        const cls = 'category-tab' + (i === 0 ? ' is-active' : '');
        return '<button class="' + cls + '" data-cat="' + c.id + '">' + (c[lang] || c.id) + '</button>';
      })
      .join('');
    wrap.querySelectorAll('.category-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        wrap.querySelectorAll('.category-tab').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderCatalog(btn.dataset.cat);
        // Cập nhật query string (giúp share link đã filter)
        const url = new URL(location.href);
        if (btn.dataset.cat === 'all') url.searchParams.delete('cat');
        else url.searchParams.set('cat', btn.dataset.cat);
        history.replaceState(null, '', url.toString());
      });
    });
  }

  function initCatalogPage() {
    if (!document.getElementById('product-grid')) return;
    renderCategoryTabs();
    const initial = new URL(location.href).searchParams.get('cat') || 'all';
    renderCatalog(initial);
    // Set active tab matching initial
    document.querySelectorAll('.category-tab').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.cat === initial);
    });
  }

  function initFeaturedSection() {
    if (!document.getElementById('featured-grid')) return;
    renderFeatured();
  }

  // Re-render khi đổi ngôn ngữ (label danh mục + tên sản phẩm)
  document.addEventListener('lang:change', () => {
    if (document.getElementById('featured-grid')) renderFeatured();
    if (document.getElementById('product-grid')) {
      const active = document.querySelector('.category-tab.is-active');
      const cat = active ? active.dataset.cat : 'all';
      renderCategoryTabs();
      renderCatalog(cat);
      // Re-apply active tab
      document.querySelectorAll('.category-tab').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.cat === cat);
      });
    }
  });

  // ---------- Quote form: mailto submission ----------
  function initQuoteForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;

    // Prefill product field từ ?product=p01
    const preset = new URL(location.href).searchParams.get('product');
    if (preset) {
      const all = window.CKA_PRODUCTS || [];
      const p = all.find((x) => x.id === preset);
      if (p) {
        const productField = form.querySelector('[name="product"]');
        if (productField) {
          const lang = (window.CKA_I18N && window.CKA_I18N.getLang()) || 'vi';
          productField.value = (p.name[lang] || p.name.vi) + ' (mã ' + p.id + ')';
        }
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const t = (window.CKA_I18N && window.CKA_I18N.t) || ((vi) => vi);

      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const product = (data.get('product') || '').toString().trim();
      const qty = (data.get('quantity') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !phone) {
        alert(t('Vui lòng nhập Họ tên và Số điện thoại.', 'Please enter your name and phone number.'));
        return;
      }

      const subject = t('Yêu cầu báo giá từ ', 'Quote request from ') + name +
        (product ? ' — ' + product : '');

      const lines = [
        t('Họ tên:',        'Name:')        + ' ' + name,
        t('Điện thoại:',    'Phone:')       + ' ' + phone,
        t('Email:',         'Email:')       + ' ' + email,
        t('Công ty:',       'Company:')     + ' ' + company,
        t('Sản phẩm:',      'Product:')     + ' ' + product,
        t('Số lượng:',      'Quantity:')    + ' ' + qty,
        '',
        t('Nội dung yêu cầu:', 'Request details:'),
        message,
        '',
        '---',
        t('Gửi từ website cokhiankhang.com', 'Sent from cokhiankhang.com')
      ];

      const body = lines.join('\n');
      const mailto =
        'mailto:cokhiankhan@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initActiveLink();
    initFeaturedSection();
    initCatalogPage();
    initQuoteForm();
  });
})();
