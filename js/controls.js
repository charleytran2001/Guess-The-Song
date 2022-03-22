// Variable to store current video/song
let media = document.getElementById("video");

// User Controls
let randomStartTime = true;
let playbackFull = true;

// Time Variables
let startTime = 0;
let mediaDuration;
let mediaCurrentTime = startTime;
let playbackLength = 10;
let endTime = startTime + playbackLength;

// function playbackLengthFunction() {
//     if(playbackFull) {
//         startTimeFunction();
//     } else {
//         playbackLength
//     }
// }

function startTimeFunction() {
    if(randomStartTime) {
        // Retreives total length of media
        media.addEventListener('loadedmetadata', function () {
            mediaDuration = media.duration;
            startTime = Math.floor(Math.random() * mediaDuration);
            media.currentTime = startTime;
        });

    } else {
        // Starts media at specified start time
        media.currentTime = startTime;
    }
}

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
        media.play();
    } else {
        // Stops media
        media.pause();
    }
}

// Starting commands
function initialize() {

    // Checks for start time
    startTimeFunction();

    // Constantly updates media current time
    media.addEventListener('timeupdate', function () {
        mediaCurrentTime = this.currentTime;

        // Pauses and resets media if current time matches end time
        if(Math.floor(mediaCurrentTime) === endTime) {
            playPause();
            replay();
        }
    });

}

// Starts Program
initialize();

