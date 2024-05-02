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

function setButtonStates(start, pause, resume, stop) {
	startButton.disabled = start;
	pauseButton.disabled = pause;
	resumeButton.disabled = resume;
	stopButton.disabled = stop;
}

function startTimer() {
	counter = 0;
	counterElement.textContent = counter;
	intervalId = setInterval(addCounter, 1000);
	setButtonStates(true, false, true, false);
}

function pauseTimer() {
	clearInterval(intervalId);
	setButtonStates(true, true, false, false);
}

function resumeTimer() {
	intervalId = setInterval(addCounter, 1000);
	setButtonStates(true, false, true, false);
}

function stopTimer() {
	counter = 0;
	counterElement.textContent = counter;
	clearInterval(intervalId);
	setButtonStates(false, true, true, true);
}