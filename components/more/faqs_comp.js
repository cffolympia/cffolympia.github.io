import FAQS from "/api/faqs.mjs";

const faqsTemplate = document.createElement("template");

faqsTemplate.innerHTML = `
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
  
  /* Enhanced FAQ Section */
  .faqs {
    width: 100%;
    margin: 4rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8rem 6rem;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 100%);
  }
  
  /* FAQ Header */
  .faqs__header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 2rem;
    width: 100%;
  }
  
  .faqs__title {
    font-family: var(--title);
    font-size: 6rem;
    font-weight: 800;
    margin: 0 0 1rem;
    background: linear-gradient(135deg, var(--white), var(--mint));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }
  
  .faqs__subtitle {
    font-family: var(--text);
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
  
  /* Enhanced FAQ Question */
  .faqs__question {
    width: 100%;
    max-width: 1000px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 3rem 0rem 3rem;
    margin-bottom: 2rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
  }
  
  .faqs__question::before {
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
  
  .faqs__question:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(138, 243, 232, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  .faqs__question:hover::before {
    opacity: 1;
  }
  
  .faqs__question.active {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(138, 243, 232, 0.3);
  }
  
  .question__toggle {
    position: absolute;
    top: 2.8rem;
    right: 2.6rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 0;
    margin: 0;
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  
  .question__toggle:hover {
    background: rgba(138, 243, 232, 0.2);
    border-color: var(--mint);
    transform: scale(1.1);
  }
  
  .question__toggle.active {
    background: rgba(138, 243, 232, 0.2);
    border-color: var(--mint);
    transform: rotate(180deg);
  }
  
  .question__toggle.active:hover {
    transform: rotate(180deg) scale(1.1);
  }
  
  .question__toggle-icon {
    width: 2rem;
    height: 2rem;
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%)
      hue-rotate(128deg) brightness(98%) contrast(88%);
    transition: all 0.4s ease;
  }
  
  .question__title {
    font-family: var(--text);
    font-weight: 600;
    color: var(--white);
    font-size: 2.2rem;
    line-height: 1.4;
    padding: 0;
    margin: 0 5rem 3rem 0;
    letter-spacing: -0.01em;
  }
  
  .faqs__question.active .question__title {
    color: var(--mint);
  }
  
  .question__answer {
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify;
    margin: 0 0 3rem;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
  }
  
  .question__answer.active {
    max-height: 1000px;
    opacity: 1;
    margin: 0 0 3rem;
  }
  
  .question__answer br {
    height: 1rem;
    line-height: 1rem;
    content: "";
    display: block;
  }

  /* Responsive Design */
  @media (max-width: 920px) {
    .faqs {
      padding: 0 4rem 4rem;
    }
    
    .faqs__title {
      font-size: 5rem;
    }
    
    .faqs__subtitle {
      font-size: 1.8rem;
    }
    
    .question__answer {
      text-align: left;
    }
    
    .faqs__question {
      padding: 2.5rem 2.5rem 0rem 2.5rem;
    }
    
    .question__toggle {
      top: 2.3rem;
      right: 2rem;
      height: 3.5rem;
      width: 3.5rem;
    }
  }
  
  @media (max-width: 740px) {
    .faqs__title {
      font-size: 4rem;
    }
    
    .faqs__subtitle {
      font-size: 1.6rem;
    }
    
    .question__title {
      font-size: 1.9rem;
      line-height: 1.3;
    }
    
    .question__answer {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
  
  @media (max-width: 620px) {
    .faqs__title {
      font-size: 3.5rem;
    }
    
    .question__title {
      font-size: 1.7rem;
      line-height: 1.3;
      margin: 0 4rem 2.5rem 0;
    }
    
    .faqs__question {
      padding: 2rem 2rem 0rem 2rem;
      border-radius: 12px;
    }
    
    .question__toggle {
      top: 1.8rem;
      right: 1.5rem;
      height: 3rem;
      width: 3rem;
    }
    
    .question__toggle-icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  
  @media (max-width: 560px) {
    .faqs {
      padding: 0 2rem 4rem;
    }
    
    .faqs__title {
      font-size: 3rem;
    }
    
    .faqs__subtitle {
      font-size: 1.4rem;
    }
    
    .question__title {
      font-size: 1.6rem;
      line-height: 1.3;
      margin: 0 3.5rem 2rem 0;
    }
    
    .question__answer {
      font-size: 1.3rem;
      line-height: 1.5;
    }
    
    .question__answer.active {
      margin: 0 0 2rem;
    }
  }
  
  @media (max-width: 460px) {
    .faqs {
      padding: 0 1.5rem 3rem;
    }
    
    .faqs__header {
      margin-bottom: 3rem;
    }
    
    .faqs__title {
      font-size: 2.5rem;
    }
    
    .faqs__subtitle {
      font-size: 1.3rem;
    }
    
    .faqs__question {
      padding: 1.8rem 1.8rem 0rem 1.8rem;
      border-radius: 10px;
    }
    
    .question__title {
      font-size: 1.5rem;
      margin: 0 3rem 1.8rem 0;
    }
    
    .question__answer {
      font-size: 1.2rem;
      line-height: 1.4;
    }
    
    .question__toggle {
      top: 1.5rem;
      right: 1.2rem;
      height: 2.8rem;
      width: 2.8rem;
    }
    
    .question__toggle-icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  /* Animation for FAQ items */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .faqs__question {
    animation: fadeInUp 0.6s ease-out;
  }

  .faqs__question:nth-child(1) { animation-delay: 0.1s; }
  .faqs__question:nth-child(2) { animation-delay: 0.2s; }
  .faqs__question:nth-child(3) { animation-delay: 0.3s; }
  .faqs__question:nth-child(4) { animation-delay: 0.4s; }
  .faqs__question:nth-child(5) { animation-delay: 0.5s; }
</style>

<section class="faqs">
  <div class="faqs__header">
    <h2 class="faqs__title">PREGUNTAS FRECUENTES</h2>
    <p class="faqs__subtitle">Encuentra respuestas a las dudas más comunes</p>
  </div>
  
  <!-- FAQ questions will be inserted here -->
</section>
`;

