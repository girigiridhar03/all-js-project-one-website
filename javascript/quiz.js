const quizQuestions = [
    {
       question:"The Centre for Cellular and Molecular Biology is situated at",
       answer:[
           {text:"Patna" , correct: false},
           {text:"Jaipur" , correct: false},
           {text:"Hyderabad" , correct: true},
           {text:"New Delhi" , correct: false},
       ]
   },
    {
       question:"Where is the Railway Staff College located?",
       answer:[
           {text:"Pune" , correct: false},
           {text:"Vadodara" , correct: true},
           {text:"Allahabad" , correct: false},
           {text:"Delhi" , correct: false},
       ]
   },
    {
       question:" Which of the following is used in pencils?",
       answer:[
           {text:"Graphite" , correct: true},
           {text:"Silicon" , correct: false},
           {text:"Charcoal" , correct: false},
           {text:"Phosphorous" , correct: false},
       ]
   },
    {
       question:"Chemical formula for water is",
       answer:[
           {text:"NaAlO2" , correct: false},
           {text:"Al2O3" , correct: false},
           {text:"CaSiO3" , correct: false},
           {text:"H2O" , correct: true},
       ]
   },
    {
       question:"The gas usually filled in the electric bulb is",
       answer:[
           {text:"oxygen" , correct: false},
           {text:"Carbon dioxide" , correct: false},
           {text:"nitrogen" , correct: true},
           {text:"hydrogen" , correct: false},
       ]
   }
];

const ques = document.querySelector(".ques");
const answerButtons = document.querySelector(".answer-buttons");
const nxtBtn = document.querySelector(".nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;

     nxtBtn.innerHTML = "Next";

     showQuestion();
}
function reset(){
     nxtBtn.style.display = "none";

     while(answerButtons.firstChild){
         answerButtons.removeChild(answerButtons.firstChild);
     }
}

function showQuestion(){
    reset()
     let currentQuestion = quizQuestions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;

     ques.innerHTML = `${questionNo}.${currentQuestion.question}?`;

     currentQuestion.answer.forEach(answers=>{
         const buttons = document.createElement("button");
         buttons.innerHTML = answers.text;
         answerButtons.append(buttons);
         if(answers.correct){
             buttons.dataset.correct = answers.correct;
         }
         buttons.addEventListener("click",selectAns);
     });

     
}

function selectAns(e){
     let selectBtn = e.target;
     let correctBtn = selectBtn.dataset.correct === "true";

     if(correctBtn){
         selectBtn.style.background = "rgb(62, 253, 62)";
         selectBtn.style.color = "black";
         selectBtn.style.fontWeight = "bolder";
         score++
     }
     else{
        selectBtn.style.background = "rgb(245, 99, 99)";
        selectBtn.style.color = "black";
        selectBtn.style.fontWeight = "bolder";
     }
     
     Array.from(answerButtons.children).forEach(button=>{
         if(button.dataset.correct == "true"){
            button.style.background = "rgb(62, 253, 62)";
            button.style.color = "black";
            button.style.fontWeight = "bolder";
         }
         button.disabled = true
     })
     nxtBtn.style.display = "block"
}
function showScore(){
     reset();
     ques.innerHTML = `Your Score ${score} Out Of ${currentQuestionIndex} !`;
     nxtBtn.style.display = "block";
     nxtBtn.innerHTML = "Play Again";

}
function handleQuestions(){
     currentQuestionIndex++;
     if(currentQuestionIndex < quizQuestions.length){
         showQuestion();
     }
     else{
        showScore()
     }
}
nxtBtn.addEventListener("click",()=>{
     if(currentQuestionIndex < quizQuestions.length){
        handleQuestions();
     }
     else{
        startQuiz()
     }
})


startQuiz();