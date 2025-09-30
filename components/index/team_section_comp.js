import { SeniorA } from "/api/club.mjs";

const teamCarouselTemplate = document.createElement("template");

teamCarouselTemplate.innerHTML = `
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
.team {
  padding: 4rem;
  overflow-x: scroll;
}
.team__title {
  font-family: var(--title);
  font-weight: 800;
  font-size: 10rem;
  color: var(--white);
  margin: 0 0 0.5rem;
  padding: 0;
}
.team__frame {
  border-top: 0.1rem solid var(--white);
  height: calc(((100vw - 8rem - 8rem) / 5) / 0.8 + 4rem);
  position: relative;
}
.team__wrapper {
  position: absolute;
  padding: 2rem 0;
  top: 0rem;
  bottom: 0rem;
  left: -4rem;
  right: -4rem;
  height: 100%;
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
}
.team__carousel {
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  cursor: grab;
  overflow: scroll;
}
.grabbing {
  cursor: grabbing;
}
.team__player {
  width: calc((100% - 16rem) / 5);
  flex-shrink: 0;
  border-radius: 1rem;
  margin-left: 2rem;
  aspect-ratio: 0.8;
  background: linear-gradient(323deg, var(--blue), var(--mint));
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.team__player:first-child {
  margin-left: 4rem;
}
.team__player:last-child {
  margin-right: 4rem;
}
.player__name {
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-family: var(--title);
  font-weight: 600;
  font-size: 5.3rem;
  line-height: 5.3rem;
  color: var(--white);
  margin: 0 0 -0.9rem;
  padding: 0;
  z-index: 5;
  text-transform: uppercase;
}
.player__position {
  position: absolute;
  height: 3.3rem;
  bottom: 4.5%;
  left: 96%;
  font-family: var(--stitle);
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 2.8rem;
  color: var(--white);
  margin: 0;
  padding: 0;
  z-index: 2;
  transform: rotate(270deg);
  transform-origin: bottom left;
  white-space: nowrap;
  text-transform: uppercase;
}
.player__number {
  position: absolute;
  top: 5%;
  right: 5%;
  font-family: var(--title);
  font-weight: 700;
  font-size: 18rem;
  line-height: 18rem;
  color: var(--white);
  margin: -2.3rem 0 0;
  padding: 0;
  z-index: 2;
  text-transform: uppercase;
}
.player__status {
  position: absolute;
  height: 3.3rem;
  bottom: 4.5%;
  left: 96%;
  font-family: var(--stitle);
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 2.8rem;
  color: var(--white);
  margin: 0;
  padding: 0;
  z-index: 2;
  transform: rotate(270deg);
  transform-origin: bottom left;
  white-space: nowrap;
  text-transform: uppercase;
}
.player__img {
  position: absolute;
  height: calc(100% * (400 / 440));
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index:3;
}

.player__img:not(.player__img--sponsor) {
  height: 85%;
  width: auto;
  max-width: 90%;
  object-fit: cover;
  object-position: center center;
}
.player__img--sponsor {
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 15%;
  object-fit: contain;
  object-position: center;
}

@media (max-width: 1700px) {
  .player__name {
    font-size: 5rem;
  }
}
@media (max-width: 1680px) {
  .team__player {
    flex-basis: calc((100% - 14rem) / 4);
  }
  .team__frame {
    height: calc(((100vw - 8rem - 6rem) / 4) / 0.8 + 4rem);
  }
}
@media (max-width: 1360px) {
  .player__name {
    font-size: 4.5rem;
    line-height: 4.5rem;
  }
  .player__position {
    height: 2.64rem;
    left: 97%;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
  .player__number {
    font-size: 16rem;
    line-height: 16rem;
    margin: -2rem 0 0;
  }
  .player__status {
    height: 2.64rem;
    left: 97%;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
}
@media (max-width: 1180px) {
  .team__player {
    flex-basis: calc((100vw - 8rem - 4rem) / 3);
  }
  .team__frame {
    height: calc(((100vw - 8rem - 4rem) / 3) / 0.8 + 4rem);
  }
}
@media (max-width: 980px) {
  .team__title {
    font-size: 8rem;
  }
}
@media (max-width: 900px) {
  .player__name {
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin: 0 0 -0.6rem;
  }
  .player__position {
    height: 2.16rem;
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
  .player__number {
    font-size: 14rem;
    line-height: 14rem;
    margin: -1.8rem 0 0;
  }
  .player__status {
    height: 2.16rem;
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
}
@media (max-width: 760px) {
  .team__player {
    flex-basis: calc((100vw - 8rem - 2rem) / 2);
  }
  .team__frame {
    height: calc(((100vw - 8rem - 2rem) / 2) / 0.8 + 4rem);
  }
}
@media (max-width: 580px) {
  .team {
    padding: 2rem 4rem;
    overflow-x: scroll;
  }
}
@media (max-width: 530px) {
  .player__name {
    font-size: 3rem;
    line-height: 3rem;
  }
  .player__position {
    height: 1.92rem;
    left: 95%;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
  .player__number {
    font-size: 12rem;
    line-height: 12rem;
    margin: -1.5rem 0 0;
  }
  .player__status {
    height: 1.92rem;
    left: 95%;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
}
@media (max-width: 480px) {
  .team__frame {
    height: calc(((100vw - 8rem - 1rem) / 2) / 0.8 + 4rem);
  }
  .team__player {
    flex-basis: calc((100vw - 8rem - 1rem) / 2);
    border-radius: 0.6rem;
    margin-left: 1rem;
  }
  .team__player:first-child {
    margin-left: 4rem;
  }
  .team__player:last-child {
    margin-right: 4rem;
  }
}
@media (max-width: 460px) {
  .team__title {
    font-size: 7rem;
  }
}
@media (max-width: 440px) {
  .player__name {
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
  .player__position {
    height: 1.68rem;
    left: 96.5%;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
  .player__number {
    font-size: 10rem;
    line-height: 10rem;
    margin: -1.4rem 0 0;
  }
  .player__status {
    height: 1.68rem;
    left: 96.5%;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
}
@media (max-width: 420px) {
  .team__frame {
    height: calc(((100vw - 8rem - 1rem) / 1.5) / 0.8 + 4rem);
  }
  .team__player {
    flex-basis: calc((100vw - 8rem - 1rem) / 1.5);
  }
}
@media (max-width: 400px) {
  .videos__title {
    font-size: 5.6rem;
  }
}
</style>
<section class="team">
<h2 class="team__title">PRIMER EQUIPO</h2>
  <div class="team__frame">
    <div class="team__wrapper">
      <div class="team__carousel"></div>
    </div>
  </div>
</section>
`;

class TeamSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(teamCarouselTemplate.content);

    const shadow = document.querySelector("team_section-component").shadowRoot;
    const carousel = shadow.querySelector(".team__carousel");

    //PLAYERS LOADING
    for (let i = 0; i < SeniorA.sponsors.length; i++) {
      let bgColor = SeniorA.sponsors[i].bgColor;
      let imgURL = SeniorA.sponsors[i].imgURL;
      let pageURL = SeniorA.sponsors[i].pageURL;
      carousel.innerHTML += `
      <a href="${pageURL}" target="_blank" class="team__player" style="background: ${bgColor}; text-decoration: none;">
        <img src="${imgURL}" alt="Imagen sponsor" loading="lazy" class="player__img player__img--sponsor" />
      </a>
      `;
    }
    for (let i = 0; i < SeniorA.players.length; i++) {
      let name = SeniorA.players[i].name;
      let number = SeniorA.players[i].number;
      let imgURL = SeniorA.players[i].imgURL;
      let position = SeniorA.players[i].position;
      carousel.innerHTML += `
      <div class="team__player">
          <span class="player__name">${name}</span>
          <span class="player__position">${position}</span>
          <span class="player__number">${number}</span>
          <img src="${imgURL}" alt="Imagen jugadora" class="player__img" />
      </div>
      `;
    }
    for (let i = 0; i < SeniorA.staff.length; i++) {
      let name = SeniorA.staff[i].name;
      let status = SeniorA.staff[i].status;
      let imgURL = SeniorA.staff[i].imgURL;
      carousel.innerHTML += `
      <div class="team__player">
        <span class="player__name">${name}</span>
        <span class="player__status">${status}</span>
        <img src="${imgURL}" alt="Imagen staff" loading="lazy" class="player__img" />
      </div>
      `;
    }

    //CAROSUEL GRABBING
    //const firstImg = shadow.querySelector(".team__player");
    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;
    let positionDifference;
    // const autoSlide = () => {
    //   positionDifference = Math.abs(positionDifference);
    //   let firstImageWidth = firstImg.clientWidth + 40;
    //   let valDifference = firstImageWidth - positionDifference;
    //   if (carousel.scrollLeft > prevScrollLeft) {
    //     return (carousel.scroll +=
    //       positionDifference > firstImageWidth / 3 ? valDifference : -positionDifference);
    //   }
    //   carousel.scroll -=
    //     positionDifference > firstImageWidth / 3 ? valDifference : -positionDifference;
    // };
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
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
  }
}

customElements.define("team_section-component", TeamSection);
