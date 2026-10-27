const appTemplate = document.createElement("template");

appTemplate.innerHTML = `
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
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--mint);
    border-radius: 100rem;
  }

  .app {
    padding: 12rem 2rem 8rem;
    background: var(--blue);
    min-height: 100vh;
  }

  .app__container {
    max-width: 1400px;
    margin: 0 auto;
  }

  /* ============ HERO ============ */
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    margin-bottom: 10rem;
  }

  .hero__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
  }

  .hero__badge {
    display: inline-block;
    background: var(--mint);
    color: var(--blue);
    font-family: var(--text);
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    padding: 0.8rem 2rem;
    border-radius: 100rem;
    text-transform: uppercase;
  }

  .hero__title {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--white);
    letter-spacing: 0.1rem;
    line-height: 1.05;
    text-transform: uppercase;
  }

  .hero__title span {
    color: var(--mint);
  }

  .hero__text {
    font-family: var(--text);
    font-weight: 400;
    font-size: 2.2rem;
    color: var(--white);
    line-height: 1.6;
    opacity: 0.85;
    max-width: 560px;
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    margin-top: 1rem;
  }

  .hero__cta {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: var(--mint);
    color: var(--blue);
    font-family: var(--text);
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.8rem 3.5rem;
    border-radius: 100rem;
    border: 0.2rem solid var(--mint);
    transition: all 0.3s ease;
    cursor: not-allowed;
  }

  .hero__cta:hover {
    background: transparent;
    color: var(--mint);
  }

  .hero__soon {
    font-family: var(--text);
    font-size: 1.6rem;
    color: var(--white);
    opacity: 0.6;
    letter-spacing: 0.1rem;
  }

  .hero__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .phone {
    width: 100%;
    max-width: 380px;
    aspect-ratio: 9 / 19;
    background: #0a0e30;
    border-radius: 3.5rem;
    border: 0.6rem solid #1a1f4a;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6),
                0 0 0 0.2rem rgba(142, 226, 195, 0.15);
    position: relative;
    overflow: hidden;
  }

  .phone::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2rem;
    background: #1a1f4a;
    border-radius: 0 0 1.5rem 1.5rem;
    z-index: 5;
  }

  .phone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ============ CARRUSEL DE CAPTURAS ============ */
  .screens {
    position: relative;
  }

  .screens__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .screens__title {
    font-family: var(--title);
    font-weight: 600;
    font-size: 4rem;
    color: var(--white);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    line-height: 1.1;
  }

  .screens__title span {
    color: var(--mint);
  }

  .screens__subtitle {
    font-family: var(--text);
    font-size: 2rem;
    color: var(--white);
    opacity: 0.7;
    margin-top: 1rem;
  }

  .screens__nav {
    display: flex;
    gap: 1.5rem;
  }

  .screens__btn {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: var(--mint);
    color: var(--blue);
    border: none;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .screens__btn:hover {
    background: var(--white);
    transform: scale(1.08);
  }

  .screens__btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  .screens__viewport {
    overflow: hidden;
  }

  .screens__track {
    display: flex;
    gap: 3rem;
    transition: transform 0.5s ease;
    will-change: transform;
  }

  .screen-card {
    flex: 0 0 calc((100% - 3rem * 3) / 4);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .screen-card__frame {
    width: 100%;
    aspect-ratio: 9 / 19;
    background: #0a0e30;
    border-radius: 2rem;
    border: 0.35rem solid #1a1f4a;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transition: transform 0.35s ease;
  }

  .screen-card__frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;
    height: 1.1rem;
    background: #1a1f4a;
    border-radius: 0 0 0.6rem 0.6rem;
    z-index: 2;
  }

  .screen-card__frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .screen-card__placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--title);
    font-size: 1.5rem;
    color: var(--mint);
    text-transform: uppercase;
    text-align: center;
    padding: 2rem;
    opacity: 0.4;
    letter-spacing: 0.1rem;
  }

  .screen-card__name {
    font-family: var(--title);
    font-size: 2rem;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    text-align: center;
  }

  /* ============ RESPONSIVE ============ */
  @media (max-width: 1200px) {
    .screen-card {
      flex: 0 0 calc((100% - 3rem * 2) / 3);
    }
  }

  @media (max-width: 1000px) {
    .hero {
      gap: 4rem;
    }
    .hero__title {
      font-size: 5rem;
    }
    .hero__text {
      font-size: 2rem;
    }
    .screens__title {
      font-size: 3.4rem;
    }
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 4rem;
    }
    .hero__left {
      align-items: center;
    }
    .hero__text {
      max-width: 100%;
    }
    .hero__right {
      order: -1;
    }
    .screens__head {
      flex-direction: column;
      align-items: flex-start;
    }
    .screens__nav {
      align-self: flex-end;
    }
    .screen-card {
      flex: 0 0 calc((100% - 3rem * 1.5) / 2.5);
    }
  }

  @media (max-width: 680px) {
    .app {
      padding: 10rem 1.5rem 6rem;
    }
    .hero {
      margin-bottom: 6rem;
    }
    .hero__badge {
      font-size: 1.3rem;
    }
    .hero__title {
      font-size: 3.6rem;
    }
    .hero__text {
      font-size: 1.8rem;
    }
    .hero__cta {
      font-size: 1.6rem;
      padding: 1.6rem 2.8rem;
    }
    .hero__soon {
      font-size: 1.4rem;
    }
    .phone {
      max-width: 280px;
    }
    .screens__title {
      font-size: 2.6rem;
    }
    .screens__subtitle {
      font-size: 1.6rem;
    }
    .screens__btn {
      width: 5rem;
      height: 5rem;
      font-size: 2rem;
    }
    .screens__track {
      gap: 2rem;
    }
    .screen-card {
      flex: 0 0 55%;
    }
    .screen-card__name {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 400px) {
    .hero__title {
      font-size: 3rem;
    }
    .screen-card {
      flex: 0 0 65%;
    }
  }
</style>

<section class="app">
  <div class="app__container">

    <!-- HERO -->
    <div class="hero">
      <div class="hero__left">
        <span class="hero__badge">PRÓXIMAMENTE</span>
        <h1 class="hero__title">LA APP OFICIAL DEL <span>CFF OLYMPIA</span></h1>
        <p class="hero__text">
          Toda la información del club en tu móvil. Muy pronto disponible.
        </p>
        <div class="hero__actions">
          <a class="hero__cta" href="#" aria-disabled="true">DISPONIBLE MUY PRONTO</a>
          <span class="hero__soon">Descárgala desde esta página</span>
        </div>
      </div>
      <div class="hero__right">
        <div class="phone">
          <!-- Aquí metes la captura principal de la app -->
          <img src="/public/img/app/app-home.png" alt="Pantalla de inicio de la app del CFF Olympia" />
        </div>
      </div>
    </div>

    <!-- CARRUSEL DE CAPTURAS -->
    <div class="screens">
      <div class="screens__head">
        <div>
          <h2 class="screens__title">TODO LO QUE PODRÁS HACER EN LA <span>APP</span></h2>
          <p class="screens__subtitle">Descubre cada apartado</p>
        </div>
        <div class="screens__nav">
          <button class="screens__btn" id="prevBtn" aria-label="Anterior">❮</button>
          <button class="screens__btn" id="nextBtn" aria-label="Siguiente">❯</button>
        </div>
      </div>

      <div class="screens__viewport">
        <div class="screens__track" id="track">

          <!-- 1. INICIO -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/inicio.png" alt="Pantalla de inicio" /> -->
            </div>
            <span class="screen-card__name">Inicio</span>
          </div>

          <!-- 2. EQUIPOS -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/equipos.png" alt="Pantalla de equipos" /> -->
            </div>
            <span class="screen-card__name">Equipos</span>
          </div>

          <!-- 3. CALENDARIO -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/calendario.png" alt="Pantalla de calendario" /> -->
            </div>
            <span class="screen-card__name">Calendario</span>
          </div>

          <!-- 4. CLASIFICACIÓN -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/clasificacion.png" alt="Pantalla de clasificación" /> -->
            </div>
            <span class="screen-card__name">Clasificación</span>
          </div>

          <!-- 5. INSCRÍBETE -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/inscribete.png" alt="Pantalla de inscripción" /> -->
            </div>
            <span class="screen-card__name">Inscríbete</span>
          </div>

          <!-- 6. COPA DE LA REINA -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/copa-reina.png" alt="Pantalla de Copa de la Reina" /> -->
            </div>
            <span class="screen-card__name">Copa de la Reina</span>
          </div>

          <!-- 7. TIENDA -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/tienda.png" alt="Pantalla de tienda" /> -->
            </div>
            <span class="screen-card__name">Tienda</span>
          </div>

          <!-- 8. NOTICIAS -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/noticias.png" alt="Pantalla de noticias" /> -->
            </div>
            <span class="screen-card__name">Noticias</span>
          </div>

          <!-- 9. PATROCINADORES -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/patrocinadores.png" alt="Pantalla de patrocinadores" /> -->
            </div>
            <span class="screen-card__name">Patrocinadores</span>
          </div>

          <!-- 10. CONTACTO -->
          <div class="screen-card">
            <div class="screen-card__frame">
              <div class="screen-card__placeholder">Tu captura aquí</div>
              <!-- <img src="/public/img/app/contacto.png" alt="Pantalla de contacto" /> -->
            </div>
            <span class="screen-card__name">Contacto</span>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
`;

