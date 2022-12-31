/* === SHOW MENU === */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

/* === REMOVE MENU MOBILE === */
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((nl) =>
    nl.addEventListener("click", () => {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    })
);

/* === SCROLL SECTIONS ACTIVE LINK === */
const sections = document.querySelectorAll("section[id]");

const activeLinkScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                .classList.add("active-link");
        } else {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                .classList.remove("active-link");
        }
    });
};

/* === CHANGE BACKGROUND HEADER === */
const scrollHeader = () => {
    const header = document.getElementById("header");

    header.classList[this.scrollY >= 200 ? "add" : "remove"]("scroll-header");
};

/* === SCROLL TOP === */
const scrollToTop = () => {
    const scrollTop = document.getElementById("scroll-top");

    scrollTop.classList[this.scrollY >= 560 ? "add" : "remove"](
        "show-scrolltop"
    );
};

window.addEventListener("scroll", () => {
    activeLinkScroll();
    scrollHeader();
    scrollToTop();
});

/* === DARK LIGHT THEME === */
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/* === SCROLL REVEAL === */
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: false,
});

scrollReveal.reveal(
    ".home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button, .footer__content",
    {
        interval: 200,
    }
);
