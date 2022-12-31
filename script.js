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

var timeEl=document.querySelector('#time-left');
var startSection=document.querySelector(".start-section")
var startBtn=document.querySelector("#start")
var questionEl=document.querySelector(".questions")
var questionTitle=document.querySelector(".question-title")
var answersEl=document.querySelector(".answers")
var timeleft=60
var timeinterval;
var currentIndex=0

startBtn.addEventListener("click",function(){
    startSection.classList.add("hide")
    timeEl.textContent=timeleft
    timeinterval=setInterval(() => {
        timeleft--
        timeEl.textContent=timeleft
        if (timeleft <=0){
            endQuiz()
        }
    }, 1000);
    showQuestion()
})

function endQuiz(){}

function showQuestion (){
questionTitle.textContent=questions[currentIndex].title
answersEl.innerHTML=""
for(var i=0;i<questions[currentIndex].choices.length; i++){
    var choiceBtn=document.createElement("button")
    choiceBtn.textContent=questions[currentIndex].choices[i]
    choiceBtn.setAttribute("value",questions[currentIndex].choices[i])
    choiceBtn.onclick=checkAnswers
    answersEl.appendChild(choiceBtn)
}
}
function checkAnswers(){}