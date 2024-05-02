let countElement = document.querySelector("#count");
let startButton = document.querySelector("#start_button");
let pauseButton = document.querySelector("#pause_button");
let resumeButton = document.querySelector("#resume_button");
let stopButton = document.querySelector("#stop_button");

let count = 0;
let intervalId;

function setCount(value) {
	countElement.textContent = value;
}

function addCount() {
	count++;
	setCount(count);
}

function setButtonStates(start, pause, resume, stop) {
	startButton.disabled = start;
	pauseButton.disabled = pause;
	resumeButton.disabled = resume;
	stopButton.disabled = stop;
}

function startTimer() {
	setCount(0);
	intervalId = setInterval(addCount, 1000);
	setButtonStates(true, false, true, false);
}

function pauseTimer() {
	clearInterval(intervalId);
	setButtonStates(true, true, false, false);
}

function resumeTimer() {
	intervalId = setInterval(addCount, 1000);
	setButtonStates(true, false, true, false);
}

function stopTimer() {
	count = 0;
	setCount(count);
	clearInterval(intervalId);
	setButtonStates(false, true, true, true);
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
stopButton.addEventListener("click", stopTimer);