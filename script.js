let counterElement = document.querySelector("#counter");
let startButton = document.querySelector("#start_button");
let pauseButton = document.querySelector("#pauseButton");
let resumeButton = document.querySelector("#resume_button");
let stopButton = document.querySelector("#stopButton");
let counter = 0;

function addCounter() {
	counter++;
	counterElement.textContent = counter;
}

function startTimer() {
    counter = 0;
    counterElement.textContent = counter;
	setInterval(addCounter, 1000);
}