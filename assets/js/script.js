var questions = [
    {
        title:"What is the correct Javascript syntax to write 'Hello World'?",
        choices: ["System.out.printin('Hello World')", "printing ('Hello World')","document.write('Hello World'), respond.write('Hello World')"],
        answer: "document.write('Hello World')"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What are variables used for in Javascript Programs?",
        choices: ["Storing numbers, dates ,or other values", "varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
        answer: "Storing numbers,dates, or other values"
    },
    {
        title: "Which of the following are capabilities of functions in JavaScript?",
        choices: ["Return a value", "Accept parameters and Return value", "Accept parameters", "None of the above"],
        answer: "Accept parameters"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
// Declared variables
var score = 0; 
var questionIndex = 0;

//begin working code
var timer = document.querySelector("#timer");
var begin = document.querySelector("#beginTime");
var questionnaire = document.querySelector("#questionnaire");
var wrapper = document.querySelector("#wrapper");

//seconds left is 15 seconds per question
var seconds = 77;
//holds interval time
var interval = 0;
//holds penalty time
var penalty = 10
//creates new element
var ulCreate = document.createElement("ul");


//button to trigger timer
begin.addEventListener("click", function () {
    
    if (interval === 0) {
        interval = setInterval(function () {
            seconds--;
            timer.textContent = "Time: " + seconds;

            if (seconds <= 0) {
                clearInterval(interval);
                allDone();
                timer.textContent = "Time's up!";
            }

        
        }, 1000);
    }
    render(questionIndex);

});

function render(questionIndex) {
    questionnaire.innerHTML = "";
    ulCreate.innerHTML = "";
    //loop all the info in array
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionnaire.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var itemList = document.createElement("li");
        itemList.textContent = newItem;
        questionnaire.appendChild(ulCreate);
        ulCreate.appendChild(itemList);
        itemList.addEventListener("click", (compare));


    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var created = document.createElement("div");
        created.setAttribute("id", "created");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            created.textContent = "Correct the answer is: " + questions[questionIndex].answer;

        } else {
            //Will deduct -5 second off seconds left
            seconds = seconds - penalty;
            created.textContent = "Wrong The correct answer if: " + questions[questionIndex].answer;
        }
    }

    //questionIndex determines what question user on
    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        created.textContent = "End of quiz!" + "" + "You got " + score + "/" + questions.length + "Correct!";
    } else {
        render(questionIndex);
    }
    questionnaire.appendChild(created);


}

function allDone() {
    questionnaire.innerHTML ="";
    timer.inmnerHTML ="";
    //header
    var header = document.createElement("h1");
    header.setAttribute("id", "h1");
    header.textContent = "Finish!"

    questionnaire.appendChild(h1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionnaire.appendChild(createP);


    if (seconds >= 0) {
        var remainingTime = seconds;
        var paragraph = document.createElement("p");
        clearInterval(interval);
        paragraph.textContent = "Your final score is:" + remainingTime;

        questionnaire.appendChild(paragraph);

    }

    var labelCreated = document.createElement("label");
    labelCreated.setAttribute("id", "labelCreated");
    labelCreated.textContent = "Enter your initials:";

    questionnaire.appendChild(labelCreated);

     
    var inputCreated = document.createElement("input");
    inputCreated.setAttribute("type", "text");
    inputCreated.setAttribute("id", "initials");
    inputCreated.textContent = "";

    questionnaire.appendChild(inputCreated);

    var submitCreated = document.createElement("button");
    submitCreated.setAttribute("type", "Submit");
    submitCreated.setAttribute("id", "Submit");
    submitCreated.textContent = "Submit";

    questionnaire.appendChild(submitCreated);

    submitCreated.addEventListener("click", function () {
        var initials = inputCreated.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var scoreFinal = {
                initials: initials,
                score: remainingTime
            }
            console.log(scoreFinal);
            var scores = localStorage.getItem("scores");
            if (scores === null) {
                scores = [];
            } else {
                scores = JSON.parse(scores);
            }
            scores.push(scoreFinal);
            var scoreNew = JSON.parse.strintify(scores);
            localStorage.setItem("scores". scoreNew);
            //travels to final pagel
            window.location.replace("");
        }
    });
}
//var startQuiz = function () {
  //  var intervalID = setInterval(displayCountdown, 1000);
//
  //  setTimeout (() => {
    //    clearInterval(intervalID);



    //}, (1000 * (countdownValue + 1)));
//}





//function displayCountdown() {
   // if(countdownValue >= 0) {
     //   countdown.innerHTML = countdownValue;
       // countdownValue--;
    //}else{
      //  return 0;
    //}
//}
///
//var answerQuizHandler = function (e) {


    //var isCorrect = e.target.getAttribute();
   // if (isCorrect == "true") {

    //} else {
 //  countdownValue -= 15;
   //
//}
//}

