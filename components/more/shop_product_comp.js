import SHOP_PRODUCTS from "/api/shopProducts.mjs";

const productTemplate = document.createElement("template");

productTemplate.innerHTML = `
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
  
  /* Enhanced Product Section */
  .product {
    width: 100%;
    margin: 8rem 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
    gap: 4rem;
  }
  
  /* Enhanced Image Carousel Container */
  .product__gallery {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product__carousel {
    position: relative;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  .product__carousel-container {
    position: relative;
    width: 100%;
    aspect-ratio: 0.79;
    overflow: hidden;
  }
  
  .product__carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }
  
  .product__carousel-slide {
    flex: 0 0 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .product__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  
  .product__carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .carousel__btn {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  .carousel__btn:hover {
    background: var(--mint);
    transform: scale(1.1);
  }
  
  .carousel__btn svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--blue);
  }
  
  .product__carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 0;
  }
  
  .carousel__indicator {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .carousel__indicator.active {
    background: var(--mint);
    transform: scale(1.2);
  }
  
  /* Enhanced Payment Section */
  .product__payment {
    width: 40%;
    max-width: 500px;
  }
  
  .product__sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 8rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  /* Enhanced Product Data */
  .product__data {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;
  }
  
  .product__name {
    margin: 0 0 0.5rem;
    padding: 0;
    font-family: var(--text);
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.4rem;
    color: var(--white);
    letter-spacing: -0.02em;
  }
  
  .product__price {
    margin: 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: var(--mint);
  }
  
  /* Enhanced Form Styling */
  .product__form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .form__input,
  .form__select {
    background-color: rgba(255, 255, 255, 0.08);
    border: 0.15rem solid rgba(255, 255, 255, 0.3);
    height: 3.5rem;
    padding: 0 1.2rem;
    margin-bottom: 1rem;
    color: var(--white);
    text-transform: capitalize;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .form__input:focus,
  .form__select:focus {
    outline: none;
    border-color: var(--mint);
    background-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .form__input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .form__input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .form__option {
    background: var(--blue);
    color: var(--white);
  }
  
  .form__text {
    margin: 2rem 0;
    padding: 1.5rem;
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    color: var(--white);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border-left: 4px solid var(--mint);
  }
  
  .form__text a {
    text-decoration: underline;
    color: var(--mint);
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .form__text a:hover {
    color: var(--white);
  }
  
  .form__submit {
    background: linear-gradient(135deg, var(--mint), #8af3e8);
    border: none;
    height: 4.3rem;
    padding: 0;
    margin: 0;
    color: var(--blue);
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(138, 243, 232, 0.3);
  }
  
  .form__submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(138, 243, 232, 0.4);
    cursor: pointer;
  }
  
  /* Enhanced More Products Section */
  .more {
    width: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
  }
  
  .more__title {
    font-family: var(--text);
    font-weight: 600;
    font-size: 2rem;
    color: var(--white);
    text-align: center;
    margin: 3rem 0 2rem;
    padding: 0 2rem;
  }
  
  .more__container {
    width: 100%;
    position: relative;
    padding: 0rem 2rem 8rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    background-color: var(--blue);
  }
  
  .more__suggestion {
    flex-basis: calc((100% - 8rem) / 5);
    width: 100%;
    display: flex;
    flex-direction: column;
    filter: brightness(125%);
    transition: all 0.3s ease;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
  }
  
  .more__suggestion:hover {
    transform: translateY(-8px);
    filter: brightness(140%);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  .suggestion__inner {
    text-decoration: none;
    width: 100%;
    aspect-ratio: 0.7;
    background: var(--blue);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  
  .suggestion__image,
  .suggestion__image--hover {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    object-fit: contain;
    transition: all 0.4s ease;
    filter: brightness(90%);
  }
  
  .suggestion__image--hover {
    position: absolute;
    opacity: 0;
    transform: scale(1.1);
  }
  
  .more__suggestion:hover .suggestion__image {
    opacity: 0;
    transform: scale(0.95);
  }
  
  .more__suggestion:hover .suggestion__image--hover {
    opacity: 1;
    transform: scale(1.05);
  }
  
  .suggestion__outer {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: rgba(0, 0, 0, 0.2);
  }
  
  .suggestion__name {
    margin: 0 0 0.5rem;
    padding: 0;
    font-family: var(--text);
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.3rem;
    color: var(--white);
  }
  
  .suggestion__price {
    margin: 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.3rem;
    color: var(--mint);
  }

  /* Responsive Design */
  @media (max-width: 1480px) {
    .product {
      gap: 3rem;
    }
    .product__gallery {
      width: 55%;
    }
    .product__payment {
      width: 45%;
    }
    .more__suggestion {
      flex-basis: calc((100% - 6rem) / 4);
    }
  }
  
  @media (max-width: 1200px) {
    .product {
      gap: 2rem;
    }
    .product__gallery {
      width: 50%;
    }
    .product__payment {
      width: 50%;
    }
    .more__suggestion {
      flex-basis: calc((100% - 4rem) / 3);
    }
  }
  
  @media (max-width: 940px) {
    .product {
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
      gap: 2rem;
    }
    .product__gallery {
      width: 100%;
      max-width: 600px;
    }
    .product__payment {
      width: 100%;
      max-width: 600px;
    }
    .product__sticky {
      position: relative;
      top: unset;
    }
    .more__suggestion {
      flex-basis: calc((100% - 2rem) / 2);
    }
  }
  
  @media (max-width: 768px) {
    .product__name {
      font-size: 1.8rem;
      line-height: 2rem;
    }
    .product__price {
      font-size: 1.5rem;
    }
    .more__title {
      font-size: 1.6rem;
      margin: 2rem 0 1rem;
    }
    .carousel__btn {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  
  @media (max-width: 600px) {
    .more__suggestion {
      flex-basis: 100%;
    }
    .product__carousel-controls {
      padding: 0 0.5rem;
    }
  }
  
  @media (max-width: 520px) {
    .product__name {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
    .product__price {
      font-size: 1.3rem;
    }
    .form__input,
    .form__select {
      font-size: 1.3rem;
    }
    .more__container {
      padding: 0rem 1rem 6rem;
    }
    .product__sticky {
      padding: 2rem;
    }
  }
</style>

<section class="product">
  <!-- Content will be inserted here -->
</section>

<section class="more">
  <h2 class="more__title">Productos Relacionados</h2>
  <div class="more__container">
    <!-- Suggestions will be inserted here -->
  </div>
</section>
`;

