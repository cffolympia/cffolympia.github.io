import { CLUB } from "/api/club.mjs";
import JUGADORAS_MAHOU from "/api/mahouplayer.mjs";

const multiPurposeGridTemplate = document.createElement("template");

multiPurposeGridTemplate.innerHTML = `
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
    width: 0px;
    height: 0px;
  }
  .grid {
    position: relative;
    width: 100%;
    margin: 2rem 0 0;
    padding: 0 4rem 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  .grid__group {
    overflow: hidden;
    border-radius: 1rem;
    padding: 2rem;
  }
  .grid__group--club {
    margin-right: 2rem;
    
    width: calc((100vw - 10rem) / 3 * 2);
    height: calc((100vw - 10rem) / 3);
  }
  .grid__group--mahou {
    background: #fffdee;
    width: calc((100vw - 10rem) / 3);
    height: calc((100vw - 10rem) / 3);
  }
.group__title {
  display: block;  /* Cambiado de none a block */
  font-family: var(--title);
  font-weight: 800;
  font-size: 150px;  /* Tamaño para escritorio */
  color: var(--mint);  /* Color para que contraste con el fondo */
  margin: 0 0 2rem 0;  /* Margen inferior */
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
  /* CARRUSEL COMENTADO TEMPORALMENTE
  .club__carousel {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: grab;
    scroll-snap-type: none;
    position: relative;
  }
  .grabbing {
    cursor: grabbing;
  }
  .carousel__team {
    height: calc((100vw - 10rem) / 3 - 4rem);
    flex-basis: calc((100vw - 10rem) / 3 * 2 - 4rem);
    border-radius: 1rem;
    flex-shrink: 0;
    position: relative;
    scroll-snap-align: center;
    display: none;
  }
  .carousel__team.active {
    display: block;
  }
  .carousel__content {
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    border-radius: 1rem;
    overflow: hidden;
    -webkit-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
  }
  .carousel__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    border-radius: 1rem;
  }
  
  /* BOTONES DE NAVEGACIÓN DEL CARRUSEL (COMENTADO)
  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
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
  .carousel-nav:hover {
    background: var(--blue);
    transform: translateY(-50%) scale(1.1);
  }
  .carousel-prev {
    left: 10px;
  }
  .carousel-next {
    right: 10px;
  }
  */
  
  /* ESTILO PARA VISTA DE SOLO NOMBRES (ACTUAL) */
  .teams-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }
  
  .team-name {
    margin: 0;
    border-radius: 500rem;
    border: 0.3rem solid var(--mint);
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 3rem;
    color: var(--mint);
    padding: 1.5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: default;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
  }
  
  .team-name:hover,
  .team-name:focus {
    background-color: var(--mint);
    color: var(--blue);
    transform: translateY(-3px);
  }
  
  /* MODAL COMENTADO TEMPORALMENTE
  .team-modal {
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
  .team-modal.active {
    display: flex;
  }
  .modal-container {
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    background: var(--blue);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--mint);
    border: none;
    color: var(--blue);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .modal-team-name {
    padding: 2rem;
    font-family: var(--stitle);
    font-size: 2.5rem;
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
  }
  */
  
  /* MAHOU SECTION (MANTENIDO COMO ESTABA) */
  .mahou__carousel {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: grab;
    transition: all 0.5s ease;
  }
  .carousel__mahou-player {
    height: calc((100vw - 10rem) / 3 - 4rem);
    flex-basis: calc((100vw - 10rem) / 3 - 4rem);
    border-radius: 1rem;
    flex-shrink: 0;
    position: relative;
  }
  .mahou-player__content {
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    border-radius: 1rem;
    -webkit-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
  }
  .mahou-player__flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -1rem;
  }
  .mahou-player__text {
    font-family: var(--title);
    font-weight: 700;
    font-size: 8rem;
    color: var(--white);
    margin: 0;
    padding: 0;
  }
  .mahou-player__logo {
    height: 5.5rem;
    margin: 0 1.5rem;
  }
  .mahou-player__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    border-radius: 1rem;
  }
  @media (max-width: 1870px) {
    .team-name {
      border: 0.25rem solid var(--mint);
      font-size: 2.4rem;
      padding: 1rem 2.5rem;
    }
    .mahou-player__text {
      font-size: 7.5rem;
      font-weight: 600;
    }
    .mahou-player__logo {
      height: 5rem;
      margin: 0 1.5rem;
    }
  }
  @media (max-width: 1720px) {
    .mahou-player__text {
      font-size: 7rem;
    }
    .mahou-player__logo {
      height: 4.5rem;
      margin: 0 1.5rem;
    }
  }
  @media (max-width: 1630px) {
    .mahou-player__text {
      font-size: 6.5rem;
    }
    .mahou-player__logo {
      height: 4rem;
      margin: 0 1.3rem;
    }
  }
  @media (max-width: 1510px) {
    .mahou-player__text {
      font-size: 6rem;
    }
    .mahou-player__logo {
      height: 3.5rem;
      margin: 0 1.1rem;
    }
  }
  @media (max-width: 1400px) {
    .team-name {
      border: 0.25rem solid var(--mint);
      font-size: 2.4rem;
      padding: 1rem 2.5rem;
    }
    .mahou-player__text {
      font-size: 5.5rem;
    }
    .mahou-player__logo {
      height: 3rem;
      margin: 0 1rem;
    }
  }
  @media (max-width: 1280px) {
    .mahou-player__text {
      font-size: 5rem;
    }
  }
  @media (max-width: 1220px) {
    .team-name {
      border: 0.25rem solid var(--mint);
      font-size: 2rem;
      padding: 1rem 2rem;
    }
    .mahou-player__text {
      font-size: 4.5rem;
    }
    .mahou-player__logo {
      height: 2.8rem;
      margin: 0 1rem;
    }
  }
  @media (max-width: 1120px) {
    .mahou-player__text {
      font-size: 4rem;
    }
    .mahou-player__logo {
      height: 2.5rem;
      margin: 0 0.7rem;
    }
  }
  @media (max-width: 1000px) {
    .grid {
      flex-direction: column;
      align-items: center;
    }
    .grid__group {
      overflow: hidden;
      border-radius: 1rem;
      padding: 0rem;
    }
    .grid__group--club {
      margin-right: 0;
      margin-bottom: 6rem;
      width: 100%;
      background: none;
      border-radius: 0;
      height: unset;
    }
    .grid__group--mahou {
      padding: 1rem;
      width: 100%;
      height: calc(100vw / 3);
    }
    .group__title {
      display: block;
      font-family: var(--title);
      font-weight: 800;
      font-size: 10rem;
      color: var(--white);
      margin: 0 0 0.5rem;
      padding: 0;
    }
    .teams-list {
      border-top: 0.1rem solid var(--white);
      padding-top: 2rem;
    }
    /* CLUB_CAROUSEL COMENTADO TEMPORALMENTE
    .club__carousel {
      border-top: 0.1rem solid var(--white);
      display: flex;
      overflow: unset;
      padding-top: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
      position: relative;
    }
    /* OCULTAR BOTONES DE NAVEGACIÓN EN MÓVIL (COMENTADO)
    .carousel-nav {
      display: none;
    }
    .carousel__team {
      height: 100%;
      flex-basis: unset;
      border-radius: 0;
      flex-shrink: 0;
      position: relative;
      display: block !important;
    }
    .carousel__content {
      height: 100%;
      width: unset;
      padding: 0;
      display: block;
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      -webkit-box-shadow: unset;
      -moz-box-shadow: unset;
      box-shadow: unset;
    }
    .carousel__anchor {
      border: 0.3rem solid var(--mint);
      font-size: 2.4rem;
      padding: 1.2rem 2.5rem;
      cursor: pointer;
    }
    .carousel__img {
      display: none;
    }
    */
    .team-name {
      border: 0.3rem solid var(--mint);
      font-size: 2.4rem;
      padding: 1.2rem 2.5rem;
    }
    .mahou__carousel {
      display: flex;
      overflow-y: hidden;
      cursor: grab;
      scroll-snap-type: x mandatory;
      transition: all 0.5s ease;
    }
    .carousel__mahou-player {
      height: calc((100vw) / 3 - 2rem);
      flex-basis: calc((100vw) / 3 - 2rem);
      border-radius: 1rem;
      flex-shrink: 0;
      position: relative;
      scroll-snap-align: center;
      margin-right: 1rem;
    }
    .carousel__mahou-player:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 980px) {
    .group__title {
      font-size: 8rem;
    }
  }
  @media (max-width: 840px) {
    .teams-list {
      gap: 0.5rem;
    }
    .team-name {
      border: 0.3rem solid var(--mint);
      font-size: 2rem;
      padding: 1rem 2.3rem;
    }
    .mahou-player__text {
      font-size: 3rem;
    }
    .mahou-player__logo {
      height: 2rem;
      margin: 0 0.7rem;
    }
  }
  @media (max-width: 700px) {
    .grid__group--mahou {
      padding: 1rem;
      width: 100%;
      height: calc(100vw / 2.5);
    }
    .team-name {
      border: 0.2rem solid var(--mint);
      font-size: 1.6rem;
      padding: 0.8rem 2rem;
    }
    .carousel__mahou-player {
      height: calc((100vw) / 2.5 - 2rem);
      flex-basis: calc((100vw) / 2.5 - 2rem);
    }
  }
  @media (max-width: 580px) {
    .grid__group--mahou {
      padding: 1rem;
      width: 100%;
      height: calc(100vw / 2);
    }
    .team-name {
      border: 0.2rem solid var(--mint);
      font-size: 1.4rem;
      padding: 0.85rem 1.6rem 0.7rem;
    }
    .carousel__mahou-player {
      height: calc((100vw) / 2 - 2rem);
      flex-basis: calc((100vw) / 2 - 2rem);
    }
  }
  @media (max-width: 460px) {
    .group__title {
      font-size: 7rem;
    }
    .grid__group--mahou {
      padding: 1rem;
      width: 100%;
      height: calc(100vw - 8rem);
    }
    .team-name {
      border: 0.2rem solid var(--mint);
      font-size: 1rem;
      padding: 0.6rem 1.2rem 0.5rem;
    }
    .carousel__mahou-player {
      height: calc(100vw - 8rem - 2rem);
      flex-basis: calc(100vw - 8rem - 2rem);
    }
    .mahou-player__text {
      font-size: 4.5rem;
    }
    .mahou-player__logo {
      height: 3rem;
      margin: 0 0.9rem;
    }
  }
  @media (max-width: 400px) {
    .group__title {
      font-size: 5.6rem;
    }
    .team-name {
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }
    .mahou-player__text {
      font-size: 3.5rem;
    }
    .mahou-player__logo {
      height: 2.5rem;
      margin: 0 1rem;
    }
  }
</style>

<section class="grid">
  <div class="grid__group grid__group--club">
    <h2 class="group__title">LA CANTERA</h2>
    <!-- CONTENEDOR DE LISTA DE EQUIPOS (VISTA ACTUAL) -->
    <div class="teams-list" id="teamsList">
      <!-- Los nombres de equipos se añadirán dinámicamente -->
    </div>
    
    <!-- CARRUSEL COMENTADO TEMPORALMENTE
    <div class="club__carousel">
      <button class="carousel-nav carousel-prev">❮</button>
      <button class="carousel-nav carousel-next">❯</button>
    </div>
    -->
  </div>
  <div class="grid__group grid__group--mahou" style="display:none;">
    <div class="mahou__carousel">
    </div>
  </div>
  
  <!-- MODAL COMENTADO TEMPORALMENTE
  <div class="team-modal" id="teamModal">
    <div class="modal-container">
      <button class="modal-close" id="modalClose">×</button>
      <img id="modalTeamImage" class="modal-image" alt="Imagen del equipo">
      <div id="modalTeamName" class="modal-team-name"></div>
    </div>
  </div>
  -->
</section>
`;

