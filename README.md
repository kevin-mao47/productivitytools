# Productivity Tools
Productivity Tools is a Chrome Extension with various features allowing users to maintain productivity by keeping track of time.

## Installation

In order to first start using the Chrome extension, open Google Chrome and type in "chrome://extensions" in the search bar. Toggle the switch in the top
right corner that says Developer Mode such that it is on. Then, find the button that says Load Unpacked (top left hand side) and upload the entire folder named
implementation. Then, there should be a small timer icon in the top right of the Chrome browser, next to the other Chrome extensions. Click the timer
to start using the extension.

## Features and Usage

There are 4 main components to this application, which are the stopwatch, countdown timer, pomodoro timer, and to-do list. Because
JavaScript with Chrome Extensions is extremely limited (e.g. button/HTML form interactions require a special workaround because commands such as "onclick"
and "onsubmit" were no longer allowed within the HTML), I had to build everything internally within the extension rather than being able to link to other
external tools or websites.

To use the stopwatch, click on the button that says start. The stopwatch will then begin counting up by seconds. If you would like to pause the stop watch,
you can just press the same button, which should now read "Stop" to pause. If you would like to reset the stopwatch to 00:00:00, simply press the reset button.
If the reset button is pressed while the stopwatch is still running, an alert will appear telling you to first pause the stopwatch.

To use the countdown timer, first enter the number of hours, minutes, and seconds desired in the corresponding boxes of the form on top of the timer. Then, be
sure to press submit, which will refresh the page and the timer display should now show the desired time amount. Press the start button to begin counting down
from that time. An alert will appear when the time reaches 00:00:00. If you'd like to start counting down from a new time, reset the timer and repeat the above
process.

To use the pomodoro timer, simply press the start button. Press the same button, which will read stop when the timer is running, to pause. The pomodoro technique
is a common study tactic that relies on 20-minute intervals of working with 5-minute intervals of break between each working period. The pomodoro timer will
automate the timing for this tactic. In other words, it will alternate between the 20 minute and 5 minute settings automatically, and the message below will
indicate whether it is a working or resting interval. At the end of each interval, an alert will appear, and the user is responsible for pressing the start
button to start the next cycle, though they do not need to manually input the interval length.

To use the task list, simply enter in the name of the task you wish to list, and press the add task button. The task will be added to a list of bullet points
underneath the to-do list header.



