import SHOP_PRODUCTS from "/api/shopProducts.mjs";

const shopTemplate = document.createElement("template");

shopTemplate.innerHTML = `
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
  
  /* Enhanced Shop Section */
  .shop {
    width: 100%;
    margin: 8rem 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    background: var(--blue);
  }
  
  /* Enhanced Marquee with Better Visuals */
  .shop__marquee-track {
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--mint), #8af3e8);
    height: 4.5rem;
    padding: 0.4rem 0;
    flex-shrink: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-bottom: 3px solid var(--blue);
  }
  .shop__marquee {
    position: relative;
    font-size: 2.8rem;
    line-height: 3.2rem;
    color: var(--blue);
    font-family: var(--title);
    font-weight: 800;
    white-space: nowrap;
    height: 100%;
    margin: 0;
    padding: 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .shop__marquee--right {
    animation: marquee 35s infinite linear reverse;
  }
  .shop__marquee--left {
    animation: marquee 35s infinite linear;
  }
  .shop__marquee::before {
    word-spacing: 0.5rem;
    content: "  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽";
  }
  .shop__marquee::after {
    word-spacing: 0.5rem;
    content: "  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽  TIENDA  ⚽  SHOP  ⚽";
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  /* Enhanced Shop Container */
  .shop__container {
    width: 100%;
    position: relative;
    padding: 10rem 4rem 8rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem 2rem;
    background: var(--blue);
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(138, 243, 232, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(138, 243, 232, 0.05) 0%, transparent 50%);
  }
  
  /* Enhanced Product Cards */
  .shop__product {
    flex-basis: calc((100% - 8rem) / 5);
    width: 100%;
    display: flex;
    flex-direction: column;
    filter: brightness(125%);
    transition: all 0.4s ease;
    border-radius: 16px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  .shop__product:hover {
    transform: translateY(-12px) scale(1.02);
    filter: brightness(140%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    border-color: rgba(138, 243, 232, 0.3);
  }
  .product__inner {
    text-decoration: none;
    width: 100%;
    aspect-ratio: 0.7;
    background: transparent;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
  }
  .product__image, 
  .product__image--hover {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    object-fit: contain;
    transition: all 0.4s ease;
    filter: brightness(90%);
    border-radius: 8px;
  }
  .product__image--hover {
    position: absolute;
    opacity: 0;
    transform: scale(1.1);
  }
  .shop__product:hover .product__image {
    opacity: 0;
    transform: scale(0.95);
  }
  .shop__product:hover .product__image--hover {
    opacity: 1;
    transform: scale(1.08);
    filter: brightness(100%);
  }
  .product__outer {
    width: 100%;
    padding: 1.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .product__name {
    margin: 0 0 0.8rem;
    padding: 0;
    font-family: var(--text);
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.3;
    color: var(--white);
    letter-spacing: -0.01em;
  }
  .product__price {
    margin: 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.3;
    color: var(--mint);
  }

  /* Shop Header Enhancement */
  .shop__header {
    text-align: center;
    padding: 2rem 4rem 1rem;
    background: var(--blue);
  }
  .shop__title {
    font-family: var(--title);
    font-size: 3.5rem;
    color: var(--white);
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .shop__subtitle {
    font-family: var(--text);
    font-size: 1.3rem;
    color: var(--mint);
    opacity: 0.9;
    font-weight: 400;
  }

  /* Responsive Design */
  @media (max-width: 1640px) {
    .shop__product {
      flex-basis: calc((100% - 6rem) / 4);
    }
    .shop__title {
      font-size: 3rem;
    }
  }
  @media (max-width: 1360px) {
    .shop__product {
      flex-basis: calc((100% - 4rem) / 3);
    }
    .shop__container {
      padding: 9rem 3rem 7rem;
    }
  }
  @media (max-width: 1200px) {
    .shop__marquee {
      font-size: 2.4rem;
    }
    .shop__title {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 1000px) {
    .product__name {
      font-size: 1.3rem;
    }
    .product__price {
      font-size: 1.4rem;
    }
    .shop__title {
      font-size: 2.5rem;
    }
    .shop__subtitle {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 940px) {
    .shop__product {
      flex-basis: calc((100% - 2rem) / 2);
    }
    .shop__container {
      padding: 8rem 2rem 6rem;
      gap: 2.5rem 2rem;
    }
    .shop__marquee-track {
      height: 4rem;
    }
    .shop__marquee {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 768px) {
    .shop__header {
      padding: 2rem 2rem 1rem;
    }
    .shop__title {
      font-size: 2.2rem;
    }
    .shop__subtitle {
      font-size: 1.1rem;
    }
    .product__inner {
      padding: 2rem;
    }
    .product__outer {
      padding: 1.5rem 1.5rem 2rem;
    }
  }
  @media (max-width: 660px) {
    .shop__container {
      padding: 7rem 2rem 5rem;
    }
    .product__name {
      font-size: 1.2rem;
    }
    .product__price {
      font-size: 1.3rem;
    }
    .shop__marquee {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }
  @media (max-width: 540px) {
    .shop__product {
      flex-basis: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
    .shop__container {
      gap: 2rem;
    }
    .product__name {
      font-size: 1.3rem;
    }
    .product__price {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 480px) {
    .shop__container {
      padding: 7rem 1.5rem 4rem;
    }
    .shop__header {
      padding: 2rem 1.5rem 1rem;
    }
    .shop__title {
      font-size: 2rem;
    }
    .shop__marquee-track {
      height: 3.5rem;
    }
    .shop__marquee {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 390px) {
    .shop__container {
      padding: 6rem 1rem 3rem;
    }
    .product__inner {
      padding: 1.5rem;
    }
    .product__outer {
      padding: 1.25rem 1.25rem 1.5rem;
    }
    .product__name {
      font-size: 1.2rem;
    }
    .product__price {
      font-size: 1.3rem;
    }
  }
</style>

<section class="shop">
  <div class="shop__marquee-track">
    <div class="shop__marquee shop__marquee--right"></div>
  </div>

  <div class="shop__container">
    
  </div>
</section>
`;

class Shop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(shopTemplate.content);

    //SHOP LOADER
    const shadow = document.querySelector("shop-component").shadowRoot;
    const productsContainer = shadow.querySelector(".shop__container");
    for (let i = 1; i <= SHOP_PRODUCTS.length; i++) {
      let name = SHOP_PRODUCTS[i - 1].name;
      let price = SHOP_PRODUCTS[i - 1].price;
      let imgURL = SHOP_PRODUCTS[i - 1].imgURL;
      let hoverImgURL = SHOP_PRODUCTS[i - 1].hoverImgURL;
      let pageURL = SHOP_PRODUCTS[i - 1].pageURL;
      productsContainer.innerHTML += `
      <div class="shop__product">
        <a class="product__inner" href="${pageURL}">
          <img
            class="product__image"
            src="${imgURL}"
            alt="Imagen del Producto" />
          <img
            class="product__image--hover"
            src="${hoverImgURL}"
            alt="Imagen del Producto" />
        </a>
        <div class="product__outer">
          <span class="product__name">${name}</span>
          <span class="product__price">${price}</span>
        </div>
      </div>`;
    }
  }
}

customElements.define("shop-component", Shop);