class MultiPurposeGrid extends HTMLElement {
  constructor() {
    super();
    // Variables del carrusel comentadas temporalmente
    // this.currentTeamIndex = 0;
    // this.teams = [];
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(multiPurposeGridTemplate.content);

    const teamsList = shadowRoot.querySelector("#teamsList");
    const mahouSection = shadowRoot.querySelector(".mahou__carousel");

    // CLUB SECTION LOADER - SOLO NOMBRES
    for (let i = 0; i < CLUB.length; i++) {
      let name = CLUB[i].general.name;
      // imgURL y pageURL se mantienen en los comentarios para futuro uso
      // let imgURL = CLUB[i].general.imgURL;
      // let pageURL = CLUB[i].general.pageURL;

      const teamNameDiv = document.createElement("div");
      teamNameDiv.className = "team-name";
      teamNameDiv.textContent = name;
      teamNameDiv.title = name; // Tooltip con el nombre completo

      teamsList.appendChild(teamNameDiv);

      // Guardar datos para futuro uso (comentado)
      // this.teams.push({ name, imgURL, pageURL });
    }

    // MAHOU SECTION LOADER (mantenido exactamente igual)
    for (let i = 1; i <= JUGADORAS_MAHOU.length; i++) {
      let name = JUGADORAS_MAHOU[i - 1].name;
      let imageURL = JUGADORAS_MAHOU[i - 1].imageURL;
      let month = JUGADORAS_MAHOU[i - 1].month;

      mahouSection.innerHTML += `
        <div class="carousel__mahou-player" style="display:none;">
          <div class="mahou-player__content">
            <div class="mahou-player__flex">
              <span class="mahou-player__text">JUGADORA</span>
              <img
                src="/public/sponsors/logo_mahou.png"
                alt="Logo de Mahou"
                class="mahou-player__logo" />
              <span class="mahou-player__text">${month}</span>
            </div>
          </div>
          <img src="${imageURL}" title="${name}" loading="lazy" alt="Imagen de la jugadora Mahou 5 estrellas" class="mahou-player__img" />
        </div>
      `;
    }

    // CÓDIGO DEL CARRUSEL COMENTADO TEMPORALMENTE
    /*
    // Configurar navegación del carrusel
    this.setupCarouselNavigation(shadowRoot);
    
    // Configurar eventos para vista móvil
    this.setupMobileView(shadowRoot);
    */
  }

