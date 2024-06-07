const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyphen Tool Markup Language"],
      correctAnswer: 0
    },
    {
      question: "Which of the following HTML Elements is used for making any text bold ?",
      options: ["<p>", "<p>", "<li>", "<b>"],
      correctAnswer: 3
    },
    {
      question: "Which of the following characters indicate closing of a tag?",
      options: [".", "/", "//","!"],
      correctAnswer: 1
    },
    {
      question: "Which of the following tags is used to add a line-break in HTML?",
      options: ["<br>", "<break>", "</break>","</br>"],
      correctAnswer: 0
    },
    {
        question: "Which of the following is the correct syntax to add the external stylesheet in CSS?",
        options: ["<style src = quiz.css>", "<style src = ''quiz.css''>", "<stylesheet> quiz.css </stylesheet>", "<link rel=''stylesheet'' type=''quiz/css'' href=''quiz.css''>"],
        correctAnswer: 3
    },
    {
        question: "Which of the below CSS class is used to change the text color of CSS ?",
        options: ["background-color", "color", "color-background", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which of the below is the correct syntax to put a line over text in CSS?",
        options: ["text-decoration: line", "text-decoration: none", "text-decoration: overline", "text-decoration: underline"],
        correctAnswer: 2
    },
    {
        question: "Which of the below CSS properties represent the order of flex items in the grid container ?",
        options: ["order", "float", "overflow", "All of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax for referring to an external script called \'gfg.js\'?",
        options: ["<script name=''gfg.js''>", "<script href=''gfg.j''>", "<script src=''gfg.j''>"],
        correctAnswer: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<src>", "<script>"],
        correctAnswer: 3
    },
    {
        question: "Which of the following method can also be used to create objects in javascript",
        options: ["new keyword", "object.create()", "create.object()", "Both a and b"],
        correctAnswer: 3
    },
    {
        question: "How is document type initialized in HTML5?",
        options: ["</DOCTYPE HTML>", "</DOCTYPE>", "<!DOCTYPE HTML>","</DOCTYPE html>"],
        correctAnswer: 2
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextBtn = document.getElementById('nextBtn');
  const resultElement = document.getElementById('result');
  
  function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
  
    for (let i = 0; i < q.options.length; i++) {
      const option = q.options[i];
      const button = document.createElement('button');
      button.textContent = option;
      button.className = 'button';
      button.onclick = () => checkAnswer(i);
      optionsElement.appendChild(button);
    }
  
    nextBtn.style.display = 'none';
  }
  
  function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.correctAnswer) {
      score++;
      optionsElement.childNodes[choice].classList.add('correct');
    } else {
      optionsElement.childNodes[choice].classList.add('wrong');
      optionsElement.childNodes[q.correctAnswer].classList.add('correct');
    }
  
    for (let i = 0; i < optionsElement.childNodes.length; i++) {
      optionsElement.childNodes[i].disabled = true;
    }
  
    if (currentQuestion < questions.length - 1) {
      nextBtn.style.display = 'block';
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = '';
    optionsElement.textContent = '';
    nextBtn.style.display = 'none';
    resultElement.textContent = `Your score: ${score}/${questions.length}`;
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    displayQuestion();
  };
  
  displayQuestion();
