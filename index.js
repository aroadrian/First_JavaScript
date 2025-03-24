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

//Counter Program

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn  = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};