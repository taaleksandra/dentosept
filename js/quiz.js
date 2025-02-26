const quizData = [
  {
    question: "Wybierz kategorię:",
    options: [
      {
        text: "Codzienna higiena i pielęgnacja",
        next: [
          {
            question: "Wybierz rodzaj pielęgnacji:",
            options: [
              {
                text: "Pielęgnacja po zakończeniu leczenia",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                    ],
                  },
                ],
              },
              {
                text: "Codzienna higiena jamy ustnej",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      { text: "Spray", product: "Dentosept A", age: "12+" },
                    ],
                  },
                ],
              },
              {
                text: "Pielęgnacja błony śluzowej",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                      {
                        text: "Płyn do płukania",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Pielęgnacja podczas noszenia aparatów ortodontycznych",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      { text: "Spray", product: "Dentosept A", age: "12+" },
                      {
                        text: "Płyn do płukania",
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
        next: [
          {
            question: "Wybierz rodzaj profilaktyki:",
            options: [
              {
                text: "Próchnica",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        product: "Dentosept Complex",
                        age: "6+",
                      },
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                    ],
                  },
                ],
              },
              {
                text: "Wzmocnienie szkliwa",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Spray",
                        product: "Dentosept Probiodent KID",
                        age: "3+",
                      },
                      {
                        text: "Płyn do płukania",
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
        next: [
          {
            question: "Wybierz problem leczniczy:",
            options: [
              {
                text: "Dziąsła",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      { text: "Żel", product: "Dentosept Pen", age: "2+" },
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                    ],
                  },
                ],
              },
              {
                text: "Jama ustna",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
                        product: "Dentosept 100",
                        age: "6+",
                      },
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                    ],
                  },
                ],
              },
              {
                text: "Afty",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      { text: "Żel", product: "Dentosept Pen", age: "2+" },
                      { text: "Spray", product: "Dentosept Fast", age: "6+" },
                    ],
                  },
                ],
              },
              {
                text: "Odleżyny protetyczne",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      { text: "Spray", product: "Dentosept A", age: "12+" },
                    ],
                  },
                ],
              },
              {
                text: "Paradontoza",
                next: [
                  {
                    question: "Wybierz typ aplikatora:",
                    options: [
                      {
                        text: "Płyn do płukania",
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
      button.innerText = option.text;
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
