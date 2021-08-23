$("#start-button").on("click", function() {
    $("#start-screen").hide();
    $("#quiz-questions").show();
    console.log("Quiz has begun");
    displayQuestions();
    countdown();
    enterInitials();
    highScorePage();
});

var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start-button');
var qIndex = 0;
var timer = 75;
var highScore = [];
var hsInitials = {};

function countdown() {
    var timeInterval = setInterval(function(){
        if(timer > 0 && qIndex != 10) {
            timerEl.textContent = timer;
            timer --;
        }
        else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function displayQuestions() {
    //var currentQuestion = questions[qIndex];
    $("#question-title").text(questions[qIndex].title);
    $("#choice1").text(questions[qIndex].choices[0]);
    $("#choice2").text(questions[qIndex].choices[1]);
    $("#choice3").text(questions[qIndex].choices[2]);
    $("#choice4").text(questions[qIndex].choices[3]);

    $(".buttons").on("click", function() {
        if($(this)[0].outerText === questions[qIndex].answer) {
            qIndex++;
            $("#answerConfirmation").text("Correct!");
        }
        else {
            timer = timer - 10;
            qIndex++;
            $("#answerConfirmation").text("Incorrect!")
        };
    
        if(qIndex === 10){
            $("#quiz-questions").hide();
            $("#all-done").show();
            return;
        };

    $("#question-title").text(questions[qIndex].title);
    $("#choice1").text(questions[qIndex].choices[0]);
    $("#choice2").text(questions[qIndex].choices[1]);
    $("#choice3").text(questions[qIndex].choices[2]);
    $("#choice4").text(questions[qIndex].choices[3]);
    });
};

function enterInitials (){
    $("#displayScore").text("Your final score is ") //+ //time);
    $("#submitBtn").on("click", function() {
        var initials = document.getElementById('initialsInput').value;
        hsInitials["initials"] = initials;
        hsInitials["timer"] = timer;
        highScore.push(hsInitials);
        console.log(highScore);
        $("#all-done").hide();
        $("#highScores").show();
    })
};

function highScorePage (){
    $("#goBack").on("click", function() {
        qIndex = 0;
        console.log(qIndex);
        timer = 75;
        hsInitials = {};
        initials = "";
        console.log(hsInitials);
        $("#highScores").hide();
        $("#start-screen").show();
    });

    $("#clearHS").on("click", function() {
        hsInitials = {};
        highScore = [];
        console.log(highScore);
    })
};



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
        choices:["A copy of the HTML file","A programming interface for web documents", "A programming language", "Part of JavaScript"],
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
