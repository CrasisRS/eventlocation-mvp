const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const faqButtons = document.querySelectorAll('.faq-item button');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const form = document.getElementById('anfrage-form');
const formStatus = document.getElementById('form-status');
const themeButtons = document.querySelectorAll('.theme-btn');

const validThemes = ['light', 'dark', 'effects'];

const PARTICLE_COLORS = ['#db4e3e', '#ff8f4f', '#01796f', '#9c6ff5', '#ff6f91', '#ffcc44'];

const createEffectsParticles = () => {
  const overlay = document.createElement('div');
  overlay.className = 'effects-overlay';
  for (let i = 0; i < 48; i++) {
    const p = document.createElement('div');
    p.className = 'effects-particle';
    const size = Math.random() * 7 + 3;
    const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    p.style.cssText = [
      `left:${Math.random() * 100}%`,
      `bottom:${Math.random() * 25}%`,
      `width:${size}px`,
      `height:${size}px`,
      `background:${color}`,
      `--duration:${(Math.random() * 10 + 7).toFixed(1)}s`,
      `--delay:${(Math.random() * 12).toFixed(1)}s`,
    ].join(';');
    overlay.appendChild(p);
  }
  document.body.appendChild(overlay);
};

const removeEffectsParticles = () => {
  document.querySelector('.effects-overlay')?.remove();
};

const applyTheme = (theme) => {
  const nextTheme = validThemes.includes(theme) ? theme : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('eventlocation-theme', nextTheme);

  themeButtons.forEach((button) => {
    const isActive = button.getAttribute('data-theme-value') === nextTheme;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (nextTheme === 'effects') {
    removeEffectsParticles();
    createEffectsParticles();
  } else {
    removeEffectsParticles();
  }
};

const initialTheme = localStorage.getItem('eventlocation-theme') || 'light';
applyTheme(initialTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.getAttribute('data-theme-value') || 'light';
    applyTheme(selectedTheme);
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Navigation einblenden' : 'Navigation ausblenden');
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Navigation einblenden');
      mainNav.classList.remove('open');
    });
  });
}

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('open');
    item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.getAttribute('data-image');
    const caption = item.getAttribute('data-caption') || '';
    const imgElement = item.querySelector('img');
    const altText = imgElement ? imgElement.alt : caption;

    if (!image || !lightbox || !lightboxImage || !lightboxCaption) return;

    lightboxImage.src = image;
    lightboxImage.alt = altText;
    lightboxCaption.textContent = caption;
    lightbox.showModal();
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const requiredIds = ['name', 'email', 'datum', 'gaeste', 'anlass', 'consent'];
    const missing = requiredIds.filter((id) => {
      const field = document.getElementById(id);
      if (!field) return true;
      if (field.type === 'checkbox') {
        return !field.checked;
      }
      return !field.value;
    });

    if (missing.length > 0) {
      formStatus.textContent = 'Bitte fuellen Sie alle Pflichtfelder korrekt aus.';
      formStatus.className = 'form-status error';
      return;
    }

    const mailField = document.getElementById('email');
    const emailValid = mailField && /.+@.+\..+/.test(mailField.value);

    if (!emailValid) {
      formStatus.textContent = 'Bitte geben Sie eine gueltige E-Mail-Adresse ein.';
      formStatus.className = 'form-status error';
      return;
    }

    formStatus.textContent = 'Vielen Dank. Ihre Beispiel-Anfrage wurde erfasst.';
    formStatus.className = 'form-status success';
    form.reset();
  });
}
