var timeDisplay = document.querySelector("#timeDis");
var startEl = document.querySelector("#start");
var q1But = document.querySelectorAll(".q1buttons");
var q2But = document.querySelectorAll(".q2buttons");
var q3But = document.querySelectorAll(".q3buttons");
var q4But = document.querySelectorAll(".q4buttons");
var q5But = document.querySelectorAll(".q5buttons");
var q6But = document.querySelectorAll(".q6buttons");
var q7But = document.querySelectorAll(".q7buttons");
var q8But = document.querySelectorAll(".q8buttons");
var q9But = document.querySelectorAll(".q9buttons");
var q10But = document.querySelectorAll(".q10buttons");



var startUpPage =document.getElementById("introPage");
var q1Page = document.getElementById("question1");
var q2Page = document.getElementById("question2");
var q3Page = document.getElementById("question3");
var q4Page = document.getElementById("question4");
var q5Page = document.getElementById("question5");
var q6Page = document.getElementById("question6");
var q7Page = document.getElementById("question7");
var q8Page = document.getElementById("question8");
var q9Page = document.getElementById("question9");
var q10Page = document.getElementById("question10");
var lastPage = document.getElementById("finished");
var scoreEl = document.getElementById("totalScore");

var time = 120;
var score = 0;
var timeTaken = 0;

function displayTime() {
    timeDisplay.innerHTML = time - timeTaken;
    scoreEl.innerHTML = score;
}

function startTimer() {
   
interval = setInterval(function() {
    if(time > 0) {
          timeTaken++;
          displayTime();
    } else {
       alert("Time is up!");
       endGame();
    }
}, 1000);
}

function endGame() {
    clearInterval(interval);
    timeDisplay.innerHTML = 0;
    q1Page.style.display = "none";
    q2Page.style.display = "none";
    q3Page.style.display = "none";
    q4Page.style.display = "none";
    q5Page.style.display = "none";
    q6Page.style.display = "none";
    q7Page.style.display = "none";
    q8Page.style.display = "none";
    q9Page.style.display = "none";
    q10Page.style.display = "none";
    lastPage.style.display = "block";
    return;

}



startEl.addEventListener("click", function(event) {
    startUpPage.style.display = "none";
    q1Page.style.display = "block";
    startTimer();
});

q1But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q1Page.style.display = "none";
        q2Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);

        if(choice == "q1") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q2But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q2Page.style.display = "none";
        q3Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);
        

        if(choice == "q2") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q3But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q3Page.style.display = "none";
        q4Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);

        if(choice == "q3") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q4But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q4Page.style.display = "none";
        q5Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);

        if(choice == "q4") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q5But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q5Page.style.display = "none";
        q6Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q5") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q6But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q6Page.style.display = "none";
        q7Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q6") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q7But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q7Page.style.display = "none";
        q8Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q7") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q8But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q8Page.style.display = "none";
        q9Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q8") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q9But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        q9Page.style.display = "none";
        q10Page.style.display = "block";
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q9") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }
    });
});

q10But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
        endGame();
        var choice = event.target.id;
        console.log(choice);


        if(choice == "q10") {
            score= score + 10;
            console.log(score);
        } else {
            time = time - 5;
            console.log(time);
        }

        scoreEl.innerHTML = score;
    });
});

var submitEl = document.getElementById("submitButton");

function saveScores(){
  var initial = document.getElementById("initials").value;
  event.preventDefault();
  
  if (initial==""){
       alert("You need to fill in your Initials!");
       return;
   }

  console.log(initial);
  var highScore = [];
  

  const player = {
      Initials: initial,
      Score: score
  };
  highScore.push(player);
 localStorage.setItem("highScore", JSON.stringify(highScore));

}

submitEl.onclick = saveScores;
