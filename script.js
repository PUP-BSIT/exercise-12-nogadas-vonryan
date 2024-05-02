let counterElement = document.querySelector("#counter");
let startButton = document.querySelector("#start_button");
let pauseButton = document.querySelector("#pause_button");
let resumeButton = document.querySelector("#resume_button");
let stopButton = document.querySelector("#stop_button");

let counter = 0;
let intervalId;

function setCounter(value) {
	counterElement.textContent = value;
}

function addCounter() {
	counter++;
	setCounter(counter);
}

function setButtonStates(start, pause, resume, stop) {
	startButton.disabled = start;
	pauseButton.disabled = pause;
	resumeButton.disabled = resume;
	stopButton.disabled = stop;
}

function startTimer() {
	setCounter(0);
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
	setCounter(counter);
	clearInterval(intervalId);
	setButtonStates(false, true, true, true);
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
stopButton.addEventListener("click", stopTimer);