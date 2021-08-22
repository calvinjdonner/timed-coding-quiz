$("#start-button").on("click", function() {
    $("#start-screen").hide();
    $("#quiz-questions").show();
    console.log("Quiz has begun");
    displayQuestions();
});

var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start-button');
var qIndex = 0;
var timer = 75;

function countdown() {
    var timeInterval = setInterval(function(){
        if(timer > 1) {
            timerEl.textContent = timer;
            timer --;
        }
        else {
            clearInterval(timeInterval);
        }
    }, 1000);
    console.log(timer)
}


function displayQuestions() {
    var currentQuestion = questions[qIndex];
    $("#question-title").text(questions[qIndex].title);
    $("#choice1").text(questions[qIndex].choices[0]);
    $("#choice2").text(questions[qIndex].choices[1]);
    $("#choice3").text(questions[qIndex].choices[2]);
    $("#choice4").text(questions[qIndex].choices[3]);
    console.log(questions[qIndex].choices[0]);
    console.log(questions[qIndex].choices[1]);
    console.log(questions[qIndex].choices[2]);
    console.log(questions[qIndex].choices[3]);

    $(".buttons").on("click", function() {
        console.log($(this)[0].outerText);
        if($(this)[0].outerText === questions[qIndex].answer) {
            qIndex++
        }
        else {
            timer = timer - 10;
            qIndex++;
        };
    $("#question-title").text(questions[qIndex].title);
    $("#choice1").text(questions[qIndex].choices[0]);
    $("#choice2").text(questions[qIndex].choices[1]);
    $("#choice3").text(questions[qIndex].choices[2]);
    $("#choice4").text(questions[qIndex].choices[3]);
        
    });
}

//object array for questions and answers
var questions = [
    {   title:"Bootstrap is a popular web API for which coding language?",
        choices:["CSS","Java", "JavaScript", "All of the above"],
        answer:"CSS"
    },

    {   title:"Which element is used to create a numbered list?",
        choices:["<ul></ul?","<li></li>", "<ol></ol>", "<body></body>"],
        answer:"<ol></ol>"
    },
    {   title:"This command is used to create a file in Git",
        choices:["cd ..","mkdir", "sudo", "touch"],
        answer:"touch"
    },
    {   title:"How do you create a comment in a CSS file?",
        choices:["/*comment*/","///comment", "/!comment!/", "~comment~"],
        answer:"/*comment*/"
    },
    {   title:"How do you switch between git branches?",
        choices:["git 'branch'","git remote 'branch'", "git checkin 'branch'", "git checkout 'branch'"],
        answer:"git checkout 'branch'"
    },
    {   title:"Where would you find info about a project with a repo?",
        choices:["ReadMe","Google", "HTML file", "All of the above"],
        answer:"ReadMe"
    },
    {   title:"What is the DOM?",
        choices:["A copy of the HTML file","A programming interfacec for web documents", "A programming language", "Part of JavaScript"],
        answer:"A programming interfacec for web documents"
    },
    {   title:"Which of the following is true about class selectors?",
        choices:["Can only be used once","Is the same as an ID", "It can be used to identify more than one element", "The name is preceded by a hash character ('#')"],
        answer:"It can be used to identify more than one element"
    },
    {   title:"How do you display an item in the console?",
        choices:["log.console()","console.log()", "print()", "console.log"],
        answer:"console.log()"
    },
    {   title:"Inside which HTML element do we put our JavaScript?",
        choices:["<head>","<body>", "<html>", "<script>"],
        answer:"<script>"
    },
];


//questions.title questions.choice[i] if questions.answer === answer.choice[2]

//display

// questions.title questions.choice[i]
// if(questions.answer === answer.choice[2]){
//     //display correct message
// }
// else {
//     //display wrong message
// }

//log score is just the remaining time when all questions are complete

//save scores into local storage for high score list
//timer = integer (needs to be global), set interval to deduct 1 from total integer at 1 sec intervals
//if statement to deduct 5 secs if answered incorrectly
//var high scores from local storage array and this display it via HTML HS page
//local storage.set item set to value
//if statement to display "correct" or "wrong" after answer choice is selected

//high scores array of objects (high score and initials)
//save empty array after clear high score button is pushed, use var to clear high scores

startBtn.onclick = countdown;