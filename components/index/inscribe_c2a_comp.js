const inscribeC2ATemplate = document.createElement("template");

inscribeC2ATemplate.innerHTML = `
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
  .inscribe {
    width: 100vw;
    margin: 18rem 0 20rem;
    overflow: hidden;
  }
  .inscribe__container {
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    max-width: calc(100vw - 32rem);
  }
  .inscribe__text-content {
    margin: 0 auto 0 -5rem;
    padding: 0;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: right;
  }
  .inscribe__title {
    margin: 0 0 3rem -5rem;
    width: 100%;
    padding: 0;
    font-family: var(--title);
    font-weight: 800;
    font-size: 38rem;
    color: var(--white);
    white-space: nowrap;
  }
  .inscribe__text {
    margin: 0 0 8rem 12rem;
    width: 50rem;
    padding: 0;
    font-family: var(--text);
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: var(--white);
  }
  .inscribe__anchor {
    margin: 0 0 0 12rem;
    width: 30rem;
    border-radius: 500rem;
    border: 0.3rem solid var(--mint);
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 3rem;
    color: var(--mint);
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: all 0.5s ease;
  }
  .inscribe__anchor:hover,
  .inscribe__anchor:focus {
    background: var(--mint);
    color: var(--blue);
  }
  .inscribe__img-frame {
    margin: 0 -5rem 0 auto;
    width: 45%;
    z-index: 2;
    border-radius: 40rem;
    overflow: hidden;
  }
  .inscribe__img {
    width: 100%;
    aspect-ratio: 0.8;
    object-fit: cover;
    object-position: top;
  }
  @media (max-width: 1840px) {
    .inscribe__container {
      max-width: calc(100vw - 20rem);
    }
  }
  @media (max-width: 1700px) {
    .inscribe__title {
      font-size: 34rem;
    }
    .inscribe__text {
      width: 54rem;
      font-size: 1.9rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 1520px) {
    .inscribe__title {
      font-size: 30rem;
    }
    .inscribe__text {
      width: 50rem;
    }
  }
  @media (max-width: 1380px) {
    .inscribe__title {
      font-size: 27rem;
    }
    .inscribe__text {
      width: 44rem;
      font-size: 1.8rem;
      line-height: 2.3rem;
    }
  }
  @media (max-width: 1200px) {
    .inscribe__container {
      max-width: calc(100vw - 10rem);
    }
    .inscribe__text {
      width: 40rem;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 1130px) {
    .inscribe {
      margin: 9rem 0 10rem;
    }
    .inscribe__title {
      font-size: 24rem;
    }
    .inscribe__text {
      width: 34rem;
      margin-bottom: 6rem;
    }
  }
  @media (max-width: 1000px) {
    .inscribe__container {
      max-width: calc(100vw - 8rem);
    }
    .inscribe__title {
      font-size: 20rem;
      margin-bottom: 1rem;
    }
    .inscribe__text {
      width: 30rem;
      margin-bottom: 4rem;
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
    .inscribe__anchor {
      margin: 0 0 0 10rem;
      width: 24rem;
      border: 0.25rem solid var(--mint);
      font-size: 2.3rem;
      padding: 1.3rem 0;
    }
  }
  @media (max-width: 830px) {
    .inscribe__title {
      font-size: 18rem;
      margin-bottom: 0.5rem;
    }
    .inscribe__text {
      width: 24rem;
      margin-bottom: 4rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    .inscribe__anchor {
      margin: 0 0 0 9rem;
      width: 20rem;
      border: 0.25rem solid var(--mint);
      font-size: 2rem;
      padding: 1.3rem 0;
    }
  }
  @media (max-width: 740px) {
    .inscribe__text-content {
      margin: 0 auto 0 -2rem;
    }
    .inscribe__title {
      font-size: 14rem;
      margin-bottom: 0.5rem;
      margin-left: -1rem;
    }
    .inscribe__text {
      width: 24rem;
      margin-bottom: 4rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin-left: 6rem;
    }
    .inscribe__anchor {
      margin: 0 0 0 4rem;
      width: 20rem;
      border: 0.25rem solid var(--mint);
      font-size: 2rem;
      padding: 1.3rem 0;
    }
    .inscribe__img-frame {
      margin: 0 -2rem 0 auto;
    }
  }
  @media (max-width: 660px) {
    .inscribe__text-content {
      margin: 0 auto 0 0;
    }
    .inscribe__title {
      font-size: 14rem;
      margin-bottom: 0.5rem;
      margin-left: -3rem;
    }
    .inscribe__text {
      margin-bottom: 2.5rem;
      margin-left: 1rem;
    }
    .inscribe__anchor {
      margin: 0 0 0 0rem;
      width: 18rem;
      font-size: 1.8rem;
    }
    .inscribe__img-frame {
      margin: 0 0 0 auto;
    }
  }
  @media (max-width: 620px) {
    .inscribe__title {
      font-size: 13rem;
      margin-bottom: 0.5rem;
      margin-left: -5rem;
    }
    .inscribe__text {
      margin-bottom: 3rem;
      margin-left: 2rem;
      font-size: 1.1rem;
      line-height: 1.5rem;
      width: 20rem;
    }
    .inscribe__anchor {
      width: 16rem;
      font-size: 1.6rem;
      padding: 1.1rem 0;
    }
  }
  @media (max-width: 540px) {
    .inscribe__title {
      font-size: 12rem;
      margin-bottom: 0rem;
      margin-left: -6rem;
    }
    .inscribe__text {
      margin-bottom: 2rem;
      margin-left: 0.8rem;
      font-size: 1.1rem;
      line-height: 1.5rem;
      width: 18rem;
    }
    .inscribe__anchor {
      width: 14rem;
      border: 0.25rem solid var(--mint);
      font-size: 1.4rem;
      padding: 1.1rem 0;
    }
    .inscribe__img-frame {
      margin: 4rem 0 0 auto;
    }
  }
  @media (max-width: 470px) {
    .inscribe__title {
      font-size: 10rem;
      margin-bottom: 0rem;
      margin-left: -6rem;
    }
    .inscribe__text {
      margin-bottom: 2rem;
      margin-left: 0.8rem;
      font-size: 1rem;
      line-height: 1.3rem;
      width: 90%;
    }
    .inscribe__anchor {
      width: 14rem;
      border: 0.25rem solid var(--mint);
      font-size: 1.4rem;
      padding: 0.9rem 0;
    }
    .inscribe__img-frame {
      margin: 4rem 0 0 auto;
    }
  }
  @media (max-width: 420px) {
    .inscribe__container {
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: center;
    }
    .inscribe__text-content {
      margin: -7rem 0 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 4;
    }
    .inscribe__title {
      font-size: 12rem;
      margin: 0 0 0;
      width: 100%;
      text-align: center;
    }
    .inscribe__text {
      margin-bottom: 1.5rem;
      margin-left: 0rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      text-align: center;
      width: 100%;
    }
    .inscribe__anchor {
      width: 19rem;
      border: 0.25rem solid var(--mint);
      font-size: 1.8rem;
      padding: 1rem 0;
    }
    .inscribe__img-frame {
      margin: 0;
      width: 100%;
      z-index: 2;
      border-radius: 40rem;
      overflow: hidden;
    }
  }
</style>

<section class="inscribe">
  <div class="inscribe__container">
    <div class="inscribe__text-content">
      <h2 class="inscribe__title">CFF OLYMPIA</h2>
      <p class="inscribe__text">
        ¡Bienvenida al mejor club de fútbol femenino de Las Rozas! Si te apasiona el deporte rey, ¿a qué esperas para unirte a la familia Olympia?
      </p>
      <a href="/pages/inscribete.html" class="inscribe__anchor">ÚNETE AL OLYMPIA</a>
    </div>
    <div class="inscribe__img-frame">
      <img
        src="/public/img/general/composicion_nueva.png"
        alt="Imagen del Olympia"
        class="inscribe__img" />
    </div>
  </div>
</section>
`;

class InscribeC2A extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(inscribeC2ATemplate.content);
  }
}

customElements.define("inscribe_c2a-component", InscribeC2A);
