const heroGalleryTemplate = document.createElement("template");

//////////////////////////////////////
const numberOfSlides = 1;
//////////////////////////////////////

heroGalleryTemplate.innerHTML = `
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
.hero__frame {
  position: relative;
  padding: 8rem 2rem 2rem;
  height: 100vh;
  width: 100%;
}
.hero__gallery {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  flex-wrap: nowrap;
  overflow: hidden;
}
.hero__slider {
  background: var(--mint);
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
  overflow-x: hidden; /*As we gonna control it through control panel, it is now hidden, when control is gone and finger is used to move, then it is scroll*/
}
.match-slide {
 width: calc(100vw - 4rem);
 position: relative
}
.hero__gallery-control {
  height: 4.2rem;
  position: absolute;
  left: 6rem;
  right: 6rem;
  bottom: 6rem;
  border-top: 0.2rem solid var(--white);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.hero__link {
  color: var(--white);
  font-size: 2.4rem;
  font-family: var(--text);
  font-weight: 300;
  line-height: 2.4rem;
  text-decoration-line: underline;
}
.hero__btns {
  height: 3rem;
  width: 12.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.hero__btn {
  
}
.hero__btn-left {
  height: 100%;
}
.hero__btn-left:hover {
  cursor:pointer;
}
.hero__gallery-page {
  color: var(--white);
  margin: 0;
  padding: 0;
  font-size: 2.6rem;
  font-weight: 300;
  font-family: var(--text);
}
.hero__btn-right {
  height: 100%;
}
.hero__btn-right:hover {
  cursor:pointer;
}
  
@media (max-width: 790px) {
  .hero__gallery-control {
    left: 4rem;
    right: 4rem;
    bottom: 4rem;
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .hero__link {
    display: none;
  }
}

</style>
<section class="hero__frame">
  <div class="hero__gallery">
    <div class="hero__slider">
      <senior-a_match-slide class="match-slide"></senior-a_match-slide>
      
      <!--<senior-a_match-slide2 class="match-slide"></senior-a_match-slide2>-->
    </div>
  </div>
  <div class="hero__gallery-control">
    <a href="/public/docs/Calendario_Senior_A.pdf" target="_blank" class="hero__link">Ver Calendario</a>
    <div class="hero__btns">
      <div class="hero__btn-left hero__btn">
        <img src="public/img/general/arrowleft.svg" alt="Flecha apuntando a la izquierda" />
      </div>
      <p class="hero__gallery-page">1/${numberOfSlides}</p>
      <div class="hero__btn-right hero__btn">
        <img src="public/img/general/arrowright.svg" alt="Flecha apuntando a la derecha" />
      </div>  
    </div>
  </div>
</section>
`;

class HeroGallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(heroGalleryTemplate.content);

    const shadow = document.querySelector("hero_gallery-component").shadowRoot;
    const slider = shadow.querySelector(".hero__slider");
    const slides = slider.children;
    const btnLeft = shadow.querySelector(".hero__btn-left");
    const btnRight = shadow.querySelector(".hero__btn-right");
    const pageNumber = shadow.querySelector(".hero__gallery-page");

    let actualPage = 1;

    btnLeft.addEventListener("click", () => {
      if (actualPage > 1) {
        actualPage--;
      }
      let translation = 100 * (actualPage - 1);
      [...slides].forEach((slide) => {
        slide.style.transform = `translateX(-${translation}% )`;
      });
      pageNumber.innerText = `${actualPage}/${[...slides].length}`;
    });

    btnRight.addEventListener("click", () => {
      if (actualPage < [...slides].length) {
        actualPage++;
      }
      let translation = 100 * (actualPage - 1);
      [...slides].forEach((slide) => {
        slide.style.transform = `translateX(-${translation}% )`;
      });
      pageNumber.innerText = `${actualPage}/${[...slides].length}`;
    });
  }
}

customElements.define("hero_gallery-component", HeroGallery);
