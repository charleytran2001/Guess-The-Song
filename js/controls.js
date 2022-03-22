// User control variables
let randomStartTime = false;
let playbackFull = false;

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