const quizData = [
  {
    question: "Wybierz kategorię:",
    options: [
      {
        text: "Codzienna higiena i pielęgnacja",
        icon: "img/quiz-icons/codzienna-higiena-i-pielegnacja.png",
        next: [
          {
            question: "Wybierz rodzaj pielęgnacji:",
            options: [
              {
                text: "Pielęgnacja po zakończeniu leczenia",
                icon: "img/quiz-icons/po-zakonczeniu-leczenia.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Codzienna higiena jamy ustnej",
                icon: "img/quiz-icons/codzienna-higiena-i-pielegnacja.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept A",
                        age: "12+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Pielęgnacja błony śluzowej",
                icon: "img/quiz-icons/pielegnacja-blony-sluzowej.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Pielęgnacja podczas noszenia aparatów ortodontycznych",
                icon: "img/quiz-icons/aparaty-ort.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept A",
                        age: "12+",
                      },
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Profilaktyka i pielęgnacja",
        icon: "img/quiz-icons/profilaktyka-i-pielegnacja.png",
        next: [
          {
            question: "Wybierz rodzaj profilaktyki:",
            options: [
              {
                text: "Próchnica",
                icon: "img/quiz-icons/prochnica.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Wzmocnienie szkliwa",
                icon: "img/quiz-icons/wzmocnienie-szkliwa.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Probiodent KID",
                        age: "3+",
                      },
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Leczenie i pielęgnacja",
        icon: "img/quiz-icons/leczenie-i-pielegnacja.png",
        next: [
          {
            question: "Wybierz problem leczniczy:",
            options: [
              {
                text: "Dziąsła",
                icon: "img/quiz-icons/dziasla.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Żel",
                        icon: "img/quiz-icons/gel.png",
                        product: "Dentosept Pen",
                        age: "2+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Jama ustna",
                icon: "img/quiz-icons/jama ustna.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept 100",
                        age: "6+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Afty",
                icon: "img/quiz-icons/afty.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Żel",
                        icon: "img/quiz-icons/gel.png",
                        product: "Dentosept Pen",
                        age: "2+",
                      },
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept Fast",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Odleżyny protetyczne",
                icon: "img/quiz-icons/olezyny-prot.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Spray",
                        icon: "img/quiz-icons/spray.png",
                        product: "Dentosept A",
                        age: "12+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Paradontoza",
                icon: "img/quiz-icons/paradontoza.png",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        icon: "img/quiz-icons/plyn-do-plukania.png",
                        product: "Dentosept 100",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const productLinks = {
  "Dentosept Fast": "https://efektdentoseptu.pl/dentosept-fast/",
  "Dentosept A": "https://efektdentoseptu.pl/dentosept-a/",
  "Dentosept Complex": "https://efektdentoseptu.pl/dentosept-complex/",
  "Dentosept A mini": "https://efektdentoseptu.pl/dentosept-a-mini/",
  "Dentosept Pen": "https://efektdentoseptu.pl/dentosept-pen/",
};

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");

  function showStep(stepData) {
    quizContainer.innerHTML = "";

    const question = document.createElement("div");
    question.className = "quiz-question";
    question.innerText = stepData.question;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "quiz-options";

    stepData.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "quiz-option";

      // Tworzenie obrazka dla ikony
      if (option.icon) {
        const icon = document.createElement("img");
        icon.src = option.icon;
        icon.alt = option.text;
        icon.className = "quiz-icon"; // Stylizacja ikonki
        button.appendChild(icon);
      }

      // Tekst opcji
      const textSpan = document.createElement("span");
      textSpan.innerText = option.text;
      button.appendChild(textSpan);

      button.addEventListener("click", () => {
        if (option.next) {
          showStep(option.next[0]);
        } else {
          showResult(option);
        }
      });
      optionsContainer.appendChild(button);
    });

    quizContainer.appendChild(question);
    quizContainer.appendChild(optionsContainer);
  }

  function showResult(option) {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `Polecamy: <b>${option.product}</b> (dla wieku: ${option.age})`;

    const linkButton = document.createElement("button");
    linkButton.innerText = "Więcej informacji";
    linkButton.addEventListener("click", () => {
      window.location.href = productLinks[option.product];
    });

    resultContainer.appendChild(linkButton);
  }

  showStep(quizData[0]);
});
