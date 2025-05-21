// === NAVBAR SCROLL JS ===

function initializeNavbarScroll() {
    const navbar = document.getElementById("navbar");
    const heroLogoText = document.querySelector(".hero-logo");
    const smallLogo = document.querySelector(".small-logo")
    
    if (!navbar) {
        console.warn("Navbar element not found");
        return;
    }

    function handleScroll() {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
            smallLogo.classList.add("visible");
            heroLogoText.classList.add("scrolled-out");
        } else {
            navbar.classList.remove("scrolled");
            smallLogo.classList.remove("visible");
            heroLogoText.classList.remove("scrolled-out");
        }
    }

    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
}

window.navbarScroll = {
    initialize: initializeNavbarScroll
};

  // === NAVBAR HEADER JS ===

window.headerManager = {
    updateHeader: function () {
        const path = window.location.pathname.replace(/^\/|\/$/g, '');
        const isHome = path === '' || path.toLowerCase() === 'home';

        const hero = document.getElementById('heroHeader');
        const gray = document.getElementById('grayHeader');

        if (isHome) {
            if (hero) hero.classList.remove('d-none');
            if (gray) gray.style.display = 'none';
        } else {
            if (hero) hero.classList.add('d-none');
            if (gray) gray.style.display = 'block';
        }
    },

    initialize: function () {
        setTimeout(() => this.updateHeader(), 200); //delay på js inladdning
    
        window.addEventListener('popstate', () => this.updateHeader());
    
        document.addEventListener('click', function (e) {
            const target = e.target.closest('a');
            if (target && target.href && target.origin === location.origin) {
                setTimeout(() => window.headerManager.updateHeader(), 100);
            }
        });
    }
    
};