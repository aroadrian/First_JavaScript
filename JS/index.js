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

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
};

console.log(letterGrade);