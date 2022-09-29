/*const originalStory["There would be no one to live for during those coming years
 she would live for herself. There would be no powerful will bending hers in that 
blind persistence with which men and women believe they have a right to impose 
a private will upon a fellow-creature. A kind intention or a cruel intention made
 the act seem no less a crime as she looked upon it in that brief moment of 
illumination."]*/

//Introduction
console.log('Hello! And welcome to my portfolio!')
//Data Types
console.log('Hi')
console.log("How")
console.log("are")
console.log("you?")
console.log("Hola amigo!".toUpperCase());
console.log(`You know what we always say: "We have better prices than our competition - *every*  time!"`.split(":"));
console.log((30 - 27).typeof());
console.log(27 > 30);
console.log(30 - 27 === "3");
console.log(30 - 27 === 3);

//Variables
var warehouseEmployeeTotal = 73;
let warehouseManager = { employeeID: "SM364" };
const warehouseOpeningDate = "2022 01 01";
console.log(warehouseManager, warehouseOpeningDate, warehouseEmployeeTotal);

//Template literals
"use strict";
let customerName = "Alejandra";
console.log(`Hello ${customerName}! You know what we always say …`);

console.log(
  `Hi ${customerName.toLocaleUpperCase()}!
It’s been ${30 - 3} days since you joined our family - and you know what we always say:
"We have better prices than our competition - *every* time!"`
);

//Equals
console.log(1 == "1");
console.log(1 == "2");
console.log(1 === "1");
console.log(2 != "1");
console.log(2 !== "1");
console.log("about" > "boat");

//If else If
let userPoints = 0;
if (userPoints < 100)
  console.log(
    `You don’t have enough for a complementary pie, yet - please come back later!`
  );
else if (userPoints > 99 && userPoints < 200)
  console.log(`Please choose any small pizza on us!`);
else if (userPoints > 199 && userPoints < 300)
  console.log(`Please have a medium pizza of your choice for free!`);
else
  console.log(
    `Any large pizza is on the house - thank you for being such a loyal customer!`
  );
userPoints > 1000 ? console.log("Congratulations! We would like to invite you to a special dining experience - please call with your account info handy") :
  console.log("By the way - we love having you as a customer. Please keep coming back for something special …")

//For
for (let i = 9; i > 0; i--) {
    console.log(`${i} bottles of brew on the wall
      ${i} bottles of brew!
      Take one down and pass it around -
      ${i - 1} bottles of brew on the wall!`);
  }

//While
let lives = 3;
while (lives > 0) {
  let result = prompt(`You have ${lives} lives left. What is 2+2?`);
  if (result !== "4") {
    lives--;
    console.log("I'm afraid that's not right - try again");
  } else {
    console.log("Congratulations! That's the correct answer.");
    break;
  }
}
console.log("Game Over!");

//For of
let originalPoemFor = `This little piggy went to market, this little piggy stayed home, this little piggy had roast beef, and this little piggy had none, and this little piggy cried “Wee! Wee! Wee!” all the way home!`;
let spacedPoem;
for (const element of originalPoemFor) {
  if (element == ",") {
    spacedPoem += `\n`;
  } else {
    spacedPoem += element;
  }
}

//Array
let friends = ["Sarah", "Lukas", "Claude", "Annette", "Matthias"];
friends.push("Darius");
friends.unshift("Elizabetha");
friends.pop("Darius");
console.log(friends);

//Array methods
let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;

let arrayedPoem = originalPoem.split(" ");
console.log(arrayedPoem.indexOf("piggy"));
console.log(arrayedPoem.lastIndexOf("cried"));
console.log(arrayedPoem.indexOf("cried"));
console.log(arrayedPoem.lastIndexOf("all"));
let poemQuote = arrayedPoem.slice(28, 31)
console.log(poemQuote);
console.log(arrayedPoem.indexOf("and"));
console.log(arrayedPoem.splice(17, 1));
console.log(arrayedPoem.join(" "));
console.log(arrayedPoem.concat("The", "End"))

//Practice
const userInputs = ["weeks","meaningful"];
console.log('There would be no one to live for during those coming' , userInputs[0])