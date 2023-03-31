
//Exercise 1: Guess the number 
//prize 500 amazon voucher
//let number = 0//generate the number here
//let chances = 0
//keep asking for the  number untill the correct number is guesssed
//increment the chance of variable

//eventually after the game over ,display the(100-number of chance)and the actual number 

let random_number = prompt("enter a number till  the computer satishfied the guess number ");
let uwu = Math.floor(Math.random()*random_number);
 // a= Number.parseInt(a)
let chance = 0;
let num;
do{
  num = prompt("Guess the correct number")
  chance++;

if (num>uwu)
{
  console.log("your Guess  is greater than correct number.guess small number");
  }
else if(num<uwu)
{
  console.log("your guess is smaller than correct number .guess big number");
}
else
{
  console.log("your guess is correct number")
}}while(num!= uwu);
console.log("your score is ",(100-chance))