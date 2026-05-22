/* ========================================
   i18n — Vietnamese (default) / English
   Cơ chế: mỗi phần tử text có cả data-vi và data-en.
   JS đổi innerText (hoặc innerHTML cho thẻ có <br>) theo localStorage.lang.
   Mặc định LUÔN là 'vi' khi mở trang lần đầu, kể cả khi browser
   gửi Accept-Language: en. Sau khi user bấm cờ, lưu localStorage.
   ======================================== */

(function () {
  const STORAGE_KEY = 'cka.lang';
  const DEFAULT_LANG = 'vi';
  const SUPPORTED = ['vi', 'en'];

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateFlagButtons(lang);
    document.documentElement.lang = lang;
    // Cho phép code khác (vd. renderProducts) lắng nghe đổi ngôn ngữ
    document.dispatchEvent(new CustomEvent('lang:change', { detail: { lang } }));
  }

  function applyLang(lang) {
    const other = lang === 'vi' ? 'en' : 'vi';

    // Text content (kèm <br> hoặc HTML inline)
    document.querySelectorAll('[data-vi][data-en]').forEach((el) => {
      const value = el.getAttribute('data-' + lang);
      if (value == null) return;
      if (value.includes('<') && value.includes('>')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Placeholder cho input/textarea: data-vi-placeholder / data-en-placeholder
    document.querySelectorAll('[data-vi-placeholder][data-en-placeholder]').forEach((el) => {
      const value = el.getAttribute('data-' + lang + '-placeholder');
      if (value != null) el.placeholder = value;
    });

    // Title attr (tooltip): data-vi-title / data-en-title
    document.querySelectorAll('[data-vi-title][data-en-title]').forEach((el) => {
      const value = el.getAttribute('data-' + lang + '-title');
      if (value != null) el.title = value;
    });

    // aria-label: data-vi-aria / data-en-aria
    document.querySelectorAll('[data-vi-aria][data-en-aria]').forEach((el) => {
      const value = el.getAttribute('data-' + lang + '-aria');
      if (value != null) el.setAttribute('aria-label', value);
    });
  }

  function updateFlagButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
  }

  function initFlagButtons() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  // Helper cho code khác cần biết ngôn ngữ hiện tại
  window.CKA_I18N = {
    getLang,
    setLang,
    t: function (vi, en) {
      return getLang() === 'en' ? en : vi;
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    initFlagButtons();
    const lang = getLang();
    document.documentElement.lang = lang;
    applyLang(lang);
    updateFlagButtons(lang);
  });
})();
