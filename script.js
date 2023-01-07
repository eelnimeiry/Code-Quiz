// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

var timeEl = document.querySelector('#time-left');
var startSection = document.querySelector(".start-section")
var startBtn = document.querySelector("#start")
var questionEl = document.querySelector(".questions")
var questionTitle = document.querySelector(".question-title")
var answersEl = document.querySelector(".answers")
var rightWrongEl = document.getElementById("rightwrong")
var endQuizEl= document.getElementById("endquiz")
var saveuserbutton=document.getElementById("saveuser")
var timeleft = 60
var timeinterval;
var currentIndex = 0
var score = 0
endQuizEl.style.display="none"
startBtn.addEventListener("click", function () {
  startSection.classList.add("hide")
  createOptions()
  timeEl.textContent = timeleft
  timeinterval = setInterval(() => {
    timeleft--
    timeEl.textContent = timeleft
    if (timeleft <= 0) {
      endQuiz()
    }
  }, 1000);
  showQuestion()
})

function createOptions() {
  answersEl.innerHTML = ""
  for (var i = 0; i < 4; i++) {
    var choiceBtn = document.createElement("button")
    choiceBtn.classList.add("options")
    choiceBtn.textContent = "Option"
    choiceBtn.setAttribute("value", questions[currentIndex].choices[i])
    choiceBtn.onclick = checkAnswers
    answersEl.appendChild(choiceBtn)
  }
}

function endQuiz() { 
questionEl.style.display = "none"
clearInterval(timeinterval)
endQuizEl.style.display="block"
document.getElementById("score").textContent = "Your Final score  : "+score+timeleft
}

function showQuestion() {
  questionTitle.textContent = questions[currentIndex].title
  var optionsList = document.querySelectorAll(".options")
  for (var i = 0; i < questions[currentIndex].choices.length; i++) {

    optionsList[i].textContent = questions[currentIndex].choices[i]
    optionsList[i].setAttribute("value", questions[currentIndex].choices[i])

  }
}



function checkAnswers() { 
  var text = this.getAttribute("value")
  console.log(text)
  if(text===questions[currentIndex].answer){
    score+=10
    rightWrongEl.textContent ="Correct!!"
  }else{
    timeleft-=5
    rightWrongEl.textContent ="incorrect!!" 
  }
  if(currentIndex<questions.length-1){
    currentIndex++
    showQuestion()
  }else {
    endQuiz()
  } 
  
}
saveuserbutton.addEventListener("click",function(){
  var user = document.getElementById("username").value
  var storedScore = JSON.parse(localStorage.getItem("codequiz")) || []
  storedScore.push({
    user:user,
    score: score+timeleft
  })
  localStorage.setItem("codequiz",JSON.stringify(storedScore))
  endQuizEl.style.display="none"
  
})