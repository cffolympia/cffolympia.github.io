const contactTemplate = document.createElement("template");

contactTemplate.innerHTML = `
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

/* Enhanced Contact Section */
.contact {
  width: 100%;
  margin: 8rem 0 0;
  min-height: calc(100vh - 8rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem 6rem;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 100%);
}

/* Enhanced Contact Header */
.contact__header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
  width: 100%;
}

.contact__title {
  font-family: var(--title);
  font-size: 8rem;
  font-weight: 800;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, var(--white), var(--mint));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.contact__subtitle {
  font-family: var(--text);
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

/* Enhanced Contact Info */
.contact_info {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  margin: 0 0 3rem;
  gap: 2rem;
}

.info_container {
  flex: 1;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.info_container::before {
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

.info_container:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(138, 243, 232, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.info_container:hover::before {
  opacity: 1;
}

.info_title {
  font-family: var(--title);
  font-weight: 700;
  font-size: 4rem;
  color: var(--mint);
  margin: 0 0 2.5rem;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info_anchor {
  margin: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  font-family: var(--text);
  font-weight: 600;
  font-size: 2rem;
  color: var(--white);
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
}

.info_anchor::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(138, 243, 232, 0.2), transparent);
  transition: left 0.5s ease;
}

.info_anchor:hover::before {
  left: 100%;
}

.info_anchor:hover {
  color: var(--blue);
  background: var(--mint);
  border-color: var(--mint);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(138, 243, 232, 0.3);
}

/* Enhanced Maps Section */
.contact_maps {
  width: 100%;
  max-width: 1400px;
  flex-grow: 1;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.contact_maps iframe {
  border-radius: 12px;
  height: 100%;
  min-height: 400px;
  width: 100%;
  flex-grow: 1;
  border: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 1440px) {
  .contact__title {
    font-size: 6rem;
  }
  
  .info_title {
    font-size: 3.5rem;
  }
  
  .info_anchor {
    font-size: 1.8rem;
    padding: 1.6rem 1.8rem;
  }
}

@media (max-width: 1240px) {
  .contact__title {
    font-size: 5rem;
  }
  
  .info_title {
    font-size: 3rem;
  }
  
  .info_anchor {
    font-size: 1.6rem;
    padding: 1.4rem 1.6rem;
  }
}

@media (max-width: 1120px) {
  .contact__title {
    font-size: 4.5rem;
  }
  
  .info_title {
    font-size: 2.8rem;
  }
  
  .info_anchor {
    font-size: 1.5rem;
    padding: 1.3rem 1.5rem;
  }
}

@media (max-width: 1040px) {
  .contact_info {
    margin: 0 0 2rem;
    gap: 1.5rem;
  }
  
  .info_container {
    padding: 2.5rem;
  }
  
  .contact_maps {
    padding: 2.5rem;
  }
}

@media (max-width: 1000px) {
  .contact_info {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .info_container {
    flex-basis: calc(50% - 0.75rem);
    margin-bottom: 1.5rem;
  }
  
  .info_container:last-child {
    flex-basis: 100%;
  }
  
  .contact__title {
    font-size: 4rem;
  }
  
  .contact__subtitle {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 0 2rem 4rem;
  }
  
  .contact__title {
    font-size: 3.5rem;
  }
  
  .contact__subtitle {
    font-size: 1.6rem;
  }
  
  .info_container {
    padding: 2rem;
    border-radius: 16px;
  }
  
  .contact_maps {
    padding: 2rem;
    border-radius: 16px;
  }
  
  .contact_maps iframe {
    min-height: 350px;
    border-radius: 10px;
  }
}

@media (max-width: 675px) {
  .contact_info {
    flex-direction: column;
  }
  
  .info_container {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
  
  .info_title {
    font-size: 2.5rem;
  }
  
  .info_anchor {
    font-size: 1.4rem;
    padding: 1.2rem 1.4rem;
  }
}

@media (max-width: 460px) {
  .contact {
    padding: 0 1.5rem 3rem;
  }
  
  .contact__header {
    margin-bottom: 3rem;
  }
  
  .contact__title {
    font-size: 3rem;
  }
  
  .contact__subtitle {
    font-size: 1.4rem;
  }
  
  .info_container {
    padding: 1.8rem;
    border-radius: 12px;
  }
  
  .contact_maps {
    padding: 1.8rem;
    border-radius: 12px;
  }
  
  .contact_maps iframe {
    min-height: 300px;
    border-radius: 8px;
  }
  
  .info_title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  .info_anchor {
    font-size: 1.3rem;
    padding: 1rem 1.2rem;
  }
}

/* Animation for contact items */
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

.info_container {
  animation: fadeInUp 0.6s ease-out;
}

.info_container:nth-child(1) { animation-delay: 0.1s; }
.info_container:nth-child(2) { animation-delay: 0.2s; }
.info_container:nth-child(3) { animation-delay: 0.3s; }

.contact_maps {
  animation: fadeInUp 0.6s ease-out 0.4s both;
}
</style>

<section class="contact">
  <div class="contact__header">
    <h2 class="contact__title">CONTACTO</h2>
    <p class="contact__subtitle">Ponte en contacto con el CFF Olympia</p>
  </div>
  
  <div class="contact_info">
    <div class="info_container info_phone">
      <h2 class="info_title">TELÉFONO</h2>
      <a href="tel:626487563" class="info_anchor">Llama al 626 48 75 63</a>
    </div>
    <div class="info_container info_email">
      <h2 class="info_title">EMAIL</h2>
      <a href="mailto:info@cffolympia.es" class="info_anchor">info@cffolympia.es</a>
    </div>
    <div class="info_container info_place">
      <h2 class="info_title">UBICACIÓN</h2>
      <a
        href="https://www.google.es/maps/place/Recinto+Ferial/@40.5096523,-3.8916099,17z/data=!3m1!4b1!4m6!3m5!1s0xd418338f1ae0d99:0x84ae9b6eb02d6356!8m2!3d40.5096523!4d-3.8916099!16s%2Fg%2F11bc7cx3hz?hl=es&entry=ttu"
        class="info_anchor"
        target="_blank"
        rel="noopener">
        Recinto Ferial Las Rozas
      </a>
    </div>
  </div>
  
  <div class="contact_maps">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.4450878231905!2d-3.8916098999999997!3d40.5096523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418338f1ae0d99%3A0x84ae9b6eb02d6356!2sRecinto%20Ferial!5e0!3m2!1ses!2ses!4v1688886410440!5m2!1ses!2ses"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Ubicación del CFF Olympia en Recinto Ferial Las Rozas">
    </iframe>
  </div>
</section>
`;

class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(contactTemplate.content);
  }
}

customElements.define("contact-component", Contact);
