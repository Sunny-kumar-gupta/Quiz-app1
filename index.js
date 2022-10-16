const quizDB = [
    {
        question: "Q1: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans1"
    },
    {
        question: "Q2: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans4"
    },
    {
        question: "Q5: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans1"
    },
    {
        question: "Q6: Which of the following are energy foods?",
        a: "Carbohydrates and fats",
        b: "Proteins and mineral salts",
        c: "Vitamins and minerals",
        d: "Water and roughage",
        ans: "ans1"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let Score = 0;
const loadQuestion = () => {
    const questionlist = quizDB[questionCount];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
        answer = curAnsElem.id;
        }
    })
    return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer== quizDB[questionCount].ans){
        Score++;
    };
    questionCount++;

    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You Scored ${Score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Playagain</button> 
        `;
        showScore.classList.remove('scoreArea');
    }
})