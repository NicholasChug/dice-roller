//Creating and Storing the First Random Dice roll
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random roll 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // chooses dice img1-6

var randomImgSource = "images/" + randomDiceImg; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImgSource);

//Creating and Storing the Second Random Dice roll
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImgSource2);

// If Player 1 Wins
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

//If Player 2 Wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

//If the Round is a Draw
else {
  document.querySelector("h1").innerHTML = "It's a Draw! Roll Again!";
}
