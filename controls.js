// Variable to store current video/song
let media = document.getElementById("video");

// Time Variables
let startTime = 10;
let mediaCurrentTime = startTime;
let playbackLength = 5;
let endTime = startTime + playbackLength;

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
    // Starts media at specified start time
    media.currentTime = startTime;

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

