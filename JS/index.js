//document.getElementById("myH1").textContent = "Hello World!";
//document.getElementById("myP").textContent = "How are you today?";

//let age =25;

//let firstName = "Adrian";

//let online = true;
//let forSale =true;
//let isStudent = true;

//let fullName = "Adrian";
//let age = 25;
//let isStudent = false;

//document.getElementById('p1').textContent = `Your name is ${fullName}`;
//document.getElementById('p2').textContent = `You are ${age} years old`;
//document.getElementById('p3').textContent = `Enrolled : ${isStudent}`;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 2;

//students += 1;
//students -= 1;
//students *=2;
//students /= 2;
//students **= 2;
//students %= 2;
//let result = 12 % 5 + 8 / 2;

//let username;

//document.getElementById('mySubmit').onclick = function () {
 //   username = document.getElementById('myText').value;
 //   document.getElementById('myH1').textContent = `Hello ${username}`;
//};

//let age = window.prompt('What is your age?');
//age = Number(age);
//age += 1;
//console.log(age, typeof age);
//let x = "Pizza";
//let y = "Pizza";
//let z = "Pizza";
//x = String(x);
//y = Number(y);
//z = Boolean(z);
//console.log(x, typeof x);
//console.log(y, typeof y); 
//console.log(z, typeof z);

//const PI = 3.14159;
//let raduis;
//let circumference;


//document.getElementById('mySubmit').onclick = function () {
   // raduis = document.getElementById('myText').value;
    //raduis = Number(raduis);
   // circumference = 2 * PI * raduis;
    //document.getElementById('myH3').textContent = `The circumference is ${circumference}` + 'cm';
//};

//let x = 81;
//let y = 2;
//let z;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//console.log(z);

//let age = 12;
//let message = age >= 18 ? "your are an adult" : "you are a minor";
//console.log(message);

//let time = 16;
//let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
//console.log(greeting);

//let isStudent = true;
//let message = isStudent ? "You are a student" : "You are not a student";
//console.log(message);

//let purchaseAmount = 99;
//let discount = purchaseAmount >= 100 ? 10 : 0;
//console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);


//Switches

//let day = 3;

//switch(day){
//    case 1:
//        console.log("Monday");
//        break;
//    case 2:
//        console.log("Tuesday");
//        break;
  //  case 3:
   //     console.log("Wednesday");
 //       break;
//    case 4:
 //       console.log("Thursday");
   //     break;
  //  case 5:
  //      console.log("Friday");
  //      break;
  //  case 6:
  //      console.log("Saturday");
  //      break;
  //  case 7:
  ///      console.log("Sunday");
  //      break;
  //  default:
  //      console.log("Invalid day");
  //      break;

//}

//let testScore = 33;
//let letterGrade;

//switch(true){
 //   case testScore >= 90:
  //      letterGrade = "A";
 //       break;
 //   case testScore >= 80:
 //       letterGrade = "B";
 //       break;
 //   case testScore >= 70:
 //       letterGrade = "C";
 //       break;
 //   case testScore >= 60:
 //       letterGrade = "D";
 //       break;
 //   default:
 //       letterGrade = "F";
 //       break;
//};

//console.log(letterGrade);


//String Methods

//let userName = "Adrian";

//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//userName = userName.repeat(3);
//userName = userName.trim();
//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
//let result = userName.includes(" ");

//if(result){
 //   console.log("Your username cant begin with a space");
//}
//else{
  //  console.log(userName);
//}

//console.log(userName.charAt(2));
//console.log(userName.indexOf("r"));
//console.log(userName.lastIndexOf("a"));
//console.log(userName.length);

//let phoneNumber = "555-555-5555";

//phoneNumber = phoneNumber.replaceAll("-", "");
//phoneNumber = phoneNumber.padStart(15, "0");
//phoneNumber = phoneNumber.padEnd(15, "0");
//console.log(phoneNumber);

//String Slicing

//const fullName = "Adrianchristopher Aro";

//let firstName = fullName.slice(0, 6);
//let lastName = fullName.slice(7);

//let firstName = fullName.slice(0, fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);
//console.log(firstName);
//console.log(lastName);
//console.log(firstChar);
//console.log(lastChar);

