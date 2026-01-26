const c2aTemplate = document.createElement("template");

c2aTemplate.innerHTML = `
<style>
::selection {
    background-color: var(--mint);
    color: var(--blue);
}
.social {
    margin: 14rem 0;
    padding: 2rem 4rem;
    aspect-ratio: 2.28;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}
.social__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.social__hashtag {
    font-family: var(--title);
    font-weight: 400;
    font-size: calc(0.293686 * 100vw * 0.3); /* antes 0.7, ahora 0.5 */
    color: var(--white);
    padding: 0;
    margin: 0 0 2rem;
    z-index: 2;
}
.social__hashtag span {
    color: transparent;
    -webkit-text-stroke: 0.15rem var(--gold);
    text-stroke: 0.15rem var(--gold);
}
.social__links {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
}
.social__link {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100rem;
    background: var(--blue);
    margin-right: 1.5rem;
    border: 0.3rem solid var(--mint);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    position: relative;
}
.social__link:last-child {
    margin: 0;
}
.social__icon {
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%)
    hue-rotate(128deg) brightness(98%) contrast(88%);
    width: 50%;
    transition: filter 0.5s ease;
}
.social__link:hover,
.social__link:focus {
    background-color: var(--mint);
}
.social__link:hover .social__icon,
.social__link:focus .social__icon {
    filter: invert(7%) sepia(59%) saturate(1551%) hue-rotate(212deg) brightness(87%)
    contrast(109%);
    width: 53%;
}
.social__img-container {
    position: absolute;
    width: 18%;
    aspect-ratio: 0.7; /* Vertical - más alto que ancho */
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.social__img-container--1 {
    top: 15%;
    left: 20%;
    transform: rotate(-3deg);
}
.social__img-container--2 {
    top: 10%;
    left: 50%;
    transform: translateX(-50%) rotate(2deg);
}
.social__img-container--3 {
    top: 15%;
    right: 20%;
    transform: rotate(4deg);
}
.social__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center; /* Esto es importante - centra la imagen */
    transition: transform 0.5s ease;
}
.social__img-container:hover .social__img {
    transform: scale(1.05);
}

/* Estilos específicos para cada imagen si necesitas ajustar el encuadre */
.social__img--1 {
    object-position: center center;
}
.social__img--2 {
    object-position: center center;
}
.social__img--3 {
    object-position: center center; /* Asegura que esté centrada */
}

/* Opcional: si necesitas un ajuste más fino para imágenes horizontales */
.social__img-container.horizontal .social__img {
    object-fit: cover;
    object-position: center 30%; /* Ajusta según necesites */
}

@media (max-width: 1600px) {
    .social__hashtag {
    margin: 0 0 1.5rem;
    }
    .social__links {
    height: 5rem;
    }
    .social__img-container {
        width: 20%;
    }
}
@media (max-width: 1200px) {
    .social__img-container {
        width: 22%;
    }
    .social__img-container--1 {
        left: 15%;
    }
    .social__img-container--3 {
        right: 15%;
    }
}
@media (max-width: 1000px) {
    .social {
    margin: 8rem 0;
    }
    .social__img-container {
        width: 25%;
        aspect-ratio: 0.75;
    }
    .social__img-container--1 {
        left: 10%;
    }
    .social__img-container--3 {
        right: 10%;
    }
}
@media (max-width: 800px) {
    .social__img-container {
        width: 28%;
        aspect-ratio: 0.8;
    }
    .social__img-container--1 {
        left: 5%;
    }
    .social__img-container--3 {
        right: 5%;
    }
}
@media (max-width: 680px) {
    .social {
    aspect-ratio: 1.6;
    margin: 2rem 0;
    }
    .social__hashtag {
    margin: 0 0 1rem;
    }
    .social__hashtag span {
    color: transparent;
    -webkit-text-stroke: 0.04rem var(--white);
    text-stroke: 0.04rem var(--white);
    }
    .social__img-container {
        width: 30%;
        aspect-ratio: 0.85;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    .social__img-container--1 {
        top: 20%;
        left: 5%;
    }
    .social__img-container--2 {
        top: 15%;
    }
    .social__img-container--3 {
        top: 20%;
        right: 5%;
    }
    .social__links {
    height: 4.7rem;
    }
    .social__link {
    margin-right: 1.25rem;
    border: 0.25rem solid var(--mint);
    }
}
@media (max-width: 480px) {
    .social {
        padding: 2rem;
    }
    .social__img-container {
        width: 32%;
        aspect-ratio: 0.9;
    }
    .social__img-container--1 {
        left: 2%;
    }
    .social__img-container--3 {
        right: 2%;
    }
}
@media (max-width: 400px) {
    .social__links {
    height: 4rem;
    }
    .social__link {
    margin-right: 1rem;
    border: 0.2rem solid var(--mint);
    }
    .social__img-container {
        width: 35%;
        aspect-ratio: 0.95;
    }
}
</style>

<section class="social">
    <div class="social__container">
        <h2 class="social__hashtag"><span>#</span>SOÑAMOSJUNTAS</h2>
        <div class="social__links">
            <a href="https://www.instagram.com/cff_olympia/" class="social__link">
                <img src="/public/icons/instagram.png" alt="Instagram" class="social__icon" />
            </a>
            <a href="https://twitter.com/cff_olympia?lang=es" class="social__link">
                <img src="/public/icons/twitter.png" alt="Twitter" class="social__icon" />
            </a>
            <a href="https://www.tiktok.com/@cff_olympia" class="social__link">
                <img src="/public/icons/tiktok.png" alt="TikTok" class="social__icon" />
            </a>
            <a href="https://www.facebook.com/cffolympialasrozas" class="social__link">
                <img src="/public/icons/facebook.png" alt="Facebook" class="social__icon" />
            </a>
        </div>
        <div class="social__img-container social__img-container--1">
            <img
            src="/public/img/social-index/soñamos2.JPG"
            alt="Imagen del Olympia"
            class="social__img social__img--1" />
        </div>
        <div class="social__img-container social__img-container--2">
            <img
            src="/public/img/social-index/soñamos1.jpg"
            alt="Imagen del Olympia"
            class="social__img social__img--2" />
        </div>
        <div class="social__img-container social__img-container--3">
            <img
            src="/public/img/social-index/soñamos3.jpg"
            alt="Imagen del Olympia"
            class="social__img social__img--3" />
        </div>
    </div>
</section>
`;

class C2A extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(c2aTemplate.content);

    // Opcional: Ajustar automáticamente el object-position según la orientación
    setTimeout(() => {
      const images = shadowRoot.querySelectorAll(".social__img");
      images.forEach((img) => {
        img.onload = function () {
          // Si la imagen es más ancha que alta (horizontal), ajusta el encuadre
          if (this.naturalWidth > this.naturalHeight) {
            this.style.objectPosition = "center 30%";
          } else {
            this.style.objectPosition = "center center";
          }
        };
        // Dispara el evento si la imagen ya está cargada
        if (img.complete) img.onload();
      });
    }, 100);
  }
}

customElements.define("c2a-component", C2A);
