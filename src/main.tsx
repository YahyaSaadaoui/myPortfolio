import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Main: React.FC = () => {
  useEffect(() => {
    /* ===== MENU SHOW ===== */
    const showMenu = (toggleId: string, navId: string) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    };

    showMenu("nav-toggle", "nav-menu");

    /* ===== REMOVE MENU MOBILE ===== */
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      if (navMenu) {
        navMenu.classList.remove("show");
      }
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /* ===== SCROLL SECTIONS ACTIVE LINK ===== */
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const section = current as HTMLElement; // Type assertion
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const link = document.querySelector(
            `.nav__menu a[href*='${sectionId}']`
          );
          if (link) {
            link.classList.add("active");
          }
        } else {
          const link = document.querySelector(
            `.nav__menu a[href*='${sectionId}']`
          );
          if (link) {
            link.classList.remove("active");
          }
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    /* SCROLL HOME */
    sr.reveal(".home__title", {});
    sr.reveal(".home__scroll", { delay: 200 });
    sr.reveal(".home__img", { origin: "right", delay: 400 });

    // ... (other reveal animations)
  }, []);

  return null;
};

export default Main;