class Faqs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(faqsTemplate.content);

    const shadow = document.querySelector("faqs-component").shadowRoot;
    const faqsContainer = shadow.querySelector(".faqs");

    for (let i = 1; i <= FAQS.length; i++) {
      let question = FAQS[i - 1].question;
      let answer = FAQS[i - 1].answer;
      faqsContainer.innerHTML += `
      <div class="faqs__question">
        <button class="question__toggle question__toggle--${i}" aria-expanded="false">
          <img
            src="/public/img/general/toggle_arrow.png"
            class="question__toggle-icon"
            alt="Pincha aquí para ver la respuesta" />
        </button>
        <h2 class="question__title">${question}</h2>
        <p class="question__answer">${answer}</p>
      </div>`;
    }

    const questions = [...shadow.querySelectorAll(".faqs__question")];
    const answers = [...shadow.querySelectorAll(".question__answer")];
    const toggles = [...shadow.querySelectorAll(".question__toggle")];
    const toggleIcons = [...shadow.querySelectorAll(".question__toggle-icon")];

    for (let i = 0; i < answers.length; i++) {
      // Initialize all answers as hidden
      answers[i].classList.remove("active");
      toggles[i].setAttribute("aria-expanded", "false");

      toggles[i].addEventListener("click", function () {
        const isActive = answers[i].classList.contains("active");

        // Close all other FAQs
        questions.forEach((q, index) => {
          if (index !== i) {
            q.classList.remove("active");
            answers[index].classList.remove("active");
            toggles[index].classList.remove("active");
            toggles[index].setAttribute("aria-expanded", "false");
          }
        });

        // Toggle current FAQ
        if (!isActive) {
          questions[i].classList.add("active");
          answers[i].classList.add("active");
          toggles[i].classList.add("active");
          toggles[i].setAttribute("aria-expanded", "true");
        } else {
          questions[i].classList.remove("active");
          answers[i].classList.remove("active");
          toggles[i].classList.remove("active");
          toggles[i].setAttribute("aria-expanded", "false");
        }
      });
    }
  }
}

customElements.define("faqs-component", Faqs);
