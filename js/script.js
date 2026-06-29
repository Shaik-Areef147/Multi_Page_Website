// ======================================
// Mobile Navigation Toggle
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

// ======================================
// Close Mobile Menu After Clicking Link
// ======================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuBtn) {

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

});

// ======================================
// Sticky Navbar Shadow on Scroll
// ======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 3px 12px rgba(0,0,0,.08)";

    }

});

// ======================================
// Contact Form Validation
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// ======================================
// Fade-Up Animation
// ======================================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2,
    }

);

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("fade-up");

    observer.observe(section);

});

// ======================================
// Smooth Scroll to Top
// ======================================

const scrollTopBtn = document.createElement("button");

scrollTopBtn.innerHTML = "↑";

scrollTopBtn.id = "scrollTop";

document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "25px";
scrollTopBtn.style.right = "25px";
scrollTopBtn.style.width = "50px";
scrollTopBtn.style.height = "50px";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.background = "#0d6efd";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.fontSize = "22px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth",

    });

});

// ======================================
// Current Year in Footer (Optional)
// ======================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML = `© ${year} MyWebsite. All Rights Reserved.`;

}

console.log("Website Loaded Successfully");
