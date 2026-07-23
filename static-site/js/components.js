// KEEPO — vanilla DatePicker + ServiceSelect components (replaces the DC versions).
(function () {
  function pad(n) { return String(n).padStart(2, '0'); }
  var MONTHS = {
    pl: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    ua: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December']
  };
  var WEEKDAYS = {
    pl: ['Pn','Wt','Śr','Cz','Pt','So','Nd'],
    ua: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'],
    en: ['Mo','Tu','We','Th','Fr','Sa','Su']
  };

  function svg(inner, attrs) {
    var a = attrs || 'width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg ' + a + '>' + inner + '</svg>';
  }

  // ── DatePicker ──────────────────────────────────────────────────────────
  function DatePicker(root) {
    this.root = root;
    this.dark = root.getAttribute('data-variant') === 'dark';
    this.accent = root.getAttribute('data-accent') || 'oklch(0.72 0.15 155)';
    this.value = root.getAttribute('data-value') || '';
    this.hiddenInput = root.querySelector('input[type=hidden]');
    this.onChange = null;
    var now = new Date();
    var initial = this.value ? new Date(this.value + 'T00:00:00') : now;
    this.viewYear = initial.getFullYear();
    this.viewMonth = initial.getMonth();
    this.open = false;
    this.render();
    this._onDocDown = this._onDocDown.bind(this);
    document.addEventListener('mousedown', this._onDocDown);
  }
  DatePicker.prototype._onDocDown = function (e) {
    if (this.open && !this.root.contains(e.target)) { this.open = false; this.render(); }
  };
  DatePicker.prototype.lang = function () { return document.documentElement.getAttribute('data-lang') || 'pl'; };
  DatePicker.prototype.setValue = function (iso) {
    this.value = iso;
    if (this.hiddenInput) this.hiddenInput.value = iso;
    if (this.onChange) this.onChange(iso);
    this.render();
  };
  DatePicker.prototype.toggle = function (e) { if (e) e.stopPropagation(); this.open = !this.open; this.render(); };
  DatePicker.prototype.render = function () {
    var lang = this.lang();
    var dark = this.dark;
    var accent = this.accent;
    var todayIso = (function () { var n = new Date(); return n.getFullYear() + '-' + pad(n.getMonth() + 1) + '-' + pad(n.getDate()); })();
    var displayText = this.value
      ? (function (v) { var p = v.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; })(this.value)
      : (this.root.getAttribute('data-placeholder') || '');

    var triggerBg = dark ? 'oklch(1 0 0 / 0.05)' : 'oklch(0.99 0.004 90)';
    var triggerBorder = dark ? '1px solid oklch(1 0 0 / 0.14)' : '1px solid oklch(0.88 0.006 90)';
    var mutedColor = 'oklch(0.55 0.02 250)';
    var triggerColor = this.value ? (dark ? 'oklch(0.96 0.004 90)' : 'oklch(0.18 0.02 250)') : mutedColor;

    var html = '<div class="kdp-trigger" tabindex="0" style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px;border-radius:10px;border:' + triggerBorder + ';background:' + triggerBg + ';cursor:pointer;user-select:none">' +
      '<span style="font-size:14.5px;color:' + triggerColor + '">' + displayText + '</span>' +
      svg('<rect x="3" y="5" width="18" height="16" rx="3"></rect><path d="M3 10h18"></path><path d="M8 3v4"></path><path d="M16 3v4"></path>', 'width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="' + triggerColor + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex:none"') +
      '</div>';

    if (this.open) {
      var popBg = dark ? 'oklch(0.15 0.018 250)' : 'oklch(1 0 0)';
      var popBorder = dark ? '1px solid oklch(1 0 0 / 0.1)' : '1px solid oklch(0.91 0.006 90)';
      var popTextColor = dark ? 'oklch(0.94 0.004 90)' : 'oklch(0.2 0.02 250)';
      var navBtnColor = dark ? 'oklch(0.85 0.004 90)' : 'oklch(0.4 0.02 250)';
      var navBtnBg = dark ? 'oklch(1 0 0 / 0.07)' : 'oklch(0.96 0.006 90)';
      var hoverBg = 'color-mix(in oklch, ' + accent + ' 14%, transparent)';
      var monthLabel = MONTHS[lang][this.viewMonth] + ' ' + this.viewYear;

      var weekdaysHtml = WEEKDAYS[lang].map(function (wd) {
        return '<span style="text-align:center;font-size:11px;font-weight:700;letter-spacing:0.3px;color:' + mutedColor + ';text-transform:uppercase">' + wd + '</span>';
      }).join('');

      var firstOfMonth = new Date(this.viewYear, this.viewMonth, 1);
      var startOffset = firstOfMonth.getDay() - 1; if (startOffset < 0) startOffset = 6;
      var daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
      var daysHtml = '';
      for (var i = 0; i < startOffset; i++) {
        daysHtml += '<button type="button" disabled style="visibility:hidden;width:34px;height:34px"></button>';
      }
      for (var d = 1; d <= daysInMonth; d++) {
        var iso = this.viewYear + '-' + pad(this.viewMonth + 1) + '-' + pad(d);
        var isPast = iso < todayIso, isToday = iso === todayIso, isSelected = iso === this.value;
        var bg = 'transparent', color = dark ? 'oklch(0.88 0.004 90)' : 'oklch(0.22 0.02 250)', fontWeight = 500, border = 'none';
        if (isSelected) { bg = accent; color = 'oklch(0.16 0.02 250)'; fontWeight = 700; }
        else if (isToday) { border = '1.5px solid ' + accent; color = accent; fontWeight = 700; }
        if (isPast && !isSelected) color = dark ? 'oklch(0.38 0.02 250)' : 'oklch(0.8 0.006 90)';
        daysHtml += '<button type="button" class="keepo-dp-day' + (isSelected ? ' dp-selected' : '') + '" data-iso="' + iso + '"' + (isPast ? ' disabled' : '') +
          ' style="width:34px;height:34px;border-radius:100px;display:flex;align-items:center;justify-content:center;font-size:13.5px;font-weight:' + fontWeight + ';background:' + bg + ';color:' + color + ';border:' + border + ';cursor:' + (isPast ? 'default' : 'pointer') + ';transition:background .15s ease,color .15s ease;margin:0 auto">' + d + '</button>';
      }

      html += '<div class="kdp-pop" style="position:absolute;top:calc(100% + 10px);left:0;z-index:200;width:300px;max-width:calc(100vw - 48px);background:' + popBg + ';border:' + popBorder + ';border-radius:20px;box-shadow:0 30px 60px -20px oklch(0.15 0.02 250 / 0.35);padding:22px;animation:kDpIn .18s cubic-bezier(.2,.8,.3,1);--dp-hover:' + hoverBg + '">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">' +
        '<button type="button" class="keepo-dp-navbtn kdp-prev" aria-label="Previous month" style="width:30px;height:30px;border-radius:100px;border:none;background:' + navBtnBg + ';color:' + navBtnColor + ';cursor:pointer;display:flex;align-items:center;justify-content:center">' + svg('<path d="M15 18l-6-6 6-6"></path>', 'width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"') + '</button>' +
        '<span style="font-family:\'Manrope\',sans-serif;font-weight:700;font-size:14.5px;color:' + popTextColor + ';text-transform:capitalize">' + monthLabel + '</span>' +
        '<button type="button" class="keepo-dp-navbtn kdp-next" aria-label="Next month" style="width:30px;height:30px;border-radius:100px;border:none;background:' + navBtnBg + ';color:' + navBtnColor + ';cursor:pointer;display:flex;align-items:center;justify-content:center">' + svg('<path d="M9 18l6-6-6-6"></path>', 'width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"') + '</button>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:6px">' + weekdaysHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px">' + daysHtml + '</div>' +
        '</div>';
    }

    this.root.innerHTML = html;
    var self = this;
    this.root.querySelector('.kdp-trigger').addEventListener('click', function (e) { self.toggle(e); });
    if (this.open) {
      this.root.querySelector('.kdp-prev').addEventListener('click', function (e) { e.stopPropagation(); self.viewMonth--; if (self.viewMonth < 0) { self.viewMonth = 11; self.viewYear--; } self.render(); });
      this.root.querySelector('.kdp-next').addEventListener('click', function (e) { e.stopPropagation(); self.viewMonth++; if (self.viewMonth > 11) { self.viewMonth = 0; self.viewYear++; } self.render(); });
      Array.prototype.forEach.call(this.root.querySelectorAll('.keepo-dp-day[data-iso]'), function (btn) {
        btn.addEventListener('click', function (e) { e.stopPropagation(); self.open = false; self.setValue(btn.getAttribute('data-iso')); });
      });
    }
  };

  // ── ServiceSelect ───────────────────────────────────────────────────────
  function ServiceSelect(root) {
    this.root = root;
    this.dark = root.getAttribute('data-variant') === 'dark';
    this.accent = root.getAttribute('data-accent') || 'oklch(0.72 0.15 155)';
    this.value = root.getAttribute('data-value') || '';
    this.hiddenInput = root.querySelector('input[type=hidden]');
    this.onChange = null;
    this.open = false;
    this.render();
    this._onDocDown = this._onDocDown.bind(this);
    document.addEventListener('mousedown', this._onDocDown);
  }
  ServiceSelect.prototype._onDocDown = function (e) {
    if (this.open && !this.root.contains(e.target)) { this.open = false; this.render(); }
  };
  ServiceSelect.prototype.lang = function () { return document.documentElement.getAttribute('data-lang') || 'pl'; };
  ServiceSelect.prototype.getOptions = function () {
    return (window.KEEPO_BOOKING_SHARED ? window.KEEPO_BOOKING_SHARED.getServiceOptions(this.lang()) : []);
  };
  ServiceSelect.prototype.splitLabel = function (label) {
    var idx = label.indexOf(' ');
    return idx === -1 ? ['', label] : [label.slice(0, idx), label.slice(idx + 1)];
  };
  ServiceSelect.prototype.setValue = function (value) {
    this.value = value;
    if (this.hiddenInput) this.hiddenInput.value = value;
    if (this.onChange) this.onChange(value);
    this.render();
  };
  ServiceSelect.prototype.toggle = function (e) { if (e) e.stopPropagation(); this.open = !this.open; this.render(); };
  ServiceSelect.prototype.render = function () {
    var dark = this.dark, accent = this.accent;
    var options = this.getOptions();
    var selected = options.filter((function (o) { return o.value === this.value; }).bind(this))[0];
    var parts = selected ? this.splitLabel(selected.label) : ['🗂️', ''];
    var chooseLabel = this.root.getAttribute('data-placeholder') || '';

    var triggerBg = dark ? 'oklch(1 0 0 / 0.05)' : 'oklch(0.99 0.004 90)';
    var triggerBorder = dark ? '1px solid oklch(1 0 0 / 0.14)' : '1px solid oklch(0.88 0.006 90)';
    var mutedColor = 'oklch(0.55 0.02 250)';
    var triggerColor = selected ? (dark ? 'oklch(0.96 0.004 90)' : 'oklch(0.18 0.02 250)') : mutedColor;

    var html = '<div class="kss-trigger" tabindex="0" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-radius:10px;border:' + triggerBorder + ';background:' + triggerBg + ';cursor:pointer;user-select:none">' +
      '<span style="font-size:16px;flex:none;line-height:1">' + parts[0] + '</span>' +
      '<span style="flex:1;font-size:14.5px;color:' + triggerColor + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (selected ? parts[1] : chooseLabel) + '</span>' +
      svg('<path d="M6 9l6 6 6-6"></path>', 'width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="' + triggerColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;transition:transform .2s ease;transform:' + (this.open ? 'rotate(180deg)' : 'rotate(0deg)') + '"') +
      '</div>';

    if (this.open) {
      var itemsHtml = options.map((function (o, i) {
        var p = this.splitLabel(o.label);
        var isSelected = o.value === this.value;
        return '<div class="keepo-select-opt kss-opt" data-value="' + o.value + '" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;cursor:pointer;transition:background .18s ease">' +
          '<span style="font-size:16px;flex:none;line-height:1">' + p[0] + '</span>' +
          '<span style="flex:1;font-size:14.5px;color:oklch(0.22 0.02 250);font-weight:' + (isSelected ? 700 : 500) + '">' + p[1] + '</span>' +
          (isSelected ? svg('<path d="M20 6L9 17l-5-5"></path>', 'width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none"') : '') +
          '</div>';
      }).bind(this)).join('');
      html += '<div class="kss-pop" style="position:absolute;top:calc(100% + 8px);left:0;right:0;z-index:200;background:oklch(1 0 0);border:1px solid oklch(0.91 0.006 90);border-radius:20px;box-shadow:0 30px 60px -20px oklch(0.15 0.02 250 / 0.35);padding:10px;animation:kSelIn .18s cubic-bezier(.2,.8,.3,1)">' + itemsHtml + '</div>';
    }

    this.root.innerHTML = html;
    var self = this;
    this.root.querySelector('.kss-trigger').addEventListener('click', function (e) { self.toggle(e); });
    if (this.open) {
      Array.prototype.forEach.call(this.root.querySelectorAll('.kss-opt'), function (opt) {
        opt.addEventListener('click', function (e) { e.stopPropagation(); self.open = false; self.setValue(opt.getAttribute('data-value')); });
      });
    }
  };

  function mountAll() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-component="date-picker"]'), function (el) {
      if (!el._kInstance) el._kInstance = new DatePicker(el);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-component="service-select"]'), function (el) {
      if (!el._kInstance) el._kInstance = new ServiceSelect(el);
    });
  }

  window.KEEPO_COMPONENTS = { mountAll: mountAll, DatePicker: DatePicker, ServiceSelect: ServiceSelect };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountAll);
  else mountAll();
})();