class App extends HTMLElement {
  constructor() {
    super();
    this.currentIndex = 0;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(appTemplate.content);

    this.setupCarousel(shadowRoot);
  }

  setupCarousel(shadowRoot) {
    const track = shadowRoot.getElementById("track");
    const prevBtn = shadowRoot.getElementById("prevBtn");
    const nextBtn = shadowRoot.getElementById("nextBtn");
    const cards = Array.from(track.children);

    const updateCarousel = () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const viewportWidth = track.parentElement.getBoundingClientRect().width;

      const maxOffset = Math.max(0, (cardWidth + gap) * cards.length - viewportWidth);
      let offset = (cardWidth + gap) * this.currentIndex;

      offset = Math.min(offset, maxOffset);

      track.style.transform = `translateX(-${offset}px)`;

      prevBtn.disabled = this.currentIndex === 0;
      nextBtn.disabled = offset >= maxOffset - 1;
    };

    prevBtn.addEventListener("click", () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener("click", () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const viewportWidth = track.parentElement.getBoundingClientRect().width;
      const maxOffset = Math.max(0, (cardWidth + gap) * cards.length - viewportWidth);

      const nextOffset = (cardWidth + gap) * (this.currentIndex + 1);
      if (nextOffset <= maxOffset + 1) {
        this.currentIndex++;
        updateCarousel();
      }
    });

    window.addEventListener("resize", updateCarousel);

    updateCarousel();
  }
}

customElements.define("app-component", App);