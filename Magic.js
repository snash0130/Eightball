let userName = `Steve`;

let userQuestion = `Will I be famous?`;

const randomNumber = Math.floor(Math.random() * 8);
let eightball = ``;

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);


console.log(`The user asked:${userQuestion}`);


switch (randomNumber) {
case 0:
  eightball = 'It is certain';
  break;
case 1:
  eightball = 'It is decidedly so';
  break;
case 2:
  eightball ='Reply hazy try again';
  break;
case 3
  eightball = 'Cannot predict now';
  break;
case 4:
  eightball = 'Do not count on it';
  break;
case 5:
  eightball = 'My sources say no';
  break;
case 6:
  eightball = 'Outlook not so good';
  break;
case 7: 
  eightball = 'Signs point to yes';
  break;
}

console.log(`Magic eightball answer is:${eightball}`);
