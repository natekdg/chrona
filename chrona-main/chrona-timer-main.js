// description of this file will be added once the codebase is finished



let isRunning = false;
let timer;
let timeRemaining = 25 * 60; // 25 minutes
let selectedTime = 25 * 60; // set the default time to 25 minutes

const timeDisplay = document.getElementById('time');    // set the element with id "time" to the variable timeDisplay
const startButton = document.getElementById('start');    // set the element with id "start" to the variable startButton
const stopButton = document.getElementById('stop');     // set the element with id "stop" to the variable stopButton
const resetButton = document.getElementById('reset');   // set the element with id "reset" to the variable resetButton
const settingsButton = document.getElementById('settings');     // set the element with id "settings" to the variable settingButton


startButton.addEventListener('click', startTimer)   // add event listener for the start button to call the startTimer function
stopButton.addEventListener('click', stopTimer)     // add event listener for the stop button to call the stopTimer function
resetButton.addEventListener('click', resetTimer)   // add event listener for the reset button to call the resetTimer function

// below will be all the funtions for the timer scripts


// update to show the current time to the user
function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // update timeDisplay to show the current time with leading zeros for minutes / seconds
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// check if the timeRemaining is greater than zero
function tick(){
    if (timeRemaining > 0){
        timeRemaining--;
        updateDisplay
    } else {
        document.getElementById('sound to end timer (add)').play(); // play sound when time is 0
        stopTimer();    // if the time is 0 stop the timer
        timeDisplay.textContent = "good work :)";
    }
}

// set the selected time in seconds based on the input minutes
function selectTime(minutes) {
    selectedTime = minutes * 60;    // convert the minutes to seconds
}

// funtion for starting the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        if (timeRemaining === 0) {
            timeRemaining = selectedTime;   // set the time to the original selected time
        }
        timer = setInterval(tick, 1000);    // set interval to tick every 1000ms
    }
}

// function for stopping the timer
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);   // clear the interval stored in the timer
        isRunning = false;  // set isRunning to false to stop timer
    }
}

// funtion for resetting the timer
function resetTimer() {
    stopTimer();
    timeRemaining = selectedTime;   // reset the remaining time to what was originally selected
    updateDisplay();
}

// update the display at the start
updateDisplay();