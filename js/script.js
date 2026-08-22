document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }

});

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".project-card, .approach-item, .skill-group, .about-grid"
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerYear =
        document.querySelector(
            ".footer-inner p"
        );


    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Krishna Chauhan`;

    }


/* =========================================================
   INTERACTIVE SKILLS
   ========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("click", () => {

        const alreadyOpen =
            card.classList.contains("is-open");


        // Close every other skill card
        skillCards.forEach((otherCard) => {

            otherCard.classList.remove("is-open");

        });


        // Toggle the clicked card
        if (!alreadyOpen) {

            card.classList.add("is-open");

        }

    });

});