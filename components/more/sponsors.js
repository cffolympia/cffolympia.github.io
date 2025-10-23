import PATROCINADORES from "/api/patrocinadores.mjs";

const patrocinadoresTemplate = document.createElement("template");

patrocinadoresTemplate.innerHTML = `
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
  
  /* Enhanced Sponsors Section */
  .patrocinadores {
    width: 100%;
    margin: 4rem 0 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 4rem 4rem;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 100%);
  }
  
  /* Sponsors Header */
  .patrocinadores__header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 2rem;
    width: 100%;
  }
  
  .patrocinadores__title {
    font-family: var(--title);
    font-size: 6rem;
    font-weight: 800;
    margin: 0 0 1rem;
    background: linear-gradient(135deg, var(--white), var(--mint));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }
  
  .patrocinadores__subtitle {
    font-family: var(--text);
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
  
  /* Sponsors Grid */
  .patrocinadores__grid {
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;
  }
  
  /* Sponsor Card */
  .patrocinador__card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }
  
  .patrocinador__card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--mint), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .patrocinador__card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(138, 243, 232, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  .patrocinador__card:hover::before {
    opacity: 1;
  }
  
  /* Sponsor Logo */
  .patrocinador__logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .patrocinador__card:hover .patrocinador__logo {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }
  
  /* Sponsor Info */
  .patrocinador__nombre {
    font-family: var(--title);
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--white);
    margin: 0 0 0.5rem;
    text-align: center;
    line-height: 1.2;
  }
  
  .patrocinador__tipo {
    font-family: var(--text);
    font-size: 1.4rem;
    color: var(--mint);
    font-weight: 600;
    margin: 0 0 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .patrocinador__descripcion {
    font-family: var(--text);
    font-size: 1.6rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin: 0 0 2.5rem;
  }
  
  /* Discount Badge */
  .patrocinador__descuento {
    display: inline-flex;
    align-items: center;
    background: rgba(138, 243, 232, 0.15);
    border: 1px solid rgba(138, 243, 232, 0.3);
    border-radius: 8px;
    padding: 0.8rem 1.5rem;
    margin-bottom: 2rem;
    font-family: var(--text);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--mint);
  }
  
  .patrocinador__descuento--no {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.6);
  }
  
  .descuento__porcentaje {
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }
  
  .descuento__codigo {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 0.3rem 0.8rem;
    margin-left: 0.8rem;
    font-family: monospace;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  /* Social Links */
  .patrocinador__redes {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .redes__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .redes__link:hover {
    background: rgba(138, 243, 232, 0.2);
    border-color: var(--mint);
    transform: translateY(-2px);
  }
  
  .redes__icon {
    width: 2rem;
    height: 2rem;
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
  }
  
  .redes__link:hover .redes__icon {
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%) hue-rotate(128deg) brightness(98%) contrast(88%);
  }
  
  /* Website Link */
  .patrocinador__web {
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem 2rem;
    font-family: var(--text);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .patrocinador__web:hover {
    background: rgba(138, 243, 232, 0.15);
    border-color: rgba(138, 243, 232, 0.4);
    color: var(--mint);
    transform: translateY(-2px);
  }
  
  .web__icon {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
    filter: brightness(0) invert(1);
  }
  
  .patrocinador__web:hover .web__icon {
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%) hue-rotate(128deg) brightness(98%) contrast(88%);
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .patrocinadores__grid {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .patrocinadores {
      padding: 0 2rem 4rem;
    }
    
    .patrocinadores__title {
      font-size: 4rem;
    }
    
    .patrocinadores__subtitle {
      font-size: 1.6rem;
    }
    
    .patrocinadores__grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .patrocinador__card {
      padding: 2.5rem;
    }
    
    .patrocinador__nombre {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 480px) {
    .patrocinadores {
      padding: 0 1.5rem 3rem;
    }
    
    .patrocinadores__header {
      margin-bottom: 3rem;
    }
    
    .patrocinadores__title {
      font-size: 3.5rem;
    }
    
    .patrocinadores__subtitle {
      font-size: 1.4rem;
    }
    
    .patrocinador__card {
      padding: 2rem;
      border-radius: 16px;
    }
    
    .patrocinador__logo {
      width: 100px;
      height: 100px;
    }
    
    .patrocinador__nombre {
      font-size: 2rem;
    }
    
    .patrocinador__descripcion {
      font-size: 1.4rem;
    }
    
    .redes__link {
      width: 4rem;
      height: 4rem;
    }
    
    .redes__icon {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  
  /* Animation for sponsor cards */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .patrocinador__card {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .patrocinador__card:nth-child(1) { animation-delay: 0.1s; }
  .patrocinador__card:nth-child(2) { animation-delay: 0.2s; }
  .patrocinador__card:nth-child(3) { animation-delay: 0.3s; }
  .patrocinador__card:nth-child(4) { animation-delay: 0.4s; }
  .patrocinador__card:nth-child(5) { animation-delay: 0.5s; }
  .patrocinador__card:nth-child(6) { animation-delay: 0.6s; }
</style>

<section class="patrocinadores">
  <div class="patrocinadores__header">
    <h2 class="patrocinadores__title">NUESTROS PATROCINADORES</h2>
    <p class="patrocinadores__subtitle">Empresas e instituciones que apoyan al CFF Olympia</p>
  </div>
  
  <div class="patrocinadores__grid">
    <!-- Sponsors will be inserted here -->
  </div>
</section>
`;

