const copaReinaTemplate = document.createElement("template");

copaReinaTemplate.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Montserrat:wght@400;600;700&display=swap');

  ::selection {
    background-color: var(--copa-purple);
    color: var(--white);
  }

  .copa-reina {
    padding: 10rem 2rem 6rem;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(10, 10, 42, 0.95) 0%, rgba(26, 26, 58, 0.98) 100%);
  }

  .copa-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* HEADER */
  .copa-header {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    padding: 2rem 0;
  }

  .copa-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--copa-purple), var(--copa-gold), var(--copa-purple), transparent);
    border-radius: 2px;
  }

  .copa-title {
    font-family: 'Anton', sans-serif;
    font-size: 4.5rem;
    background: linear-gradient(45deg, var(--copa-purple), var(--copa-gold), var(--copa-purple-light));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 30px rgba(142, 68, 173, 0.3);
  }

  .copa-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    color: var(--white);
    font-weight: 400;
    opacity: 0.9;
  }

  .temporada-badge {
    display: inline-block;
    background: var(--copa-purple);
    color: var(--white);
    padding: 0.5rem 2rem;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
    letter-spacing: 1px;
  }

  /* IMAGEN PRINCIPAL */
  .copa-imagen-principal {
    margin: 4rem 0 2rem;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    height: 500px;
  }

  .imagen-principal-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .imagen-principal {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .imagen-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(10, 10, 42, 0.9));
    padding: 2rem;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
  }

  /* BOTÓN GALERÍA */
  .boton-galeria-container {
    text-align: center;
    margin: 2rem 0 6rem;
  }

  .boton-galeria {
    display: inline-block;
    background: var(--copa-purple);
    color: var(--white);
    padding: 1.2rem 3rem;
    border-radius: 30px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(142, 68, 173, 0.3);
  }

  .boton-galeria:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(142, 68, 173, 0.5);
  }

  /* MODAL */
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    align-items: center;
    justify-content: center;
  }

  .modal-overlay.active {
    display: flex;
  }

  .modal-container {
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    background: rgba(10, 10, 42, 0.95);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: rgba(142, 68, 173, 0.2);
    border-bottom: 1px solid rgba(142, 68, 173, 0.3);
  }

  .modal-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: var(--copa-gold);
    margin: 0;
  }

  .modal-close {
    background: var(--copa-purple);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close:hover {
    background: var(--copa-gold);
    transform: rotate(90deg);
  }

  /* CAROUSEL EN MODAL */
  .modal-carousel {
    position: relative;
    height: 70vh;
    overflow: hidden;
  }

  .modal-track {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease;
  }

  .modal-slide {
    min-width: 100%;
    height: 100%;
    position: relative;
  }

  .modal-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
  }

  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(142, 68, 173, 0.8);
    border: none;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .modal-nav:hover {
    background: var(--copa-gold);
    transform: translateY(-50%) scale(1.1);
  }

  .modal-prev {
    left: 20px;
  }

  .modal-next {
    right: 20px;
  }

  .modal-counter {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    z-index: 10;
  }

  /* PARTIDOS */
  .copa-partidos {
    margin: 6rem 0;
  }

  .partidos-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: var(--copa-gold);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
  }

  .partidos-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, var(--copa-purple), var(--copa-gold));
  }

  .partidos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .partido-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2.5rem;
    border: 1px solid rgba(142, 68, 173, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .partido-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--copa-purple), var(--copa-gold));
  }

  .partido-card:hover {
    transform: translateY(-10px);
    border-color: var(--copa-gold);
    box-shadow: 0 15px 40px rgba(142, 68, 173, 0.2);
  }

  .partido-etapa {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: var(--copa-gold);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .partido-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .partido-fecha {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: var(--white);
    opacity: 0.8;
  }

  .partido-estado {
    display: inline-block;
    background: rgba(255, 193, 7, 0.2);
    color: #FFC107;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  /* NUEVO: ALINEACIÓN HORIZONTAL DE ESCUDOS */
  .partido-equipos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 2rem 0;
  }

  .equipo-local, .equipo-visitante {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
  }

  .equipo-local {
    text-align: right;
  }

  .equipo-visitante {
    text-align: left;
  }

  .escudo-partido {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .nombre-equipo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    color: var(--white);
    line-height: 1.2;
  }

  .partido-resultado-centro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    padding: 0 0.5rem;
  }

  .resultado {
    font-family: 'Anton', sans-serif;
    font-size: 2.5rem;
    background: linear-gradient(45deg, var(--copa-gold), var(--white));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
  }

  .resultado-pendiente {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: var(--white);
    opacity: 0.5;
    letter-spacing: 2px;
    font-weight: 600;
  }

  /* MERCHANDISING */
  .copa-merch {
    margin: 6rem 0;
    text-align: center;
  }

  .merch-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: var(--copa-gold);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
  }

  .merch-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--copa-purple), var(--copa-gold));
  }

  .merch-card {
    max-width: 500px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(142, 68, 173, 0.3);
    transition: all 0.3s ease;
  }

  .merch-card:hover {
    transform: translateY(-10px);
    border-color: var(--copa-gold);
    box-shadow: 0 20px 50px rgba(142, 68, 173, 0.3);
  }

  .merch-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
  }

  .merch-info {
    padding: 2.5rem;
  }

  .merch-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  .merch-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    color: var(--white);
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .merch-button {
    display: inline-block;
    background: var(--copa-purple);
    color: var(--white);
    padding: 1rem 3rem;
    border-radius: 30px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .merch-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(142, 68, 173, 0.4);
  }

  /* RESUMEN */
  .copa-resumen {
    margin: 6rem 0;
    padding: 4rem;
    background: rgba(142, 68, 173, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(142, 68, 173, 0.3);
    position: relative;
    overflow: hidden;
  }

  .resumen-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: var(--copa-gold);
    margin-bottom: 2rem;
    text-align: center;
  }

  .resumen-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    color: var(--white);
    line-height: 1.8;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }

  .resumen-estadisticas {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  .estadistica-item {
    text-align: center;
  }

  .estadistica-numero {
    font-family: 'Anton', sans-serif;
    font-size: 3rem;
    background: linear-gradient(45deg, var(--copa-gold), var(--white));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
  }

  .estadistica-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: var(--white);
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 1000px) {
    .copa-imagen-principal {
      height: 400px;
    }
    
    .modal-carousel {
      height: 60vh;
    }
    
    .copa-title {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 680px) {
    .copa-reina {
      padding: 8rem 1rem 4rem;
    }
    
    .copa-title {
      font-size: 2.8rem;
    }
    
    .copa-subtitle {
      font-size: 1.4rem;
    }
    
    .copa-imagen-principal {
      height: 300px;
    }
    
    .modal-container {
      width: 95%;
      max-height: 95vh;
    }
    
    .modal-carousel {
      height: 50vh;
    }
    
    .modal-nav {
      width: 40px;
      height: 40px;
    }
    
    .partidos-grid {
      grid-template-columns: 1fr;
    }
    
    .merch-image {
      height: 250px;
    }
    
    .copa-resumen {
      padding: 2rem;
    }

    .escudo-partido {
      width: 40px;
      height: 40px;
    }

    .nombre-equipo {
      font-size: 1rem;
    }

    .resultado {
      font-size: 2rem;
    }
  }

  @media (max-width: 500px) {
    .partido-equipos {
      flex-direction: column;
      gap: 1.5rem;
    }

    .equipo-local, .equipo-visitante {
      flex-direction: row;
      gap: 1rem;
      width: 100%;
    }

    .equipo-local {
      justify-content: flex-start;
    }

    .equipo-visitante {
      justify-content: flex-start;
    }

    .partido-resultado-centro {
      flex-direction: row;
      gap: 1rem;
    }

    .escudo-partido {
      width: 35px;
      height: 35px;
    }

    .nombre-equipo {
      font-size: 1rem;
    }

    .resultado-pendiente {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    .copa-title {
      font-size: 2.2rem;
    }
    
    .copa-imagen-principal {
      height: 250px;
    }
    
    .modal-carousel {
      height: 40vh;
    }
    
    .boton-galeria {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }
    
    .resultado {
      font-size: 2rem;
    }

    .escudo-partido {
      width: 30px;
      height: 30px;
    }
  }
</style>

<section class="copa-reina">
  <div class="copa-container">
    <!-- HEADER -->
    <div class="copa-header">
      <h1 class="copa-title">COPA DE LA REINA</h1>
      <div class="temporada-badge">TEMPORADA 2026-2027</div>
    </div>

    <!-- IMAGEN PRINCIPAL -->
    <div class="copa-imagen-principal">
      <div class="imagen-principal-container">
        <img src="/public/img/copa-reina/carousel1.jpg" alt="CFF Olympia en Copa de la Reina" class="imagen-principal">
        <div class="imagen-overlay">
          <h3>Imágenes de la Copa de la Reina</h3>
        </div>
      </div>
    </div>

    <!-- BOTÓN PARA ABRIR GALERÍA -->
    <div class="boton-galeria-container">
      <button class="boton-galeria" id="abrirGaleria">
        VER GALERÍA DE IMÁGENES
      </button>
    </div>

    <!-- MODAL CON CAROUSEL -->
    <div class="modal-overlay" id="modalGaleria">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">GALERÍA DE LA COPA DE LA REINA</h2>
          <button class="modal-close" id="cerrarModal">×</button>
        </div>
        <div class="modal-carousel">
          <div class="modal-track" id="modalTrack">
            <!-- Las fotos se añadirán dinámicamente -->
          </div>
          <button class="modal-nav modal-prev" id="modalPrev">❮</button>
          <button class="modal-nav modal-next" id="modalNext">❯</button>
          <div class="modal-counter" id="modalCounter">1 / 19</div>
        </div>
      </div>
    </div>

    <!-- PARTIDOS -->
    <div class="copa-partidos">
      <h2 class="partidos-title">PARTIDOS COPA DE LA REINA 2026-2027</h2>
      <div class="partidos-grid">
        <!-- Partido 1 - 1ª Eliminatoria -->
        <div class="partido-card">
          <div class="partido-etapa">1ª ELIMINATORIA</div>
          <div class="partido-info">
            <span class="partido-fecha">Miércoles 09/09 - 21:00</span>
            <span class="partido-estado">Próximo</span>
          </div>
          <div class="partido-equipos">
            <div class="equipo-local">
              <img src="/public/img/escudos/samper.png" alt="Samper" class="escudo-partido">
              <span class="nombre-equipo">Samper</span>
            </div>
            <div class="partido-resultado-centro">
              <span class="resultado-pendiente">vs</span>
            </div>
            <div class="equipo-visitante">
              <img src="/public/img/escudos/olympia.png" alt="Olympia" class="escudo-partido">
              <span class="nombre-equipo">CFF Olympia</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MERCHANDISING -->
    <div class="copa-merch">
      <h2 class="merch-title">MERCHANDISING OFICIAL</h2>
      <div class="merch-card">
        <img src="/public/img/shop/camiseta_copadelareina_front.png" alt="Camiseta Copa de la Reina" class="merch-image">
        <div class="merch-info">
          <h3 class="merch-name">Camiseta Conmemorativa</h3>
          <p class="merch-description">
            Camiseta oficial de la participación del CFF Olympia en la Copa de la Reina.
            Edición especial limitada con los colores del torneo.
          </p>
          <a href="https://www.cffolympia.es/pages/producto_tienda.html?producto=camiseta_reina" 
             class="merch-button" target="_blank">
            COMPRAR AHORA
          </a>
        </div>
      </div>
    </div>

    <!-- RESUMEN - TEMPORADA PASADA -->
    <div class="copa-resumen">
      <h2 class="resumen-title">RESUMEN COPA DE LA REINA 2025-2026</h2>
      <p class="resumen-text">
        El CFF Olympia debutó en la Copa de la Reina con una actuación histórica. El equipo logró 
        una victoria en la primera eliminatoria y cayó con orgullo en la segunda ronda ante un rival 
        de gran nivel. Una experiencia que queda grabada en la historia del club.
      </p>
      
      <div class="resumen-estadisticas">
        <div class="estadistica-item">
          <div class="estadistica-numero">2</div>
          <div class="estadistica-label">Partidos Jugados</div>
        </div>
        <div class="estadistica-item">
          <div class="estadistica-numero">7</div>
          <div class="estadistica-label">Goles a Favor</div>
        </div>
        <div class="estadistica-item">
          <div class="estadistica-numero">7</div>
          <div class="estadistica-label">Goles en Contra</div>
        </div>
        <div class="estadistica-item">
          <div class="estadistica-numero">1</div>
          <div class="estadistica-label">Victoria</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

class CopaReina extends HTMLElement {
  constructor() {
    super();
    this.modalCurrentSlide = 0;
    this.modalSlides = [];
    this.totalFotos = 19;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(copaReinaTemplate.content);

    // Configurar eventos del modal
    this.setupModal(shadowRoot);
  }

  setupModal(shadowRoot) {
    const abrirBtn = shadowRoot.getElementById("abrirGaleria");
    const cerrarBtn = shadowRoot.getElementById("cerrarModal");
    const modal = shadowRoot.getElementById("modalGaleria");
    const modalTrack = shadowRoot.getElementById("modalTrack");
    const prevBtn = shadowRoot.getElementById("modalPrev");
    const nextBtn = shadowRoot.getElementById("modalNext");
    const counter = shadowRoot.getElementById("modalCounter");

    // Cargar imágenes en el modal
    this.cargarImagenesModal(modalTrack);

    // Evento para abrir modal
    abrirBtn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      this.mostrarSlideModal(this.modalCurrentSlide);
    });

    // Evento para cerrar modal
    cerrarBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    // Navegación del carousel
    prevBtn.addEventListener("click", () => {
      this.modalCurrentSlide =
        (this.modalCurrentSlide - 1 + this.totalFotos) % this.totalFotos;
      this.mostrarSlideModal(this.modalCurrentSlide);
    });

    nextBtn.addEventListener("click", () => {
      this.modalCurrentSlide = (this.modalCurrentSlide + 1) % this.totalFotos;
      this.mostrarSlideModal(this.modalCurrentSlide);
    });

    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;

      if (e.key === "ArrowLeft") {
        this.modalCurrentSlide =
          (this.modalCurrentSlide - 1 + this.totalFotos) % this.totalFotos;
        this.mostrarSlideModal(this.modalCurrentSlide);
      } else if (e.key === "ArrowRight") {
        this.modalCurrentSlide = (this.modalCurrentSlide + 1) % this.totalFotos;
        this.mostrarSlideModal(this.modalCurrentSlide);
      }
    });
  }

  cargarImagenesModal(modalTrack) {
    modalTrack.innerHTML = "";
    this.modalSlides = [];

    for (let i = 1; i <= this.totalFotos; i++) {
      const slide = document.createElement("div");
      slide.className = "modal-slide";

      const img = document.createElement("img");
      img.src = `/public/img/copa-reina/carousel${i}.jpg`;
      img.alt = `Momento ${i} de la Copa de la Reina`;
      img.className = "modal-image";
      img.loading = "lazy";

      // Manejar error de carga
      img.onerror = () => {
        console.warn(`No se pudo cargar la imagen carousel${i}.jpg`);
        img.src =
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%238e44ad"/><text x="400" y="300" font-family="Arial" font-size="30" fill="white" text-anchor="middle" dy=".3em">Momento ' +
          i +
          "</text></svg>";
      };

      slide.appendChild(img);
      modalTrack.appendChild(slide);
      this.modalSlides.push(slide);
    }
  }

  mostrarSlideModal(index) {
    if (this.modalSlides.length === 0) return;

    const offset = -index * 100;
    const modalTrack = this.shadowRoot.getElementById("modalTrack");
    const counter = this.shadowRoot.getElementById("modalCounter");

    modalTrack.style.transform = `translateX(${offset}%)`;

    // Actualizar contador
    counter.textContent = `${index + 1} / ${this.totalFotos}`;

    // Actualizar índice actual
    this.modalCurrentSlide = index;
  }
}

customElements.define("copa-reina-component", CopaReina);