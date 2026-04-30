import NOTICIAS from "/api/news.mjs";

const allNewsTemplate = document.createElement("template");

allNewsTemplate.innerHTML = `
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

/* Enhanced News Section */
.news {
  width: 100%;
  margin: 8rem 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem 6rem;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 100%);
}

/* Enhanced News Display */
.news__display {
  width: 100%;
  max-width: 1400px;
  padding: 4rem 0;
  margin: 0 0 4rem;
  display: flex;
  flex-direction: column;
  position: relative;
}



/* Enhanced Article Styling */
.news__article {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 6rem;
  margin: 0 0 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.news__article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--mint), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news__article:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(138, 243, 232, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.news__article:hover::before {
  opacity: 1;
}

.news__article:last-child {
  margin-bottom: 0;
}

.article__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 4rem 0 0;
}

.article__title {
  font-size: 5rem;
  font-weight: 700;
  font-family: var(--title);
  margin: 0 0 1.5rem;
  padding: 0;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--white), var(--mint));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.article__date {
  font-size: 1.6rem;
  font-weight: 500;
  font-family: var(--text);
  margin: 0 0 2.5rem;
  padding: 0.8rem 1.5rem;
  color: var(--mint);
  background: rgba(138, 243, 232, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(138, 243, 232, 0.2);
  display: inline-block;
  width: fit-content;
}

.article__text {
  font-size: 1.8rem;
  line-height: 1.7;
  font-weight: 400;
  font-family: var(--text);
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.9);
}

.article__img {
  width: 45%;
  aspect-ratio: 1.618;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.4s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}


.article__video {
  object-fit: contain;
}



.news__article:hover .article__img {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Enhanced Control Panel */
.news__control {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
}

.control__box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem;
}

.control__option {
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 600;
  font-family: var(--text);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.control__option::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(138, 243, 232, 0.2), transparent);
  transition: left 0.5s ease;
}

.control__option:hover::before {
  left: 100%;
}

.control__option:hover {
  color: var(--blue);
  background: var(--mint);
  border-color: var(--mint);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(138, 243, 232, 0.3);
}

.control__option--selected {
  color: var(--blue);
  background: var(--mint);
  border-color: var(--mint);
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(138, 243, 232, 0.4);
}

.control__option--selected:hover {
  transform: scale(1.1) translateY(-3px);
}

/* News Section Header */
.news__header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.news__title {
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

.news__subtitle {
  font-family: var(--text);
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 1720px) {
  .article__title {
    font-size: 4.5rem;
  }
}

@media (max-width: 1560px) {
  .article__title {
    font-size: 4rem;
  }
  .article__text {
    font-size: 1.7rem;
  }
}

@media (max-width: 1360px) {
  .article__title {
    font-size: 3.5rem;
  }
  .article__text {
    font-size: 1.6rem;
  }
  .news__title {
    font-size: 6rem;
  }
}

@media (max-width: 1270px) {
  .article__title {
    font-size: 3.2rem;
  }
}

@media (max-width: 1200px) {
  .article__title {
    font-size: 3rem;
  }
  .article__date {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .article__text {
    font-size: 1.5rem;
  }
  .news__title {
    font-size: 5rem;
  }
  .news__subtitle {
    font-size: 1.8rem;
  }
}

@media (max-width: 1120px) {
  .article__title {
    font-size: 2.8rem;
  }
}

@media (max-width: 1000px) {
  .news__display {
    padding: 2rem 0;
  }
  
  .news__article {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 3rem;
    margin: 0 0 2rem;
  }
  
  .article__img {
    width: 100%;
    margin: 0 0 2.5rem;
  }
  
  .article__content {
    margin: 0;
  }
  
  .news__title {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .news {
    padding: 0 1rem 4rem;
  }
  
  .news__article {
    padding: 2.5rem;
    border-radius: 16px;
  }
  
  .article__title {
    font-size: 2.5rem;
  }
  
  .article__date {
    font-size: 1.3rem;
    padding: 0.6rem 1.2rem;
  }
  
  .article__text {
    font-size: 1.4rem;
  }
  
  .news__title {
    font-size: 3.5rem;
  }
  
  .news__subtitle {
    font-size: 1.6rem;
  }
  
  .control__option {
    height: 4.5rem;
    width: 4.5rem;
    font-size: 1.6rem;
  }
}

@media (max-width: 660px) {
  .article__title {
    font-size: 2.2rem;
  }
  
  .article__date {
    font-size: 1.2rem;
  }
  
  .article__text {
    font-size: 1.3rem;
  }
  
  .news__title {
    font-size: 3rem;
  }
}

@media (max-width: 520px) {
  .news__article {
    padding: 2rem;
    border-radius: 12px;
  }
  
  .article__title {
    font-size: 2rem;
  }
  
  .news__title {
    font-size: 2.5rem;
  }
  
  .control__box {
    gap: 0.8rem;
  }
  
  .control__option {
    height: 4rem;
    width: 4rem;
    font-size: 1.4rem;
  }
}

@media (max-width: 390px) {
  .article__title {
    font-size: 1.8rem;
  }
  
  .article__date {
    font-size: 1.1rem;
  }
  
  .article__text {
    font-size: 1.2rem;
  }
  
  .news__title {
    font-size: 2.2rem;
  }
  
  .news__subtitle {
    font-size: 1.4rem;
  }
}

/* Animation for article entrance */
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

.news__article {
  animation: fadeInUp 0.6s ease-out;
}

.news__article:nth-child(1) { animation-delay: 0.1s; }
.news__article:nth-child(2) { animation-delay: 0.2s; }
.news__article:nth-child(3) { animation-delay: 0.3s; }
.news__article:nth-child(4) { animation-delay: 0.4s; }
.news__article:nth-child(5) { animation-delay: 0.5s; }
</style>

<section class="news">
  <div class="news__header">
    <h2 class="news__title">ÚLTIMAS NOTICIAS</h2>
    <p class="news__subtitle">Mantente informado sobre el CFF Olympia</p>
  </div>
  
  <div class="news__display">
    <!-- Articles will be inserted here -->
  </div>
  
  <div class="news__control">
    <div class="control__box">
      <!-- Pagination will be inserted here -->
    </div>
  </div>
</section>
`;

