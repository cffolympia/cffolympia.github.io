// Notice we have commented some part of the html and the timer.

import MATCHDATA from "/api/matches.mjs";

let matchDate = MATCHDATA.senior_a.date;
let oponentImg = MATCHDATA.senior_a.imgURL;
let mapsURL = MATCHDATA.senior_a.mapsURL;
let liveURL = MATCHDATA.senior_a.liveURL;
let hashtag = MATCHDATA.senior_a.hashtag;
let isLocal = MATCHDATA.senior_a.isLocal;

const seniorAMatchSlide = document.createElement("template");

// Determinar la imagen de fondo basado en el hashtag
const backgroundImage =
  hashtag === "#COPADELAREINA"
    ? 'url("/public/img/hero_slides/copa-reina.jpg")'
    : 'url("/public/img/hero_slides/IMG_3254.jpg")';

seniorAMatchSlide.innerHTML = `
<style>
  *,
  ::before,
  ::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  .gallery__slide {
    background-image: linear-gradient(270deg, #00000050, #00000090), ${backgroundImage};    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-basis: 100%;
    height: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
  }
  .slide__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3.5rem 4rem 9rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .slide__head {
    width: 100%;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .slide__title {
    font-size: clamp(6rem, 10rem, 10rem);
    line-height: clamp(6rem, 10rem, 10rem);
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
    position: relative;
  }

  .slide__match {
    position: relative;
    flex-grow: 1;
    padding: 2.5rem 0;
    max-height: 50rem;
    height: 80%;
    margin: 0 auto;
    justify-content: center;
  }
  .match__main {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: clamp(3rem, 7rem, 7rem);
    align-items: center;
  }
  .match__escudo1-frame {
    height: 100%;
    aspect-ratio: 1;
  }
  .match__escudo1 {
    height: 100%;
    width: 100%;
    background-image: url("${
      isLocal ? "public/img/escudos/olympia.png" : oponentImg
    }");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .match__vs {
    font-size: clamp(20rem, 40rem, 40rem);
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
  }
  .match__escudo2-frame {
    height: 100%;
    aspect-ratio: 1;
  }
  .match__escudo2 {
    height: 100%;
    width: 100%;
    background-image: url("${
      !isLocal ? "public/img/escudos/olympia.png" : oponentImg
    }");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .match__video-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto 2rem;
    width: 12.5rem;
    height: 4rem;
    border-radius: 10px;
    background-color: var(--white);
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }
  /* .video-btn__rec-icon {
  } */
  .video-btn__text {
    color: #fd2c2c;
    font-size: 2rem;
    font-family: var(--stitle);
    margin: 0;
  }

  .slide__foot {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .slide__link {
    font-size: clamp(3rem, 6rem, 6rem);
    line-height: clamp(3rem, 6rem, 6rem);
    font-weight: 500;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.15rem;
  }
  .slide__link:hover,
  .slide__link:focus {
    color: var(--mint);
  }

  

  @media (max-width: 1520px) {
    .match__main {
      gap: 6rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 45rem;
      height: 75%;
    }
    .match__vs {
      font-size: 35rem;
    }
    .match__video-btn {
      margin: 0 auto 4rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 1320px) {
    .match__main {
      gap: 4rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 40rem;
      height: 70%;
    }
    .match__vs {
      font-size: 30rem;
    }
    .match__video-btn {
      margin: 0 auto 2.5rem;
      border-radius: 1rem;
    }
  }

  @media (max-height: 900px) {
    .slide__title {
      font-size: 8rem;
      line-height: 8rem;
    }
    .slide__link {
      font-size: 5rem;
      line-height: 5rem;
    }
  }

  @media (max-height: 820px) {
    .slide__title {
      font-size: 7.5rem;
      line-height: 7.5rem;
    }
    .slide__link {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }
  }

  @media (max-height: 750px) {
    .slide__title {
      font-size: 7rem;
      line-height: 7rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 35rem;
      height: 70%;
    }
    .match__vs {
      font-size: 25rem;
    }
    .match__video-btn {
      margin: 0 auto 2rem;
      border-radius: 1rem;
    }
    .slide__link {
      font-size: 4.2rem;
      line-height: 4.2rem;
    }
  }

  @media (max-width: 1130px) {
    .match__main {
      gap: 3rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 35rem;
      height: 70%;
    }
    .match__vs {
      font-size: 25rem;
    }
    .match__video-btn {
      margin: 0 auto 2rem;
      border-radius: 1rem;
    }
  }

  @media (max-height: 690px) {
    .slide__title {
      font-size: 6.5rem;
      line-height: 6.5rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 30rem;
      height: 70%;
    }
    .match__vs {
      font-size: 20rem;
    }
    .match__video-btn {
      margin: 0 auto 1rem;
      border-radius: 1rem;
    }
    .slide__link {
      font-size: 4rem;
      line-height: 4rem;
    }
  }

  @media (max-width: 920px) {
    .match__main {
      gap: 2rem;
    }
    .slide__match {
      padding: 2rem 0;
      max-height: 30rem;
      height: 70%;
    }
    .match__vs {
      font-size: 20rem;
    }
    .match__video-btn {
      margin: 0 auto 1rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 790px) {
    .slide__content {
      padding: 2rem 2rem 10rem;
      justify-content: flex-start;
      gap: 2rem;
    }
  
    .slide__head {
      background: rgba(3, 7, 34, 0.8);
      padding: 2rem 2.5rem;
      border-radius: 1rem;
    }
    .slide__title {
      font-size: 6rem;
      line-height: 6rem;
    }
  
    .slide__match {
      width: 100%;
      border-radius: 1rem;
      padding: 2.5rem;
      max-height: 34rem;
      height: unset;
      background: rgba(3, 7, 34, 0.8);
    }
    .match__main {
      gap: 3rem;
    }
    .match__escudo1-frame {
      height: 70%;
    }
    .match__vs {
      font-size: 20rem;
    }
    .match__escudo2-frame {
      height: 70%;
    }
    .match__video-btn {
      margin: 0 auto 0rem;
      border-radius: 1rem 1rem 0 0;
    }
  
    .slide__foot {
      background: rgba(3, 7, 34, 0.8);
      padding: 2rem 2.5rem;
      border-radius: 1rem;
    }
    .slide__link {
      font-size: 5rem;
      line-height: 5rem;
    }
  }
  @media (max-width: 790px) {
    .slide__content {
      padding: 2rem 2rem 8rem;
      justify-content: flex-start;
      gap: 2rem;
    }
  
    .slide__head {
      padding: 2rem;
    }
    .slide__title {
      font-size: 5.5rem;
      line-height: 5.5rem;
    }
  
    .slide__match {
      padding: 2.5rem;
      max-height: 30rem;
    }
    .match__main {
      gap: 2.5rem;
    }
    .match__escudo1-frame {
      height: 70%;
    }
    .match__vs {
      font-size: 16rem;
    }
    .match__escudo2-frame {
      height: 70%;
    }
    .match__video-btn {
      margin: 0 auto 0rem;
      border-radius: 1rem 1rem 0 0;
    }
  
    .slide__foot {
      padding: 2rem;
    }
    .slide__link {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }
  }
  @media (max-width: 650px) {
    .slide__title {
      font-size: 5rem;
      line-height: 5rem;
    }
    .slide__match {
      padding: 2rem;
      max-height: 30rem;
    }
    .match__main {
      gap: 2rem;
    }
    .match__escudo1-frame {
      height: 60%;
    }
    .match__vs {
      font-size: 14rem;
    }
    .match__escudo2-frame {
      height: 60%;
    }
    .slide__link {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }
  }
  @media (max-width: 560px) {
    .slide__match {
      padding: 6rem;
      max-height: unset;
      flex-grow: 0
    }
    .match__main {
      gap: 2rem;
    }
    .match__escudo1-frame {
      height: 14rem;
    }
    .match__vs {
      font-size: 12rem;
    }
    .match__escudo2-frame {
      height: 14rem;
    }
  }
  @media (max-width: 480px) {
    .match__main {
      gap: 1.5rem;
    }
    .match__escudo1-frame {
      height: 8rem;
    }
    .match__vs {
      font-size: 8rem;
    }
    .match__escudo2-frame {
      height: 8rem;
    }
    .slide__link {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }
  @media (max-width: 420px) {
    .slide__head {
      width: 100%;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      order: 2;
      flex-shrink: 0;
    }
    .match__main {
      gap: 1.5rem;
      order: 1;
    }
    .match__escudo1-frame {
      height: 8rem;
    }
    .match__vs {
      font-size: 8rem;
    }
    .match__escudo2-frame {
      height: 8rem;
    }
    .slide__foot {
      order: 3;
    }
    .slide__link {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
</style>

<div class="gallery__slide gallery__slide--match">
  <div class="slide__content">
    <div class="slide__head">
      <h2 class="slide__title">NEXT MATCH</h2>
      <h2 class="slide__title slide__title--timer">00:00:00:00</h2>
    </div>
    <div class="slide__match">
      <div class="match__main">
        <div class="match__escudo1-frame">
          <div class="match__escudo1"></div>
        </div>
        <p class="match__vs">VS</p>
        <div class="match__escudo2-frame">
          <div class="match__escudo2"></div>
        </div>
      </div>
    </div>
    <div class="slide__foot">
      <a href="https://www.instagram.com/cff_olympia/" class="slide__link">
        ${hashtag}
      </a>
      <a href="${mapsURL}" class="slide__link">
        VER UBICACIÓN
      </a>
    </div>
  </div>
</div>
`;

