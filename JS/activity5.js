// number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if (isNaN(guess)){
        window.alert("Please Enter a valid Number:");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number:");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("Too low! Try Again!");
        }
        else if(guess > answer ){
            window.alert("Too high! Try Again!");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attemps} attemps`);
            running = false;
        }
    }
}