class Patrocinadores extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(patrocinadoresTemplate.content);

    const shadow = document.querySelector(
      "patrocinadores-component"
    ).shadowRoot;
    const gridContainer = shadow.querySelector(".patrocinadores__grid");

    PATROCINADORES.forEach((patrocinador) => {
      const socialLinks = this.generateSocialLinks(patrocinador.redes);
      const discountBadge = this.generateDiscountBadge(patrocinador.descuento);

      gridContainer.innerHTML += `
        <div class="patrocinador__card">
          <img src="${patrocinador.logo}" alt="Logo ${
        patrocinador.nombre
      }" class="patrocinador__logo">
          
          <h3 class="patrocinador__nombre">${patrocinador.nombre}</h3>
          <span class="patrocinador__tipo">${patrocinador.tipo}</span>
          
          <p class="patrocinador__descripcion">${patrocinador.descripcion}</p>
          
          ${discountBadge}
          
          ${socialLinks}
          
          ${
            patrocinador.redes.web
              ? `
            <a href="${patrocinador.redes.web}" target="_blank" rel="noopener" class="patrocinador__web">
              <svg class="web__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Visitar Web
            </a>
          `
              : ""
          }
        </div>
      `;
    });
  }

  generateSocialLinks(redes) {
    let linksHTML = "";

    if (redes.instagram) {
      linksHTML += `
        <a href="${redes.instagram}" target="_blank" rel="noopener" class="redes__link" aria-label="Instagram">
          <svg class="redes__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
          </svg>
        </a>
      `;
    }

    if (redes.twitter) {
      linksHTML += `
        <a href="${redes.twitter}" target="_blank" rel="noopener" class="redes__link" aria-label="Twitter">
          <svg class="redes__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
      `;
    }

    if (redes.facebook) {
      linksHTML += `
        <a href="${redes.facebook}" target="_blank" rel="noopener" class="redes__link" aria-label="Facebook">
          <svg class="redes__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
          </svg>
        </a>
      `;
    }

    return linksHTML
      ? `<div class="patrocinador__redes">${linksHTML}</div>`
      : "";
  }

  generateDiscountBadge(descuento) {
    if (descuento.tieneDescuento) {
      return `
        <div class="patrocinador__descuento">
          <span class="descuento__porcentaje">${descuento.porcentaje}</span>
          ${descuento.descripcion}
          ${
            descuento.codigo
              ? `<span class="descuento__codigo">${descuento.codigo}</span>`
              : ""
          }
        </div>
      `;
    } else {
      return `
        <div class="patrocinador__descuento patrocinador__descuento--no">
          ${descuento.descripcion}
        </div>
      `;
    }
  }
}

customElements.define("patrocinadores-component", Patrocinadores);
