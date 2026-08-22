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


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    const submitButton =
        contactForm.querySelector('button[type="submit"]');

    const buttonLabel =
        contactForm.querySelector(".button-label");

    const formStatus =
        contactForm.querySelector(".form-status");

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        submitButton.disabled = true;
        buttonLabel.textContent = "Sending...";
        formStatus.textContent = "";
        formStatus.className = "form-status";

        try {

            const formData =
                new FormData(contactForm);

            const response = await fetch(contactForm.action, {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            contactForm.reset();
            formStatus.textContent =
                "Thanks — your message has been sent successfully.";
            formStatus.classList.add("is-success");

        } catch (error) {

            formStatus.innerHTML =
                'The message could not be sent. Please email <a href="mailto:kc880303@gmail.com">kc880303@gmail.com</a> instead.';
            formStatus.classList.add("is-error");

        } finally {

            submitButton.disabled = false;
            buttonLabel.textContent = "Send Message";

        }

    });

}
