(function () {
  var C = window.GENS_CONFIG;
  var page = document.body.dataset.page || '';
  var onHero = document.body.hasAttribute('data-hero');

  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14"/><path d="m3 6 9 7 9-7"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5a22 22 0 0 0-2.5-.1c-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.7v8h3.3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    a11y: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="4.5" r="1.8" fill="currentColor"/><path d="M5 8.5l7 1.5 7-1.5M12 10v5m0 0-3.5 6M12 15l3.5 6"/></svg>'
  };
  window.GENS_ICONS = I;

  var links = [
    ['index.html', 'בית', 'home'],
    ['projects.html', 'פרויקטים', 'projects'],
    ['about.html', 'אודות', 'about'],
    ['contact.html', 'צור קשר', 'contact']
  ];
  var tel = 'tel:' + C.phone.replace(/\D/g, '');
  var wa = 'https://wa.me/' + C.phoneIntl;

  function navItems() {
    return links.map(function (l) {
      return '<li><a href="' + l[0] + '"' + (page === l[2] ? ' aria-current="page"' : '') + '>' + l[1] + '</a></li>';
    }).join('');
  }

  // כותרת
  var header = document.createElement('header');
  header.className = 'site-header' + (onHero ? ' on-hero' : '');
  header.innerHTML =
    '<div class="wrap nav">' +
      '<a class="brand" href="index.html" aria-label="גנס אדריכלות נוף — לדף הבית">' +
        '<img class="dark" src="img/logo-dark.png" alt="גנס אדריכלות נוף" width="149" height="104">' +
        '<img class="light" src="img/logo-light.png" alt="" width="149" height="104">' +
      '</a>' +
      '<nav aria-label="ניווט ראשי"><ul class="menu">' + navItems() + '</ul></nav>' +
      '<div class="nav-cta">' +
        '<a class="nav-phone" href="' + tel + '">' + I.phone + C.phone + '</a>' +
        '<a class="btn ' + (onHero ? 'btn-light' : 'btn-solid') + '" href="contact.html">לתיאום פגישה</a>' +
        '<button class="burger" aria-label="פתיחת תפריט" aria-expanded="false" aria-controls="drawer">' + I.menu + '</button>' +
      '</div>' +
    '</div>';
  document.body.insertBefore(header, document.body.firstChild);

  var skip = document.createElement('a');
  skip.className = 'skip'; skip.href = '#main'; skip.textContent = 'דילוג לתוכן הראשי';
  document.body.insertBefore(skip, header);

  var drawer = document.createElement('div');
  drawer.className = 'drawer'; drawer.id = 'drawer';
  drawer.setAttribute('role', 'dialog'); drawer.setAttribute('aria-modal', 'true'); drawer.setAttribute('aria-label', 'תפריט');
  drawer.innerHTML =
    '<div class="drawer-top"><img src="img/logo-light.png" alt="גנס אדריכלות נוף"><button class="burger" style="display:block" aria-label="סגירת תפריט">' + I.close + '</button></div>' +
    '<ul>' + navItems() + '</ul>' +
    '<a class="btn btn-light" href="' + tel + '">' + I.phone + ' חייגו ' + '<span class="ltr">' + C.phone + '</span></a>' +
    '<a class="btn btn-light" href="' + wa + '" target="_blank" rel="noopener">' + I.wa + ' שלחו וואטסאפ</a>';
  document.body.appendChild(drawer);

  var openBtn = header.querySelector('.burger'), closeBtn = drawer.querySelector('.burger');
  function setDrawer(open) {
    drawer.classList.toggle('open', open);
    openBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    (open ? closeBtn : openBtn).focus();
  }
  openBtn.addEventListener('click', function () { setDrawer(true); });
  closeBtn.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('open')) setDrawer(false); });

  // תחתית
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="wrap">' +
      '<div class="foot-grid">' +
        '<div><img src="img/logo-light.png" alt="גנס אדריכלות נוף"><p>תכנון, ייעוץ וביצוע של גינות פרטיות ומרחבים ציבוריים, מאז 2011.</p>' +
          '<div class="socials">' +
            '<a href="' + C.facebook + '" target="_blank" rel="noopener" aria-label="פייסבוק">' + I.fb + '</a>' +
            '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="אינסטגרם">' + I.ig + '</a>' +
            '<a href="' + wa + '" target="_blank" rel="noopener" aria-label="וואטסאפ">' + I.wa + '</a>' +
          '</div></div>' +
        '<div><h4>ניווט</h4><ul>' + links.map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
        '<div><h4>יצירת קשר</h4><ul>' +
          '<li><a href="' + tel + '" class="ltr">' + C.phone + '</a></li>' +
          '<li><a href="mailto:' + C.email + '">' + C.email + '</a></li>' +
          '<li><a href="' + wa + '" target="_blank" rel="noopener">וואטסאפ</a></li></ul></div>' +
        '<div><h4>מידע</h4><ul>' +
          '<li><a href="privacy.html">מדיניות פרטיות</a></li>' +
          '<li><a href="terms.html">תנאי שימוש</a></li>' +
          '<li><a href="accessibility.html">הצהרת נגישות</a></li></ul></div>' +
      '</div>' +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' גנס אדריכלות נוף. כל הזכויות שמורות.</span><span>כל התמונות באתר מפרויקטים שתוכננו ובוצעו על ידי גנס.</span></div>' +
    '</div>';
  document.body.appendChild(footer);

  // כפתורים צפים
  var fwa = document.createElement('a');
  fwa.className = 'float-wa'; fwa.href = wa; fwa.target = '_blank'; fwa.rel = 'noopener';
  fwa.setAttribute('aria-label', 'שליחת הודעת וואטסאפ'); fwa.innerHTML = I.wa;
  document.body.appendChild(fwa);

  var top = document.createElement('button');
  top.className = 'to-top'; top.setAttribute('aria-label', 'חזרה לראש העמוד'); top.innerHTML = I.up;
  top.addEventListener('click', function () { window.scrollTo({ top: 0 }); document.getElementById('main').focus({ preventScroll: true }); });
  document.body.appendChild(top);

  function onScroll() {
    var y = window.scrollY;
    top.classList.toggle('show', y > 600);
    if (onHero) header.classList.toggle('scrolled', y > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // אחסון מקומי — עטוף, כי בחלון פרטי הוא עלול לזרוק
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // הודעת פרטיות
  if (!get('gens-cookie')) {
    var ck = document.createElement('div');
    ck.className = 'cookie'; ck.setAttribute('role', 'region'); ck.setAttribute('aria-label', 'הודעת פרטיות');
    ck.innerHTML = '<p>האתר משתמש בעוגיות לצורך תפעול בסיסי ושיפור החוויה. פרטים ב<a href="privacy.html">מדיניות הפרטיות</a>.</p><button class="btn btn-light">הבנתי</button>';
    ck.querySelector('button').addEventListener('click', function () { set('gens-cookie', '1'); ck.remove(); });
    document.body.appendChild(ck);
  }

  // תפריט נגישות
  var aBtn = document.createElement('button');
  aBtn.className = 'a11y-btn'; aBtn.setAttribute('aria-label', 'תפריט נגישות'); aBtn.setAttribute('aria-expanded', 'false'); aBtn.innerHTML = I.a11y;
  var aPanel = document.createElement('div');
  aPanel.className = 'a11y-panel'; aPanel.setAttribute('role', 'dialog'); aPanel.setAttribute('aria-label', 'הגדרות נגישות');
  aPanel.innerHTML = '<h4>נגישות</h4>' +
    '<button data-a="bigger">הגדלת טקסט</button>' +
    '<button data-a="smaller">הקטנת טקסט</button>' +
    '<button data-t="a11y-contrast" aria-pressed="false">ניגודיות גבוהה</button>' +
    '<button data-t="a11y-links" aria-pressed="false">הדגשת קישורים</button>' +
    '<button data-t="a11y-still" aria-pressed="false">עצירת אנימציות</button>' +
    '<button data-a="reset">איפוס</button>' +
    '<a href="accessibility.html">הצהרת נגישות</a>';
  document.body.appendChild(aBtn); document.body.appendChild(aPanel);
  var st = {}; try { st = JSON.parse(get('gens-a11y') || '{}'); } catch (e) {}
  function applyA11y() {
    document.documentElement.style.setProperty('--font-scale', st.scale || 1);
    ['a11y-contrast', 'a11y-links', 'a11y-still'].forEach(function (c) {
      document.body.classList.toggle(c, !!st[c]);
      aPanel.querySelector('[data-t="' + c + '"]').setAttribute('aria-pressed', !!st[c]);
    });
    set('gens-a11y', JSON.stringify(st));
  }
  aPanel.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.t) st[b.dataset.t] = !st[b.dataset.t];
    if (b.dataset.a === 'bigger') st.scale = Math.min(1.4, (st.scale || 1) + .1);
    if (b.dataset.a === 'smaller') st.scale = Math.max(.9, (st.scale || 1) - .1);
    if (b.dataset.a === 'reset') st = {};
    applyA11y();
  });
  aBtn.addEventListener('click', function () {
    var o = !aPanel.classList.contains('open');
    aPanel.classList.toggle('open', o); aBtn.setAttribute('aria-expanded', o);
  });
  document.addEventListener('click', function (e) {
    if (aPanel.classList.contains('open') && !aPanel.contains(e.target) && !aBtn.contains(e.target)) { aPanel.classList.remove('open'); aBtn.setAttribute('aria-expanded', 'false'); }
  });
  applyA11y();

  // חשיפה בגלילה
  var rv = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  // תצוגת תמונות מוגדלת — window.GENS_LB.open(list, index)
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'תצוגת תמונה');
  lb.innerHTML = '<img alt=""><button class="x" aria-label="סגירה">' + I.close + '</button><button class="prev" aria-label="התמונה הקודמת">' + I.right + '</button><button class="next" aria-label="התמונה הבאה">' + I.left + '</button><div class="count" aria-live="polite"></div>';
  document.body.appendChild(lb);
  var lbList = [], lbI = 0, lbReturn = null, lbImg = lb.querySelector('img');
  function lbShow() {
    var it = lbList[lbI];
    lbImg.src = it.src; lbImg.alt = it.alt;
    lb.querySelector('.count').textContent = (lbI + 1) + ' / ' + lbList.length;
    var n = lbList[(lbI + 1) % lbList.length]; if (n) (new Image()).src = n.src;
  }
  function lbStep(d) { lbI = (lbI + d + lbList.length) % lbList.length; lbShow(); }
  function lbClose() { lb.classList.remove('open'); document.body.style.overflow = ''; if (lbReturn) lbReturn.focus(); }
  window.GENS_LB = { open: function (list, i, from) { lbList = list; lbI = i; lbReturn = from; lbShow(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); } };
  lb.querySelector('.x').addEventListener('click', lbClose);
  lb.querySelector('.prev').addEventListener('click', function () { lbStep(-1); });
  lb.querySelector('.next').addEventListener('click', function () { lbStep(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbStep(1);
    if (e.key === 'ArrowRight') lbStep(-1);
  });
  var sx = null;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) lbStep(dx > 0 ? 1 : -1);
  });

  // טופס פנייה
  document.querySelectorAll('form[data-lead]').forEach(function (f) {
    var msg = f.querySelector('.form-msg');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (f.querySelector('.hp input').value) return;
      var d = {
        name: f.name.value.trim(),
        phone: f.phone.value.trim(),
        email: f.email ? f.email.value.trim() : '',
        project: f.project ? f.project.value : '',
        message: f.message ? f.message.value.trim() : ''
      };
      msg.className = 'form-msg';
      if (!d.name || !/^[0-9+\-\s]{9,}$/.test(d.phone)) { msg.classList.add('err'); msg.textContent = 'נא למלא שם ומספר טלפון תקין.'; return; }
      if (f.agree && !f.agree.checked) { msg.classList.add('err'); msg.textContent = 'נא לאשר את מדיניות הפרטיות.'; return; }
      var ej = C.emailjs, btn = f.querySelector('button[type=submit]');
      if (ej.publicKey && ej.serviceId && ej.templateId && window.emailjs) {
        btn.disabled = true; msg.textContent = 'שולח...';
        emailjs.send(ej.serviceId, ej.templateId, d, { publicKey: ej.publicKey }).then(function () {
          f.reset(); msg.classList.add('ok'); msg.textContent = 'תודה! הפרטים התקבלו ונחזור אליכם בהקדם.';
        }, function () {
          msg.classList.add('err'); msg.innerHTML = 'השליחה נכשלה. אפשר להתקשר ל-<a class="ltr" href="' + tel + '">' + C.phone + '</a> או לשלוח <a href="' + wa + '" target="_blank" rel="noopener">וואטסאפ</a>.';
        }).finally(function () { btn.disabled = false; });
      } else {
        var t = 'שלום, אני ' + d.name + '. טלפון: ' + d.phone + (d.email ? '. מייל: ' + d.email : '') + (d.project ? '. סוג פרויקט: ' + d.project : '') + (d.message ? '. ' + d.message : '');
        window.open(wa + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
        msg.classList.add('ok'); msg.textContent = 'נפתחה הודעת וואטסאפ עם הפרטים. שלחו אותה ונחזור אליכם.';
      }
    });
  });
})();
