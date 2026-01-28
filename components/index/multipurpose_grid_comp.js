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
    background: var(--mint);
    width: calc((100vw - 10rem) / 3 * 2);
    height: calc((100vw - 10rem) / 3);
  }
  .grid__group--mahou {
    background: #fffdee;
    width: calc((100vw - 10rem) / 3);
    height: calc((100vw - 10rem) / 3);
  }
  .group__title {
    display: none;
  }
  .club__carousel {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    cursor: grab;
    scroll-snap-type: none;
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
  .carousel__anchor {
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
  }
  .carousel__anchor:hover,
  .carousel__anchor:focus {
    background-color: var(--mint);
    color: var(--blue);
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
    .carousel__anchor {
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
    .carousel__content {
      padding: 1.5rem;
    }
    .carousel__anchor {
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
    .club__carousel {
      border-top: 0.1rem solid var(--white);
      display: flex;
      overflow: unset;
      padding-top: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .carousel__team {
      height: 100%;
      flex-basis: unset;
      border-radius: 0;
      flex-shrink: 0;
      position: relative;
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
    }
    .carousel__img {
      display: none;
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
    .club__carousel {
      gap: 0.5rem;
    }
    .carousel__anchor {
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
    .carousel__anchor {
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
    .carousel__anchor {
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
    .carousel__anchor {
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
    .mahou-player__text {
      font-size: 3.5rem;
    }
    .mahou-player__logo {
      height: 2.5rem;
      margin: 0 1rem;
    }
  }
</style>
<!-- background-image: url('public/img/club/background/delantera.jpg') -->

<section class="grid" >
  <div class="grid__group grid__group--club">
    <h2 class="group__title">LA CANTERA</h2>
    <div class="club__carousel">
    </div>
  </div>
  <div class="grid__group grid__group--mahou" style="display:none;">
    <div class="mahou__carousel">
    </div>
  </div>
</section>
`;

class MultiPurposeGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(multiPurposeGridTemplate.content);

    const shadow = document.querySelector(
      "multipurpose_grid-component",
    ).shadowRoot;

    const carousel = shadow.querySelector(".club__carousel");
    const mahouSection = shadow.querySelector(".mahou__carousel");

    //CLUB SECTION LOADER
    for (let i = 1; i <= CLUB.length; i++) {
      let name = CLUB[i - 1].general.name;
      let imgURL = CLUB[i - 1].general.imgURL;
      let pageURL = CLUB[i - 1].general.pageURL;

      carousel.innerHTML += `
      <div class="carousel__team">
        <div class="carousel__content">
          <a class="carousel__anchor">${name}</a> <!-- ${pageURL} -->
        </div>
        <img src="${imgURL}" alt="Imagen del equipo" loading="lazy" class="carousel__img" />
      </div>
      `;
    }

    //MAHOU SECTION LOADER
    ```
    for (let i = 1; i <= JUGADORAS_MAHOU.length; i++) {
      let name = JUGADORAS_MAHOU[i - 1].name;
      let imageURL = JUGADORAS_MAHOU[i - 1].imageURL;
      let month = JUGADORAS_MAHOU[i - 1].month;
```;
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

    ```
    }


    //CAROSUEL GRABBING
    const firstImg = shadow.querySelector(".carousel__team");
    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;
    let positionDifference;
    const dragStart = (e) => {
      setTimeout(() => (isDragStart = true), 5);
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
    };
    const dragging = (e) => {
      if (!isDragStart) {
        return;
      }
      carousel.classList.add("grabbing");
      e.preventDefault();
      positionDifference = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDifference;
    };
    const dragStop = () => {
      setTimeout(() => (isDragStart = false), 6);
      carousel.classList.remove("grabbing");
      // autoSlide();
    };
    const autoSlide = () => {
      positionDifference = Math.abs(positionDifference);
      let firstImageWidth = firstImg.clientWidth; //1173
      let valDifference = firstImageWidth - positionDifference;
      if (carousel.scrollLeft > prevScrollLeft) {
        //Scroll der
        return (carousel.scrollLeft +=
          positionDifference > firstImageWidth / 2.4
            ? valDifference
            : -positionDifference);
      }
      //Scroll izq
      carousel.scrollLeft -=
        positionDifference > firstImageWidth / 2.4
          ? valDifference
          : -positionDifference;
    };
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);

    //MAHOU CAROUSEL GRABBING
    const firstImgMahou = shadow.querySelector(".carousel__mahou-player");
    let isDragStartMahou = false;
    let prevPageXMahou;
    let prevScrollLeftMahou;
    let positionDifferenceMahou;
    const dragStartMahou = (e) => {
      setTimeout(() => (isDragStartMahou = true), 5);
      prevPageXMahou = e.pageX;
      prevScrollLeftMahou = mahouSection.scrollLeft;
    };
    const draggingMahou = (e) => {
      if (!isDragStartMahou) {
        return;
      }
      mahouSection.classList.add("grabbing");
      e.preventDefault();
      positionDifferenceMahou = e.pageX - prevPageXMahou;
      mahouSection.scrollLeft = prevScrollLeftMahou - positionDifferenceMahou;
    };
    const dragStopMahou = () => {
      setTimeout(() => (isDragStartMahou = false), 6);
      mahouSection.classList.remove("grabbing");
      // autoSlideMahou();
    };
    const autoSlideMahou = () => {
      positionDifferenceMahou = Math.abs(positionDifferenceMahou);
      let firstImageWidthMahou = firstImgMahou.clientWidth; //1173
      let valDifferenceMahou = firstImageWidthMahou - positionDifferenceMahou;
      if (mahouSection.scrollLeft > prevScrollLeftMahou) {
        //Scroll der
        return (mahouSection.scrollLeft +=
          positionDifferenceMahou > firstImageWidthMahou / 2.4
            ? valDifferenceMahou
            : -positionDifferenceMahou);
      }
      //Scroll izq
      mahouSection.scrollLeft -=
        positionDifferenceMahou > firstImageWidthMahou / 2.4
          ? valDifferenceMahou
          : -positionDifferenceMahou;
    };
    mahouSection.addEventListener("mousedown", dragStartMahou);
    mahouSection.addEventListener("mousemove", draggingMahou);
    mahouSection.addEventListener("mouseup", dragStopMahou);
  ```;
  }
}

customElements.define("multipurpose_grid-component", MultiPurposeGrid);
