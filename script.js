const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    answer: "Harper Lee",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    answer: "Oxygen",
  },
];

var progressbar = document.getElementById("progress-border");
var questiontext = document.getElementById("question-text");
var optionsmain = document.getElementById("options-main-div");
var quizcounter = document.getElementById("question-count");
var cardheader = document.querySelector('.header');
var cardbody = document.querySelector('.quiz-body');
var username = document.getElementById('username');
var forname = document.getElementById('forname');
var error = document.getElementById('error');
var card = document.getElementById('card-done');
var score = document.getElementById('score');
var resultbody = document.querySelector('.Result-body');
var model = document.querySelector('.modal');
var questionindex = 0;
var getscore = 1;

function submitform() {
    if(username.value !== ""){
        questionstart();
        model.style.display = "none";
        card.classList.add('active');
        username.innerHTML = forname.value;
    }else{
        error.style.display = "block";
        setTimeout(()=>{
            error.style.display = "none";
        }, 1000)
    }
}
function questionstart() {
  if (questionindex < quizQuestions.length) {
    var currentquiz = quizQuestions[questionindex];
    questiontext.innerHTML = `${questionindex + 1}. ${currentquiz.question}`;
    optionsmain.innerHTML = "";
    currentquiz.options.forEach((option) => {
      optionsmain.innerHTML += `<button class="options w-100 text-start p-2 rounded-2 border fs-5" style="background-color: #cde5ff; border-color: #5372f0 !important;" onclick="checkanswer('${option}', '${currentquiz.answer}')">${option}</button>`;
    });
    quizcounter.innerHTML = `${questionindex + 1} / ${quizQuestions.length}`;
  }else{
    showscore();
  }
}

function nextQuestion(){
    questionindex++;
    questionstart();
    var percentage =  ((questionindex) / quizQuestions.length) * 100;
    progressbar.style.width = `calc(2px + ${percentage}%)`;

}
function checkanswer(useranswer, correctanswer) {
    if (useranswer === correctanswer) {
        getscore++;
    }
    nextQuestion();
  }
function showscore(){
    cardheader.remove();
    cardbody.remove();
    resultbody.classList.add('active');
    score.innerHTML = ` Your score is ${getscore} out of ${quizQuestions.length}`
}
