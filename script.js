let counterElement = document.querySelector("#counter");
let startButton = document.querySelector("#start_button");
let pauseButton = document.querySelector("#pauseButton");
let resumeButton = document.querySelector("#resume_button");
let stopButton = document.querySelector("#stopButton");

let counter = 0;
let intervalId;

function addCounter() {
	counter++;
	counterElement.textContent = counter;
}

function startTimer() {
	counter = 0;
	counterElement.textContent = counter;
	intervalId = setInterval(addCounter, 1000);
}

function pauseTimer() {
	clearInterval(intervalId);
}

function resumeTimer(){
    intervalId = setInterval(addCounter, 1000);
}