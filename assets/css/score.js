var scores = document.querySelector("#scores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var tollAll = localStorage.getItem("tollAll");
tollAll = JSON.parse(tollAll);

if (tollAll !== null) {

    for (var i = 0; i < tollAll.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = tollAll[i].initials + " " + tollAll[i].score;
        scores.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("index .html");
});