class Product extends HTMLElement {
  constructor() {
    super();
    this.currentSlide = 0;
    this.autoScrollInterval = null;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(productTemplate.content);

    const shadow = document.querySelector("shop_product-component").shadowRoot;

    // PRODUCT EVALUATOR
    const productoBuscado = new URLSearchParams(window.location.search).get(
      "producto"
    );
    let productoACargar = "none";
    for (let i = 0; i < SHOP_PRODUCTS.length; i++) {
      if (productoBuscado == SHOP_PRODUCTS[i].pageName) {
        productoACargar = SHOP_PRODUCTS[i].pageName;
      }
    }
    if (productoACargar == "none") {
      location.replace("/pages/tienda.html");
    }
    const productArrPosition = SHOP_PRODUCTS.findIndex(
      (product) => product.pageName == productoACargar
    );

    // PRODUCT LOADER
    const productsContainer = shadow.querySelector(".product");
    let name = SHOP_PRODUCTS[productArrPosition].name;
    let price = SHOP_PRODUCTS[productArrPosition].price;
    let productImages = SHOP_PRODUCTS[productArrPosition].productImages;

    document.title += " " + name;

    let selections = SHOP_PRODUCTS[productArrPosition].selections;
    let selectorsHTML = "";
    for (let i = 0; i < selections.length; i++) {
      selectorsHTML += `
      <select class="form__select" name="${selections[i].name}" ${
        selections[i].isRequired ? "required" : ""
      }>`;
      for (let j = 0; j < selections[i].options.length; j++) {
        selectorsHTML += `<option class="form__option" value="${selections[i].options[j]}">${selections[i].options[j]}</option>`;
      }
      selectorsHTML += `</select>`;
    }

    let otherInputs = SHOP_PRODUCTS[productArrPosition].otherInputs;
    let otherInputsHTML = "";
    for (let i = 0; i < otherInputs.length; i++) {
      otherInputsHTML += `
      <input
        type="${otherInputs[i].type}"
        class="form__input"
        placeholder="${otherInputs[i].placeholder}"
        name="${otherInputs[i].name}"
        value="${otherInputs[i].value}"
        ${otherInputs[i].isRequired ? "required" : ""} />`;
    }

    // Create carousel HTML
    let carouselHTML = "";
    let indicatorsHTML = "";

    if (productImages.length > 0) {
      carouselHTML = `
        <div class="product__carousel">
          <div class="product__carousel-container">
            <div class="product__carousel-track">
              ${productImages
                .map(
                  (image, index) => `
                <div class="product__carousel-slide">
                  <img src="${image}" alt="Imagen del producto ${
                    index + 1
                  }" class="product__img" />
                </div>
              `
                )
                .join("")}
            </div>
            ${
              productImages.length > 1
                ? `
              <div class="product__carousel-controls">
                <button class="carousel__btn prev-btn">
                  <svg viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button class="carousel__btn next-btn">
                  <svg viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            `
                : ""
            }
          </div>
          ${
            productImages.length > 1
              ? `
            <div class="product__carousel-indicators">
              ${productImages
                .map(
                  (_, index) => `
                <button class="carousel__indicator ${
                  index === 0 ? "active" : ""
                }" data-index="${index}"></button>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    productsContainer.innerHTML = `
      <div class="product__gallery">
        ${carouselHTML}
      </div>
      <aside class="product__payment">
        <div class="product__sticky">
          <div class="product__data">
            <h2 class="product__name">${name}</h2>
            <span class="product__price">${price}</span>
          </div>
          <form
            class="product__form"
            action="https://formsubmit.co/obiezeh999@gmail.com"
            method="POST">
            <input type="hidden" name="_subject" value="Nuevo pedido de ${name}" />
            <input type="hidden" name="_next" value="https://cffolympia.es/confirmacion_envio.html">
            <input
              type="hidden"
              name="_url"
              value="https://www.cffolympia.es/pages/producto_tienda.html?producto=camiseta_basica" />
            <input type="hidden" name="Producto" value="${name}" />
            <input
              type="text"
              class="form__input"
              placeholder="NOMBRE COMPLETO JUGADORA"
              name="Nombre"
              required />
            <input
              type="text"
              class="form__input"
              placeholder="CATEGORÍA Y LETRA"
              name="Categoria"
              required />
            <input type="email" class="form__input" placeholder="EMAIL" name="Email" required style="margin-bottom: 2rem;" />
            ${selectorsHTML}
            ${otherInputsHTML}
            <span class="form__text">
            Siempre revise que toda la información está correctamente escrita y rellene todos los campos necesarios. Escriba a <a href="mailto:equipaciones@cffolympia.es">equipaciones@cffolympia.es</a>.
            </span> 
            <button class="C" type="submit">REALIZAR PEDIDO</button>
          </form>
        </div>
      </aside>
    `;

    // Initialize carousel if there are multiple images
    if (productImages.length > 1) {
      this.initializeCarousel(shadow);
    }

    // SUGGESTIONS LOADER
    const suggestionsContainer = shadow.querySelector(".more__container");
    for (let i = 1; i <= 5; i++) {
      let name = SHOP_PRODUCTS[i - 1].name;
      let price = SHOP_PRODUCTS[i - 1].price;
      let imgURL = SHOP_PRODUCTS[i - 1].imgURL;
      let hoverImgURL = SHOP_PRODUCTS[i - 1].hoverImgURL;
      let pageURL = SHOP_PRODUCTS[i - 1].pageURL;
      suggestionsContainer.innerHTML += `
      <div class="more__suggestion">
        <a class="suggestion__inner" href="${pageURL}">
          <img
            class="suggestion__image"
            src="${imgURL}"
            alt="Imagen del producto" />
          <img
            class="suggestion__image--hover"
            src="${hoverImgURL}"
            alt="Imagen del producto" />
        </a>
        <div class="suggestion__outer">
          <span class="suggestion__name">${name}</span>
          <span class="suggestion__price">${price}</span>
        </div>
      </div>`;
    }
  }

  initializeCarousel(shadow) {
    const track = shadow.querySelector(".product__carousel-track");
    const slides = shadow.querySelectorAll(".product__carousel-slide");
    const prevBtn = shadow.querySelector(".prev-btn");
    const nextBtn = shadow.querySelector(".next-btn");
    const indicators = shadow.querySelectorAll(".carousel__indicator");

    const totalSlides = slides.length;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${this.currentSlide * 100}%)`;

      // Update indicators
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === this.currentSlide);
      });
    };

    const nextSlide = () => {
      this.currentSlide = (this.currentSlide + 1) % totalSlides;
      updateCarousel();
    };

    const prevSlide = () => {
      this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    };

    // Event listeners
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.currentSlide = index;
        updateCarousel();
      });
    });

    // Auto-scroll every 5 seconds
    this.autoScrollInterval = setInterval(nextSlide, 5000);

    // Pause auto-scroll on hover
    const carousel = shadow.querySelector(".product__carousel");
    carousel.addEventListener("mouseenter", () => {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
    });

    carousel.addEventListener("mouseleave", () => {
      if (!this.autoScrollInterval) {
        this.autoScrollInterval = setInterval(nextSlide, 5000);
      }
    });
  }

  disconnectedCallback() {
    // Clean up interval when component is removed
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}

customElements.define("shop_product-component", Product);
