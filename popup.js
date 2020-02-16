// Source tutorial for Stopwatch: https://www.youtube.com/watch?v=1INmsFnD-u4

//code for stopwatch
//sets the values for seconds, minutes, hours
let seconds = 0;
let minutes = 0;
let hours = 0;

//seperate variables allow to make the distinction between the actual values and what is displayed for aesthetical purposes
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

//interval keeps the timer increments at one second
let interval = null;
//status keeps track of whether to display the start or stop button
let status = "stopped";

//runs every 1000ms (1 second) to add one second to the time
//appropriate accomodations are made if the seconds value or minutes value reaches 60
function stopwatch(){
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
    }
    else {
        displaySec = seconds;
    }

    if (minutes < 10) {
        displayMin = "0" + minutes.toString();
    }
    else {
        displayMin = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMin + ":" + displaySec;
}

//this gives the start/stop button the functionality to start or stop the stopwatch
document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById("startStop");
    // onClick's logic below:
    startButton.addEventListener('click', function() {
        if (status === "stopped") {
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
        }
        else {
            window.clearInterval(interval);
            document.getElementById("startStop").innerHTML = "Start";
            status = "stopped";
        }
    });
});

//this gives the reset button the functionality to reset the stopwatch
document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById("reset");
    // onClick's logic below:
    resetButton.addEventListener('click', function() {
        if (status === "stopped") {
            window.clearInterval(interval);
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById("display").innerHTML = "00:00:00";
            document.getElementById("startStop").innerHTML = "Start";
        }
        else {
            alert('You must first stop the stopwatch to reset.')
        }
    });
});

//code for timer
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

let displayTimerSeconds = 0;
let displayTimerMinutes = 0;
let displayTimerHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

//this reads the values inputted into the form so the code knows what to set the hours, minutes, and seconds values as
document.addEventListener('DOMContentLoaded', function() {
    var timer = document.getElementById('timer');
    timer.addEventListener('click', function() {
        timerSeconds = document.getElementById("timerSeconds").value;
        timerMinutes = document.getElementById("timerMinutes").value;
        timerHours = document.getElementById("timerHours").value;
        if (timerSeconds < 10) {
        displayTimerSeconds = "0" + timerSeconds.toString();
        }
        else if (timerSeconds == "") {
            displayTimerSeconds = "00";
        }
        else {
            displayTimerSeconds = timerSeconds;
        }

        if (timerMinutes < 10) {
            displayTimerMinutes = "0" + timerMinutes.toString();
        }
        else if (timerMinutes == "") {
            displayTimerMinutes = "00";
        }
        else {
            displayTimerMinutes = timerMinutes;
        }

        if (timerHours < 10) {
            displayTimerHours = "0" + timerHours.toString();
        }
        else if (timerHours == "") {
            displayTimerHours = "00";
        }
        else {
            displayTimerHours = timerHours;
        }
        document.getElementById("timerDisplay").innerHTML = displayTimerHours + ":" + displayTimerMinutes + ":" + displayTimerSeconds;
    });
});

//gives functionality to the start/stop button
document.addEventListener('DOMContentLoaded', function() {
    var timerStart = document.getElementById('timerStart');
    timerStart.addEventListener('click', function() {
        if (timerStatus === "stopped") {
        timerInterval = window.setInterval(timer, 1000);
        document.getElementById("timerStart").innerHTML = "Stop";
        timerStatus = "started";
        }
        else {
            window.clearInterval(timerInterval);
            document.getElementById("timerStart").innerHTML = "Start";
            timerStatus = "stopped";
        }
    });
});

//similar to the stopwatch function except this time the seconds increment down
function timer(){
    timerSeconds--;

    if (timerSeconds === -1) {
        timerSeconds = 59;
        timerMinutes--;

        if (timerMinutes === -1) {
            timerMinutes = 59;
            timerHours--;
        }
    }

    if (timerHours < 0)
    {
        timerStatus = "stopped";
        emergencyReset();
        alert('Time is up!');
    }

    if (timerSeconds < 10) {
        displayTimerSeconds = "0" + timerSeconds.toString();
    }
    else {
        displayTimerSeconds = timerSeconds;
    }

    if (timerMinutes < 10) {
        displayTimerMinutes = "0" + timerMinutes.toString();
    }
    else {
        displayTimerMinutes = timerMinutes;
    }

    if (timerHours < 10) {
        displayTimerHours = "0" + timerHours.toString();
    }
    else {
        displayTimerHours = timerHours;
    }

    document.getElementById("timerDisplay").innerHTML = displayTimerHours + ":" + displayTimerMinutes + ":" + displayTimerSeconds;
}

//gives functionality to the timer reset button
document.addEventListener('DOMContentLoaded', function() {
    var timerReset = document.getElementById("timerReset");
    // onClick's logic below:
    timerReset.addEventListener('click', function() {
        if (timerStatus === "stopped") {
            window.clearInterval(timerInterval);
            timerSeconds = 0;
            timerMinutes = 0;
            timerHours = 0;
            document.getElementById("timerDisplay").innerHTML = "00:00:00";
            document.getElementById("timerStart").innerHTML = "Start";
        }
        else {
            alert('You must first stop the timer to reset.')
        }
    });
});

