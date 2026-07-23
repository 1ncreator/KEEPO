// KEEPO — shared site behavior (nav, language switching, forms, widgets).
(function () {
  var I18N = window.KEEPO_I18N;
  var KB = window.KEEPO_BOOKING_SHARED;
  var page = document.body.getAttribute('data-page');
  var accent = 'oklch(0.72 0.15 155)';

  function getLang() {
    try { return localStorage.getItem('keepo_lang') || 'pl'; } catch (e) { return 'pl'; }
  }
  function setLang(lang) {
    try { localStorage.setItem('keepo_lang', lang); } catch (e) {}
    document.documentElement.setAttribute('data-lang', lang);
    applyLang(lang);
  }

  // ---------- generic data-i18n text/attr replacement ----------
  function byPath(obj, path) {
    return path.split('.').reduce(function (o, k) { return (o == null ? o : o[k]); }, obj);
  }
  function applyGenericI18n(dict) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var val = byPath(dict, el.getAttribute('data-i18n'));
      if (val != null) el.textContent = val;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-placeholder]'), function (el) {
      var val = byPath(dict, el.getAttribute('data-i18n-placeholder'));
      if (val != null) el.setAttribute('placeholder', val);
    });
  }

  // ---------- nav (mobile menu, active link, smooth scroll) ----------
  function initNav() {
    var toggleBtns = document.querySelectorAll('.keepo-nav-toggle');
    var mobileMenu = document.querySelector('.keepo-mobile-menu');
    Array.prototype.forEach.call(toggleBtns, function (btn) {
      btn.addEventListener('click', function () {
        if (!mobileMenu) return;
        mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll('.keepo-mobile-menu a, .keepo-mobile-menu button'), function (el) {
      el.addEventListener('click', function () { if (mobileMenu) mobileMenu.style.display = 'none'; });
    });

    // in-page smooth scroll for same-document hash links
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        var navH = 84;
        var top = el.getBoundingClientRect().top + window.pageYOffset - navH;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        try { history.replaceState(null, '', '#' + id); } catch (err) {}
      });
    });

    // scroll to hash on load (cross-page nav, e.g. index.html#why)
    if (window.location.hash) {
      var targetId = window.location.hash.slice(1);
      window.scrollTo(0, 0);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          var el = document.getElementById(targetId);
          if (el) {
            var top = el.getBoundingClientRect().top + window.pageYOffset - 84;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        });
      });
    }

    // back-to-top
    var topBtn = document.querySelector('.keepo-top-btn');
    if (topBtn) topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // scroll-spy (index page only)
    var navLinks = document.querySelectorAll('.keepo-nav-links a[data-section], .keepo-mobile-menu a[data-section]');
    if (navLinks.length) {
      var sectionEls = [];
      navLinks.forEach(function (l) {
        var id = l.getAttribute('data-section');
        var el = document.getElementById(id);
        if (el && sectionEls.indexOf(el) === -1) sectionEls.push(el);
      });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            document.querySelectorAll('[data-section="' + entry.target.id + '"]').forEach(function (activeLink) {
              document.querySelectorAll('.keepo-nav-links a[data-section]').forEach(function (l) { l.classList.remove('active'); l.style.color = 'oklch(0.85 0.004 90)'; });
              document.querySelectorAll('[data-section="' + entry.target.id + '"]').forEach(function (l) { l.classList.add('active'); l.style.color = accent; });
            });
          }
        });
      }, { rootMargin: '-45% 0px -45% 0px' });
      sectionEls.forEach(function (el) { observer.observe(el); });
    }
  }

  // ---------- phone formatting ----------
  function initPhoneInputs() {
    Array.prototype.forEach.call(document.querySelectorAll('input[data-phone]'), function (input) {
      input.addEventListener('input', function () {
        var digits = input.value.replace(/\D/g, '').slice(0, 9);
        input.value = KB ? KB.formatPolishPhone(digits) : digits;
      });
    });
  }

  // ---------- booking forms (submit -> thank-you swap) ----------
  function initForms() {
    Array.prototype.forEach.call(document.querySelectorAll('form[data-booking-form]'), function (form) {
      var serviceEl = form.querySelector('[data-component="service-select"]');
      var textarea = form.querySelector('textarea[name="message"]');
      if (serviceEl && textarea) {
        var wireOnChange = function () {
          if (!serviceEl._kInstance) { requestAnimationFrame(wireOnChange); return; }
          serviceEl._kInstance.onChange = function (value) {
            var KB = window.KEEPO_BOOKING_SHARED;
            if (KB) textarea.setAttribute('placeholder', KB.getPlaceholder(getLang(), value));
          };
        };
        wireOnChange();
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var wrap = form.closest('[data-form-wrap]');
        if (!wrap) return;
        wrap.querySelector('[data-form-body]').style.display = 'none';
        wrap.querySelector('[data-form-thanks]').style.display = 'block';
      });
    });
  }

  // ---------- FAQ accordion ----------
  function initFaq(lang) {
    var container = document.querySelector('[data-faq-list]');
    if (!container) return;
    var data = I18N.FAQ_DATA[lang];
    container.innerHTML = data.map(function (item, i) {
      return '<div class="keepo-faq-item" data-i="' + i + '">' +
        '<div class="keepo-faq-q">' +
        '<span style="font-weight:600;font-size:15.5px">' + item.q + '</span>' +
        '<span class="keepo-faq-icon">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="oklch(0.5 0.15 155)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>' +
        '</span></div>' +
        '<div class="keepo-faq-a-wrap"><div class="keepo-faq-a-inner">' +
        '<p style="margin:0;padding:0 26px 22px;font-size:14.5px;line-height:1.65;color:oklch(0.5 0.02 250)">' + item.a + '</p>' +
        '</div></div></div>';
    }).join('');
    Array.prototype.forEach.call(container.querySelectorAll('.keepo-faq-q'), function (q, i) {
      q.addEventListener('click', function () {
        var item = container.querySelectorAll('.keepo-faq-item')[i];
        var wasOpen = item.classList.contains('open');
        Array.prototype.forEach.call(container.querySelectorAll('.keepo-faq-item'), function (it) { it.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // ---------- testimonial carousel ----------
  var reviewIndex = 0;
  function renderReviews(lang) {
    var track = document.querySelector('[data-reviews-track]');
    var dotsWrap = document.querySelector('[data-reviews-dots]');
    if (!track) return;
    var data = I18N.TESTIMONIALS[lang];
    if (reviewIndex >= data.length) reviewIndex = 0;
    track.innerHTML = data.map(function (t) {
      var stars = '';
      for (var i = 0; i < 5; i++) stars += '<svg width="15" height="15" viewBox="0 0 24 24" fill="' + accent + '"><path d="M12 3l2.5 5.2 5.7.6-4.3 3.9 1.2 5.6L12 15.9 6.9 18.3l1.2-5.6L3.8 8.8l5.7-.6L12 3z"></path></svg>';
      return '<div style="flex:0 0 100%;background:oklch(0.99 0.004 90);border:1px solid oklch(0.91 0.006 90);border-radius:20px;padding:36px;box-sizing:border-box">' +
        '<div style="display:flex;gap:3px;margin-bottom:18px">' + stars + '</div>' +
        '<p style="font-size:15.5px;line-height:1.65;color:oklch(0.3 0.02 250);margin:0 0 24px;min-height:82px">&ldquo;' + t.text + '&rdquo;</p>' +
        '<div style="display:flex;align-items:center;gap:12px">' +
        '<div style="width:38px;height:38px;border-radius:100px;background:oklch(0.72 0.15 155 / 0.15);display:flex;align-items:center;justify-content:center;font-family:\'Manrope\',sans-serif;font-weight:700;font-size:14px;color:oklch(0.5 0.15 155)">' + t.initial + '</div>' +
        '<div><div style="font-weight:600;font-size:14px">' + t.name + '</div><div style="font-size:12.5px;color:oklch(0.55 0.02 250)">' + t.role + '</div></div>' +
        '</div></div>';
    }).join('');
    track.style.transform = 'translateX(-' + (reviewIndex * 100) + '%)';
    if (dotsWrap) {
      dotsWrap.innerHTML = data.map(function (_, i) {
        var isActive = i === reviewIndex;
        return '<button class="keepo-review-dot" data-i="' + i + '" style="width:' + (isActive ? '22px' : '8px') + ';background:' + (isActive ? accent : 'oklch(0.88 0.006 90)') + '"></button>';
      }).join('');
      Array.prototype.forEach.call(dotsWrap.querySelectorAll('button'), function (btn) {
        btn.addEventListener('click', function () { reviewIndex = parseInt(btn.getAttribute('data-i'), 10); renderReviews(getLang()); });
      });
    }
  }
  function initReviewArrows() {
    var prev = document.querySelector('[data-review-prev]');
    var next = document.querySelector('[data-review-next]');
    if (prev) prev.addEventListener('click', function () {
      var n = I18N.TESTIMONIALS[getLang()].length;
      reviewIndex = (reviewIndex - 1 + n) % n; renderReviews(getLang());
    });
    if (next) next.addEventListener('click', function () {
      var n = I18N.TESTIMONIALS[getLang()].length;
      reviewIndex = (reviewIndex + 1) % n; renderReviews(getLang());
    });
  }

  // ---------- before/after slider ----------
  var baIndex = 0;
  var BA_WORK_COUNT = 4;
  function renderBa(lang) {
    var titleEl = document.querySelector('[data-ba-title]');
    var dotsWrap = document.querySelector('[data-ba-dots]');
    var beforeImg = document.querySelector('[data-ba-before-img]');
    var afterImg = document.querySelector('[data-ba-after-img]');
    if (!titleEl) return;
    var titles = I18N.DICT[lang].baWorkTitles;
    titleEl.textContent = titles[baIndex] || titles[0];
    // Only work #0 (car) has real before/after photos bundled with this export.
    var hasPhoto = baIndex === 0;
    if (beforeImg) beforeImg.style.display = hasPhoto ? 'block' : 'none';
    if (afterImg) afterImg.style.display = hasPhoto ? 'block' : 'none';
    var placeholder = document.querySelector('[data-ba-placeholder]');
    if (placeholder) placeholder.style.display = hasPhoto ? 'none' : 'flex';
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      for (var i = 0; i < BA_WORK_COUNT; i++) {
        var isActive = i === baIndex;
        var btn = document.createElement('button');
        btn.className = 'keepo-ba-dot';
        btn.style.width = isActive ? '22px' : '8px';
        btn.style.background = isActive ? accent : 'oklch(0.88 0.006 90)';
        btn.addEventListener('click', (function (idx) { return function () { baIndex = idx; setBaPos(50); renderBa(getLang()); }; })(i));
        dotsWrap.appendChild(btn);
      }
    }
  }
  function setBaPos(pct) {
    var frame = document.querySelector('[data-ba-frame]');
    var clip = document.querySelector('[data-ba-clip]');
    var handle = document.querySelector('[data-ba-handle]');
    var line = document.querySelector('[data-ba-line]');
    if (clip) clip.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
    if (handle) handle.style.left = pct + '%';
    if (line) line.style.left = pct + '%';
  }
  function initBaSlider() {
    var frame = document.querySelector('[data-ba-frame]');
    var handle = document.querySelector('[data-ba-handle]');
    var prevBtn = document.querySelector('[data-ba-prev]');
    var nextBtn = document.querySelector('[data-ba-next]');
    if (!frame) return;
    var dragging = false;
    function moveTo(clientX) {
      var rect = frame.getBoundingClientRect();
      var x = clientX - rect.left;
      var pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setBaPos(pct);
    }
    function down(e) {
      dragging = true;
      moveTo(e.touches ? e.touches[0].clientX : e.clientX);
    }
    if (handle) {
      handle.addEventListener('mousedown', down);
      handle.addEventListener('touchstart', down, { passive: true });
    }
    window.addEventListener('mousemove', function (e) { if (dragging) moveTo(e.clientX); });
    window.addEventListener('touchmove', function (e) { if (dragging) moveTo(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('mouseup', function () { dragging = false; });
    window.addEventListener('touchend', function () { dragging = false; });
    if (prevBtn) prevBtn.addEventListener('click', function () { baIndex = (baIndex - 1 + BA_WORK_COUNT) % BA_WORK_COUNT; setBaPos(50); renderBa(getLang()); });
    if (nextBtn) nextBtn.addEventListener('click', function () { baIndex = (baIndex + 1) % BA_WORK_COUNT; setBaPos(50); renderBa(getLang()); });
  }

  // ---------- page-specific dynamic re-render on language change ----------
  function renderIndexDynamic(lang) {
    var t = I18N.DICT[lang];

    // hero chips
    var chipsWrap = document.querySelector('[data-hero-chips]');
    if (chipsWrap) {
      chipsWrap.innerHTML = t.hero.chips.map(function (c) {
        var paths = I18N.ICON_PATHS[c.icon].map(function (p) { return '<path d="' + p + '"></path>'; }).join('');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:64px">' +
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>' +
          '<span style="font-size:11.5px;font-weight:700;letter-spacing:0.5px;color:oklch(0.75 0.02 250);text-transform:uppercase">' + c.label + '</span></div>';
      }).join('');
    }

    // service direction cards (text only — images are static in HTML)
    var svcCar = document.querySelector('[data-svc-car]');
    if (svcCar) {
      svcCar.querySelector('[data-svc-title]').textContent = t.services.directions.car.title;
      svcCar.querySelector('[data-svc-desc]').textContent = t.services.directions.car.desc;
      svcCar.querySelector('[data-svc-features]').innerHTML = t.services.directions.car.features.map(featureRow).join('');
      svcCar.querySelector('[data-svc-more]').firstChild.textContent = t.services.moreLabel + ' ';
    }
    var svcHome = document.querySelector('[data-svc-home]');
    if (svcHome) {
      svcHome.querySelector('[data-svc-title]').textContent = t.services.directions.home.title;
      svcHome.querySelector('[data-svc-desc]').textContent = t.services.directions.home.desc;
      svcHome.querySelector('[data-svc-features]').innerHTML = t.services.directions.home.features.map(featureRow).join('');
      svcHome.querySelector('[data-svc-more]').firstChild.textContent = t.services.moreLabel + ' ';
    }
    function featureRow(feat) {
      return '<div style="display:flex;align-items:center;gap:10px">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><path d="M20 6L9 17l-5-5"></path></svg>' +
        '<span style="font-size:14px;color:oklch(0.3 0.02 250)">' + feat + '</span></div>';
    }

    // pricing preview items
    var priceGrid = document.querySelector('[data-price-grid]');
    if (priceGrid) {
      priceGrid.innerHTML = t.pricingPreview.items.map(function (item) {
        var paths = I18N.ICON_PATHS[item.icon].map(function (p) { return '<path d="' + p + '"></path>'; }).join('');
        return '<div class="keepo-price-card" style="display:flex;align-items:center;gap:18px;background:oklch(1 0 0);border:1px solid oklch(0.93 0.006 90);border-radius:20px;padding:24px 28px;box-shadow:0 8px 24px -16px oklch(0.2 0.02 250 / 0.12);transition:transform 0.25s,box-shadow 0.25s;height:88px;min-width:0;box-sizing:border-box">' +
          '<div style="flex:none;width:48px;height:48px;border-radius:14px;background:color-mix(in oklch, ' + accent + ' 12%, transparent);display:flex;align-items:center;justify-content:center">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg></div>' +
          '<div style="flex:1;min-width:0"><div style="font-family:\'Manrope\',sans-serif;font-weight:600;font-size:15.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + item.name + '</div></div>' +
          '<div style="flex:none;font-family:\'Manrope\',sans-serif;font-weight:800;font-size:19px;color:' + accent + '">' + item.price + '</div></div>';
      }).join('');
    }

    // why-choose bento grid
    setTextIfExists('[data-why-mobile-title]', t.why.items.mobile.title);
    setTextIfExists('[data-why-mobile-desc]', t.why.items.mobile.desc);
    setTextIfExists('[data-why-equipment-title]', t.why.items.equipment.title);
    setTextIfExists('[data-why-equipment-desc]', t.why.items.equipment.desc);
    setTextIfExists('[data-why-experienced-title]', t.why.items.experienced.title);
    setTextIfExists('[data-why-experienced-desc]', t.why.items.experienced.desc);
    setTextIfExists('[data-why-eco-title]', t.why.items.eco.title);
    setTextIfExists('[data-why-eco-desc]', t.why.items.eco.desc);
    setTextIfExists('[data-why-fast-title]', t.why.items.fast.title);
    setTextIfExists('[data-why-fast-desc]', t.why.items.fast.desc);
    setTextIfExists('[data-why-pricing-title]', t.why.items.pricing.title);
    setTextIfExists('[data-why-pricing-desc]', t.why.items.pricing.desc);

    // how-it-works steps
    ['s1', 's2', 's3', 's4'].forEach(function (key) {
      setTextIfExists('[data-how-' + key + '-title]', t.how.steps[key].title);
      setTextIfExists('[data-how-' + key + '-desc]', t.how.steps[key].desc);
    });

    // before/after labels
    setTextIfExists('[data-ba-before-label]', t.ba.before);
    setTextIfExists('[data-ba-after-label]', t.ba.after);

    // footer service links
    var footerLinksWrap = document.querySelector('[data-footer-service-links]');
    if (footerLinksWrap) {
      footerLinksWrap.innerHTML = t.footerServiceLinks.map(function (lnk) {
        return '<a href="#services" class="keepo-footer-link" style="font-size:14px;color:oklch(0.6 0.02 250);text-decoration:none">' + lnk + '</a>';
      }).join('');
    }

    initFaq(lang);
    renderReviews(lang);
    renderBa(lang);
  }

  function renderPricingDynamic(lang) {
    var t = I18N.PDICT[lang];
    var catsWrap = document.querySelector('[data-categories]');
    if (catsWrap) {
      catsWrap.innerHTML = t.categories.map(function (cat) {
        var paths = I18N.PICON_PATHS[cat.icon].map(function (p) { return '<path d="' + p + '"></path>'; }).join('');
        var rows = cat.rows.map(function (r) {
          return '<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid oklch(0.93 0.006 90)"><span style="font-size:14.5px;color:oklch(0.35 0.02 250)">' + r[0] + '</span><span style="font-family:\'Manrope\',sans-serif;font-weight:700;font-size:15px;flex:none;padding-left:16px">' + r[1] + '</span></div>';
        }).join('');
        return '<div style="background:oklch(1 0 0);border:1px solid oklch(0.91 0.006 90);border-radius:20px;padding:36px;box-shadow:0 10px 30px -18px oklch(0.2 0.02 250 / 0.12);transition:transform 0.25s,box-shadow 0.25s" class="keepo-cat-card">' +
          '<div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">' +
          '<div style="flex:none;width:44px;height:44px;border-radius:12px;background:color-mix(in oklch, ' + accent + ' 12%, transparent);display:flex;align-items:center;justify-content:center">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg></div>' +
          '<h3 style="font-family:\'Manrope\',sans-serif;font-weight:700;font-size:19px;margin:0">' + cat.title + '</h3></div>' +
          '<div style="display:flex;flex-direction:column">' + rows + '</div></div>';
      }).join('');
    }
    setTextIfExists('[data-notice]', t.notice);

    var tierSelect = document.querySelector('[data-tier-select]');
    if (tierSelect) {
      tierSelect.innerHTML = t.booking.tierOptions.map(function (opt) { return '<option style="color:oklch(0.18 0.02 250)">' + opt + '</option>'; }).join('');
    }
  }

  function renderContactsDynamic(lang) {
    var t = I18N.CDICT[lang];
    var cardsWrap = document.querySelector('[data-contact-cards]');
    if (cardsWrap) {
      var hrefs = { phone: 'tel:+48500100200', email: 'mailto:hello@keepo.co', whatsapp: 'https://wa.me/48500100200', telegram: 'https://t.me/keepo_clean', location: '#area', hours: '#area' };
      var keys = ['phone', 'email', 'whatsapp', 'telegram', 'location', 'hours'];
      cardsWrap.innerHTML = keys.map(function (k) {
        var card = t.cards[k];
        return '<a href="' + hrefs[k] + '" class="keepo-contact-card" style="display:block;background:oklch(0.99 0.004 90);border:1px solid oklch(0.91 0.006 90);border-radius:20px;padding:32px;text-decoration:none;color:inherit">' +
          '<div style="width:52px;height:52px;border-radius:14px;background:color-mix(in oklch, ' + accent + ' 12%, transparent);display:flex;align-items:center;justify-content:center;margin-bottom:20px">' +
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + I18N.CONTACT_ICONS[k] + '</svg></div>' +
          '<h3 style="font-family:\'Manrope\',sans-serif;font-weight:600;font-size:17px;margin:0 0 6px;color:oklch(0.18 0.02 250)">' + card.label + '</h3>' +
          '<p style="font-size:14.5px;color:oklch(0.5 0.02 250);margin:0">' + card.value + '</p></a>';
      }).join('');
    }
  }

  function setTextIfExists(sel, text) {
    var el = document.querySelector(sel);
    if (el) el.textContent = text;
  }

  function applyComponentPlaceholders(lang) {
    var KB = window.KEEPO_BOOKING_SHARED;
    if (!KB) return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-component="service-select"]'), function (el) {
      el.setAttribute('data-placeholder', KB.getChooseLabel(lang));
      if (el._kInstance) el._kInstance.render();
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-component="date-picker"]'), function (el) {
      el.setAttribute('data-placeholder', KB.getDatePlaceholder(lang));
      if (el._kInstance) el._kInstance.render();
    });
    Array.prototype.forEach.call(document.querySelectorAll('form[data-booking-form]'), function (form) {
      var serviceEl = form.querySelector('[data-component="service-select"]');
      var textarea = form.querySelector('textarea[name="message"]');
      if (serviceEl && textarea) {
        var currentValue = serviceEl._kInstance ? serviceEl._kInstance.value : '';
        textarea.setAttribute('placeholder', KB.getPlaceholder(lang, currentValue));
      }
    });
  }

  function applyLang(lang) {
    var dict = page === 'index' ? I18N.DICT[lang] : page === 'pricing' ? I18N.PDICT[lang] : I18N.CDICT[lang];
    applyGenericI18n(dict);
    applyComponentPlaceholders(lang);
    if (page === 'index') renderIndexDynamic(lang);
    if (page === 'pricing') renderPricingDynamic(lang);
    if (page === 'contacts') renderContactsDynamic(lang);

    // language switch buttons active state
    Array.prototype.forEach.call(document.querySelectorAll('.keepo-lang-btn'), function (btn) {
      var isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.style.background = isActive ? accent : 'transparent';
      btn.style.color = isActive ? 'oklch(0.16 0.02 250)' : 'oklch(0.85 0.004 90)';
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function initLangSwitcher() {
    Array.prototype.forEach.call(document.querySelectorAll('.keepo-lang-btn'), function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang-btn')); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initPhoneInputs();
    initForms();
    initLangSwitcher();
    initReviewArrows();
    initBaSlider();
    applyLang(getLang());
  });
})();
