var pos = 0;
var correct = 0;
var marks = 0;
var time = 0;
var results, quiz, question, choice, choices, AnswerA, AnswerB, AnswerC, AnswerD, duration;
var correctQuestionsArray = [];


var Questions = [
    ["Who is the author of this work? <br> &nbsp;Romeo And Juliet","Christopher Marlowe", "Jane Austen", "Lewis Carroll", "William Shakespeare","D"],
    ["Who is the author of this work? <br> &nbsp;The Great Gatsby","Ernest Hemingway", "F. Scott Fitzgerald", "Charles Dickens", "J.D. Salinger","B"],
    ["Who is the author of this work? <br> &nbsp;Harry Potter and the Prisoner of Azkaban","Edith Wharton", "J.K. Rowling", "William Golding", "Rudyard Kipling","B"],
    ["Who is the author of this work? <br> &nbsp;The Lord of The Rings","Vladimirovich Nabokov","J.K. Rowling", "J.R.R. Tolkien",  "Roald Dahl","C"],
    ["Who is the author of this work? <br> &nbsp;The Adventures of Huckleberry Finn","Oscar Wilde","Mark Twain", "James Fenimore Cooper", "Jules Verne","B"],
    ["Who is the author of this work? <br> &nbsp;The Dark Room","Micheal Collins","Hisham Matar", "Sarah Waters", "Rachel Seiffert","D"],
    ["Who is the author of this work? <br> &nbsp;The Three Musketeers","Robert L.B. Stevenson","Alexandre Dumas", "Miguel De Cervantes Saaverda", "William Shakespeare","B"],
    ["Who is the author of this work? <br> &nbsp;Moby Dick","William Golding","Herman Melville", "F. Scott Fitzgerald", "Mark Twain","B"],
    ["Who is the author of this work? <br> &nbsp;A Song of Ice and Fire","Sinclair Lewis","James Jones", "George R. R. Martin", "Joseph Heller","C"],
    ["Who is the author of this work? <br> &nbsp;The Good Doctor","Monica Ali","Rohinton Mistry", "Philip Hensher", "Damon Galgut","D"],


];

    function get(x) {
        return document.getElementById(x);
    }


function hideModal() {
    document.getElementById("main-modal").style.cssText = 'display: none;';
    c = 100;
    document.getElementById("quiz").style.cssText = "filter: none; transform: translateY(0); opacity: 1;";
    document.getElementById("results").style.cssText = "filter: none;  transform: translateY(0); opacity: 1;";
    generateQuestion();
}

function generateQuestion() {
    results = get("results");

    if (pos >= Questions.length){
        results.innerHTML = " <h4> You got " + correct + " of " + Questions.length + " questions correct </h4>";
        results.innerHTML += "<h2> Your Score is : " + marks + "</h2>";
        results.innerHTML += "<h4> You took " + duration + " seconds to complete the quiz.</h4>";
        results.innerHTML += "<h4>Correct answers are : </h4> <br> <div class=answers''>";
        for (var i in correctQuestionsArray){
            results.innerHTML += correctQuestionsArray[i] + "<br><br>";
        }
        console.log(correctQuestionsArray.length);
        results.innerHTML += "</div>";
        get("quiz").innerHTML = "Test Completed";
        c="a";
        pos = 0;
        correct = 0;
        return false;
    }

    get("quiz").innerHTML = "Question " + (pos + 1) + " of " + Questions.length;
    question = Questions[pos][0];
    AnswerA = Questions[pos][1];
    AnswerB = Questions[pos][2];
    AnswerC = Questions[pos][3];
    AnswerD = Questions[pos][4];

    results.innerHTML = "<h3>" + question + "</h3>";
    results.innerHTML += "<p><input type='radio' name='choices' value='A' checked='checked'> " + AnswerA + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='B'> " + AnswerB + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='C'> " + AnswerC + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='D'> " + AnswerD + "</p><br>";
    results.innerHTML += "<button onclick='checkAnswer(question)'>Submit Answer</button>";

}
function checkAnswer(correctQuestion) {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice === Questions[pos][5]) {
        correct++;
        marks += 2;
        correctQuestionsArray.push(correctQuestion);
        if (correctQuestionsArray.length >9 ){
            document.getElementById("main").style.cssText = "background: #845EC2";
        }else if (correctQuestionsArray.length > 5 ){
            document.getElementById("main").style.cssText = "background: #D65DB1";
        }
        else if (correctQuestionsArray.length > 3 ){
            document.getElementById("main").style.cssText = "background: #FF6F91";
        }
        else if (correctQuestionsArray.length > 1){
            document.getElementById("main").style.cssText = "background: #FF9671";
        }


    }
    else {
        marks -= 1;
    }
    pos++;

    generateQuestion();
}
function timer001() {

    time = get("time001");

    c = c -  1;
    duration = 100 - c;
    if (c < 100){
        time.innerHTML = c;
    }
    if (c < 1){
        window.clearInterval(update);
        results.innerHTML = " <h4> You got " + correct + " of " + Questions.length + " questions correct </h4>";
        results.innerHTML += "<h2> Your Score is : " + marks + "</h2>";
        results.innerHTML += "<h4>Correct questions are : </h4> <br> <div class=answers''>";
        for (var i in correctQuestionsArray){
            results.innerHTML += correctQuestionsArray[i] + "<br><br>";
        }
        results.innerHTML += "</div>";
        get("quiz").innerHTML = "Test Completed";
        c="a";
        pos = 0;
        correct = 0;
        return false;
    }
}
update = setInterval("timer001()", 1000);


window.addEventListener("load", generateQuestion, false);

function changeBackgroundColor() {
    var div = document.getElementById("time001");

    function getRandomColor() {
        var letters = ['#fffafb','#23a89b','#131515','#2b2c28'];
        var color = '';
        for (var i = 0; i < 6; i++ ) {
            color = letters[Math.floor(Math.random() * 5)];
        }
        return color;
    }

    function changeColor(){
        div.style.backgroundColor= getRandomColor();
    }

    setInterval(changeColor,1000);


}

