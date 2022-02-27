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
var begin = document.querySelector("#begin");
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
