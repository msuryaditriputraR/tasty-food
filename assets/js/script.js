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
