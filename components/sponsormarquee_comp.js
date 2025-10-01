const sponsorMarqueeTemplate = document.createElement("template");

sponsorMarqueeTemplate.innerHTML = `
<style>
::selection {
    background-color: var(--mint);
    color: var(--blue);
  }
*,
::before,
::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
@keyframes sponsor-marquee-scroll {
    from {
    transform: translateX(0);
    }
    to {
    transform: translateX(-100%);
    }
}
.sponsors__marquee {
    height: 30rem;
    margin: 2rem 0;
    overflow: -moz-hidden-unscrollable;
    overflow: hidden;
}
.sponsors__frame {
    width: min-content;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: -moz-hidden-unscrollable;
    overflow: hidden;
}
.sponsors__track {
    height: 100%;
    max-height: 9rem;
    width: 50%;
    min-width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 16rem;
    animation: sponsor-marquee-scroll 30s linear infinite;
}
.sponsors__track:last-child {
    margin-right: 32rem;
}
.sponsors__link {
    position: relative;
    flex-shrink: 0;
    white-space: nowrap;
    height: 100%;
    display: flex;
    align-items: center;
}
.sponsor {
    max-width: 26rem;
    max-height: 9rem;
}

@media (max-width: 1280px) {
    .sponsors__marquee {
    height: 24rem;
    }
    .sponsors__track {
    max-height: 7.75rem;
    column-gap: 13rem;
    }
    .sponsors__track:last-child {
    margin-right: 26rem;
    }
    .sponsor {
    max-width: 22.4rem;
    max-height: 7.75rem;
    }
}
@media (max-width: 1024px) {
    .sponsors__marquee {
    height: 20rem;
    }
    .sponsors__track {
    max-height: 6.5rem;
    column-gap: 11rem;
    }
    .sponsors__track:last-child {
    margin-right: 22rem;
    }
    .sponsor {
    max-width: 18.8rem;
    max-height: 6.5rem;
    }
}
@media (max-width: 720px) {
    .sponsors__marquee {
    height: 18rem;
    }
    .sponsors__track {
    max-height: 5.75rem;
    column-gap: 10rem;
    }
    .sponsors__track:last-child {
    margin-right: 20rem;
    }
    .sponsor {
    max-width: 16.6rem;
    max-height: 5.75rem;
    }
}
@media (max-width: 520px) {
    .sponsors__marquee {
    height: 16rem;
    }
    .sponsors__track {
    max-height: 5.25rem;
    column-gap: 8.5rem;
    }
    .sponsors__track:last-child {
    margin-right: 17rem;
    }
    .sponsor {
    max-width: 15.2rem;
    max-height: 5.25rem;
    }
}
@media (max-width: 400px) {
    .sponsors__marquee {
    height: 14rem;
    }
    .sponsors__track {
    max-height: 4.5rem;
    column-gap: 7.25rem;
    }
    .sponsors__track:last-child {
    margin-right: 14.5rem;
    }
    .sponsor {
    max-width: 13rem;
    max-height: 4.5rem;
    }
}
</style>
<section class="sponsors__marquee">
<div class="sponsors__frame">
    <div class="sponsors__track">
    
        <a href="https://www.ruesma.com/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_ruesma.png"
            class="sponsor"
            alt="Ruesma, patrocinador oficial del Olympia" />
        </a>
        <a href="https://puremind.es/" class="sponsors__link">
            <img
            src="/public/sponsors/puremind.webp"
            class="sponsor"
            alt="PureMind, patrocinador oficial del Olympia" />
        </a>
         <a href="https://www.lg.com/es/?srsltid=AfmBOoobHxIfQEP6PNdoy1cGMTklG0jv1JqM3DhECF7oU9aeig3GV_y8" class="sponsors__link">
            <img
            src="/public/sponsors/logo_lg.png"
            class="sponsor"
            alt="LG, patrocinador oficial del Olympia" />
        </a>
       
        <a href="https://www.mahou.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_mahou.png"
            class="sponsor"
            alt="Mahou, patrocinador oficial del Olympia" />
        </a>

        <a href="https://lraingenieria.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_lra.png"
            class="sponsor"
            alt="LRA, patrocinador oficial del Olympia" />
        </a>
        <a href="https://appletreecommunications.com/es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_appletree.png"
            class="sponsor"
            alt="Appletree, patrocinador oficial del Olympia" />
        </a>
        <a href="https://www.sek.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_sek.png"
            class="sponsor"
            alt="IESEK, patrocinador oficial del Olympia" />
        </a>
        <a href="http://vercocinas.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_vercocinas.png"
            class="sponsor"
            alt="Vercocinas, patrocinador oficial del Olympia" />
        </a>
        <a href="http://aliberico.com/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_aliberico.png"
            class="sponsor"
            alt="Aliberico, patrocinador oficial del Olympia" />
        </a>
    </div>
    <div aria-hidden="true" class="sponsors__track">

        <a href="https://www.ruesma.com/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_ruesma.png"
            class="sponsor"
            alt="Ruesma, patrocinador oficial del Olympia" />
        </a>
        <a href="https://puremind.es/" class="sponsors__link">
            <img
            src="/public/sponsors/puremind.webp"
            class="sponsor"
            alt="PureMind, patrocinador oficial del Olympia" />
        </a>
        <a href="https://www.lg.com/es/?srsltid=AfmBOoobHxIfQEP6PNdoy1cGMTklG0jv1JqM3DhECF7oU9aeig3GV_y8" class="sponsors__link">
            <img
            src="/public/sponsors/logo_lg.png"
            class="sponsor"
            alt="LG, patrocinador oficial del Olympia" />
        </a>
        <a href="https://www.mahou.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_mahou.png"
            class="sponsor"
            alt="Mahou, patrocinador oficial del Olympia" />
        </a>

        <a href="https://lraingenieria.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_lra.png"
            class="sponsor"
            alt="LRA, patrocinador oficial del Olympia" />
        </a>
        <a href="https://appletreecommunications.com/es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_appletree.png"
            class="sponsor"
            alt="Appletree, patrocinador oficial del Olympia" />
        </a>
        <a href="https://www.sek.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_sek.png"
            class="sponsor"
            alt="IESEK, patrocinador oficial del Olympia" />
        </a>
        <a href="http://vercocinas.es/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_vercocinas.png"
            class="sponsor"
            alt="Vercocinas, patrocinador oficial del Olympia" />
        </a>
        <a href="http://aliberico.com/" class="sponsors__link">
            <img
            src="/public/sponsors/logo_aliberico.png"
            class="sponsor"
            alt="Aliberico, patrocinador oficial del Olympia" />
        </a>
    </div>
</div>
</section>
`;

class sponsorMarquee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(sponsorMarqueeTemplate.content);
  }
}

customElements.define("sponsor-marquee", sponsorMarquee);

// const shadow = document.querySelector("header-component").shadowRoot;
// const hamburger = shadow.querySelector(".nav__hamb-menu");
// const hamb1 = shadow.querySelector(".nav__hamb-menu div:first-child");
// const hamb2 = shadow.querySelector(".nav__hamb-menu div:nth-child(2)");
// const hamb3 = shadow.querySelector(".nav__hamb-menu div:last-child");
// const menu = shadow.querySelector(".nav__right");
// let menuActive = false;

// hamburger.addEventListener("click", () => {
//   menuActive = menuActive ? false : true;
//   if (menuActive) {
//     menu.style.display = "flex";
//     hamb1.style.transform = "rotate(45deg)";
//     hamb2.style.opacity = "0";
//     hamb3.style.transform = "rotate(-45deg)";
//   } else {
//     menu.style.display = "none";
//     hamb1.style.transform = "rotate(0deg)";
//     hamb2.style.opacity = "1";
//     hamb3.style.transform = "rotate(0deg)";
//   }
// });
