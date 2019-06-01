var pos = 0;
var correct = 0;
var results, quiz, question, choice, choices, chA, chB, chC, chD;

var Questions = [
    ["Who is the author of this work? <br>Romeo And Juliet","Christopher Marlowe", "Jane Austen", "Lewis Carroll", "William Shakespeare","D"],
    ["Who is the author of this work? <br> The Great Gatsby","Ernest Hemingway", "F. Scott Fitzgerald", "Charles Dickens", "J.D. Salinger","B"],
    ["Who is the author of this work? <br> Harry Potter and the Prisoner of Azkaban","Edith Wharton", "J.K. Rowling", "William Golding", "Rudyard Kipling","B"],
    ["Who is the author of this work? <br> The Lord of The Rings","Vladimirovich Nabokov","J.K. Rowling", "J.R.R. Tolkien",  "Roald Dahl","C"],
    ["Who is the author of this work? <br> The Adventures of Huckleberry Finn","Oscar Wilde","Mark Twain", "James Fenimore Cooper", "Jules Verne","B"],
    ["Who is the author of this work? <br> The Dark Room","Micheal Collins","Hisham Matar", "Sarah Waters", "Rachel Seiffert","D"],
    ["Who is the author of this work? <br> The Three Musketeers","Robert L.B. Stevenson","Alexandre Dumas", "Miguel De Cervantes Saaverda", "William Shakespeare","B"],
    ["Who is the author of this work? <br> Moby Dick","William Golding","Herman Melville", "F. Scott Fitzgerald", "Mark Twain","B"],
    ["Who is the author of this work? <br> A Song of Ice and Fire","Sinclair Lewis","James Jones", "George R. R. Martin", "Joseph Heller","C"],
    ["Who is the author of this work? <br> The Good Doctor","Monica Ali","Rohinton Mistry", "Philip Hensher", "Damon Galgut","D"],


];

function get(x) {
    return document.getElementById(x);
}

function generateQuestion() {
    results = get("results");

    if (pos >= Questions.length) {
        results.innerHTML = " <h4> You got " + correct + " of " + Questions.length + " questions correct </h4>";
        get("quiz").innerHTML = "Test Completed";

        pos = 0;
        correct = 0;
        return false;
    }

    get("quiz").innerHTML = "Question " + (pos + 1) + " of " + Questions.length;
    question = Questions[pos][0];
    chA = Questions[pos][1];
    chB = Questions[pos][2];
    chC = Questions[pos][3];
    chD = Questions[pos][4];

    results.innerHTML = "<h3>" + question + "</h3>";
    results.innerHTML += "<p><input type='radio' name='choices' value='A'> " + chA + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='B'> " + chB + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='C'> " + chC + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='D'> " + chD + "</p><br>";
    results.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == Questions[pos][5]) {
        correct++;
    }
    pos++;
    generateQuestion();
}

window.addEventListener("load", generateQuestion, false);