  // MÉTODOS DEL CARRUSEL COMENTADOS TEMPORALMENTE
  /*
  setupCarouselNavigation(shadowRoot) {
    const prevBtn = shadowRoot.querySelector('.carousel-prev');
    const nextBtn = shadowRoot.querySelector('.carousel-next');
    
    prevBtn.addEventListener('click', () => {
      this.showTeam((this.currentTeamIndex - 1 + this.teams.length) % this.teams.length);
    });
    
    nextBtn.addEventListener('click', () => {
      this.showTeam((this.currentTeamIndex + 1) % this.teams.length);
    });
  }

  showTeam(index) {
    // Ocultar el equipo actual
    this.teams[this.currentTeamIndex].element.classList.remove('active');
    
    // Mostrar el nuevo equipo
    this.currentTeamIndex = index;
    this.teams[this.currentTeamIndex].element.classList.add('active');
  }

  setupMobileView(shadowRoot) {
    const teamAnchors = shadowRoot.querySelectorAll('.carousel__anchor');
    const modal = shadowRoot.querySelector('#teamModal');
    const modalClose = shadowRoot.querySelector('#modalClose');
    const modalTeamImage = shadowRoot.querySelector('#modalTeamImage');
    const modalTeamName = shadowRoot.querySelector('#modalTeamName');
    
    teamAnchors.forEach((anchor, index) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Solo abrir modal en vista móvil (ancho < 1000px)
        if (window.innerWidth < 1000) {
          const team = this.teams[index];
          modalTeamImage.src = team.imgURL;
          modalTeamImage.alt = team.name;
          modalTeamName.textContent = team.name;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    // Cerrar modal
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  */
}

customElements.define("multipurpose_grid-component", MultiPurposeGrid);
