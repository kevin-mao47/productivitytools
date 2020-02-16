A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses,
technically, how you implemented your project and why you made the design decisions you did.
Your design document should be at least several paragraphs in length.
Whereas your documentation is meant to be a user’s manual,
consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.

---
The most difficult and limiting part of creating a Chrome extension was that buttons and forms on the HTML file could not interact directly with the JavaScript
file using commands such as "onclick" and "onsubmit", due to restrictions for cybersecurity. Instead, I had to use a workaround by adding event listeners in
the JavaScript file. An example of such an event listener is

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

This workaround is all natively controlled by the popup.js file, where the JavaScript code waits until the corresponding button from the HTML file is pressed.
There were a couple other minor changes to the JavaScript logic and syntax that must be made in order to accomodate for the Chrome extension security measures,
and while that meant that there were many feature which I wished to implement that I did not end up being able to do, I still ended up with a product that
worked well as intended. Given the long amount of time I had to spend working around the restrictions for JavaScript within Chrome extensions, I was able to
gain a really strong foundational understanding of JavaScript and the architecture of my program, which I think would be extremely useful in the future.

One large difficulting was creating a timing function for my stopwatch and timers without the help of Flask and Python. In order to do this using only the
Chrome extension version of JavaScript, I had to create an interval variable using the function setInterval(). Then, the interval would run a function every
second, where the second count would decrease/increase by 1 each time. I added if/else statements to adjust the minute and hour amounts accordingly. In addition,
another variable would keep track of whether the timer/stopwatch was stopped or started so that the Start/Stop button would display the appropriate control.

One special thing that needed to be added to the timers was a force reset function that would prevent the alert saying "Your time is up!" from running every time
the user dismissed the prior alert. Without the force reset function, the code would evaluate the status of the timer as being a negative time value, thus
triggering the alert, but the force reset allows the timer to return to the 0 state.

Because I wanted the three different clocks to be able to be ran simultaneously, I had to recreate three different intervals and variables to store the time values.
Although the JavaScript had to be rather lengthy to accomodate for this feature, I think this would help increase the convenience of the extension.

Some additional important things to note about the internals of the timing functions are that I had to create two different sets of variables for the hours, minutes,
and seconds. Because these values could sometimes be single digitted while the clock would always display two digits for each value, the display variable
had to be kept distinct from the actual value of the hour/minute/time. In addition, for the pomodoro timer, I had to keep track of the number of cycles that had
been ran through so that I would know whether to set it as a break or work period, and to display the appropriate text in the HTML.

The last feature is the task list, and it took some trial and error to figure out how to edit HTML without the use of Flask and a layout template. However, the
code is able to create an unordered list of all the tasks in the HTML code. One limitation of the task list is that all the items have to be stored locally, as
I was unable to use Flask and connect a database to the extension. Thus, this would mean that every time the extension was restarted, the task list items would
no longer be saved. If given more time, I would like to continue working on some way to store the task list items, if possible.