//const email = "adrian@gmail.com";

//let userName = email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@") + 1);
//console.log(userName);
//console.log(extension);

// Method Chaining

//no method chaining
//let userName = window.prompt("Enter your username");

//userName = userName.trim();
//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

//let extraChars = userName.slice(1);
//extraChars = extraChars.toLowerCase();
//userName = letter + extraChars;
//console.log(userName);

// method chaining

//userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
//console.log(userName);

//logical operators

//const temp = 100;

//if (temp > 0 && temp <=30){
 //   console.log("The temperature is good");
//}
//else{
 //   console.log("The temperature is bad");
//}

//While Loop

//let userName;

//do{
 //   userName = window.prompt(`Enter your username`);
//}while(userName === "" || userName === null)

//console.log(`Hello ${userName}`);

//let loggedIn = false;
//let username;
//let password;

//while(!loggedIn){
 //   username = window.prompt(`Enter your username`);
 //   password = window.prompt(`Enter your password`);

 //   if (username === "admin" && password === "password"){
   //     loggedIn = true;
    //    console.log(`You are logged in! ${username}`);
   // }
    //else{
    //    console.log(`Invalid username or password`);
    //}
//}

//for loop

//for (let i = 1; i <= 20; i++){
   // if(i === 13){
      // continue
 // / //     break
   // }
   // else{
   //     console.log(i);
    //}
    
//}
//console.log("Blast off!");

//Function

//function happyBirthday(username, age){
 // console.log("Happy Birthday!");
 // console.log("Happy Birthday!");
 // console.log(`Happy Birthday ${username}`);
 // console.log("Happy Birthday!");
 // console.log(`You are ${age} years old`);
 // console.log("Happy Birthday!");
//};

//happyBirthday("Adrian", 26);

//function add(x, y){
 //   let result = x + y;
 //  return result;
//}

//function isEven(number){
//  return number % 2 === 0 ? true : false;
//}

//function isValidEmail(email){
 // if(email.includes('@')){
  //  return true;
  //}
  //else{
  //  return false;
  //}
//}

//console.log(isValidEmail("adrian@gmail.com"));

// Variable Scope

//function2();
//function function1(){
  //let x = 1;
 // console.log(x);
//}

//function function2(){
 // let x = 2;
 // console.log(x);
//}

//Array

//let fruits = ["apple", "orange", "banana", "coconut"];

//for(let i = 0; i < fruits.length; i++){
 // console.log(fruits[i]);
//}

//for(let i = fruits.length - 1; i >= 0; i--){
//  console.log(fruits[i]);
//}
//fruits.sort().reverse();
//for(let fruit of fruits){
 // console.log(fruit);
//}

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

//let numOfFruits = fruits.length;
//let index = fruits.indexOf("apple");


//2D array

//const matrix = [[1, 2, 3],
  //           [4, 5, 6],
    //          [7, 8, 9],
      //        ['*', 0, '#']]

//matrix[0][0] = 'x';
//matrix[0][1] = 'o';
//matrix[0][2] = 'x';

//matrix[1][0] = 'o';
//matrix[1][1] = 'x';
//matrix[1][2] = 'o';

//matrix[2][0] = 'x';
//matrix[2][1] = 'o';
//matrix[2][2] = 'x';
//for(let row of matrix){
  //const rowString = row.join(' ');
  //console.log(rowString);
//}

// Spread Operator

//let numbers = [1, 2, 3, 4, 5];
//let maximum = Math.max(...numbers);
//let minimum = Math.min(...numbers);

//console.log(maximum);
//console.log(minimum);

//let username = "adrian aro";
//let letters = [...username].join("-");

//console.log(letters);

//let fruits = ["apple", "banana", "orange"];
//let vegetables = ["carrots", "celery", "potatoes"];
//let foods = [...fruits, ...vegetables, "eggs", "milk"];

//console.log(foods);

// rest parameters

//function openFridge(...foods){
 // console.log(foods);
//}

//function getFood(...foods){
 // return foods;
//}

//const food1 = "pizza";
//const food2 = "hotdog";
//const food3 = "fishball";
//const food4 = "fries";

//openFridge(food1, food2, food3, food4);

