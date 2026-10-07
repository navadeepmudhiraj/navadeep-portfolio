document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // MOBILE NAVIGATION
    // ==============================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.classList.toggle("active");
        });
    }

    // Close menu after clicking a link
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("open");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }
        });
    });


    // ==============================
    // SCROLL REVEAL ANIMATION
    // ==============================

    const revealElements = document.querySelectorAll(
        ".hero-content, " +
        ".hero-visual, " +
        ".section-heading, " +
        ".about-content, " +
        ".info-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".cta-box, " +
        ".contact-content, " +
        ".contact-item"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-active");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("reveal-active");
        });

    }


    // ==============================
    // ACTIVE NAVIGATION
    // ==============================

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNav() {

        const scrollPosition = window.scrollY + 160;

        let currentSection = "home";

        sections.forEach((section) => {

            if (scrollPosition >= section.offsetTop) {
                currentSection = section.id;
            }

        });

        document.querySelectorAll(".nav-link").forEach((link) => {

            const target = link.getAttribute("href");

            link.classList.toggle(
                "active",
                target === `#${currentSection}`
            );

        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();


    // ==============================
    // PROJECT CARD 3D EFFECT
    // ==============================

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            // Disable effect on mobile
            if (window.innerWidth < 900) {
                return;
            }

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 4;
            const rotateX = ((y / rect.height) - 0.5) * -4;

            card.style.transform =
                `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });


        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });


    // ==============================
    // CURRENT YEAR
    // ==============================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // ==============================
    // NAVBAR SCROLL EFFECT
    // ==============================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 40) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }

            },
            { passive: true }
        );

    }


    // ==============================
    // DEVELOPER CONSOLE MESSAGE
    // ==============================

    console.log(
        "%cNavadeep Portfolio 🚀",
        "color:#38f29b; font-size:18px; font-weight:bold;"
    );

    console.log(
        "%cSoftware Developer • Android AI • Cybersecurity",
        "color:#6ee7ff; font-size:14px;"
    );

});