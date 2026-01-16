import SEASON_SENIOR_A from "/api/senior_season.mjs";

const seniorAMatches = document.createElement("template");

//////////////////////////////////////////////////////////
//FINDING THE INDEX OF THE ACTUAL MATCH
const now = new Date();
let nextMatch = "";
var nextMatchArrIndex;
let dateFound = false;

for (let i = 0; i < SEASON_SENIOR_A.length; i++) {
  const matchDay = new Date(SEASON_SENIOR_A[i].date);
  if (matchDay.getTime() + 7200000 > now.getTime() && !dateFound) {
    nextMatch = matchDay;
    dateFound = true;
    nextMatchArrIndex = i;
  } else if (!dateFound && i + 1 == SEASON_SENIOR_A.length) {
    nextMatch = new Date(SEASON_SENIOR_A[i].date);
    nextMatchArrIndex = i - 3;
  }
}

//////////////////////////////////////////////////////////

seniorAMatches.innerHTML = `
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
  
  /* Enhanced Season Section */
  .season {
    width: 100%;
    overflow: hidden;
    margin: -3.5rem 0 4rem;
    padding: 0 4rem;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 100%);
  }
  
  .season__title {
    display: none;
    font-family: var(--title);
    font-weight: 800;
    font-size: 8rem;
    color: var(--white);
    margin: 0 0 0.5rem;
    padding: 0;
    background: linear-gradient(135deg, var(--white), var(--mint));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
  }
  
  /* Enhanced Season Container with Glass Morphism */
  .season__container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 7rem 0;
    backdrop-filter: blur(20px);
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .season__container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    pointer-events: none;
  }
  
  /* Enhanced Match Styling */
  .season__match {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    backdrop-filter: blur(10px);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  

  
  .season__match--main {
    background: rgba(138, 243, 232, 0.15);
    backdrop-filter: blur(15px);
    z-index: 2;
  }


  

  
  .match__escudo {
    aspect-ratio: 1;
    height: 6rem;
    object-fit: contain;
    object-position: center;
    transition: all 0.4s ease;
  }
  
  .season__match:hover .match__escudo {
    transform: scale(1.15) rotate(5deg);
  }
  
  .season__match--main .match__escudo {
  }
  
  .match__result {
    font-size: 3rem;
    line-height: 5rem;
    font-weight: 700;
    font-family: var(--title);
    margin: 0;
    padding: 0 1.2rem;
    color: var(--white);
    position: relative;
    width: 6rem;
    text-align: center;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  

  
  .season__match--main .match__result {
    color: var(--mint);
    font-weight: 800;
  }
  
  .match__date {
    position: absolute;
    bottom: -4.5rem;
    left: 0;
    right: 0;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--text);
    margin: 0 auto;
    padding: 0.8rem 1.2rem;
    color: var(--white);
    text-align: center;
    backdrop-filter: blur(10px);

    min-width: 12rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  
  .season__match--main .match__date {
    transform: scale(80%);
    padding: 1.5rem 0;
    color: var(--mint);
    font-weight: 700;
  }

  /* Responsive Design */
  @media (max-width: 1760px) {
    .season__match {
      transform: scale(90%);
    }
    .season__match--main {
      transform: scale(115%);
    }
  }
  
  @media (max-width: 1570px) {
    .season__match {
      transform: scale(80%);
    }
    .season__match--main {
      transform: scale(100%);
    }
  }
  
  @media (max-width: 1450px) {
    .season__match {
      transform: scale(75%);
    }
    .season__match--main {
      transform: scale(92%);
    }
  }
  
  @media (max-width: 1360px) {
    .season__match:last-child,
    .season__match:first-child {
      display: none;
    }
  }
  
  @media (max-width: 1000px) {
    .season__match:nth-child(2),
    .season__match:nth-child(6) {
      display: none;
    }
    .season__match {
      transform: scale(100%);
    }
    .season__match--main {
      transform: scale(140%);
    }
  }
  
  @media (max-width: 820px) {
    .season__match {
      transform: scale(90%);
    }
    .season__match--main {
      transform: scale(115%);
    }
  }
  
  @media (max-width: 700px) {
    .season {
      margin: 2rem 0 4rem;
      padding: 0 2rem;
    }
    
    .season__title {
      display: block;
      font-size: 6rem;
      margin-bottom: 1rem;
    }
    
    .season__container {
      padding: 1.5rem 0;
      border-radius: 16px;
      margin: 1rem 0;
      backdrop-filter: blur(15px);
    }
    
    .season__match {
      transform: scale(75%);
      padding: 1.5rem 1rem;
    }
    
    .season__match--main {
      transform: scale(92%);
      padding: 2rem 1.5rem;
    }
    
    .season__match:nth-child(3) {
      margin-left: -2rem;
    }
    
    .season__match:nth-child(5) {
      margin-right: -2rem;
    }
    
    .match__date {
      bottom: -2rem;
      font-size: 1.2rem;
      min-width: 10rem;
    }
  }
  
  @media (max-width: 580px) {
    .season__container {
      padding: 1rem 0;
    }
    
    .season__match {
      transform: scale(70%);
      padding: 1rem 0.8rem;
    }
    
    .season__match--main {
      transform: scale(85%);
      padding: 1.5rem 1.2rem;
    }
    
    .season__match:nth-child(3) {
      margin-left: -2.5rem;
    }
    
    .season__match:nth-child(4) {
      margin-left: -2.5rem;
      margin-right: -2.5rem;
    }
    
    .season__match:nth-child(5) {
      margin-right: -2.5rem;
    }
    
    .match__escudo {
      height: 5rem;
    }
    
    .match__result {
      font-size: 4rem;
      line-height: 4rem;
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 530px) {
    .season__container {
      padding: 0.5rem 0;
    }
    
    .season__match {
      transform: scale(55%);
      padding: 0.8rem 0.6rem;
    }
    
    .season__match--main {
      transform: scale(65%);
      padding: 1.2rem 1rem;
    }
    
    .season__match:nth-child(3) {
      margin-left: -4rem;
    }
    
    .season__match:nth-child(4) {
      margin-left: -4rem;
      margin-right: -4rem;
    }
    
    .season__match:nth-child(5) {
      margin-right: -4rem;
    }
  }
  
  @media (max-width: 460px) {
    .season {
      margin: 2rem 0 2rem;
      padding: 0 1rem;
    }
    
    .season__title {
      font-size: 5rem;
    }
    
    .season__match {
      transform: scale(45%);
    }
    
    .season__match--main {
      transform: scale(55%);
    }
    
    .season__match:nth-child(3) {
      margin-left: -5.2rem;
      margin-top: -1rem;
    }
    
    .season__match:nth-child(4) {
      margin-left: -8.2rem;
      margin-right: -8.2rem;
      margin-top: -1rem;
    }
    
    .season__match:nth-child(5) {
      margin-right: -5.2rem;
      margin-top: -1rem;
    }
  }
  
  @media (max-width: 400px) {
    .season__title {
      font-size: 4rem;
    }
  }
</style>

<section class="season">
  <h2 class="season__title">PARTIDOS</h2>
  <div class="season__container">
    <!-- /////////// -->
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex - 3].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex - 2].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex - 1].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match season__match--main">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex + 1].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex + 2].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].shortDate
        }</span>
      </div>`}
    ${`<div class="season__match">
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].imgURL
        }" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? " "
            : !SEASON_SENIOR_A[nextMatchArrIndex + 3].isLocal
            ? "public/img/escudos/olympia.png"
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].shortDate
        }</span>
      </div>`}
    <!-- /////////// -->
  </div>
</section>
`;

class SeniorAMatches extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(seniorAMatches.content);
    const shadow = document.querySelector(
      "senior-a_matches-component"
    ).shadowRoot;
  }
}

customElements.define("senior-a_matches-component", SeniorAMatches);