class SeniorAMatchSlide extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(seniorAMatchSlide.content);
    const shadow = document.querySelector("hero_gallery-component").shadowRoot;
    const shadow2 = shadow.querySelector("senior-a_match-slide").shadowRoot;

    //LIVE BUTTON APPEAR
    const slideMatch = shadow2.querySelector(".slide__match");
    if (liveURL) {
      slideMatch.innerHTML += `
      <a href="${liveURL}" target="_blank" class="match__video-btn">
        <img
          src="public/img/general/recbutton.png"
          alt="En directo"
          class="video-btn__rec-icon" />
        <p class="video-btn__text">EN DIRECTO</p>
      </a>
      `;
    }

    //TIMER
    const timeLeft = shadow2.querySelector(".slide__title--timer");
    const matchDay = new Date(matchDate);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const matchDuration = hour * 2;
    const day = hour * 24;
    let timerId;

    function countDown() {
      const today = new Date();
      const timeSpan = matchDay - today;

      if (timeSpan <= -matchDuration) {
        timeLeft.innerText = "TERMINADO";
        clearInterval(timerId);
        return;
      }
      if (timeSpan <= 0) {
        timeLeft.innerText = "EN JUEGO";
        clearInterval(timerId);
        return;
      }

      const days = Math.floor(timeSpan / day).toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      const hours = Math.floor((timeSpan % day) / hour).toLocaleString(
        undefined,
        {
          minimumIntegerDigits: 2,
        },
      );
      const minutes = Math.floor((timeSpan % hour) / minute).toLocaleString(
        undefined,
        {
          minimumIntegerDigits: 2,
        },
      );
      const seconds = Math.floor((timeSpan % minute) / second);
      const seconds2digits = seconds.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });

      timeLeft.innerText = `${days}:${hours}:${minutes}:${seconds2digits}`;
    }
    timerId = setInterval(countDown, second);
  }
}

customElements.define("senior-a_match-slide", SeniorAMatchSlide);
