// let player1=prompt("Player1's name?");
// let player2=prompt("Player2's name?");
// document.querySelector(".player1").textContent=player1;
// document.querySelector(".player2").textContent=player2;

// for the first player
let randomNumber1= Math.random();
randomNumber1= Math.floor((randomNumber1*6)+1);

function rollDice(){
  if (randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png")
  }
  else if (randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png")
  }
  else if (randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
  }
  else if (randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
  }
  else if (randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
  }
  else if (randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","images/dice6.png")
  }
  return randomNumber1;
}
randomNumber1= rollDice();
console.log(randomNumber1);

// for the second player
let randomNumber2= Math.random();
randomNumber2= Math.floor((randomNumber2*6)+1);
function rollDiceAgain(){
  if (randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
  }
  else if (randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png")
  }
  else if (randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png")
  }
  else if (randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png")
  }
  else if (randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png")
  }
  else if (randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","images/dice6.png")
  }
  return randomNumber2;
}
randomNumber2= rollDiceAgain();
console.log(randomNumber2);

// For Results
function result(){
  if (randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Darw!";
  }
  else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
  }
  return result();
}
let finalResult=result();
