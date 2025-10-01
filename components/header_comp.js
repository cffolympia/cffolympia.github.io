const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
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
header {
  position: fixed;
  height: 8rem;
  width: 100%;
  padding: 2.3rem 2rem;
  z-index: 1000000;
  background: var(--blue);
}
nav {
  position: relative;
  height: 3.4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav__left {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}
.nav__left img {
  height: 3.4rem;
}
.nav__left a {
  margin: 0;
  padding: 0;
  font-size: 3.2rem;
  font-weight: 600;
  font-family: var(--title);
  letter-spacing: 0.15rem;
  text-decoration: none;
  color: var(--white);
}
.nav__left:hover img,
.nav__left:focus img {
  cursor:pointer;
  filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%) hue-rotate(128deg) brightness(98%) contrast(88%);
}
.nav__left:hover a,
.nav__left:focus a {
  color: var(--mint);
}

.nav__left a h1 {
  font-size: 3.2rem;
  font-weight: 600;
  font-family: var(--title);
  letter-spacing: 0.15rem;
}
.nav__right {
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 2.5rem;
  height: 100%;
}
.nav__element {
  display: inline;
  margin: 0;
  padding: 0;
  font-family: var(--text);
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2rem;
}
.nav__link {
  margin: 0;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
}
.nav__link:hover,
.nav__link:focus {
  color: var(--mint);
}
.nav__hamb-menu {
  display: none;
}

@media (max-width: 1000px) {
  .nav__right {
    background: var(--blue);
    display: flex;
    position: absolute;
    top: 5.7rem; /*8rem - 2.3rem*/
    left: -2rem;
    width: 100%;
    flex-direction: column;
    padding: 4rem;
    margin: 0rem;
    align-items: flex-start;
    justify-content: flex-start;
    gap: clamp(2.5rem, 4rem, 4rem);
    height: calc(100vh - 8rem);
    transition: all 0.4s ease;
    transform: translateX(-100%);
  }
  .nav__element {
    font-family: var(--stitle);
    font-size: clamp(1.4rem, 2.8rem, 3rem);
  }
  .nav__hamb-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 2.8rem;
    height: 3.4rem;
    border: 0;
    background: transparent;
    gap: 0.45rem;
  }
  .nav__hamb-menu:hover {
    cursor: pointer;
  }
  .nav__hamb-menu div {
    display: unset;
    background: var(--white);
    height: 2px;
    width: 100%;
    transition: all 0.5s;
    transform-origin: 17%;
  }
}
</style>
<header class="header">
<nav class="nav">
  <div class="nav__left">
    <!-- Remember to add the  srcset="" sizes="" properties to the img one day -->
    <img src="/public/img/general/escudoblanco.svg" alt="Escudo Blanco Cff Olympia" />
    <a href="/index.html"><h1>CFF OLYMPIA</h1></a>
  </div>
  <ul class="nav__right">
    <!--<li class="nav__element"><a class="nav__link" href="/pages/renueva.html" style="text-decoration: underline; font-weight: 700">¡RENUEVA!</a></li> -->
    <li class="nav__element"><a class="nav__link" href="/pages/inscribete.html">INSCRÍBETE</a></li>
    <li class="nav__element"><a class="nav__link" target="_blank" href="https://estrellasporlaigualdad.cffolympia.es">ESTRELLAS</a></li>
    <li class="nav__element"><a class="nav__link" target="_blank" href="https://university-soccer.com/">UNIVERSITY SOCCER</a></li>
    <!--<li class="nav__element"><a class="nav__link" href="/pages/equipos.html">EQUIPOS</a></li>-->
    <li class="nav__element"><a class="nav__link" href="/pages/noticias.html?grupo=1">NOTICIAS</a></li>
    <li class="nav__element"><a class="nav__link" href="/pages/tienda.html">TIENDA</a></li>
    <li class="nav__element"><a class="nav__link" href="/pages/contacto.html">CONTACTO</a></li>
    <li class="nav__element"><a class="nav__link" href="/pages/info.html">INFO</a></li>
  </ul>
  <div class="nav__hamb-menu">
    <div></div>
    <div></div>
    <div></div>
  </div>
</nav>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);

const shadow = document.querySelector("header-component").shadowRoot;
const hamburger = shadow.querySelector(".nav__hamb-menu");
const hamb1 = shadow.querySelector(".nav__hamb-menu div:first-child");
const hamb2 = shadow.querySelector(".nav__hamb-menu div:nth-child(2)");
const hamb3 = shadow.querySelector(".nav__hamb-menu div:last-child");
const menu = shadow.querySelector(".nav__right");
let menuActive = false;

hamburger.addEventListener("click", () => {
  menuActive = !menuActive;
  if (!menuActive) {
    menu.style.transform = "translateX(0%)";
    hamb1.style.transform = "rotate(45deg)";
    hamb2.style.opacity = "0";
    hamb3.style.transform = "rotate(-45deg)";
  } else {
    menu.style.transform = "translateX(-100%)";
    hamb1.style.transform = "rotate(0deg)";
    hamb2.style.opacity = "1";
    hamb3.style.transform = "rotate(0deg)";
  }
});