//this keeps the timer and alert from running an infinite loop when the time reaches 0
function emergencyReset() {
    window.clearInterval(timerInterval);
    timerSeconds = 0;
    timerMinutes = 0;
    timerHours = 0;
    document.getElementById("timerDisplay").innerHTML = "00:00:00";
    document.getElementById("timerStart").innerHTML = "Start";
}

//the functionality of the pomodoro timer is similar to that of the timer except the time values are preset depending on the cycle number
//an adiditonal variable, cycles, is added to keep track of the number of cycles that have been run
let cycles = 0;
// let workMinutes = 25;
// let workSeconds = 0;
// let breakMinutes = 5;
// let breakSeconds = 0;
let pomodoroMinutes = 20;
let pomodoroSeconds = 0;
let pomodoroDisplayMinutes = 1;
let pomodoroDisplaySeconds = 0;
let pomodoroInterval = null;
let pomodoroStatus = "stopped";

function pomodoro(){
    pomodoroSeconds--;

    if (pomodoroSeconds === -1) {
        pomodoroSeconds = 59;
        pomodoroMinutes--;
    }

    if (pomodoroMinutes < 0)
    {
        pomodoroStatus = "stopped";
        cycles++;

        //this keeps track of whether we are on an odd or even cycle number
        if (cycles % 2 === 1 && cycles > 1) {
            alert('Next cycle! Take a break :)');
            window.clearInterval(pomodoroInterval);
            document.getElementById("pomodoroDisplay").innerHTML = "05:00";
            document.getElementById("pomodoroStart").innerHTML = "Start";
            pomodoroMinutes = 5;
            pomodoroSeconds = 0;
            //this changes the HTML code to indicate that the user is on a break period
            document.getElementById("status").innerHTML = "Status: Break";
        }
        else {
            alert('Next cycle! Back to working');
            window.clearInterval(pomodoroInterval);
            document.getElementById("pomodoroDisplay").innerHTML = "20:00";
            document.getElementById("pomodoroStart").innerHTML = "Start";
            pomodoroMinutes = 20;
            pomodoroSeconds = 0;
            document.getElementById("status").innerHTML = "Status: Work";
        }


    }

    if (pomodoroSeconds < 10) {
        pomodoroDisplaySeconds = "0" + pomodoroSeconds.toString();
    }
    else {
        pomodoroDisplaySeconds = pomodoroSeconds;
    }

    if (pomodoroMinutes < 10) {
        pomodoroDisplayMinutes = "0" + pomodoroMinutes.toString();
    }
    else {
        pomodoroDisplayMinutes = pomodoroMinutes;
    }

    document.getElementById("pomodoroDisplay").innerHTML = pomodoroDisplayMinutes + ":" + pomodoroDisplaySeconds;
}

document.addEventListener('DOMContentLoaded', function() {
    var pomodoroStart = document.getElementById("pomodoroStart");
    // onClick's logic below:
    pomodoroStart.addEventListener('click', function() {
        if (pomodoroStatus === "stopped") {
        pomodoroInterval = window.setInterval(pomodoro, 1000);
        document.getElementById("pomodoroStart").innerHTML = "Stop";
        pomodoroStatus = "started";
        }
        else {
            window.clearInterval(pomodoroInterval);
            document.getElementById("pomodoroStart").innerHTML = "Start";
            pomodoroStatus = "stopped";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var pomodoroReset = document.getElementById("pomodoroReset");
    // onClick's logic below:
    pomodoroReset.addEventListener('click', function() {
        if (pomodoroStatus === "stopped") {
            window.clearInterval(pomodoroInterval);
            pomodoroSeconds = 0;
            pomodoroMinutes = 20;
            cycles = 0;
            document.getElementById("pomodoroDisplay").innerHTML = "20:00";
            document.getElementById("pomodoroStart").innerHTML = "Start";
        }
        else {
            alert('You must first stop the Pomodoro timer to reset.')
        }
    });
});

function emergencyPomodoroReset() {
    window.clearInterval(pomodoroInterval);
    pomodoroSeconds = 0;
    pomodoroMinutes = 0;
    document.getElementById("pomodoroDisplay").innerHTML = "00:00";
    document.getElementById("pomodoroStart").innerHTML = "Start";
}

//code for the To-Do list functionality
//the array todoItems stores the different tasks
var todoItems = [];

//the following code writes the HTML code that is necessary for writing the code for an unordered list with all the different tasks
var str = '<ul>'
let newTask = "";
document.addEventListener('DOMContentLoaded', function() {
    var addTask = document.getElementById("addTask");
    // onClick's logic below:
    addTask.addEventListener('click', function() {
        newTask = document.getElementById("newTask").value;
        todoItems.push(newTask);
        str = '<ul>'
        todoItems.forEach(function(item) {
            str += '<li>' + item + '</li>';
        });

        str += '</ul>';
        document.getElementById("tasks").innerHTML = str;
    });
});

// var i;
// for (i = 0; i < todoItems.length; i++) {
//     var list = document.getElementById('tasks');
//     var entry = document.createElement('li');
//     entry.appendChild(document.createTextNode(newTask));
//     list.appendChild(entry);
// }



