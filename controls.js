// Variable to store current video/song
let media = document.getElementById("video");

// Time Variables
let startTime = 0;
let currentTime = startTime;
let playbackLength = 3;
let endTime = startTime + playbackLength;

let timer;

// Function to reset current time in video/song
function replay() {
    // Resets video time
    media.currentTime = startTime;
    // Resets variable time
    currentTime = startTime;
}

// Function to pause/play video/song
function playPause() {
    if(media.paused) {
        // Starts media
        console.log("start: " + media.currentTime);
        media.play();

        // Starts timer
        timer = setInterval(function() {
            currentTime++;
            console.log(currentTime);
        }, 1000);
    } else {
        // Stops media
        currentTime = Math.floor(media.currentTime);
        console.log("end: " + currentTime);
        media.pause();

        // Stops timer
        clearInterval(timer);
    }
}

// if(currentTime == 3) {
//     playPause();
// }