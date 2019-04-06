$(document).ready(function() {
var randomNumber="";
var randomNumber_Jewel1= "";
var randomNumber_Jewel2= "";
var randomNumber_Jewel3= "";
var randomNumber_Jewel4= "";
var totalScore="";
wins=0;
losses=0;


function startGame() {
    totalScore = 0;

    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log("Random Number is " + randomNumber);

    randomNumber_Jewel1 = Math.floor(Math.random() * 12) + 1;
    randomNumber_Jewel2 = Math.floor(Math.random() * 12) + 1;
    randomNumber_Jewel3 = Math.floor(Math.random() * 12) + 1;
    randomNumber_Jewel4 = Math.floor(Math.random() * 12) + 1;
    console.log("Jewel 1: " + randomNumber_Jewel1);
    console.log("Jewel 2: " + randomNumber_Jewel2);
    console.log("Jewel 3: " + randomNumber_Jewel3);
    console.log("Jewel 4: " + randomNumber_Jewel4)

    document.getElementById("random-number").innerHTML = randomNumber;
    console.log(wins);
    console.log(losses);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
};

$("#blue-crystal").on("click", function() {
    totalScore = totalScore + randomNumber_Jewel1
    document.getElementById("user-score").innerHTML = totalScore;
    console.log(totalScore);
    console.log(randomNumber)
});

$("#yellow-crystal").on("click", function() {
    totalScore = totalScore + randomNumber_Jewel2
    document.getElementById("user-score").innerHTML = totalScore;
    console.log(totalScore);
    console.log(randomNumber)
});

$("#purple-crystal").on("click", function() {
    totalScore = totalScore + randomNumber_Jewel3
    document.getElementById("user-score").innerHTML = totalScore;
    console.log(totalScore);
    console.log(randomNumber)
});

$("#red-crystal").on("click", function() {
    totalScore = totalScore + randomNumber_Jewel4
    document.getElementById("user-score").innerHTML = totalScore;
    console.log(totalScore);
    console.log(randomNumber)
});

if (totalScore === randomNumber) {
    wins++;
    startGame();
    

} else if (totalScore > randomNumber) {
    losses--;
    startGame();
}



});