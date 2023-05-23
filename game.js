var вопросы = [
    {
      текст: "Что означает аббревиатура QA?",
      варианты: ["1. Quality Assurance", "2. Quality Analysis", "3. Questionable Answers"],
      правильныйОтвет: 1
    },
    {
      текст: "Что такое юнит-тестирование?",
      варианты: ["1. Тестирование отдельных модулей программы", "2. Тестирование пользовательского интерфейса", "3. Тестирование производительности программы"],
      правильныйОтвет: 1
    },
    {
        текст: "Что такое smoke-тестирование?",
        варианты: ["1. Тестирование на прочность и надежность", "2. Тестирование на производительность", "3. Проверка основных функций программы после ее изменений"],
        правильныйОтвет: "3"
    },
    {
        текст: "Что означает аббревиатура UI в тестировании?",
        варианты: ["1. User Instruction", "2. User Interface", "3. User Investigation"],
        правильныйОтвет: "2"
    },
    {
        текст: "Что такое методология разработки ПО?",
        варианты: ["1. Совокупность принципов и подходов к разработке программного обеспечения", "2. Программа для автоматизации тестирования", "3. Формальный язык описания требований"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что означает аббревиатура API?",
        варианты: ["1. Application Programming Interface", "2. Automated Performance Index", "3. Algorithmic Programming Interface"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что такое регрессионное тестирование?",
        варианты: ["1. Тестирование программного обеспечения на разных операционных системах", "2. Проверка функциональности программы после внесения изменений", "3. Тестирование производительности программы"],
        правильныйОтвет: "2"
    },
    {
        текст: "Что означает аббревиатура UX?",
        варианты: ["1. User Experience", "2. User Extension", "3. User Experiment"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что такое интеграционное тестирование?",
        варианты: ["1. Тестирование производительности программы", "2. Проверка взаимодействия различных компонентов программы", "3. Тестирование пользовательского интерфейса"],
        правильныйОтвет: "2"
    },
    {
        текст: "Что такое CI/CD в контексте разработки ПО?",
        варианты: ["1. Continuous Improvement/Continuous Delivery", "2. Customer Interaction/Customer Development", "3. Code Inspection/Code Deployment"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что означает аббревиатура SQL?",
        варианты: ["1. Structured Query Language", "2. Simple Query Logic", "3. System Query Level"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что такое тестовый план?",
        варианты: ["1. Документ, описывающий стратегию и подходы к тестированию", "2. Спецификация требований к программному обеспечению", "3. Кодировка функциональности программы"],
        правильныйОтвет: "1"
    },
    {
        текст: "Что означает аббревиатура GUI?",
        варианты: ["1. General User Interface", "2. Graphic User Integration", "3. Graphical User Interface"],
        правильныйОтвет: "3"
    },
    {
        текст: "Что такое функциональное тестирование?",
        варианты: ["1. Тестирование производительности программы", "2. Проверка соответствия программы требованиям", "3. Тестирование интерфейсов программы"],
        правильныйОтвет: "2"
    },
    {
      текст: "Что означает термин 'баг' в контексте QA?",
      варианты: ["1. Ошибка или дефект в программе", "2. Пользовательское требование", "3. Отчет о тестировании"],
      правильныйОтвет: 1
    }
  ];
  
  var gameContainer = document.getElementById("game-container");
  var scoreElement = document.getElementById("score");
  var restartButton = document.getElementById("restart");
  var score = 5;
  var bugCount = 5;
  
  // Функция для создания случайного вопроса
  function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * вопросы.length);
    return вопросы[randomIndex];
  }
  
  // Функция для обработки нажатия на жука
  function onBugClick(event) {
    var selectedBug = event.target;
    var question = getRandomQuestion();
    var answer = prompt(question.текст + "\n\n" + question.варианты.join("\n"));
  
    if (answer === String(question.правильныйОтвет)) {
      selectedBug.remove();
      score++;
    } else {
      createBug();
      bugCount++;
    }
  
    scoreElement.textContent = "Жуки: " + score;
  
    if (score === 10) {
      alert("Вы победили!");
      restartButton.classList.remove("hidden");
    } else if (bugCount === 10) {
      alert("Вы проиграли!");
      restartButton.classList.remove("hidden");
    }
  }
  
  // Функция для создания жука
  function createBug() {
    var bug = document.createElement("div");
    bug.classList.add("bug");
  
    for (var i = 1; i <= 6; i++) {
      var leg = document.createElement("div");
      leg.classList.add("bug-leg");
      bug.appendChild(leg);
      var angle = i * 60;
      leg.style.transform = "rotate(" + angle + "deg)";
    }
  
    bug.style.left = Math.random() * 480 + "px";
    bug.style.top = Math.random() * 480 + "px";
    bug.addEventListener("click", onBugClick);
    gameContainer.appendChild(bug);
    bugCount--;
  }
  
  // Функция для перезапуска игры
  function restartGame() {
    gameContainer.innerHTML = "";
    score = 5;
    bugCount = 5;
    scoreElement.textContent = "Жуки: " + score;
    restartButton.classList.add("hidden");
    for (var i = 0; i < score; i++) {
      createBug();
    }
  }
  
  // Создание жуков
  for (var i = 0; i < score; i++) {
    createBug();
  }
  
  restartButton.addEventListener("click", restartGame);