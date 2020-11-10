var timeDisplay = document.querySelector("#timeDis");
var startEl = document.querySelector("#start");
var q1But = document.querySelectorAll(".q1buttons");


var q2Correct = document.querySelector("#q2");
var q3Correct = document.querySelector("#q3");
var q4Correct = document.querySelector("#q4");
var q5Correct = document.querySelector("#q5");
var q6Correct = document.querySelector("#q6");
var q7Correct = document.querySelector("#q7");
var q8Correct = document.querySelector("#q8");
var q1Correct = document.querySelector("#q9");
var q2Correct = document.querySelector("#q10");

var startUpPage =document.getElementById("introPage");
var q1Page = document.getElementById("question1");
var q2Page = document.getElementById("question2")

var score = 0;

startEl.addEventListener("click", function(event) {
    startUpPage.style.display = "none";
    q1Page.style.display = "block";
    // document.getElementById
    console.log(score);
});

q1But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q1Page.style.display = "none";
        q2Page.style.display = "block";
    });
});