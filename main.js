import { quizArray } from './array.js';
const userAnswer = document.querySelectorAll('.answer'); //grab all input values from the user
const questionText = document.getElementById('question'); //grab its html tags text content to change it with innerText
const a_text = document.getElementById('a_text'); //Grab all the clickable circles with dots
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const submitButton = document.getElementById('submit'); //Grab submit button' clicks
let questionsCounter = 0; //keeps track of the current question number
let score = 0; //keeps track of the total number of questions currently answered

function deselectAnswers(){ //false means undo: erase all answered checkoxes
    userAnswer.forEach(checkbox => 
        checkbox.checked = false) }
function reloadPage(){ //download next slide function
    deselectAnswers(); //invoke function erasing all checkboxes answered
    const currentQuestionNumber = quizArray[questionsCounter]; // variable grabs current question number
    questionText.innerText = currentQuestionNumber.question; 
    a_text.innerText = currentQuestionNumber.a;
    b_text.innerText = currentQuestionNumber.b;
    c_text.innerText = currentQuestionNumber.c;
} reloadPage();

//wrapping user's input into function
function getSelected(){  
    let answerPicked;
    userAnswer.forEach(checkbox => { 
        if(checkbox.checked){
            answerPicked = checkbox.id; 
        }
    });
    return answerPicked; //result of user's choise
}

//adding event listener to submit button
submitButton.addEventListener('click', () => { 
    const answer = getSelected(); //assigning to variable the value from returned user's answer
    if(answer){
        if(answer === quizArray[questionsCounter].correct){
            score = score +1; //checking returned user's answer 
        }
        questionsCounter = questionsCounter +1;
        if(questionsCounter < quizArray.length){
            reloadPage();
        }else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizArray.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});