class AllNewsComp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(allNewsTemplate.content);

    // NEWS LOADER
    const grupoBuscado = new URLSearchParams(window.location.search).get(
      "grupo"
    );
    const numeroGrupos = Math.floor(NOTICIAS.length / 10) + 1;
    const grupoDevuelto =
      numeroGrupos < grupoBuscado ? numeroGrupos : grupoBuscado;

    const shadow = document.querySelector("all_news-component").shadowRoot;
    const newsContainer = shadow.querySelector(".news__display");
    const controlBox = shadow.querySelector(".control__box");

    for (
      let i = 1 + (grupoDevuelto - 1) * 10;
      i <=
      (grupoDevuelto * 10 > NOTICIAS.length
        ? NOTICIAS.length
        : grupoDevuelto * 10);
      i++
    ) {
      let title = NOTICIAS[i - 1].title;
      let imgLink = NOTICIAS[i - 1].imgLink;
      let text = NOTICIAS[i - 1].text;
      let date = NOTICIAS[i - 1].date;
      let imgPos = NOTICIAS[i - 1].imgPosition;

      let mediaHTML = "";

      if (imgLink.endsWith(".mp4")) {
        mediaHTML = `
    <video class="article__img article__video" controls>
      <source src="${imgLink}" type="video/mp4">
      Tu navegador no soporta vídeo.
    </video>`;
      } else {
        mediaHTML = `
    <img class="article__img" src="${imgLink}" style="object-position: ${imgPos};" alt="${title}" />`;
      }


      newsContainer.innerHTML += `
  <div id="news${i}" class="news__article">
    <div class="article__content">
      <h3 class="article__title">${title}</h3>
      <span class="article__date">${date}</span>
      <p class="article__text">${text}</p>
    </div>
    ${mediaHTML}
  </div>`;
    }

    for (let i = 1; i <= numeroGrupos; i++) {
      controlBox.innerHTML += `
      <a 
        href="/pages/noticias.html?grupo=${i}" 
        class="control__option ${
          i == grupoDevuelto ? "control__option--selected" : ""
        }" 
        aria-label="Ir a página ${i}">
        ${i}
      </a>
      `;
    }
  }
}

customElements.define("all_news-component", AllNewsComp);
