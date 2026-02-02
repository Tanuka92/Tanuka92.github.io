const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');

const toggleNavigation = () => {
    if (!navToggle || !siteNav) return;
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
};

navToggle?.addEventListener('click', toggleNavigation);

siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        if (!siteNav.classList.contains('is-open')) return;
        siteNav.classList.remove('is-open');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
});

window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
});

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
}

const subtabLinks = document.querySelectorAll('.subtab');
const validSubtabs = ['#journals', '#conferences'];

const setActiveSubtab = (hash) => {
    const targetHash = validSubtabs.includes(hash) ? hash : '#journals';
    subtabLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === targetHash;
        link.classList.toggle('is-active', isActive);
        link.setAttribute('aria-selected', String(isActive));
    });
};

subtabLinks.forEach((link) => {
    link.addEventListener('click', () => {
        setActiveSubtab(link.getAttribute('href'));
    });
});

setActiveSubtab(window.location.hash);
window.addEventListener('hashchange', () => setActiveSubtab(window.location.hash));