//const foods = getFood(food1, food2, food3, food4);

//console.log(foods);

//function sum(...numbers){
 //   let result = 0;
 //   for (let number of numbers){
  //    result += number;
  //  }
  //  return result;
//}

//function getAverage(...numbers){
 //  let result = 0;
   // for (let number of numbers){
   //   result += number;
   // }
   // return result / numbers.length;
//}
//const total = getAverage(96, 97, 98, 96, 94);

//console.log(`Your total is ${total}`);

//function combineString(...strings){
 //   return strings.join(" ");
//}

//const fullname = combineString("Mr.", "Adrian", "Christopher", "Aro");
//console.log(fullname);


//Call Back
//hello(wait);

//function hello(callback){
 // console.log("Hello!");
 // callback();
//}

//function wait(){
//  console.log("Wait!");
//}

//function leave(){
 // console.log("Leave!");
//

//function goodbye(){
  //console.log("Goodbye!");
//}
//sum(displayPage, 1, 2);

//function sum(callback, x, y){
  //  let result = x+y;
 //   callback(result);
//}

//function displayConsole(result){
 //   console.log(result);
//}

//function displayPage(result){
 //   document.getElementById("myH1").textContent = result;
//}

//forEach()

//let numbers = [1, 2, 3, 4, 5];
//numbers.forEach(cube);
//numbers.forEach(display);

//function double(element, index, array){
 // array[index] = element * 2;
//}

//function triple(element, index, array){
//  array[index] = element * 3;
//}

//function square(element, index, array){
 /// array[index] = Math.pow(element, 2);
//}
//function cube(element, index, array){
  //array[index] = Math.pow(element, 3);
//}

//function display(element){
//    console.log(element);
//}

//let fruits = ["banna", "orange", "apple", "coconut"];

//fruits.forEach(capitalize);
//fruits.forEach(display);

//function upperCase(element, index, array){
//  array[index] = element.toUpperCase();
//}

//function capitalize(element, index, array){
 // array[index] = element.charAt(0).toUpperCase() + element.slice(1);
//}

//function display(element){
 // console.log(element);
//}

// map()

///const numbers = [1, 2, 3, 4, 5];

//const squares = numbers.map(square);

//console.log(squares);

//function square(element){
 // return Math.pow(element, 2);
//}

//filter method

//let numbers = [1, 2, 3, 4, 5, 6, 7];
//let evenNums = numbers.filter(isEven);
//let oddNums = numbers.filter(isOdd);

//console.log(oddNums);

//function isEven(element){
 //   return element % 2 === 0;
//}

//function isOdd(element){
 // return element % 2 !== 0;
//}

//reduce method

//const prices = [5, 10, 30, 25, 15, 20];

//const total = prices.reduce(sum);

//console.log(total);

//function sum(accumulator, element){
 //  return accumulator + element;
//}


// function expression

//const hello = function(){
 // console.log("Hello");
///}

//hello();

//setTimeout(function(){
 // console.log("hello");
//},3000);

//const numbers = [1, 2, 3, 4, 5, 6];
//const squares = numbers.map(function(element){
  //return Math.pow(element, 2);
//});

//const evenNum = numbers.filter(function(element){
  //  return element % 2 === 0;
//})

//const total = numbers.reduce(function(accumulator, element){
  //  return accumulator + element;
//}//)

//console.log(total);

//Arrow Function

//const hello = (name, age) => {console.log(`Hello ${name}`)
   //                             console.log(`Your ${age}`)
   //                           };
//hello("Adrian", 26);
//setTimeout(() => console.log("hello"), 3000);


//const numbers = [1, 2, 3, 4, 5, 6];

//const squares = numbers.map((element) => Math.pow(element, 2));
//console.log(squares);

// Object

const person1 = {
                firstName: "Adrian",
                lastName: "Aro",
                age: 26,
                isEmployed: true,   
                sayHello: function(){console.log("Hi Hello")},
                eat: () => console.log("pizza"),

                  };

const person2 = {firstName: "Reslychen",
                  lastName: "Aro",
                  age: 26,
                  isEmployed: false,  
                  sayHello: () => console.log("Edi wow "),
                  eat: () => console.log("pizza"),
                };

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);