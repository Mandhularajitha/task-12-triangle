const quizForm = document.querySelector(".quize-from");
const submitAnswerBtn = document.querySelector("#submit-answer-btn")
const outputE1 = document.querySelector("#output");

const correctAnswers = ["90°","right angle","no","30°","100°"];

function calculatescore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score=score + 1;
            // console.log(score)
        }
        index=index+1;
        // console.log(index)
    }
    // console.log(score);
    outputE1.innerText = "your score is"+ score;

}

submitAnswerBtn.addEventListener('click',calculatescore);


